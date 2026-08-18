const lockIn = document.querySelector("#lock-input");

lockIn.addEventListener("keydown", function(event) {

    if (event.key !== "Enter") {
        return;
    }

    if (lockIn.value === "89712345") {
        window.location.href = "os.html";
    } else {
        lockIn.value = "";
    }

});