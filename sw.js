// Nama catatannya
const namaSimpanan = "ikt-v1";

// List file yang mau dijaga biar bisa dibuka pas offline
self.addEventListener("install", (anu) => {
  anu.waitUntil(
    caches.open(namaSimpanan).then((simpanan) => {
      return simpanan.addAll(["index.html", "manifest.json"]);
    })
  );
});

// Kalau dipanggil pas gak ada sinyal, si satpam kasih file yang dia jaga
self.addEventListener("fetch", (anu) => {
  anu.respondWith(
    caches.match(anu.request).then((hasil) => {
      return hasil || fetch(anu.request);
    })
  );
});