const CACHE = 'diagterrain-v47';
// Assets servis depuis le meme origin (toujours preserves au cache)
const ASSETS = [
  '/diagterrain/',
  '/diagterrain/index.html',
];
// CDN externes : precaches a l'install pour que la 1ere mission hors-ligne
// puisse generer des exports PDF/Word/TIFF. Sans ca, le 1er lancement
// offline echoue (les scripts ne sont pas dispos).
const CDN_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdn.jsdelivr.net/npm/utif@3.1.0/UTIF.js',
];

// Installation : precache assets + CDN. cache.add() utilise CORS standard, ce qui
// preserve la possibilite de validation SRI cote client (les reponses opaques de
// 'no-cors' rendraient les hashs SRI invalides). cdnjs et jsdelivr supportent CORS.
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(async cache => {
      await Promise.allSettled(ASSETS.map(url => cache.add(url).catch(() => {})));
      await Promise.allSettled(CDN_ASSETS.map(url => cache.add(url).catch(() => {})));
    })
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
