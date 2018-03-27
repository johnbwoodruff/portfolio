self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('johnwoodruff').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?homescreen=1',
        '/?homescreen=1',
        '/css/main.css',
        '/css/normalize.css',
        '/css/portfolio.css',
        '/css/vendor/fontawesome/fontawesome-all.min.css',
        '/css/vendor/webfonts/fa-brands-400.eot',
        '/css/vendor/webfonts/fa-brands-400.svg',
        '/css/vendor/webfonts/fa-brands-400.ttf',
        '/css/vendor/webfonts/fa-brands-400.woff',
        '/css/vendor/webfonts/fa-brands-400.woff2',
        '/css/vendor/webfonts/fa-light-300.eot',
        '/css/vendor/webfonts/fa-light-300.svg',
        '/css/vendor/webfonts/fa-light-300.ttf',
        '/css/vendor/webfonts/fa-light-300.woff',
        '/css/vendor/webfonts/fa-light-300.woff2',
        '/css/vendor/webfonts/fa-regular-400.eot',
        '/css/vendor/webfonts/fa-regular-400.svg',
        '/css/vendor/webfonts/fa-regular-400.ttf',
        '/css/vendor/webfonts/fa-regular-400.woff',
        '/css/vendor/webfonts/fa-regular-400.woff2',
        '/css/vendor/webfonts/fa-solid-900.eot',
        '/css/vendor/webfonts/fa-solid-900.svg',
        '/css/vendor/webfonts/fa-solid-900.ttf',
        '/css/vendor/webfonts/fa-solid-900.woff',
        '/css/vendor/webfonts/fa-solid-900.woff2',
        '/js/main.js',
        '/js/plugins.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
