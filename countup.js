var seconds = 0;
var timer = document.getElementById("seconds-counter");

function incrementSeconds() {
    seconds += 1;
    timer.innerText = "You have kept me alive for " + seconds + " second(s).";
}

var increment = setInterval(incrementSeconds, 1000);