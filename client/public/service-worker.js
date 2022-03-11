if (workbox) {
  console.log('Workbox loaded');
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
} else {
  console.log('Workbox didnt load');
}
