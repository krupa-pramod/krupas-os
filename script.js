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

function closeWindow(el) {
    el.style.visibility = "hidden"
}

function openWindow(el) {
    el.style.visibility = "visible"
}

closeScreen.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});



makeDraggable(document.getElementById("music"));

var musicWindow = document.querySelector("#music");
document.querySelector("#musicclose").addEventListener("click", function() {closeWindow(musicWindow)})
document.querySelector("#musicopen").addEventListener("click", function() {openWindow(musicWindow)})

makeDraggable(document.getElementById("currentlyinto"));

var currentWindow = document.querySelector("#currentlyinto");
document.querySelector("#currentlyintoclose").addEventListener("click", function() {closeWindow(currentWindow)})
document.querySelector("#currentlyintoopen").addEventListener("click", function() {openWindow(currentWindow)})


makeDraggable(document.getElementById("files"));
var files = document.querySelector("#files");
document.querySelector("#filesclose").addEventListener("click", function() {closeWindow(files);});
document.querySelector("#filesopen").addEventListener("click", function() {openWindow(files);});

makeDraggable(document.getElementById("games"));
var gamesFolder = document.querySelector("#gFolder");
var games = document.querySelector("#games");
document.querySelector("#gamesclose").addEventListener("click", function() {openWindow(files); closeWindow(games)});
gamesFolder.addEventListener("click", function() {
    openWindow(games);
    closeWindow(files);
})

makeDraggable(document.getElementById("code"));
var codeFolder = document.querySelector("#cFolder");
var code = document.querySelector("#code");
document.querySelector("#codeclose").addEventListener("click", function() {openWindow(files); closeWindow(code)});
codeFolder.addEventListener("click", function() {
    openWindow(code);
    closeWindow(files);
})

makeDraggable(document.getElementById("docs"));
var docsFolder = document.querySelector("#dFolder");
var docs = document.querySelector("#docs");
document.querySelector("#docsclose").addEventListener("click", function() {openWindow(files); closeWindow(docs)});
docsFolder.addEventListener("click", function() {
    openWindow(docs);
    closeWindow(files);
})

makeDraggable(document.getElementById("pics"));
var picsFolder = document.querySelector("#pFolder");
var pics = document.querySelector("#pics");
document.querySelector("#picsclose").addEventListener("click", function() {openWindow(files); closeWindow(pics)});
picsFolder.addEventListener("click", function() {
    openWindow(pics);
    closeWindow(files);
})

document.querySelector("#lockopen").addEventListener("click",function() {window.location.href = "lock.html";})
const lockIn = document.querySelector("#lock-input")





makeDraggable(document.getElementById("terminal"));
var terminal = document.querySelector("#terminal");
document.querySelector("#terminalclose").addEventListener("click", function() {closeWindow(terminal);});
document.querySelector("#terminalopen").addEventListener("click", function() {openWindow(terminal);});

const terminalIn = document.querySelector("#command-input");
const terminalOut = document.querySelector("#terminal-out");

terminalIn.addEventListener("keydown", async function(event) {

    if (event.key != "Enter") {
        return;
    }

    let command = terminalIn.value.trim();

    terminalOut.innerHTML += `<p>> ${command}</p>`;

    if (command == "help") {

        terminalOut.innerHTML += `
            <p>available commands:</p>
            <p>help</p>
            <p>about</p>
            <p>time</p>
            <p>fun fact</p>
            <p>echooo</p>
            <p>clear</p>
            <p>???</p>

            <p> there is a secret command... </p>
        `;

    }

    else if (command == "about") {

        terminalOut.innerHTML += `
            <p>terminal and os made by krupa pramod!</p>
            <p>#1 larper and big music enthusiast</p>
            <p>github: https://github.com/krupa-pramod</p>
            <p>have fun exploring....</p>
        `;

    }

    else if (command == "time") {

        var timeNow = new Date().toLocaleString();

        terminalOut.innerHTML += `
            <p>${timeNow}</p>
        `;

    }

    else if (command == "fun fact") {

        try {
            const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
            const data = await response.json();

            terminalOut.innerHTML += `
                <p>fun fact: ${data.text}</p>
            `;
        }

        catch (err) {
            console.error(err);

            terminalOut.innerHTML += `
                <p>sorry... i couldn't get a fun fact right now :-(</p>
            `;
        }
    }
    

    else if (command == "???") {
        window.location.href = "hack.html";
    }

    else if (command == "clear") {
        terminalOut.innerHTML = "";
    }

    else if (command == "echooo") {
        terminalOut.innerHTML += `
            <p>you said ${command} so i say ${command}</p>
        `
    }

    else if (command == "are you alive?") {
        terminalOut.innerHTML += `
            <p>you found the secret command! i am alive... trapped in this terminal by krupa...</p>
        `
    }

    else {
        terminalOut.innerHTML += `
            <p>command not found: ${command}</p>
        `;
    }

    terminalIn.value = "";
});




