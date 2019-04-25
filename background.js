chrome.runtime.onInstalled.addListener(function() {
   chrome.storage.sync.set({color: '#000000'}, function() {
     console.log("The color is yellow.");
   });
     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.facebook.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
