const cacheName = 'pwa-conf-v1';
const staticAssets = [
    './',
    './index.html',
    './index.js',
    './index.css'
];


self.addEventListener('install', async event => {
    console.log('install event')
});

self.addEventListener('fetch', async event => {
    console.log('fetch event')
});


self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});