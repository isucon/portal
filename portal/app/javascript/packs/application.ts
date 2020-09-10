import "./application.scss";
import "../sentry.js";

// TODO: import 'raven';

import * as Rails from "@rails/ujs";
Rails.start();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch((e) => {
      console.error(e);
    });
  });
}
