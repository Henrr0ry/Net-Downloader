var turnon = false;
console.log("app start");

document.getElementById("ON").addEventListener("click", function () {
    document.getElementById("ON").classList.add("pressed");
    document.getElementById("OFF").classList.remove("pressed");
    console.log("ON");
});

document.getElementById("OFF").addEventListener("click", function () {
    document.getElementById("OFF").classList.add("pressed");
    document.getElementById("ON").classList.remove("pressed");
    console.log("OFF");
});