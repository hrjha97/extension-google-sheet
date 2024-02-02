document.addEventListener('DOMContentLoaded', function() {
    var enhanceButton = document.getElementById('enhanceButton');
    enhanceButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "enhance_sheets"});
      });
    });
  });
  