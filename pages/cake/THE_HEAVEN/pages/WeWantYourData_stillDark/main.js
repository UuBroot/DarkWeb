function successCallback(pos) {
    document.getElementById("body").innerHTML = `
        <h1>N ` + pos.coords.latitude + `</h1>
        <h1>E ` + pos.coords.longitude + `</h1>
        `;
}
function errorCallback() {
    var audio = new Audio("NotAnOption.mp3");
    audio.play();

    setTimeout(function() {
        location.reload();
    }, 2000);
}
function getLocation() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    document.getElementById("locButton").remove();
}