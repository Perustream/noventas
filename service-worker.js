
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("radio90s-store").then(cache => {
      return cache.addAll([
        "./index_radio90s_pwa.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
