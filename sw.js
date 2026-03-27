const CACHE = 'diagterrain-v24';
const ASSETS = [
  '/diagterrain/',
  '/diagterrain/index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
];

// Installation : mise en cache des assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      // On tente chaque asset individuellement pour ne pas bloquer si l'un échoue
      return Promise.allSettled(ASSETS.map(url => cache.add(url).catch(() => {})));
    }).then(() => self.skipWaiting())
  );
});

// Activation : nettoyage des anciens caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch : cache-first pour les assets, network-first pour le reste
self.addEventListener('fetch', e => {
  // Ne pas intercepter les requêtes non-GET
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Mettre en cache les nouvelles ressources valides
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        // Hors ligne et non en cache : page de fallback
        if (e.request.destination === 'document') {
          return caches.match('/diagterrain/index.html');
        }
      });
    })
  );
});

// Message de mise à jour depuis l'app
self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
