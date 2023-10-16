var turnon = localStorage.getItem("turnon");
window.addEventListener('storage', function (e) {
  if (e.key === 'turnon') {
    turnon = e.newValue;
    chrome.tabs.reload(tabs[0].id);
  }
});

if (turnon === "true") {
    const images = document.querySelectorAll('img');

    images.forEach(image => {
      const downloadIcon = document.createElement('a');
      downloadIcon.innerHTML = '&#8681;';
      downloadIcon.style.cursor = 'pointer';
      downloadIcon.title = 'Download Image';
      downloadIcon.onclick = () => {
        const url = image.src;
        const fileName = url.substring(url.lastIndexOf('/') + 1);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
      };
      image.parentNode.appendChild(downloadIcon);
    });
}
console.log(turnon + localStorage.getItem("turnon"));  