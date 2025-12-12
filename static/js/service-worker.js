/* Brevo Web Push Service Worker */

self.importScripts("https://cdn.brevo.com/js/push-sw.js");

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
