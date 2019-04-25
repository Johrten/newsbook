let cleanFeed = document.getElementById('cleanFeed');

cleanFeed.onclick = function(element) {
  // let social = document.getElementsByClassName("_4299")
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'mainScript.js'});
  });
};
