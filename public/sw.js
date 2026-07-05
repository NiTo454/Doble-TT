const CACHE_NAME = "doble-tt-cache-v1";

const ASSETS_TO_CACHE = [
  "/",
  "/cremeria",
  "/dj",
  "/enlaces",
  "/icon.ico",
  "/logo.png",
  "/logo-doble-tt.jpeg",
  "/Dj-Portada.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn("Algunos activos no se pudieron pre-cachear:", err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Solo procesar peticiones HTTP(S) GET y del propio dominio de la app
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Guardar copia fresca en caché para páginas válidas
        if (response && response.status === 200 && response.type === "basic") {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Devolver recurso desde caché en caso de fallo de conexión
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Si no hay recurso cacheado y es una navegación, devolver el portal raíz
          if (event.request.mode === "navigate") {
            return caches.match("/");
          }
          return new Response("Sin conexión", {
            status: 503,
            statusText: "Offline",
            headers: new Headers({ "Content-Type": "text/plain; charset=utf-8" })
          });
        });
      })
  );
});
