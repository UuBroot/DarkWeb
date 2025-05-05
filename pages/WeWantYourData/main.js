function successCallback(pos) {
  document.getElementById("body").innerHTML =
    `
        <h1>N ` +
    pos.coords.latitude +
    `</h1>
        <h1>E ` +
    pos.coords.longitude +
    `</h1>
        <h1>Run while you can.</h1>
        <h2>Grimmlo is on his way...</h2>
        <button id="locButton" onclick="ju()"><img src="grimlo.png" alt="" width="200em" height="200em"></button>

        `;
}
var audio = new Audio("jup.wav");
function ju() {
  audio.play();
}
function errorCallback() {
  var audio = new Audio("NotAnOption.mp3");
  audio.play();

  setTimeout(function () {
    location.reload();
  }, 2000);
}
function getLocation() {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  document.getElementById("locButton").remove();
}
