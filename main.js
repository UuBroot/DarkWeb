function getRandomWebsites() {
  let urls = [
    "pages/SoggyCat/index.html",
    "pages/boned/index.html",
    "pages/BlueRooms/index.html",
    "pages/cake/index.html",
    "pages/TikTakToe/index.html",
  ];

  let random = Math.floor(Math.random() * urls.length);
  console.log(random);
  window.open(urls[random], "_blank");
}
