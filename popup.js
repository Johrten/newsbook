let cleanFeed = document.getElementById('cleanFeed');
let socialFeed = document.getElementById('socialFeed');

cleanFeed.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, ()=> {
    chrome.tabs.executeScript(
        {file: 'mainScript.js'});
  })
}

socialFeed.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, ()=> {
    chrome.tabs.executeScript(
        {file: 'removeScript.js'})
  });
}
