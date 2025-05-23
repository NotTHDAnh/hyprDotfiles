function setInstallTime() {
    chrome.storage.local.set({
        "install_time": Date().toString(),
    }, function () {
        console.log('Value is set ');
    });
}

function getInstallTime(fn) {
    chrome.storage.local.get(['install_time'], function (result) {
        console.log('Value currently is ' + result.install_time);
        if (fn) {
            fn(result.install_time);
        }
    });
}

setInstallTime();
getInstallTime(null);