var btnON = document.getElementById("ON");
var btnOFF = document.getElementById("OFF");
var turnon = false;
chrome.storage.sync.get(['TurnOn'], function(result) {
    turnon = result.TurnOn;
});

btnON.addEventListener("click", function () {
    btnON.classList.add("pressed");
    btnOFF.classList.remove("pressed");
    chrome.storage.sync.set({ TurnOn: true});
});

btnOFF.addEventListener("click", function () {
    btnOFF.classList.add("pressed");
    btnON.classList.remove("pressed");
    chrome.storage.sync.set({ TurnOn: turnon});
});

if (turnon == "true") {
    btnON.classList.add("pressed");
    btnOFF.classList.remove("pressed");
}
document.getElementById("status").innerHTML = turnon;
//chrome.tabs.create({ url:"https://youtube.com"});
//chrome.runtime.openOptionsPage();