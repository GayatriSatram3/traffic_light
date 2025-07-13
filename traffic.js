let stopBtn = document.getElementById("stopBtn");
let readyBtn = document.getElementById("readyBtn");
let goBtn = document.getElementById("goBtn");

let stop = document.getElementById("stop");
let ready = document.getElementById("ready");
let go = document.getElementById("go");

function stopButton(){
    stopBtn.style.backgroundColor="#cf1124";
    stop.style.backgroundColor="#cf1124";
    readyBtn.style.backgroundColor="#1f1d41";
    ready.style.backgroundColor="#4b5069";
    goBtn.style.backgroundColor="#1f1d41";
    go.style.backgroundColor="#4b5069";
}

function readyButton(){
    stopBtn.style.backgroundColor="#1f1d41";
    stop.style.backgroundColor="#4b5069";
    readyBtn.style.backgroundColor="#f7c948";
    ready.style.backgroundColor="#f7c948";
    goBtn.style.backgroundColor="#1f1d41";
    go.style.backgroundColor="#4b5069";
}

function goButton(){
    stopBtn.style.backgroundColor="#1f1d41";
    stop.style.backgroundColor="#4b5069";
    readyBtn.style.backgroundColor="#1f1d41";
    ready.style.backgroundColor="#4b5069";
    goBtn.style.backgroundColor="#199473";
    go.style.backgroundColor="#199473";
}