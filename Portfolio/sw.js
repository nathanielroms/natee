self.addEventListener("install", e => { 
    e.waitUntil(
      caches.open("offlineFiles").then(cache => {
         return cache.addAll([
             "./",
             "./index.js",
             "./style.css",
             "./icon.png",
             "./icon1.png",
             "./bg1.jpg",
             "./basketball.jpg",
             "./badminton.jpg",
             "./baseball.jpg",
             "./valorant.jpg",
             "./mobilelegends.jpg",
             "./ran.jpg",
             "./avengers.jpg",
             "./music1.jpg",
             "./music2.png",
             "./music3.png",
             "./c.jpg",
             "./java.jpg",
             "./contact.jpg"
             
         ]);
      })
    );
});

self.addEventListener("fetch", e => {
   console.log("Intercepting request :"+ e.request.url);
   e.respondWith(
       caches.match(e.request).then(response => {
            return response || fetch(e.request);
       })
   );
});