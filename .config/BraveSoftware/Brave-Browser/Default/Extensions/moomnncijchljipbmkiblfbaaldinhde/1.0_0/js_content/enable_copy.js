console.log('enable copy content js called');

function addUserSelectCSS() {
    var cssSelectTextCSS = document.createElement("style");

    cssSelectTextCSS.type = 'text/css';
    cssSelectTextCSS.innerText = `* {
		-webkit-user-select: text !important;
		-moz-user-select: text !important;
		-ms-user-select: text !important;
		 user-select: text !important;
	}`;
    document.head.appendChild(cssSelectTextCSS);
}

function enableCopy() {
    console.log('enable copy top called');
    addUserSelectCSS();
    var eventNameListArray = [
        'copy',
        'cut',
        'contextmenu',
        'mousedown',
        'mouseup',
        'selectstart',
        'select',
        'paste',
        'keydown',
        'keyup',
        'drag',
        'dragstart',
    ];

    // stop event propagation
    [].forEach.call(eventNameListArray, function (event) {
        document.addEventListener(event, function (e) {
            e.stopPropagation();
        }, true);
    });

    var allElements = document.querySelectorAll("*");
    for (var index = 0; index < allElements.length; index++) {
        if (allElements[index].style.userSelect === 'none') {
            allElements[index].style.userSelect = 'auto';
        }
    }

    var injectScriptDisablePropagateEvent = document.createElement('script');
    injectScriptDisablePropagateEvent.type = 'text/javascript';
    document.body.appendChild(injectScriptDisablePropagateEvent);

    // make dom events null for child content script
    injectScriptDisablePropagateEvent.innerHTML = `
		document.oncontextmenu = null;
		document.body.onpaste = null;
		document.body.onselectstart = null;
		document.onselectstart = null;
		document.ondragstart = null;
		document.body.oncut = null;
		document.onmousedown = null;
		document.body.oncontextmenu = null;
		document.body.oncopy = null;
		document.body.ondragstart = null;
		document.body.onmousedown = null;
	`;

    // make body events null
    document.body.oncontextmenu = null;
    document.body.onmousedown = null;
    document.body.oncut = null;
    document.body.oncopy = null;
    document.body.onselectstart = null;
    document.body.ondragstart = null;
    document.body.onpaste = null;

    // make doc events null
    document.oncontextmenu = null;
    document.onmousedown = null;
    document.ondragstart = null;
    document.onselectstart = null;


    setTimeout(function () {
        document.oncontextmenu = null;
    }, 2000);

    var newEventNameList = [
        'select',
        'selectstart',
        'copy',
        'paste',
        'cut'
    ];

    [].forEach.call(newEventNameList, function (event) {
        document.addEventListener(event, function (e) {
            e.stopPropagation();
        }, true);
    });

    window.addEventListener('contextmenu', function handleEvent(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var h = new CustomEventHandler(event);
        window.removeEventListener(event.type, handleEvent, true);
        var newECallBack = new NewEventCaller(function () {
        });
        h.fire();
        window.addEventListener(event.type, handleEvent, true);
        if ((newECallBack.isCalled) && h.isCanceled) {
            event.preventDefault();
        }
    }, true);

    function NewEventCaller(cb) {
        var eventNameListArray = [
            'DOMAttrModified',
            'DOMNodeInserted',
            'DOMNodeRemoved',
            'DOMCharacterDataModified',
            'DOMSubtreeModified'
        ];
        this.events = eventNameListArray;
        this.bind();
    }

    NewEventCaller.prototype.bind = function () {
        this.events.forEach(function (event) {
            document.addEventListener(event, this, true);
        }.bind(this));
    };

    NewEventCaller.prototype.handleEvent = function () {
        this.isCalled = true;
    };

    NewEventCaller.prototype.unbind = function () {
        this.events.forEach(function (event) {
        }.bind(this));
    };

    function CustomEventHandler(e) {
        this.event = e;
        this.contextmenuEvent = this.createEvent(this.event.type);
    }

    CustomEventHandler.prototype.fire = function () {
        var et = this.event.target;
        var h = function (event) {
            event.preventDefault();
        }.bind(this);
        et.dispatchEvent(this.contextmenuEvent);
        this.isCanceled = this.contextmenuEvent.defaultPrevented;
    };

    CustomEventHandler.prototype.createEvent = function (type) {
        var et = this.event.target;
        var cevent = et.ownerDocument.createEvent('MouseEvents');
        cevent.initMouseEvent(
            type, this.event.bubbles, this.event.cancelable,
            et.ownerDocument.defaultView, this.event.detail,
            this.event.screenX, this.event.screenY, this.event.clientX, this.event.clientY,
            this.event.ctrlKey, this.event.altKey, this.event.shiftKey, this.event.metaKey,
            this.event.button, this.event.relatedTarget
        );
        return cevent;
    };

    console.log('enable copy executed');
}

chrome.storage.local.get('is_enabled_storage', function (item) {
    console.log(item);
    if (item) {
        if (item['is_enabled_storage']) {
            var isEnabledStorage = item['is_enabled_storage'];
            if (isEnabledStorage === 'enabled') {
                // get whether copy paste enable setting is checked or not
                enableCopy();
            }
        } else {
            // not enabled
            return;
        }
    } else {
        // not enabled
        return;
    }
});
