chrome.storage.sync.get(['toggle'], function(result) {
  console.log(result);
})

if (!!document.querySelector('[title="Newsbook"]')) {}
else {
  var sheet = document.createElement('style')
  sheet.setAttribute("title","Newsbook")
  sheet.innerHTML = "._666h._18vj._18vk._42ft {display:none} ._3vum {display:none} ._3w53 {display:none}"
  document.body.appendChild(sheet)
  chrome.storage.sync.set({'toggle': true}, function() {
    console.log('Settings saved');
  })
}

chrome.storage.sync.get(['toggle'], function(result) {
  console.log(result);
})
