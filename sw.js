// Offline support: serve from cache instantly, refresh the cache in the background (stale-while-revalidate).
const CACHE = "fiesta-latina-v1";
const CORE = ["./", "index.html", "print.html", "dishes.js", "manifest.json", "icon-512.png",
  "images/gallo-pinto.jpg", "images/salpicon.jpg", "images/pinolillo.jpg", "images/cajetas.jpg", "images/pio-quinto.jpg"];

self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const fresh = fetch(e.request).then(res => { if (res.ok || res.type === "opaque") cache.put(e.request, res.clone()); return res; });
    if (cached) { e.waitUntil(fresh.catch(() => {})); return cached; }
    return fresh;
  }));
});
