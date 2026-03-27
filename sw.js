const CACHE = 'diagterrain-v31';
const ASSETS = [
  '/diagterrain/',
  '/diagterrain/index.html',
];

// Installation — mise en cache minimale (pas les CDN, trop lourds)
self.addEventListener('install', e => {
  // skipWaiting immédiat — pas d'attente de fermeture des onglets
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.allSettled(ASSETS.map(url => cache.add(url).catch(() => {})))
    )
  );
});

// Activation — nettoyer les anciens caches et prendre le contrôle immédiatement
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim()) // prendre le contrôle de tous les onglets ouverts
  );
});

// Fetch — network-first pour index.html (toujours la version fraîche)
//          cache-first pour les assets statiques
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // index.html et racine → network-first avec fallback cache
  if (url.pathname.endsWith('/diagterrain/') || url.pathname.endsWith('index.html')) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(e.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // CDN (pdfjs, jspdf, utif, fonts) → cache-first
  if (url.origin !== self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(e.request, clone));
          }
          return response;
        }).catch(() => cached);
      })
    );
    return;
  }
});

// Message depuis l'app pour forcer la mise à jour
self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
