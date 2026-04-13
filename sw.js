/* ── Polyphonic Service Worker ── */
const CACHE_NAME = 'polyphonic-v1';

const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/firebase-config.js',
    '/manifest.json'
];

// 설치: 핵심 파일 캐시
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting();
});

// 활성화: 이전 캐시 삭제
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// 네트워크 우선, 실패 시 캐시 반환
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
