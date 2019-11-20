function setLocalStorage(pWatchType, pStarCombo, pWatchCombo, pForkCombo) {
  localStorage['watchType'] = pWatchType
  localStorage['starCombo'] = pStarCombo
  localStorage['watchCombo'] = pWatchCombo
  localStorage['forkCombo'] = pForkCombo
}

function getLocalStorage() {
  var result = new Object()
  result.watchType = localStorage['watchType']
  result.starCombo = localStorage['starCombo']
  result.watchCombo = localStorage['watchCombo']
  result.forkCombo = localStorage['forkCombo']
  return JSON.stringify(result)
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            urlContains: 'github.com'
          }
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var response = new Object()
  response.watchType = localStorage['watchType']
  response.starCombo = localStorage['starCombo']
  response.watchCombo = localStorage['watchCombo']
  response.forkCombo = localStorage['forkCombo']
  sendResponse(JSON.stringify(response));
});


var isFirstLoad = localStorage['comBoinit']
if (isFirstLoad != 1) {
  localStorage['comBoinit'] = 1
  localStorage['watchType'] = 'subscribed'
  localStorage['starCombo'] = 1
  localStorage['watchCombo'] = 1
  localStorage['forkCombo'] = 1
}
