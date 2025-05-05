let count = 0;
let cake = false;
let audio;
alert(
  "Photosensitive warning!!! Leave if you are sensitive to flashing lights",
);
function turnToCake(img) {
  if (cake == false) {
    cake = true;
    count++;
    img.src = "cake.png";
    img.style.pointer = "default";
    if (count == 1) {
      audio = new Audio("./yep.mp3");
      audio.play();
      document.getElementById("line").innerHTML = "Sofa is cake";
      setTimeout(function () {
        img.src = "snickers.avif";
        document.getElementById("line").innerHTML = "";
        cake = false;
      }, 1000);
    } else if (count == 2) {
      document.getElementById("line").innerHTML = "Snickers is cake";
      setTimeout(function () {
        img.src = "lasang.png";
        document.getElementById("line").innerHTML = "";
        cake = false;
      }, 1000);
    } else if (count == 3) {
      document.getElementById("line").innerHTML = "Lasang is cake";
      setTimeout(function () {
        img.src = "pc.png";
        document.getElementById("line").innerHTML = "";
        cake = false;
      }, 1000);
    } else if (count == 4) {
      document.getElementById("line").innerHTML = "PC is cake";
      setTimeout(function () {
        img.src = "cat.png";
        document.getElementById("line").innerHTML = "";
        cake = false;
      }, 1000);
    } else if (count == 5) {
      document.getElementById("line").innerHTML = "Cat is cake";
      setTimeout(function () {
        img.src = "erde.png";
        document.getElementById("line").innerHTML = "";
        cake = false;
      }, 1000);
    } else if (count == 6) {
      document.getElementById("line").innerHTML = "Earth is cake";
      setTimeout(function () {
        audio.pause();
        img.src = "YOU.png";
        document.getElementById("line").innerHTML = "";
        cake = false;
      }, 1000);
    } else if (count == 7) {
      audio = new Audio("./jumpscare.mp3");
      audio.play();
      document.getElementById("jumpscare").style.display = "block";
      document.getElementById("jumpscare").style.animationName = "jumpscare";
      document.getElementById("body").style.backgroundColor = "red";
      setTimeout(function () {
        document.getElementById("jumpscare").style.display = "none";
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("body").innerHTML = "";
        quotes();
      }, 950);
    }
  }
}

let audio2;

function quotes() {
  audio = new Audio("quotes_background.mp3");
  audio.play();
  audio2 = new Audio("Vine.mp3");
  document.getElementById("body").innerHTML += "<h1>Everything is cake.</h1>";
  setTimeout(function () {
    document.getElementById("body").innerHTML +=
      "<h1>But the cake is a lie.</h1>";
    audio2.play();
  }, 2500);
  setTimeout(function () {
    document.getElementById("body").innerHTML +=
      "<h1>Everything is a lie.</h1>";
    audio2.play();
  }, 5000);
  setTimeout(function () {
    document.getElementById("body").innerHTML += "<h1>You are a lie.</h1>";
    audio2.play();
  }, 7500);
  setTimeout(function () {
    document.getElementById("body").innerHTML += "<h1>You are a lie.</h1>";
    audio2.play();
  }, 11000);
  setTimeout(function () {
    document.getElementById("body").innerHTML +=
      '<div onclick="painKiller()" class="killButton">Click here to kill yourself</div>';
  }, 15000);
}

function painKiller() {
  audio.pause();
  document.getElementById("body").innerHTML = '<img src="microwave.gif">';
  setTimeout(function () {
    audio = new Audio("./microwave.mp3");
    audio.play();
    document.getElementById("body").innerHTML = '<div id="the_holy"></div>';
    document.getElementById("body").style.animationName = "backgroundKiller";
  }, 1890);
  setTimeout(function () {
    audio.pause();
    document.getElementById("the_holy").innerHTML =
      '<p style="text-align: center; margin: 0; padding-top: 40vh; color: black; cursor: pointer;" onclick="enterHeaven()">Click here to enter heaven</p>';
  }, 6390);
}

function enterHeaven() {
  window.location.href = "./THE_HEAVEN/heaven.html";
}
