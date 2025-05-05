function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function bone() {
    document.getElementById("start_img").style.display = "none";
    document.getElementById("button").style.display = "none";
    let html_code = "";
    for (let i = 0; i < 100000; i++) {
        html_code += `<img src="./bone${getRandomInt(9)}.gif" width="20%">`
    }
    document.getElementById("body").innerHTML = html_code;
    
    setInterval(function(){
        var audio = new Audio('./Berserk\ Skeleton\ Meme\ _Extended_.mp3');
        audio.play();
    },114000)
}