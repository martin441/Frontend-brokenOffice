const CACHE_NAME = "my-app-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/user/profile",
  "/user/history",
  "/service/report/all",
];

window.addEventListener("install", function (event) {
  console.log("Service worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

window.addEventListener("activate", function (event) {
  console.log("Service worker activating...");
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (name) {
            return name !== CACHE_NAME;
          })
          .map(function (name) {
            return caches.delete(name);
          })
      );
    })
  );
});

window.addEventListener("fetch", function (event) {
  console.log("Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("Found in cache:", event.request.url);
        return response;
      }
      console.log("Not found in cache:", event.request.url);
      return fetch(event.request);
    })
  );
});
