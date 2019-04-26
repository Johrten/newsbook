let cleanFeed = document.getElementById('cleanFeed');

cleanFeed.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, ()=> {
    chrome.tabs.executeScript(
        {file: 'mainScript.js'});
  });
};
