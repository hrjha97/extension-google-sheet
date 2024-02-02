chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.message === "enhance_sheets") {
        // Implement your enhancements here
        alert("Sheets enhanced!");
      }
    }
  );
  