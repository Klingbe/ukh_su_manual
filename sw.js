// Offline-Speicher für die Stroke-Unit-App: zuerst Netz (max. 3 s), sonst gespeicherte Version.
const CACHE = 'su-manual-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-180.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const key = req.mode === 'navigate' ? './index.html' : req;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const net = fetch(req, {cache: 'no-cache'}).then(r => {
      if (r && r.ok) cache.put(key, r.clone());
      return r;
    });
    const timeout = new Promise(res => setTimeout(() => res(null), 3000));
    try {
      const r = await Promise.race([net, timeout]);
      if (r) return r;
    } catch (_) {}
    const hit = await cache.match(key);
    return hit || net;
  })());
});
