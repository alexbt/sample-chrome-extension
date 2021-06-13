chrome.runtime.onInstalled.addListener(function() {
  console.log("background.runtime.onInstalled")
});

chrome.bookmarks.onCreated.addListener(function() {
  console.log("background.bookmarks.onCreated");
});


chrome.webNavigation.onCompleted.addListener(function() {
    console.log("background.webNavigation.onCompleted.google");
}, {url: [{urlMatches : 'https://www.google.com/'}]});


chrome.webNavigation.onCompleted.addListener(function() {
    console.log("background.webNavigation.onCompleted");
});


chrome.runtime.onMessage.addListener(function(message, callback) {
    console.log("background.runtime.onMessage");
});

chrome.runtime.onSuspend.addListener(function() {
  console.log("runtime.onSuspend");
});