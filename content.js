var turnon = false;
const imageUrl = chrome.runtime.getURL('icons/save.png');
chrome.storage.sync.get('TurnOn', function(result) {
  turnon = result.TurnOn;
  if (turnon == true)
    updatepage();
    console.log(turnon); 
});

function updatepage() {
  const images = document.querySelectorAll('img');

  images.forEach(image => {
      const downloadIcon = document.createElement('a');
      downloadIcon.innerHTML = '<img src="'+ imageUrl + '" alt="&#8595;">';
      downloadIcon.style.position = 'absolute';
      downloadIcon.style.top = '0';
      downloadIcon.style.right = '0';
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

      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-block';
      wrapper.style.overflow = 'hidden';
      wrapper.style.width = image.width + 'px';
      wrapper.style.height = image.height + 'px';
      wrapper.appendChild(image.cloneNode(true));
      wrapper.appendChild(downloadIcon);

      image.parentNode.replaceChild(wrapper, image);
  });
}