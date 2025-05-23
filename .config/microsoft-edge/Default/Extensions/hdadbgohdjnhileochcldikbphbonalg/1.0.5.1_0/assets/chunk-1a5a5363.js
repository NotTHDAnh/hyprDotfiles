chrome.tabs.onUpdated.addListener(function(o,t,r){t.url&&chrome.cookies.get({url:"https://www.coursera.org",name:"CSRF3-Token"},function(e){e&&chrome.storage.sync.set({csrf3Token:e.value})})});
