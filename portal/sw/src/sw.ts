declare var self: ServiceWorkerGlobalScope; export {};

import {skipWaiting, clientsClaim} from "workbox-core";

skipWaiting();
clientsClaim();

self.addEventListener('activate', (e) => {
  console.log("SW! activate");
  if (new Date().getTime() > 1606748400000) { // 2020/12/1
    self.registration.unregister();
    return;
  }
});
console.log("SW!");
