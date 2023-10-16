var btnON = document.getElementById("ON");
var btnOFF = document.getElementById("OFF");
var turnon = chrome.storage.local.get(["turnon"], function(result) {
    return result;
});
console.log(turnon);

btnON.addEventListener("click", function () {
    btnON.classList.add("pressed");
    btnOFF.classList.remove("pressed");
    localStorage.setItem("turnon", "true");
});

btnOFF.addEventListener("click", function () {
    btnOFF.classList.add("pressed");
    btnON.classList.remove("pressed");
    localStorage.setItem("turnon", "false");
});

if (turnon == "true") {
    btnON.classList.add("pressed");
    btnOFF.classList.remove("pressed");
}
document.getElementById("status").innerHTML = turnon;
//chrome.tabs.create({ url:"https://youtube.com"});
//chrome.runtime.openOptionsPage();