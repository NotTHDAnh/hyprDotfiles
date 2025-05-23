console.log("Content script loaded and running");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received in content script", request);
    if (request.action === "changePlaybackRate" && request.newSpeed !== undefined) {
        const videos = document.querySelectorAll('video');
        let adjusted = false;
        videos.forEach(video => {
            video.playbackRate = request.newSpeed;
            adjusted = true;
        });

        if (adjusted) {
            console.log("Playback rate changed to " + request.newSpeed);
            sendResponse({ status: "success", message: "Playback rate changed to " + request.newSpeed });
        } else {
            console.log("No video elements found to change playback rate.");
            sendResponse({ status: "error", message: "No video elements found." });
        }
    }
});


