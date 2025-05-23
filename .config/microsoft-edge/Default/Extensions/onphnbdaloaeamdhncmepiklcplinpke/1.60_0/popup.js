document.addEventListener("DOMContentLoaded", function() {
  initializePopup();
  setupHoverListeners();
});

function initializePopup() {
  setInitialSpeed();
  setupButtonListeners();
}

function setInitialSpeed() {
  chrome.storage.local.get("speed", (data) => {
    const currentSpeed = data.speed || 1.0;
    TABS_applySpeedToActiveTab(currentSpeed);
  });
}

function setupButtonListeners() {
  document.getElementById("increase").addEventListener("click", () => adjustSpeed(0.25));
  document.getElementById("decrease").addEventListener("click", () => adjustSpeed(-0.25));
}

function setupHoverListeners() {
  ['increase', 'decrease'].forEach(id => {
    const button = document.getElementById(id);
    button.addEventListener('mouseover', handleHover);
    button.addEventListener('mouseout', stopHover);
  });
}

function handleHover(e) {
  const targetId = e.target.id;
  const scrollHandlerWithId = event => scrollHandler(event, targetId);
  window.addEventListener('wheel', scrollHandlerWithId);
  e.target.scrollHandler = scrollHandlerWithId;
}

function stopHover(e) {
  window.removeEventListener('wheel', e.target.scrollHandler);
}

function scrollHandler(event, targetId) {
  let delta = (event.deltaY < 0) ? 0.25 : -0.25; // Scrolling up increases, down decreases
  adjustSpeed(delta);
}

function adjustSpeed(delta) {
  chrome.storage.local.get("speed", (data) => {
    const currentSpeed = data.speed || 1.0;
    const newSpeed = Math.max(currentSpeed + delta, 0.25);
    RUNTIME_updateSpeed(newSpeed);
  });
}

function RUNTIME_updateSpeed(newSpeed) {
  chrome.storage.local.set({ speed: newSpeed }, () => {
    chrome.runtime.sendMessage({ action: "updateSpeed", speed: newSpeed });
  });
}

function TABS_applySpeedToActiveTab(speed) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "changePlaybackRate", newSpeed: speed });
    }
  });
}