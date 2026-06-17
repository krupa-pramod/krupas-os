function updateTime() {
    var timeNow = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");

    timeText.innerHTML = timeNow
}

setInterval(updateTime,1000)

let element = null;
let initialX = 0;
let initialY = 0;
let currentX = 0;
let currentY = 0;

makeDraggable(document.getElementById("welcome"))

function makeDraggable(el) {
    let handle = document.getElementById(el.id + "header") || el;
    handle.onmousedown = function(e){
        element = el;
        startDragging(e);
    };
}

function startDragging(e) {
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
}

function dragElement(e) {
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
}

function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
}

var welcomeScreen = document.querySelector("#welcome")
var closeScreen = document.querySelector("#welcomeclose")
var openScreen = document.querySelector("#welcomeopen")

function closeWindow(el) {
    el.style.visibility = "hidden"
}

function openWindow(el) {
    el.style.visibility = "visible"
}

closeScreen.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

openScreen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

makeDraggable(document.getElementById("music"));

var musicWindow = document.querySelector("#music");
document.querySelector("#musicclose").addEventListener("click", function() {closeWindow(musicWindow)})
document.querySelector("#musicopen").addEventListener("click", function() {openWindow(musicWindow)})

makeDraggable(document.getElementById("currentlyinto"));

var currentWindow = document.querySelector("#currentlyinto");
document.querySelector("#currentlyintoclose").addEventListener("click", function() {closeWindow(currentWindow)})
document.querySelector("#currentlyintoopen").addEventListener("click", function() {openWindow(currentWindow)})

