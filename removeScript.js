document.querySelector('[title="Newsbook"]').remove()

chrome.storage.sync.set({'toggle': false}, function() {
  console.log('Settings saved');
})

chrome.storage.sync.get(['toggle'], function(result) {
  console.log(result);
})
