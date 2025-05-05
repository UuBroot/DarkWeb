function doChina() {
    document.getElementById("body").style = `background-image: url(./xi-jinping.gif);;`

    document.getElementById("button").style.display = "none";
    var audio = new Audio('./Ching\ Chang\ Chong\ Full\ version\ _Chinese\ Rap_\ \(online-audio-converter.com\).mp3');
    audio.play();
    for (let i = 0; i < 200; i++) {
        if (i % 2 == 0) {
            document.getElementById("body").innerHTML +=
                `<img src="./chin.gif" width="400vw">
            <img src="./chinese.gif" width="400vw"style="margin: 10vw;">
            <img src="./chinese2.gif" width="400vw">
            <img src="./dancing-chinese.gif" width="400vw" style="margin: 10vw;">
            <img src="./mao-communism-china.gif" width="400vw">
            <img src="./xi-jinping.gif" width="400vw">
            `
        } else {
            `
            <img src="./xi-jinping.gif" width="400vw" style="margin: 10vw;">
            <img src="./dancing-chinese.gif" width="400vw">
            <img src="./chin.gif" width="400vw">
            <img src="./chinese.gif" width="400vw">
            <img src="./mao-communism-china.gif" width="400vw" style="margin: 10vw;">
            <img src="./chinese2.gif" width="400vw">
            
            
            
            `
        }


    }

}