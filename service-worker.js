!function(){"use strict";const e=["client/client.ef26d40e.js","client/index.1fe96f1e.js","client/client.fa3fbd31.js"].concat(["service-worker-index.html","close-icon.svg","elastos.png","favicon.png","global.css","logo-180.png","logo-192.png","logo-512.png","manifest.json","promo_images/academy.jpg","promo_images/cr.jpg","promo_images/greenpass.jpg","promo_images/hyper.jpg","shield-icon.png","social_share.jpg","star-icon.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1588464816972").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1588464816972"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588464816972").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
