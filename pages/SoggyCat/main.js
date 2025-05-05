let isShowingPussy = false;
let audio = new Audio("./music.mp3");

function getElementBG(elm) {
  var bg = getComputedStyle(elm).backgroundColor;
  bg = bg.match(/\((.*)\)/)[1];
  bg = bg.split(",");
  for (var i = 0; i < bg.length; i++) {
    bg[i] = parseInt(bg[i], 10);
  }
  if (bg.length > 3) {
    bg.pop();
  }
  return bg;
}

function random() {
  if (arguments.length > 2) {
    return 0;
  }
  switch (arguments.length) {
    case 0:
      return Math.random();
    case 1:
      return Math.round(Math.random() * arguments[0]);
    case 2:
      var min = arguments[0];
      var max = arguments[1];
      return Math.round(Math.random() * (max - min) + min);
  }
}

function generateRGB(min, max) {
  var min = min || 0;
  var max = min || 255;
  var color = [];
  for (var i = 0; i < 3; i++) {
    var num = random(min, max);
    color.push(num);
  }
  return color;
}

function calculateDistance(colorArray1, colorArray2) {
  var distance = [];
  for (var i = 0; i < colorArray1.length; i++) {
    distance.push(Math.abs(colorArray1[i] - colorArray2[i]));
  }
  return distance;
}

function calculateIncrement(distanceArray, fps, duration) {
  var fps = fps || 30;
  var duration = duration || 1;
  var increment = [];
  for (var i = 0; i < distanceArray.length; i++) {
    var incr = Math.abs(Math.floor(distanceArray[i] / (fps * duration)));
    if (incr == 0) {
      incr = 1;
    }
    increment.push(incr);
  }
  return increment;
}

function rgb2hex(colorArray) {
  var color = [];
  for (var i = 0; i < colorArray.length; i++) {
    var hex = colorArray[i].toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    color.push(hex);
  }
  return "#" + color.join("");
}

var fps = 30;
var duration = 3;
var transElement = document.body;
var currentColor = getElementBG(transElement);
var transHandler = null;

function startTransition() {
  clearInterval(transHandler);
  showPussy();
  targetColor = generateRGB();
  distance = calculateDistance(currentColor, targetColor);
  increment = calculateIncrement(distance, fps, duration);

  transHandler = setInterval(function () {
    transition();
  }, 1000 / fps);
}

/* ==================== Transition Calculator ==================== */
function transition() {
  // checking R
  if (currentColor[0] > targetColor[0]) {
    currentColor[0] -= increment[0];
    if (currentColor[0] <= targetColor[0]) {
      increment[0] = 0;
    }
  } else {
    currentColor[0] += increment[0];
    if (currentColor[0] >= targetColor[0]) {
      increment[0] = 0;
    }
  }

  // checking G
  if (currentColor[1] > targetColor[1]) {
    currentColor[1] -= increment[1];
    if (currentColor[1] <= targetColor[1]) {
      increment[1] = 0;
    }
  } else {
    currentColor[1] += increment[1];
    if (currentColor[1] >= targetColor[1]) {
      increment[1] = 0;
    }
  }

  // checking B
  if (currentColor[2] > targetColor[2]) {
    currentColor[2] -= increment[2];
    if (currentColor[2] <= targetColor[2]) {
      increment[2] = 0;
    }
  } else {
    currentColor[2] += increment[2];
    if (currentColor[2] >= targetColor[2]) {
      increment[2] = 0;
    }
  }

  // applying the new modified color
  transElement.style.backgroundColor = rgb2hex(currentColor);

  // transition ended. start a new one
  if (increment[0] == 0 && increment[1] == 0 && increment[2] == 0) {
    startTransition();
  }
}
function showPussy() {
  if (isShowingPussy == false) {
    isShowingPussy = true;
    document.getElementById("body").innerHTML = `
		<img src="cat.png"></img>
		<br><br><br>
   		<div id="main"></div>
	`;
    audio.play().catch((e) => console.error("Autoplay blocked:", e));

    setTimeout(function () {
      document.getElementById("main").innerHTML =
        `<button onclick="bribe()">Don't Click this Button</button>`;
    }, 30000);
  }
}
function bribe() {
  audio.pause();

  window.location.href = "./popUp.html";

  let audio2 = new Audio("./ominous.mp3");
  audio2.play().catch((e) => console.error("Autoplay blocked:", e));
}
