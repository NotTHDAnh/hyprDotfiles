// Set default speed value upon installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ speed: 1.0 });
});

// Function to update the badge text
function ACTION_updateBadge(speed) {
  chrome.action.setBadgeText({ text: speed.toFixed(2).toString() });
}

// Function to apply speed to the current tab
function TABS_applySpeedToTab(tabId, speed) {
  chrome.tabs.sendMessage(tabId, {
    action: "changePlaybackRate",
    newSpeed: speed,
  });
  ACTION_updateBadge(speed);
}

chrome.action.onClicked.addListener((tab) => {
    // Retrieve the saved speed
    chrome.storage.local.get("speed", (data) => {
      let speedToApply = data.speed || 1.0; // Use stored speed or default to 1.0
  
      // Apply the speed to the current tab and update the badge
      TABS_applySpeedToTab(tab.id, speedToApply);
    });
  });
  

// Listen for messages (e.g., from popup script)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateSpeed" && request.speed !== undefined) {
    chrome.storage.local.set({ speed: request.speed }, () => {
      if (!chrome.runtime.lastError) {
        // Apply the new speed to the current tab and update the badge
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs.length > 0) {
            TABS_applySpeedToTab(tabs[0].id, request.speed);
          }
        });
        sendResponse({ status: true, speed: request.speed });
      } else {
        sendResponse({ status: false, error: chrome.runtime.lastError });
      }
    });
    return true; // Indicates that the response is sent asynchronously
  }
});
