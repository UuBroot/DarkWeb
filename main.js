
function getRandomWebsites() {
    let urls = [
        'pages/SoggyCat/index.html', 'pages/BlackMarket/index.html', 'pages/chinese_button/index.html', 'pages/LoginFun/index.html', 'pages/KillCursor/index.html',
        'pages/TheBestMovies/index.html', 'pages/boned/index.html', 'pages/BlueRooms/index.html', 'pages/WeWantYourData/index.html', 'pages/help/index.html',
        'pages/WindOS/index.html', 'pages/cake/index.html','pages/TikTakToe/index.html', 'pages/funMatrix', 'pages/noVirus/index.html'
    ];


    let random = Math.floor(Math.random() * urls.length);
    console.log(random);
    window.open(urls[random], '_blank');
}