// Network-first: online the iPads always get the newest deploy; the cache is only the offline fallback.
const CACHE = "fiesta-latina-v2";
const CORE = ["./", "index.html", "print.html", "dishes.js", "manifest.json", "icon-512.png",
  "images/gallo-pinto.jpg", "images/salpicon.jpg", "images/pinolillo.jpg", "images/cajetas.jpg", "images/pio-quinto.jpg"];

self.addEventListener("install", e => e.waitUntil(
  caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting())));

// Drop caches from older versions so stale files can't come back.
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    if (new URL(req.url).origin !== location.origin) {
      // Google Fonts: versioned URLs, safe to serve from cache first.
      return (await cache.match(req)) || fetch(req).then(res => { cache.put(req, res.clone()); return res; });
    }
    try {
      const res = await fetch(req.url, { cache: "no-cache" }); // revalidate past the HTTP cache
      if (res.ok) cache.put(req, res.clone());
      return res;
    } catch {
      return (await cache.match(req, { ignoreSearch: true })) ||
        (req.mode === "navigate" ? cache.match("index.html") : Response.error());
    }
  }));
});
