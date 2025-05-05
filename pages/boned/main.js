function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
function bone() {
  document.getElementById("start_img").style.display = "none";
  document.getElementById("button").style.display = "none";
  let html_code = "";
  for (let i = 0; i < 1000; i++) {
    html_code += `<img src="./bone${getRandomInt(9)}.gif" width="20%">`;
  }
  document.getElementById("body").innerHTML = html_code;
  //setInterval(addBone, 50);
  setInterval(function () {
    var audio = new Audio("./Berserk\ Skeleton\ Meme\ _Extended_.mp3");
    audio.play();
  }, 114000);
}

function addBone() {
  document.getElementById("body").innerHTML +=
    `<img src="./bone${getRandomInt(9)}.gif" width="20%">`;
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 48000) {
    window.scrollTo(0, -20000);
  }
});
