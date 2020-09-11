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

const showNotification = (n: isuxportal.proto.resources.INotification) => {
  console.log("SW showNotification:", n);
  if (n.contentTest) {
    self.registration.showNotification("isuxportal test notification", {body: "test test test", tag: '/contestant'});
  } else if (n.contentBenchmarkJob) {
    // TODO:
  } else if (n.contentClarification) {
    // TODO:
  }
}

interface LocalNotificationMessage {
  kind: "localNotification";
  notifications: isuxportal.proto.resources.INotification[],
}

const handleLocalNotifications = (data: LocalNotificationMessage) => {
  console.log("local notifications", data.notifications);

  data.notifications.forEach((v) => showNotification(v));
};

self.addEventListener('message', (e) => {
  const data = e.data;
  switch(data.kind) {
    case "localNotification":
      handleLocalNotifications(data as LocalNotificationMessage);
      break;
    default: 
      console.warn("Unknown message received at sw", data);
      break;
  }
})

self.addEventListener('notificationclick', (e) => {
  if (e.notification.tag && e.notification.tag !== "") openUrl(e, e.notification.tag);
});
