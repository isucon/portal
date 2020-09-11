declare var self: ServiceWorkerGlobalScope; export {};

import {isuxportal} from "./pb";
import {skipWaiting, clientsClaim} from "workbox-core";

skipWaiting();
clientsClaim();

console.log("SW!");

self.addEventListener('activate', (e) => {
  console.log("SW! activate");
  if (new Date().getTime() > 1606748400000) { // 2020/12/1
    self.registration.unregister();
    return;
  }
});

const openUrl = (event: ExtendableEvent, path: string) => {
  const url = new URL(path, self.location.origin).href;
  const promise = self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
    const windowClients = clients as WindowClient[];
    const match = windowClients.find((c) => c.url === url);
    if (match) {
      return match.focus();
    } else {
      return self.clients.openWindow(url);
    }
  });
  event.waitUntil(promise);
}

const showNotification = (event: ExtendableEvent, n: isuxportal.proto.resources.INotification) => {
  console.log("SW showNotification:", n);
  let promise: Promise<void> | null = null;
  const tag = `isuxportal-pushtag-${n.id}`;
  if (n.contentTest) {
    promise = self.registration.showNotification("isuxportal test notification", {body: `test ${n.contentTest.something} ${n.id}`, tag, data: `/contestant`});
  } else if (n.contentBenchmarkJob) {
    // TODO:
  } else if (n.contentClarification) {
    // TODO:
  }
  if (promise) event.waitUntil(promise);
}

interface LocalNotificationMessage {
  kind: "localNotification";
  notifications: isuxportal.proto.resources.INotification[],
}

const handleLocalNotifications = (e: ExtendableEvent, data: LocalNotificationMessage) => {
  console.log("local notifications", data.notifications);

  data.notifications.forEach((v) => showNotification(e, v));
};

self.addEventListener('message', (e) => {
  console.log("SW message", e);
  const data = e.data;
  switch(data.kind) {
    case "localNotification":
      handleLocalNotifications(e, data as LocalNotificationMessage);
      break;
    default: 
      console.warn("Unknown message received at sw", data);
      break;
  }
});

self.addEventListener('push', (e) => {
  console.log("SW push", e);
  if (!e.data) return;
  let notification: isuxportal.proto.resources.Notification | null = null;
  try {
    const wire = Uint8Array.from(atob(e.data.text()), c => c.charCodeAt(0));
    notification = isuxportal.proto.resources.Notification.decode(wire);
  } catch(e) {
    console.error("SW push error while decoding", e);
  }
  console.log("SW push notification", notification);
  if (notification) {
    showNotification(e, notification);
  }
});

self.addEventListener('notificationclick', (e) => {
  if (e.notification.data && e.notification.data !== "") openUrl(e, e.notification.data);
});
