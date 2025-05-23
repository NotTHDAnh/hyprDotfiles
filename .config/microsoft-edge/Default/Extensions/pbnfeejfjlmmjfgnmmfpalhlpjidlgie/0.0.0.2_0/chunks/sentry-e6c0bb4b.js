import { S as StorageKeys } from './storage-keys-0974cdc0.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var react_production_min = createCommonjsModule(function (module, exports) {
var n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;objectAssign(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:objectAssign};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=objectAssign({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return {current:null}};exports.forwardRef=function(a){return {$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";
});

var react = createCommonjsModule(function (module) {

{
  module.exports = react_production_min;
}
});

/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var scheduler_production_min = createCommonjsModule(function (module, exports) {
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
});

var scheduler = createCommonjsModule(function (module) {

{
  module.exports = scheduler_production_min;
}
});

/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function y$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!react)throw Error(y$1(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b);}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a]);}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return !0;if(ia.call(ja,a))return !1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return !1}function ma(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1);});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1);});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1);});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0);});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
var ra=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden");}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return "function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||"";}return "\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return "";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return ""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return "Fragment";case ta:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ba:return "Suspense";case Ca:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1);}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function db(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function eb(a,b){a=objectAssign({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y$1(91));return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y$1(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else {nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a];});});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var ub=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y$1(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y$1(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y$1(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y$1(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb();}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb();}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y$1(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0;}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb);}catch(a){Pb=!1;}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(n){this.onError(n);}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a;}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments);}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null;}else throw Error(y$1(198));Ub||(Ub=!0,Vb=l);}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y$1(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling;}throw Error(y$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(y$1(189));}}if(c.alternate!==d)throw Error(y$1(190));}if(3!==c.tag)throw Error(y$1(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b.return;}return !1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return {blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId);}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return !1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){scheduler.unstable_runWithPriority(a.priority,function(){gc(c);});});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift();}return !0}function zc(a,b,c){xc(a)&&c.delete(b);}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift();}null===a.blockedOn&&jc.shift();}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc);}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority,Ac)));}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift();}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d]);}}var Qc=scheduler.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y$1(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F));}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y$1(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c;}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=scheduler.unstable_UserBlockingPriority,ed=scheduler.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d);}finally{(Kb=f)||Mb();}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d));}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else {var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else {if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d);}jd(a,b,d,null,c);}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else {var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null;}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null;}else f!==e&&(e=null);}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}objectAssign(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=objectAssign({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=objectAssign({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=objectAssign({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=objectAssign({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=objectAssign({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=objectAssign({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=objectAssign({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=objectAssign({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=objectAssign({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=objectAssign({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=objectAssign({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=objectAssign({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else {Kb=!0;try{Gb(a,b);}finally{Kb=!1,Mb();}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return !1;return !0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Ke(c);}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null;}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d));}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null);}));}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d;}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h));}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd;}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return;}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null;}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u);}w=null;}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else {J=De;var K=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value);}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0;}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q);}se(g,b);});}function ef(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return;}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
function nf(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""));}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var tf=0;function uf(a){return {$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[wf]||a[ff];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y$1(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return {current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--);}function I(a,b){Af++;zf[Af]=a.current;a.current=b;}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M);}function Hf(a,b,c){if(M.current!==Cf)throw Error(y$1(168));I(M,b);I(N,c);}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y$1(108,Ra(b)||"Unknown",e));return objectAssign({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return !0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y$1(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c);}
var Lf=null,Mf=null,Nf=scheduler.unstable_runWithPriority,Of=scheduler.unstable_scheduleCallback,Pf=scheduler.unstable_cancelCallback,Qf=scheduler.unstable_shouldYield,Rf=scheduler.unstable_requestPaint,Sf=scheduler.unstable_now,Tf=scheduler.unstable_getCurrentPriorityLevel,Uf=scheduler.unstable_ImmediatePriority,Vf=scheduler.unstable_UserBlockingPriority,Wf=scheduler.unstable_NormalPriority,Xf=scheduler.unstable_LowPriority,Yf=scheduler.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y$1(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y$1(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a);}jg();}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null;}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1;}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null;}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b;}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return;}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null);}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y$1(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null};}else og=og.next=b;}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function zg(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k);}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=objectAssign({},A,h);break a;case 2:wg=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A;}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y$1(191,e));e.call(d);}}}var Fg=(new react.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var Kg={isMounted:function(a){return (a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c);}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null);}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y$1(309));var d=c.stateNode;}if(!d)throw Error(y$1(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y$1(284));if(!c._owner)throw Error(y$1(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y$1(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c);}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d);}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q;}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y$1(150));h=l.call(h);if(null==
h)throw Error(y$1(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q;}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h);}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=
Wg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y$1(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y$1(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a);}H(ah);I(ah,b);}function fh(){H(ah);H(bh);H(ch);}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c));}function hh(a){bh.current===a&&(H(ah),H(bh));}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c);}jh=a;kh=rf(b.firstChild);}else a.flags=a.flags&-1025|2,lh=!1,jh=a;}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a;}
function rh(a){if(a!==jh)return !1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}kh=null;}}else kh=jh?rf(a.stateNode.nextSibling):null;return !0}
function sh(){kh=jh=null;lh=!1;}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0;}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y$1(321));}function Bh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y$1(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e);}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y$1(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null;}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else {if(null===a)throw Error(y$1(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a;}return T}function Jh(a,b){return "function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y$1(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y$1(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y$1(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes;}catch(q){c(function(){throw q;});}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return [b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d);}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d);}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0);});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b();}finally{wh.transition=c;}});}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d);}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return [d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return [a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y$1(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36));},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return [Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return [Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d);}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b);}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo);}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b);}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y$1(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=objectAssign({},e,{value:void 0});d=objectAssign({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf);}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4);};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===
b.stateNode)throw Error(y$1(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d);}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf);}d=a;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=objectAssign({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d;}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g));}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf);}mf(c,d)&&(b.flags|=4);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(y$1(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d);}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else {if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W);}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else {if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling;}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432);}else {if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g);}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y$1(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y$1(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b);};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Wi(a,c);}else b.current=null;}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y$1(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d;}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Eg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y$1(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else {d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else {d=b;try{e();}catch(f){Wi(d,f);}}c=c.next;}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){Wi(b,
f);}break;case 5:Vi(b);break;case 4:cj(a,b);}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null;}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return;}throw Error(y$1(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y$1(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b);}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling;}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling;}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y$1(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return;}d=!0;}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else {if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return;}k.sibling.return=k.return;k=k.sibling;}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode);}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1);}c.sibling.return=c.return;c=c.sibling;}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b);}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(y$1(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y$1(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500;}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y$1(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a;}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c);}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y$1(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h);}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y$1(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y$1(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d;}}
function Lj(a){if(0!==(X&48))throw Error(y$1(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b));}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O());});}ig();}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function ni(a,b){I(rj,qj);qj|=b;tj|=b;}function Ki(){qj=rj.current;H(rj);}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki();}c=c.return;}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0;}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}yh=!1;}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null);}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else {var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0;}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u;}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var t=zg(-1,1);t.tag=2;Ag(h,t);}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v);}p.flags|=4096;p.lanes=b;break a}p=p.return;}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return;}while(null!==p)}Zj(c);}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e);}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y$1(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y);}function Rj(){for(;null!==Y&&!Qf();)bk(Y);}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null;}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===V&&(V=5);}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y$1(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y$1(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType;}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u;}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode;}w=u;}h=-1===A||-1===p?null:{start:A,end:p};}else h=null;h=h||{start:0,end:0};}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek();}catch(va){if(null===
Z)throw Error(y$1(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J);}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y$1(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L;}"function"===typeof Q?Q(q):Q.current=q;}}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y$1(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Z=null;$f();X=e;}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64));}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect;}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return !1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}
function fk(){if(null===yj)return !1;var a=yj;yj=null;if(0!==(X&48))throw Error(y$1(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(y$1(330));Wi(f,k);}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(y$1(330));Wi(f,k);}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return !0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b));}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break}}c=c.return;}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b);}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c));}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else {ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c);}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y$1(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y$1(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else {e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling;}else fi(a,b,d,c),sh();b=b.child;}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}fi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y$1(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y$1(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null;}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y$1(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(y$1(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h;}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b);}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e);}this._internalRoot=c;}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null);};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null;});};function rk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a);};}lk(b,g,a,e);}else {f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a);};}Xj(function(){lk(b,g,a,e);});}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4);}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864);}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c);}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y$1(90));Wa(d);ab(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig());}};Ib=function(){0===(X&49)&&(Vj(),Oj());};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y$1(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk;}catch(a){}}var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;var createPortal=uk;
var findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y$1(188));throw Error(y$1(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};var flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig();}};var hydrate=function(a,b,c){if(!rk(b))throw Error(y$1(200));return tk(null,a,b,!0,c)};
var render=function(a,b,c){if(!rk(b))throw Error(y$1(200));return tk(null,a,b,!1,c)};var unmountComponentAtNode=function(a){if(!rk(a))throw Error(y$1(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null;});}),!0):!1};var unstable_batchedUpdates=Wj;var unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
var unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y$1(200));if(null==a||void 0===a._reactInternals)throw Error(y$1(38));return tk(a,b,c,!1,d)};var version="17.0.2";

var reactDom_production_min = {
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	createPortal: createPortal,
	findDOMNode: findDOMNode,
	flushSync: flushSync,
	hydrate: hydrate,
	render: render,
	unmountComponentAtNode: unmountComponentAtNode,
	unstable_batchedUpdates: unstable_batchedUpdates,
	unstable_createPortal: unstable_createPortal,
	unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
	version: version
};

var reactDom = createCommonjsModule(function (module) {

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

{
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = reactDom_production_min;
}
});

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3)
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} value
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

var line = 1;
var column = 1;
var length = 0;
var position$1 = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string} type
 * @param {string[]} props
 * @param {object[]} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {string} value
 * @param {object} root
 * @param {string} type
 */
function copy (value, root, type) {
	return node(value, root.root, root.parent, type, root.props, root.children, 0)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position$1 > 0 ? charat(characters, --position$1) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position$1 < length ? charat(characters, position$1++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position$1)
}

/**
 * @return {number}
 */
function caret () {
	return position$1
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position$1 = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position$1 - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position$1
			// " '
			case 34: case 39:
				return delimiter(type === 34 || type === 39 ? type : character)
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position$1
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position$1 - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position$1)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// " ' [ (
			case 34: case 39: case 91: case 40:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset:
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, length, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}

/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */
function prefix (value, length) {
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return WEBKIT + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return WEBKIT + value + MOZ + value + MS + value + value
		// flex, flex-direction
		case 6828: case 4268:
			return WEBKIT + value + MS + value + value
		// order
		case 6165:
			return WEBKIT + value + MS + 'flex-' + value + value
		// align-items
		case 5187:
			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value
		// align-content
		case 4675:
			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value
		// flex-shrink
		case 5548:
			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
		// cursor
		case 6187:
			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if (strlen(value) - 1 - length > 6)
				switch (charat(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if (charat(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value
				}
			break
		// position: sticky
		case 4949:
			// (s)ticky?
			if (charat(value, length + 1) !== 115)
				break
		// display: (flex|inline-flex)
		case 6444:
			switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
				// stic(k)y
				case 107:
					return replace(value, ':', ':' + WEBKIT) + value
				// (inline-)?fl(e)x
				case 101:
					return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
			}
			break
		// writing-mode
		case 5936:
			switch (charat(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
			}

			return WEBKIT + value + MS + value + value
	}

	return value
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (!element.return)
		switch (element.type) {
			case DECLARATION: element.return = prefix(element.value, element.length);
				break
			case KEYFRAMES:
				return serialize([copy(replace(element.value, '@', '@' + WEBKIT), element, '')], callback)
			case RULESET:
				if (element.length)
					return combine(element.props, function (value) {
						switch (match(value, /(::plac\w+|:read-\w+)/)) {
							// :read-(only|write)
							case ':read-only': case ':read-write':
								return serialize([copy(replace(value, /:(read-\w+)/, ':' + MOZ + '$1'), element, '')], callback)
							// :placeholder
							case '::placeholder':
								return serialize([
									copy(replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1'), element, ''),
									copy(replace(value, /:(plac\w+)/, ':' + MOZ + '$1'), element, ''),
									copy(replace(value, /:(plac\w+)/, MS + 'input-$1'), element, '')
								], callback)
						}

						return ''
					})
		}
}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

function memoize$1(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifier(position$1 - 1);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

var isBrowser$4 = typeof document !== 'undefined';
var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
  return memoize$1(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (isBrowser$4 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  if (isBrowser$4) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (isBrowser$4) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];

    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

function _extends$r() {
  _extends$r = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$r.apply(this, arguments);
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t$1=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t$1:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t$1;var Memo$1=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement$2=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t$1};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo$1,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement$2,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser$3 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$3 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$3 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser$2 = typeof document !== 'undefined';

var EmotionCacheContext = /* #__PURE__ */react.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/react.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$2) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = react.useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/react.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */react.createContext({});

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    return mergedTheme;
  }

  return _extends$r({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider$1 = function ThemeProvider(props) {
  var theme = react.useContext(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/react.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};

// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, react.useContext(ThemeContext));

  if (!isBrowser$2) {
    var _ref;

    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }

    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);

    if (shouldCache) {
      return null;
    }

    return /*#__PURE__*/react.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = react.useRef();
  react.useLayoutEffect(function () {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  react.useLayoutEffect(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

function css$1() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var keyframes = function keyframes() {
  var insertable = css$1.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var CSSReset = () => /*#__PURE__*/react.createElement(Global, {
  styles: "\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;      \n        -moz-osx-font-smoothing: grayscale; \n        touch-action: manipulation; \n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: 'kern';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type=\"button\"]::-moz-focus-inner,\n      [type=\"reset\"]::-moz-focus-inner,\n      [type=\"submit\"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type=\"checkbox\"],\n      [type=\"radio\"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type=\"number\"]::-webkit-inner-spin-button,\n      [type=\"number\"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type=\"number\"] {\n        -moz-appearance: textfield;\n      }\n\n      [type=\"search\"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type=\"search\"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role=\"button\"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n        vertical-align: middle;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n    "
});
var CSSReset$1 = CSSReset;

function getLastItem(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

// Number assertions
function isNumber(value) {
  return typeof value === "number";
}

function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === "function";
} // Generic assertions

function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}

function isString$1(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
} // Empty assertions
var __DEV__ = "production" !== "production";

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

var lodash_mergewith = createCommonjsModule(function (module, exports) {
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = mergeWith;
});

var mergeWith = lodash_mergewith;

function omit(object, keys) {
  var result = {};
  Object.keys(object).forEach(key => {
    if (keys.includes(key)) return;
    result[key] = object[key];
  });
  return result;
}
function pick(object, keys) {
  var result = {};
  keys.forEach(key => {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}
/**
 * Get value from a deeply nested object using a string path.
 * Memoizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param def  - the fallback value
 */

function get(obj, path, fallback, index) {
  var key = typeof path === "string" ? path.split(".") : [path];

  for (index = 0; index < key.length; index += 1) {
    if (!obj) break;
    obj = obj[key[index]];
  }

  return obj === undefined ? fallback : obj;
}
var memoize = fn => {
  var cache = new WeakMap();

  var memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }

    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }

    var map = cache.get(obj);

    if (map.has(path)) {
      return map.get(path);
    }

    var value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };

  return memoizedFn;
};
var memoizedGet = memoize(get);

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
function objectFilter(object, fn) {
  var result = {};
  Object.keys(object).forEach(key => {
    var value = object[key];
    var shouldPass = fn(value, key, object);

    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = object => objectFilter(object, val => val !== null && val !== undefined);
var objectKeys = obj => Object.keys(obj);
/**
 * Object.entries polyfill for Nodev10 compatibility
 */

var fromEntries = entries => entries.reduce((carry, _ref) => {
  var [key, value] = _ref;
  carry[key] = value;
  return carry;
}, {});

function analyzeCSSValue$1(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
}

function px(value) {
  if (value == null) return value;
  var {
    unitless
  } = analyzeCSSValue$1(value);
  return unitless || isNumber(value) ? value + "px" : value;
}

var sortByBreakpointValue = (a, b) => parseInt(a[1], 10) > parseInt(b[1], 10) ? 1 : -1;

var sortBps = breakpoints => fromEntries(Object.entries(breakpoints).sort(sortByBreakpointValue));

function normalize$1(breakpoints) {
  var sorted = sortBps(breakpoints);
  return Object.assign(Object.values(sorted), sorted);
}

function keys(breakpoints) {
  var value = Object.keys(sortBps(breakpoints));
  return new Set(value);
}

function subtract(value) {
  var _px;

  if (!value) return value;
  value = (_px = px(value)) != null ? _px : value;
  var factor = value.endsWith("px") ? -1 : // the equivalent of 1px in em using a 16px base
  -0.0635;
  return isNumber(value) ? "" + (value + factor) : value.replace(/([0-9]+\.?[0-9]*)/, m => "" + (parseFloat(m) + factor));
}

function queryString(min, max) {
  var query = [];
  if (min) query.push("@media screen and (min-width: " + px(min) + ")");
  if (query.length > 0 && max) query.push("and");
  if (max) query.push("@media screen and (max-width: " + px(max) + ")");
  return query.join(" ");
}

function analyzeBreakpoints(breakpoints) {
  var _breakpoints$base;

  if (!breakpoints) return null;
  breakpoints.base = (_breakpoints$base = breakpoints.base) != null ? _breakpoints$base : "0px";
  var normalized = normalize$1(breakpoints);
  var queries = Object.entries(breakpoints).sort(sortByBreakpointValue).map((_ref, index, entry) => {
    var _entry;

    var [breakpoint, minW] = _ref;
    var [, maxW] = (_entry = entry[index + 1]) != null ? _entry : [];
    maxW = parseFloat(maxW) > 0 ? subtract(maxW) : undefined;
    return {
      breakpoint,
      minW,
      maxW,
      maxWQuery: queryString(null, maxW),
      minWQuery: queryString(minW),
      minMaxQuery: queryString(minW, maxW)
    };
  });

  var _keys = keys(breakpoints);

  var _keysArr = Array.from(_keys.values());

  return {
    keys: _keys,
    normalized,

    isResponsive(test) {
      var keys = Object.keys(test);
      return keys.length > 0 && keys.every(key => _keys.has(key));
    },

    asObject: sortBps(breakpoints),
    asArray: normalize$1(breakpoints),
    details: queries,
    media: [null, ...normalized.map(minW => queryString(minW)).slice(1)],

    toArrayValue(test) {
      if (!isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }

      var result = _keysArr.map(bp => {
        var _test$bp;

        return (_test$bp = test[bp]) != null ? _test$bp : null;
      });

      while (getLastItem(result) === null) {
        result.pop();
      }

      return result;
    },

    toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }

      return test.reduce((acc, value, index) => {
        var key = _keysArr[index];
        if (key != null && value != null) acc[key] = value;
        return acc;
      }, {});
    }

  };
}

function isElement$1(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isHTMLElement(el) {
  var _el$ownerDocument$def;

  if (!isElement$1(el)) {
    return false;
  }

  var win = (_el$ownerDocument$def = el.ownerDocument.defaultView) != null ? _el$ownerDocument$def : window;
  return el instanceof win.HTMLElement;
}
function getOwnerDocument(node) {
  var _node$ownerDocument;

  return isElement$1(node) ? (_node$ownerDocument = node.ownerDocument) != null ? _node$ownerDocument : document : document;
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser$1 = canUseDOM();
var dataAttr = condition => condition ? "" : undefined;
var cx = function cx() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return classNames.filter(Boolean).join(" ");
};

/* eslint-disable no-nested-ternary */
function runIfFn(valueOrFn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
function callAllHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function func(event) {
    fns.some(fn => {
      fn == null ? void 0 : fn(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}
function once(fn) {
  var result;
  return function func() {
    if (fn) {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      result = fn.apply(this, args);
      fn = null;
    }

    return result;
  };
}
var noop$1 = () => {};
var warn = once(options => () => {
  var {
    condition,
    message
  } = options;

  if (condition && __DEV__) {
    console.warn(message);
  }
});
var pipe = function pipe() {
  for (var _len6 = arguments.length, fns = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    fns[_key6] = arguments[_key6];
  }

  return v => fns.reduce((a, b) => b(a), v);
};

Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function mapResponsive(prop, mapper) {
  if (isArray(prop)) {
    return prop.map(item => {
      if (item === null) {
        return null;
      }

      return mapper(item);
    });
  }

  if (isObject(prop)) {
    return objectKeys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }

  if (prop != null) {
    return mapper(prop);
  }

  return null;
}

function walkObject(target, predicate) {
  function inner(value, path) {
    if (path === void 0) {
      path = [];
    }

    if (isArray(value)) {
      return value.map((item, index) => inner(item, [...path, String(index)]));
    }

    if (isObject(value)) {
      return Object.fromEntries(Object.entries(value).map((_ref) => {
        var [key, child] = _ref;
        return [key, inner(child, [...path, key])];
      }));
    }

    return predicate(value, path);
  }

  return inner(target);
}

/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
function assignRef(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
    return;
  }

  try {
    // @ts-ignore
    ref.current = value;
  } catch (error) {
    throw new Error("Cannot assign value '" + value + "' to ref '" + ref + "'");
  }
}
/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */

function mergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return node => {
    refs.forEach(ref => assignRef(ref, node));
  };
}

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
function createContext(options) {
  if (options === void 0) {
    options = {};
  }

  var {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  var Context = /*#__PURE__*/react.createContext(undefined);
  Context.displayName = name;

  function useContext() {
    var context = react.useContext(Context);

    if (!context && strict) {
      var error = new Error(errorMessage);
      error.name = "ContextError";
      Error.captureStackTrace == null ? void 0 : Error.captureStackTrace(error, useContext);
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context];
}

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */

function getValidChildren(children) {
  return react.Children.toArray(children).filter(child => /*#__PURE__*/react.isValidElement(child));
}

var [PortalManagerContextProvider, usePortalManager] = createContext({
  strict: false,
  name: "PortalManagerContext"
});
function PortalManager(props) {
  var {
    children,
    zIndex
  } = props;
  return /*#__PURE__*/react.createElement(PortalManagerContextProvider, {
    value: {
      zIndex
    }
  }, children);
}

// This implementation is heavily inspired by react-aria's implementation
var defaultIdContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};
var IdContext = /*#__PURE__*/react.createContext(defaultIdContext);
var IdProvider = /*#__PURE__*/react.memo((_ref) => {
  var {
    children
  } = _ref;
  var currentContext = react.useContext(IdContext);
  var isRoot = currentContext === defaultIdContext;
  var context = react.useMemo(() => ({
    prefix: isRoot ? 0 : ++currentContext.prefix,
    current: 0
  }), [isRoot, currentContext]);
  return /*#__PURE__*/react.createElement(IdContext.Provider, {
    value: context
  }, children);
});
function useId(idProp, prefix) {
  var context = react.useContext(IdContext);
  return react.useMemo(() => idProp || [prefix, context.prefix, ++context.current].filter(Boolean).join("-"), // eslint-disable-next-line react-hooks/exhaustive-deps
  [idProp, prefix]);
}
/**
 * Reack hook to generate ids for use in compound components
 *
 * @param idProp the external id passed from the user
 * @param prefixes array of prefixes to use
 *
 * @example
 *
 * ```js
 * const [buttonId, menuId] = useIds("52", "button", "menu")
 *
 * // buttonId will be `button-52`
 * // menuId will be `menu-52`
 * ```
 */

function useIds(idProp) {
  for (var _len = arguments.length, prefixes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    prefixes[_key - 1] = arguments[_key];
  }

  var id = useId(idProp);
  return react.useMemo(() => {
    return prefixes.map(prefix => prefix + "-" + id);
  }, [id, prefixes]);
}

var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};

/**
 * SSR: Graceful fallback for the `body` element
 */
var mockBody = {
  classList: {
    add: noop$1,
    remove: noop$1
  }
};

var getBody = () => isBrowser$1 ? document.body : mockBody;
/**
 * Function to add/remove class from `body` based on color mode
 */


function syncBodyClassName(isDark) {
  var body = getBody();
  body.classList.add(isDark ? classNames.dark : classNames.light);
  body.classList.remove(isDark ? classNames.light : classNames.dark);
}
/**
 * Check if JS media query matches the query string passed
 */

function getMediaQuery(query) {
  var mediaQueryList = window.matchMedia == null ? void 0 : window.matchMedia(query);

  if (!mediaQueryList) {
    return undefined;
  }

  return !!mediaQueryList.media === mediaQueryList.matches;
}

var queries = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
};
function getColorScheme(fallback) {
  var _getMediaQuery;

  var isDark = (_getMediaQuery = getMediaQuery(queries.dark)) != null ? _getMediaQuery : fallback === "dark";
  return isDark ? "dark" : "light";
}
/**
 * Adds system os color mode listener, and run the callback
 * once preference changes
 */

function addListener(fn) {
  if (!("matchMedia" in window)) {
    return noop$1;
  }

  var mediaQueryList = window.matchMedia(queries.dark);

  var listener = () => {
    fn(mediaQueryList.matches ? "dark" : "light");
  };

  listener();
  mediaQueryList.addListener(listener);
  return () => {
    mediaQueryList.removeListener(listener);
  };
}
var root = {
  get: () => document.documentElement.style.getPropertyValue("--chakra-ui-color-mode"),
  set: mode => {
    if (isBrowser$1) {
      document.documentElement.style.setProperty("--chakra-ui-color-mode", mode);
    }
  }
};

var hasSupport = () => typeof Storage !== "undefined";

var storageKey = "chakra-ui-color-mode";

/**
 * Simple object to handle read-write to localStorage
 */
var localStorageManager = {
  get(init) {
    if (!hasSupport()) return init;

    try {
      var _value = localStorage.getItem(storageKey);

      return _value != null ? _value : init;
    } catch (error) {

      return init;
    }
  },

  set(value) {
    if (!hasSupport()) return;

    try {
      localStorage.setItem(storageKey, value);
    } catch (error) {
    }
  },

  type: "localStorage"
};

var ColorModeContext = /*#__PURE__*/react.createContext({});
/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */


var useColorMode = () => {
  var context = react.useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
};

/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
function ColorModeProvider(props) {
  var {
    value,
    children,
    options: {
      useSystemColorMode,
      initialColorMode
    },
    colorModeManager = localStorageManager
  } = props;
  /**
   * Only attempt to retrieve if we're on the server. Else this will result
   * in a hydration mismatch warning and partially invalid visuals.
   *
   * Else fallback safely to `theme.config.initialColormode` (default light)
   */

  var [colorMode, rawSetColorMode] = react.useState(colorModeManager.type === "cookie" ? colorModeManager.get(initialColorMode) : initialColorMode);
  react.useEffect(() => {
    /**
     * Since we cannot initially retrieve localStorage to due above mentioned
     * reasons, do so after hydration.
     *
     * Priority:
     * - system color mode
     * - defined value on <ColorModeScript />, if present
     * - previously stored value
     */
    if (isBrowser$1 && colorModeManager.type === "localStorage") {
      var mode = useSystemColorMode ? getColorScheme(initialColorMode) : root.get() || colorModeManager.get();

      if (mode) {
        rawSetColorMode(mode);
      }
    }
  }, [colorModeManager, useSystemColorMode, initialColorMode]);
  react.useEffect(() => {
    var isDark = colorMode === "dark";
    syncBodyClassName(isDark);
    root.set(isDark ? "dark" : "light");
  }, [colorMode]);
  var setColorMode = react.useCallback(value => {
    colorModeManager.set(value);
    rawSetColorMode(value);
  }, [colorModeManager]);
  var toggleColorMode = react.useCallback(() => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }, [colorMode, setColorMode]);
  react.useEffect(() => {
    var removeListener;

    if (useSystemColorMode) {
      removeListener = addListener(setColorMode);
    }

    return () => {
      if (removeListener && useSystemColorMode) {
        removeListener();
      }
    };
  }, [setColorMode, useSystemColorMode]); // presence of `value` indicates a controlled context

  var context = react.useMemo(() => ({
    colorMode: value != null ? value : colorMode,
    toggleColorMode: value ? noop$1 : toggleColorMode,
    setColorMode: value ? noop$1 : setColorMode
  }), [colorMode, setColorMode, toggleColorMode, value]);
  return /*#__PURE__*/react.createElement(ColorModeContext.Provider, {
    value: context
  }, children);
}
/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */


function useColorModeValue(light, dark) {
  var {
    colorMode
  } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

var tokenToCSSVar = (scale, value) => theme => {
  var valueStr = String(value);
  var key = scale ? scale + "." + valueStr : valueStr;
  return isObject(theme.__cssMap) && key in theme.__cssMap ? theme.__cssMap[key].varRef : value;
};
function createTransform(options) {
  var {
    scale,
    transform,
    compose
  } = options;

  var fn = (value, theme) => {
    var _transform;

    var _value = tokenToCSSVar(scale, value)(theme);

    var result = (_transform = transform == null ? void 0 : transform(_value, theme)) != null ? _transform : _value;

    if (compose) {
      result = compose(result, theme);
    }

    return result;
  };

  return fn;
}

function toConfig(scale, transform) {
  return property => {
    var result = {
      property,
      scale
    };
    result.transform = createTransform({
      scale,
      transform
    });
    return result;
  };
}

var getRtl = (_ref) => {
  var {
    rtl,
    ltr
  } = _ref;
  return theme => theme.direction === "rtl" ? rtl : ltr;
};

function logical(options) {
  var {
    property,
    scale,
    transform
  } = options;
  return {
    scale,
    property: getRtl(property),
    transform: scale ? createTransform({
      scale,
      compose: transform
    }) : transform
  };
}

/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
var transformTemplate = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
function getTransformTemplate() {
  return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))", ...transformTemplate].join(" ");
}
function getTransformGpuTemplate() {
  return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)", ...transformTemplate].join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": value,
    boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var owlSelector = "& > :not(style) ~ :not(style)";
var spaceXTemplate = {
  [owlSelector]: {
    marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
    marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
  }
};
var spaceYTemplate = {
  [owlSelector]: {
    marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
    marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
  }
};

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]);

var trimSpace = str => str.trim();

function parseGradient(value, theme) {
  var _regex$exec$groups, _regex$exec;

  if (value == null || globalSet.has(value)) return value;

  var regex = /*#__PURE__*/_wrapRegExp(/(^[\x2DA-Za-z]+)\(((.*))\)/g, {
    type: 1,
    values: 2
  });

  var {
    type,
    values
  } = (_regex$exec$groups = (_regex$exec = regex.exec(value)) == null ? void 0 : _regex$exec.groups) != null ? _regex$exec$groups : {};
  if (!type || !values) return value;

  var _type = type.includes("-gradient") ? type : type + "-gradient";

  var [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
  if ((stops == null ? void 0 : stops.length) === 0) return value;
  var direction = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction);

  var _values = stops.map(stop => {
    // if stop is valid shorthand direction, return it
    if (valueSet.has(stop)) return stop;
    var firstStop = stop.indexOf(" "); // color stop could be `red.200 20%` based on css gradient spec

    var [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];

    var _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" "); // else, get and transform the color token or css value


    var key = "colors." + _color;
    var color = key in theme.__cssMap ? theme.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [color, _stopOrFunc].join(" ") : color;
  });

  return _type + "(" + _values.join(", ") + ")";
}
var isCSSFunction = value => {
  return isString$1(value) && value.includes("(") && value.includes(")");
};
var gradientTransform = (value, theme) => parseGradient(value, theme != null ? theme : {});

var analyzeCSSValue = value => {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
};

var wrap$2 = str => value => str + "(" + value + ")";

var transformFunctions = {
  filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },

  backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },

  ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },

  bgClip(value) {
    return value === "text" ? {
      color: "transparent",
      backgroundClip: "text"
    } : {
      backgroundClip: value
    };
  },

  transform(value) {
    if (value === "auto") return getTransformTemplate();
    if (value === "auto-gpu") return getTransformGpuTemplate();
    return value;
  },

  px(value) {
    if (value == null) return value;
    var {
      unitless
    } = analyzeCSSValue(value);
    return unitless || isNumber(value) ? value + "px" : value;
  },

  fraction(value) {
    return !isNumber(value) || value > 1 ? value : value * 100 + "%";
  },

  float(value, theme) {
    var map = {
      left: "right",
      right: "left"
    };
    return theme.direction === "rtl" ? map[value] : value;
  },

  degree(value) {
    if (isCssVar(value) || value == null) return value;
    var unitless = isString$1(value) && !value.endsWith("deg");
    return isNumber(value) || unitless ? value + "deg" : value;
  },

  gradient: gradientTransform,
  blur: wrap$2("blur"),
  opacity: wrap$2("opacity"),
  brightness: wrap$2("brightness"),
  contrast: wrap$2("contrast"),
  dropShadow: wrap$2("drop-shadow"),
  grayscale: wrap$2("grayscale"),
  hueRotate: wrap$2("hue-rotate"),
  invert: wrap$2("invert"),
  saturate: wrap$2("saturate"),
  sepia: wrap$2("sepia"),

  bgImage(value) {
    if (value == null) return value;
    var prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? "url(" + value + ")" : value;
  },

  outline(value) {
    var isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    } : {
      outline: value
    };
  },

  flexDirection(value) {
    var _flexDirectionTemplat;

    var {
      space,
      divide
    } = (_flexDirectionTemplat = flexDirectionTemplate[value]) != null ? _flexDirectionTemplat : {};
    var result = {
      flexDirection: value
    };
    if (space) result[space] = 1;
    if (divide) result[divide] = 1;
    return result;
  }

};

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }
var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", transformFunctions.px),
  spaceT: toConfig("space", transformFunctions.px),

  degreeT(property) {
    return {
      property,
      transform: transformFunctions.degree
    };
  },

  prop(property, scale, transform) {
    return _extends$q({
      property,
      scale
    }, scale && {
      transform: createTransform({
        scale,
        transform
      })
    });
  },

  propT(property, transform) {
    return {
      property,
      transform
    };
  },

  sizes: toConfig("sizes", transformFunctions.px),
  sizesT: toConfig("sizes", transformFunctions.fraction),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};

var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.propT("backgroundImage", transformFunctions.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: {
    transform: transformFunctions.bgClip
  },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.propT("backgroundImage", transformFunctions.gradient),
  bgClip: {
    transform: transformFunctions.bgClip
  }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});

var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
/**
 * The prop types for border properties listed above
 */

var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke")
};

var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});
/**
 * Types for box and text shadow properties
 */

var filter = {
  filter: {
    transform: transformFunctions.filter
  },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.degreeT("--chakra-hue-rotate"),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: {
    transform: transformFunctions.backdropFilter
  },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT("--chakra-backdrop-brightness", transformFunctions.brightness),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: t.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};

var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: {
    transform: transformFunctions.flexDirection
  },
  experimental_spaceX: {
    static: spaceXTemplate,
    transform: createTransform({
      scale: "space",
      transform: value => value !== null ? {
        "--chakra-space-x": value
      } : null
    })
  },
  experimental_spaceY: {
    static: spaceYTemplate,
    transform: createTransform({
      scale: "space",
      transform: value => value != null ? {
        "--chakra-space-y": value
      } : null
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});

var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};

var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: {
    transform: transformFunctions.outline
  },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};

var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  d: t.prop("display"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: t.propT("float", transformFunctions.float),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
/**
 * Types for layout related CSS properties
 */

var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage")
};

var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};

var getWithPriority = (theme, key, styles) => {
  var result = {};
  var obj = memoizedGet(theme, key, {});

  for (var prop in obj) {
    var isInStyles = prop in styles && styles[prop] != null;
    if (!isInStyles) result[prop] = obj[prop];
  }

  return result;
};

var others = {
  srOnly: {
    transform(value) {
      if (value === true) return srOnly;
      if (value === "focusable") return srFocusable;
      return {};
    }

  },
  layerStyle: {
    processResult: true,
    transform: (value, theme, styles) => getWithPriority(theme, "layerStyles." + value, styles)
  },
  textStyle: {
    processResult: true,
    transform: (value, theme, styles) => getWithPriority(theme, "textStyles." + value, styles)
  },
  apply: {
    processResult: true,
    transform: (value, theme, styles) => getWithPriority(theme, value, styles)
  }
};

var position = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT(["top", "right", "bottom", "left"]),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: {
      ltr: "left",
      rtl: "right"
    }
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: {
      ltr: "right",
      rtl: "left"
    }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
/**
 * Types for position CSS properties
 */

/**
 * The parser configuration for common outline properties
 */
var ring = {
  ring: {
    transform: transformFunctions.ring
  },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};

var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
/**
 * Types for space related CSS properties
 */

var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: {
    property: "textDecoration"
  },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow")
};

var transform = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate")
};

var transition$2 = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop("transitionTimingFunction", "transition.easing")
};

var typography$2 = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  },
  isTruncated: {
    transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }

  }
};
/**
 * Types for typography related CSS properties
 */

var group = {
  hover: selector => selector + ":hover &, " + selector + "[data-hover] &",
  focus: selector => selector + ":focus &, " + selector + "[data-focus] &",
  active: selector => selector + ":active &, " + selector + "[data-active] &",
  disabled: selector => selector + ":disabled &, " + selector + "[data-disabled] &",
  invalid: selector => selector + ":invalid &, " + selector + "[data-invalid] &",
  checked: selector => selector + ":checked &, " + selector + "[data-checked] &",
  indeterminate: selector => selector + ":indeterminate &, " + selector + "[aria-checked=mixed] &, " + selector + "[data-indeterminate] &",
  readOnly: selector => selector + ":read-only &, " + selector + "[readonly] &, " + selector + "[data-read-only] &",
  expanded: selector => selector + ":read-only &, " + selector + "[aria-expanded=true] &, " + selector + "[data-expanded] &"
};

var toGroup = fn => merge(fn, "[role=group]", "[data-group]", ".group");

var merge = function merge(fn) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }

  return selectors.map(fn).join(", ");
};

var pseudoSelectors = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",

  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",

  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",

  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",

  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible",

  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   */
  _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",

  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",

  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",

  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  _empty: "&:empty",

  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",

  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",

  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",

  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",

  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",

  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",

  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",

  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",

  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",

  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",

  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",

  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",

  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",

  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",

  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",

  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",

  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",

  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",

  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",

  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",

  /**
   * Styles to apply when parent is hovered
   */
  _groupHover: toGroup(group.hover),

  /**
   * Styles to apply when parent is focused
   */
  _groupFocus: toGroup(group.focus),

  /**
   * Styles to apply when parent is active
   */
  _groupActive: toGroup(group.active),

  /**
   * Styles to apply when parent is disabled
   */
  _groupDisabled: toGroup(group.disabled),

  /**
   * Styles to apply when parent is invalid
   */
  _groupInvalid: toGroup(group.invalid),

  /**
   * Styles to apply when parent is checked
   */
  _groupChecked: toGroup(group.checked),

  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",

  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",

  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",

  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when any parent element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &",

  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * used when the user has requested the system
   * use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",

  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &, [data-theme=dark] &, &[data-theme=dark]",

  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &, [data-theme=light] &, &[data-theme=light]"
};
var pseudoPropNames = objectKeys(pseudoSelectors);

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }
var systemProps = mergeWith({}, background, border, color, flexbox, layout, filter, ring, interactivity, grid, others, position, effect, space, typography$2, textDecoration, transform, list, transition$2);
var layoutSystem = Object.assign({}, space, layout, flexbox, grid, position);
var propNames = [...objectKeys(systemProps), ...pseudoPropNames];

var styleProps = _extends$p({}, systemProps, pseudoSelectors);

var isStyleProp = prop => prop in styleProps;

/**
 * Expands an array or object syntax responsive style.
 *
 * @example
 * expandResponsive({ mx: [1, 2] })
 * // or
 * expandResponsive({ mx: { base: 1, sm: 2 } })
 *
 * // => { mx: 1, "@media(min-width:<sm>)": { mx: 2 } }
 */

var expandResponsive = styles => theme => {
  /**
   * Before any style can be processed, the user needs to call `toCSSVar`
   * which analyzes the theme's breakpoint and appends a `__breakpoints` property
   * to the theme with more details of the breakpoints.
   *
   * To learn more, go here: packages/utils/src/responsive.ts #analyzeBreakpoints
   */
  if (!theme.__breakpoints) return styles;
  var {
    isResponsive,
    toArrayValue,
    media: medias
  } = theme.__breakpoints;
  var computedStyles = {};

  for (var key in styles) {
    var value = runIfFn(styles[key], theme);
    if (value == null) continue; // converts the object responsive syntax to array syntax

    value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;

    if (!Array.isArray(value)) {
      computedStyles[key] = value;
      continue;
    }

    var queries = value.slice(0, medias.length).length;

    for (var index = 0; index < queries; index += 1) {
      var media = medias == null ? void 0 : medias[index];

      if (!media) {
        computedStyles[key] = value[index];
        continue;
      }

      computedStyles[media] = computedStyles[media] || {};

      if (value[index] == null) {
        continue;
      }

      computedStyles[media][key] = value[index];
    }
  }

  return computedStyles;
};

var isCSSVariableTokenValue = (key, value) => key.startsWith("--") && isString$1(value) && !isCssVar(value);

var resolveTokenValue = (theme, value) => {
  var _ref, _getVar2;

  if (value == null) return value;

  var getVar = val => {
    var _theme$__cssMap, _theme$__cssMap$val;

    return (_theme$__cssMap = theme.__cssMap) == null ? void 0 : (_theme$__cssMap$val = _theme$__cssMap[val]) == null ? void 0 : _theme$__cssMap$val.varRef;
  };

  var getValue = val => {
    var _getVar;

    return (_getVar = getVar(val)) != null ? _getVar : val;
  };

  var valueSplit = value.split(",").map(v => v.trim());
  var [tokenValue, fallbackValue] = valueSplit;
  value = (_ref = (_getVar2 = getVar(tokenValue)) != null ? _getVar2 : getValue(fallbackValue)) != null ? _ref : getValue(value);
  return value;
};

function getCss(options) {
  var {
    configs = {},
    pseudos = {},
    theme
  } = options;

  var css = function css(stylesOrFn, nested) {
    if (nested === void 0) {
      nested = false;
    }

    var _styles = runIfFn(stylesOrFn, theme);

    var styles = expandResponsive(_styles)(theme);
    var computedStyles = {};

    for (var key in styles) {
      var _config$transform, _config, _config2, _config3, _config4;

      var valueOrFn = styles[key];
      /**
       * allows the user to pass functional values
       * boxShadow: theme => `0 2px 2px ${theme.colors.red}`
       */

      var value = runIfFn(valueOrFn, theme);
      /**
       * converts pseudo shorthands to valid selector
       * "_hover" => "&:hover"
       */

      if (key in pseudos) {
        key = pseudos[key];
      }
      /**
       * allows the user to use theme tokens in css vars
       * { --banner-height: "sizes.md" } => { --banner-height: "var(--chakra-sizes-md)" }
       *
       * You can also provide fallback values
       * { --banner-height: "sizes.no-exist, 40px" } => { --banner-height: "40px" }
       */


      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme, value);
      }

      var config = configs[key];

      if (config === true) {
        config = {
          property: key
        };
      }

      if (isObject(value)) {
        var _computedStyles$key;

        computedStyles[key] = (_computedStyles$key = computedStyles[key]) != null ? _computedStyles$key : {};
        computedStyles[key] = mergeWith({}, computedStyles[key], css(value, true));
        continue;
      }

      var rawValue = (_config$transform = (_config = config) == null ? void 0 : _config.transform == null ? void 0 : _config.transform(value, theme, _styles)) != null ? _config$transform : value;
      /**
       * Used for `layerStyle`, `textStyle` and `apply`. After getting the
       * styles in the theme, we need to process them since they might
       * contain theme tokens.
       *
       * `processResult` is the config property we pass to `layerStyle`, `textStyle` and `apply`
       */

      rawValue = (_config2 = config) != null && _config2.processResult ? css(rawValue, true) : rawValue;
      /**
       * allows us define css properties for RTL and LTR.
       *
       * const marginStart = {
       *   property: theme => theme.direction === "rtl" ? "marginRight": "marginLeft",
       * }
       */

      var configProperty = runIfFn((_config3 = config) == null ? void 0 : _config3.property, theme);

      if (!nested && (_config4 = config) != null && _config4.static) {
        var staticStyles = runIfFn(config.static, theme);
        computedStyles = mergeWith({}, computedStyles, staticStyles);
      }

      if (configProperty && Array.isArray(configProperty)) {
        for (var property of configProperty) {
          computedStyles[property] = rawValue;
        }

        continue;
      }

      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = mergeWith({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }

        continue;
      }

      if (isObject(rawValue)) {
        computedStyles = mergeWith({}, computedStyles, rawValue);
        continue;
      }

      computedStyles[key] = rawValue;
    }

    return computedStyles;
  };

  return css;
}
var css = styles => theme => {
  var cssFn = getCss({
    theme,
    pseudos: pseudoSelectors,
    configs: systemProps
  });
  return cssFn(styles);
};

/**
 * Thank you @markdalgleish for this piece of art!
 */

function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }

  return String(operand);
}

var toExpression = function toExpression(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }

  return operands.map(resolveReference).join(" " + operator + " ").replace(/calc/g, "");
};

var _add = function add() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }

  return "calc(" + toExpression("+", ...operands) + ")";
};

var _subtract = function subtract() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }

  return "calc(" + toExpression("-", ...operands) + ")";
};

var _multiply = function multiply() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }

  return "calc(" + toExpression("*", ...operands) + ")";
};

var _divide = function divide() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }

  return "calc(" + toExpression("/", ...operands) + ")";
};

var _negate = x => {
  var value = resolveReference(x);

  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }

  return _multiply(value, -1);
};

var calc = Object.assign(x => ({
  add: function add() {
    for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      operands[_key6] = arguments[_key6];
    }

    return calc(_add(x, ...operands));
  },
  subtract: function subtract() {
    for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      operands[_key7] = arguments[_key7];
    }

    return calc(_subtract(x, ...operands));
  },
  multiply: function multiply() {
    for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      operands[_key8] = arguments[_key8];
    }

    return calc(_multiply(x, ...operands));
  },
  divide: function divide() {
    for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      operands[_key9] = arguments[_key9];
    }

    return calc(_divide(x, ...operands));
  },
  negate: () => calc(_negate(x)),
  toString: () => x.toString()
}), {
  add: _add,
  subtract: _subtract,
  multiply: _multiply,
  divide: _divide,
  negate: _negate
});

function replaceWhiteSpace(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }

  return value.replace(/\s+/g, replaceValue);
}

function escape(value) {
  var valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\.")) return value;
  var isDecimal = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal ? valueStr.replace(".", "\\.") : value;
}

function addPrefix(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }

  return [prefix, escape(value)].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return "var(" + escape(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVarDefinition(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }

  return "--" + addPrefix(value, prefix);
}
function cssVar(name, fallback, cssVarPrefix) {
  var cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }
function createThemeVars(target, options) {
  var context = {
    cssMap: {},
    cssVars: {}
  };
  walkObject(target, (value, path) => {
    var _tokenHandlerMap$firs;

    // firstKey will be e.g. "space"
    var [firstKey] = path;
    var handler = (_tokenHandlerMap$firs = tokenHandlerMap[firstKey]) != null ? _tokenHandlerMap$firs : tokenHandlerMap.defaultHandler;
    var {
      cssVars,
      cssMap
    } = handler(path, value, options);
    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });
  return context;
}

/**
 * Define transformation handlers for ThemeScale
 */
var tokenHandlerMap = {
  space: (keys, value, options) => {
    var properties = tokenHandlerMap.defaultHandler(keys, value, options);
    var [firstKey, ...referenceKeys] = keys;
    var negativeLookupKey = firstKey + ".-" + referenceKeys.join(".");
    var negativeVarKey = keys.join("-");
    var {
      variable,
      reference
    } = cssVar(negativeVarKey, undefined, options.cssVarPrefix);
    var negativeValue = calc.negate(value);
    var varRef = calc.negate(reference);
    return {
      cssVars: properties.cssVars,
      cssMap: _extends$o({}, properties.cssMap, {
        [negativeLookupKey]: {
          value: "" + negativeValue,
          var: "" + variable,
          varRef
        }
      })
    };
  },
  defaultHandler: (keys, value, options) => {
    var lookupKey = keys.join(".");
    var varKey = keys.join("-");
    var {
      variable,
      reference
    } = cssVar(varKey, undefined, options.cssVarPrefix);
    return {
      cssVars: {
        [variable]: value
      },
      cssMap: {
        [lookupKey]: {
          value,
          var: variable,
          varRef: reference
        }
      }
    };
  }
};

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var tokens = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"];
function extractTokens(theme) {
  var _tokens = tokens;
  return pick(theme, _tokens);
}
function omitVars(rawTheme) {
  var cleanTheme = _objectWithoutPropertiesLoose$a(rawTheme, ["__cssMap", "__cssVars", "__breakpoints"]);

  return cleanTheme;
}

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }
function toCSSVar(rawTheme) {
  var _theme$config;

  /**
   * In the case the theme has already been converted to css-var (e.g extending the theme),
   * we can omit the computed css vars and recompute it for the extended theme.
   */
  var theme = omitVars(rawTheme); // omit components and breakpoints from css variable map

  var tokens = extractTokens(theme);
  var cssVarPrefix = (_theme$config = theme.config) == null ? void 0 : _theme$config.cssVarPrefix;
  var {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap,

    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars
  } = createThemeVars(tokens, {
    cssVarPrefix
  });
  var defaultCssVars = {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme, {
    __cssVars: _extends$n({}, defaultCssVars, cssVars),
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme.breakpoints)
  });
  return theme;
}

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */
var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

var isEqual = reactFastCompare;

var ThemeProvider = props => {
  var {
    cssVarsRoot = ":host, :root",
    theme,
    children
  } = props;
  var computedTheme = react.useMemo(() => toCSSVar(theme), [theme]);
  return /*#__PURE__*/react.createElement(ThemeProvider$1, {
    theme: computedTheme
  }, /*#__PURE__*/react.createElement(Global, {
    styles: theme => ({
      [cssVarsRoot]: theme.__cssVars
    })
  }), children);
};
function useTheme() {
  var theme = react.useContext(ThemeContext);

  if (!theme) {
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  }

  return theme;
}
var [StylesProvider, useStyles] = createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
/**
 * Applies styles defined in `theme.styles.global` globally
 * using emotion's `Global` component
 */

var GlobalStyle = () => {
  var {
    colorMode
  } = useColorMode();
  return /*#__PURE__*/react.createElement(Global, {
    styles: theme => {
      var styleObjectOrFn = memoizedGet(theme, "styles.global");
      var globalStyles = runIfFn(styleObjectOrFn, {
        theme,
        colorMode
      });
      if (!globalStyles) return undefined;
      var styles = css(globalStyles)(theme);
      return styles;
    }
  });
};

/**
 * Carefully selected html elements for chakra components.
 * This is mostly for `chakra.<element>` syntax.
 */
var domElements = ["a", "b", "article", "aside", "blockquote", "button", "caption", "cite", "circle", "code", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "img", "input", "kbd", "label", "li", "main", "mark", "nav", "ol", "p", "path", "pre", "q", "rect", "s", "svg", "section", "select", "strong", "small", "span", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "tr", "ul"];
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }
function useChakra() {
  var colorModeResult = useColorMode();
  var theme = useTheme();
  return _extends$m({}, colorModeResult, {
    theme
  });
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};
var isBrowser = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = withEmotionCache(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = react.useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/react.createElement(finalTag, newProps);

      if (!isBrowser && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
      }

      return ele;
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends$r({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

/**
 * List of props for emotion to omit from DOM.
 * It mostly consists of Chakra props
 */

var allPropNames = new Set([...propNames, "textStyle", "layerStyle", "apply", "isTruncated", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]);
/**
 * htmlWidth and htmlHeight is used in the <Image />
 * component to support the native `width` and `height` attributes
 *
 * https://github.com/chakra-ui/chakra-ui/issues/149
 */

var validHTMLProps = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
var shouldForwardProp = prop => validHTMLProps.has(prop) || !allPropNames.has(prop);

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Style resolver function that manages how style props are merged
 * in combination with other possible ways of defining styles.
 *
 * For example, take a component defined this way:
 * ```jsx
 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
 * ```
 *
 * We want to manage the priority of the styles properly to prevent unwanted
 * behaviors. Right now, the `sx` prop has the highest priority so the resolved
 * fontSize will be `40px`
 */
var toCSSObject = (_ref) => {
  var {
    baseStyle
  } = _ref;
  return props => {
    var {
      css: cssProp,
      __css,
      sx
    } = props,
        rest = _objectWithoutPropertiesLoose$9(props, ["theme", "css", "__css", "sx"]);

    var styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop));
    var finalBaseStyle = runIfFn(baseStyle, props);
    var finalStyles = Object.assign({}, __css, finalBaseStyle, filterUndefined(styleProps), sx);
    var computedCSS = css(finalStyles)(props.theme);
    return cssProp ? [computedCSS, cssProp] : computedCSS;
  };
};
function styled(component, options) {
  var _ref2 = options != null ? options : {},
      {
    baseStyle
  } = _ref2,
      styledOptions = _objectWithoutPropertiesLoose$9(_ref2, ["baseStyle"]);

  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }

  var styleObject = toCSSObject({
    baseStyle
  });
  return newStyled(component, styledOptions)(styleObject);
}
var chakra = styled;
domElements.forEach(tag => {
  chakra[tag] = chakra(tag);
});

/**
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
 * for creating the base type definitions upon which we improved on
 */
function forwardRef(component) {
  return /*#__PURE__*/react.forwardRef(component);
}

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function useStyleConfig(themeKey, props, opts) {
  var _styleConfig$defaultP, _opts2;

  if (props === void 0) {
    props = {};
  }

  if (opts === void 0) {
    opts = {};
  }

  var {
    styleConfig: styleConfigProp
  } = props,
      rest = _objectWithoutPropertiesLoose$8(props, ["styleConfig"]);

  var {
    theme,
    colorMode
  } = useChakra();
  var themeStyleConfig = memoizedGet(theme, "components." + themeKey);
  var styleConfig = styleConfigProp || themeStyleConfig;
  var mergedProps = mergeWith({
    theme,
    colorMode
  }, (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {}, filterUndefined(omit(rest, ["children"])));
  /**
   * Store the computed styles in a `ref` to avoid unneeded re-computation
   */

  var stylesRef = react.useRef({});
  return react.useMemo(() => {
    if (styleConfig) {
      var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes$me, _styleConfig$sizes, _opts;

      var baseStyles = runIfFn((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
      var variants = runIfFn((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
      var sizes = runIfFn((_styleConfig$sizes$me = (_styleConfig$sizes = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes[mergedProps.size]) != null ? _styleConfig$sizes$me : {}, mergedProps);
      var styles = mergeWith({}, baseStyles, sizes, variants);

      if ((_opts = opts) != null && _opts.isMultiPart && styleConfig.parts) {
        styleConfig.parts.forEach(part => {
          var _styles$part;

          styles[part] = (_styles$part = styles[part]) != null ? _styles$part : {};
        });
      }

      var isStyleEqual = isEqual(stylesRef.current, styles);

      if (!isStyleEqual) {
        stylesRef.current = styles;
      }
    }

    return stylesRef.current;
  }, [styleConfig, mergedProps, (_opts2 = opts) == null ? void 0 : _opts2.isMultiPart]);
}
function useMultiStyleConfig(themeKey, props) {
  return useStyleConfig(themeKey, props, {
    isMultiPart: true
  });
}

var parts$n = ["container", "button", "panel", "icon"];
var baseStyleContainer$5 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
};
var baseStyleButton$1 = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "1rem",
  _focus: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: 4,
  py: 2
};
var baseStylePanel = {
  pt: 2,
  px: 4,
  pb: 5
};
var baseStyleIcon$5 = {
  fontSize: "1.25em"
};
var baseStyle$D = {
  container: baseStyleContainer$5,
  button: baseStyleButton$1,
  panel: baseStylePanel,
  icon: baseStyleIcon$5
};
var Accordion = {
  parts: parts$n,
  baseStyle: baseStyle$D
};

var tinycolor = createCommonjsModule(function (module) {
// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if (module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else {
    window.tinycolor = tinycolor;
}

})(Math);
});

var Color = tinycolor;

/**
 * Get the color raw value from theme
 * @param theme - the theme object
 * @param color - the color path ("green.200")
 * @param fallback - the fallback color
 */

var getColor = (theme, color, fallback) => {
  var hex = memoizedGet(theme, "colors." + color, color);
  var isValid = Color(hex).isValid();
  return isValid ? hex : fallback;
};
/**
 * Determines if the tone of given color is "light" or "dark"
 * @param color - the color in hex, rgb, or hsl
 */

var tone = color => theme => {
  var hex = getColor(theme, color);
  var isDark = Color(hex).isDark();
  return isDark ? "dark" : "light";
};
/**
 * Determines if a color tone is "dark"
 * @param color - the color in hex, rgb, or hsl
 */

var isDark = color => theme => tone(color)(theme) === "dark";
/**
 * Make a color transparent
 * @param color - the color in hex, rgb, or hsl
 * @param opacity - the amount of opacity the color should have (0-1)
 */

var transparentize = (color, opacity) => theme => {
  var raw = getColor(theme, color);
  return Color(raw).setAlpha(opacity).toRgbString();
};
function generateStripe(size, color) {
  if (size === void 0) {
    size = "1rem";
  }

  if (color === void 0) {
    color = "rgba(255, 255, 255, 0.15)";
  }

  return {
    backgroundImage: "linear-gradient(\n    45deg,\n    " + color + " 25%,\n    transparent 25%,\n    transparent 50%,\n    " + color + " 50%,\n    " + color + " 75%,\n    transparent 75%,\n    transparent\n  )",
    backgroundSize: size + " " + size
  };
}
function randomColor(opts) {
  var fallback = Color.random().toHexString();

  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }

  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }

  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }

  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }

  return fallback;
}

function randomColorFromString(str) {
  var hash = 0;
  if (str.length === 0) return hash.toString();

  for (var i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }

  var color = "#";

  for (var j = 0; j < 3; j += 1) {
    var value = hash >> j * 8 & 255;
    color += ("00" + value.toString(16)).substr(-2);
  }

  return color;
}

function randomColorFromList(str, list) {
  var index = 0;
  if (str.length === 0) return list[0];

  for (var i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }

  index = (index % list.length + list.length) % list.length;
  return list[index];
}

function randomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function mode(light, dark) {
  return props => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
  var {
    orientation,
    vertical,
    horizontal
  } = options;
  if (!orientation) return {};
  return orientation === "vertical" ? vertical : horizontal;
}

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }
var createBreakpoints = config => {
  warn({
    condition: true,
    message: ["[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon", "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call"].join("")
  });
  return _extends$l({
    base: "0em"
  }, config);
};

var parts$m = ["container", "title", "description", "icon"];
var baseStyle$C = {
  container: {
    px: 4,
    py: 3
  },
  title: {
    fontWeight: "bold",
    lineHeight: 6,
    marginEnd: 2
  },
  description: {
    lineHeight: 6
  },
  icon: {
    flexShrink: 0,
    marginEnd: 3,
    w: 5,
    h: 6
  }
};

function getBg(props) {
  var {
    theme,
    colorScheme: c
  } = props;
  var lightBg = getColor(theme, c + ".100", c);
  var darkBg = transparentize(c + ".200", 0.16)(theme);
  return mode(lightBg, darkBg)(props);
}

function variantSubtle$1(props) {
  var {
    colorScheme: c
  } = props;
  return {
    container: {
      bg: getBg(props)
    },
    icon: {
      color: mode(c + ".500", c + ".200")(props)
    }
  };
}

function variantLeftAccent(props) {
  var {
    colorScheme: c
  } = props;
  return {
    container: {
      paddingStart: 3,
      borderStartWidth: "4px",
      borderStartColor: mode(c + ".500", c + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c + ".500", c + ".200")(props)
    }
  };
}

function variantTopAccent(props) {
  var {
    colorScheme: c
  } = props;
  return {
    container: {
      pt: 2,
      borderTopWidth: "4px",
      borderTopColor: mode(c + ".500", c + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c + ".500", c + ".200")(props)
    }
  };
}

function variantSolid$3(props) {
  var {
    colorScheme: c
  } = props;
  return {
    container: {
      bg: mode(c + ".500", c + ".200")(props),
      color: mode("white", "gray.900")(props)
    }
  };
}

var variants$b = {
  subtle: variantSubtle$1,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid$3
};
var defaultProps$n = {
  variant: "subtle",
  colorScheme: "blue"
};
var Alert = {
  parts: parts$m,
  baseStyle: baseStyle$C,
  variants: variants$b,
  defaultProps: defaultProps$n
};

var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
/**
 * @deprecated
 * Spacing tokens are a part of DefaultChakraTheme['sizes']
 */

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};

var sizes$l = _extends$k({}, spacing, largeSizes, {
  container
});
/**
 * @deprecated
 * You can derive the Sizes type from the DefaultChakraTheme
 *
 * type Sizes = DefaultChakraTheme['sizes']
 */


var sizes$m = sizes$l;

var parts$l = ["container", "excessLabel", "badge", "label"];

function baseStyleBadge(props) {
  return {
    transform: "translate(25%, 25%)",
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: mode("white", "gray.800")(props)
  };
}

function baseStyleExcessLabel(props) {
  return {
    bg: mode("gray.200", "whiteAlpha.400")(props)
  };
}

function baseStyleContainer$4(props) {
  var {
    name,
    theme
  } = props;
  var bg = name ? randomColor({
    string: name
  }) : "gray.400";
  var isBgDark = isDark(bg)(theme);
  var color = "white";
  if (!isBgDark) color = "gray.800";
  var borderColor = mode("white", "gray.800")(props);
  return {
    bg,
    color,
    borderColor,
    verticalAlign: "top"
  };
}

var baseStyle$B = props => ({
  badge: baseStyleBadge(props),
  excessLabel: baseStyleExcessLabel(props),
  container: baseStyleContainer$4(props)
});

function getSize$3(size) {
  var themeSize = sizes$m[size];
  return {
    container: {
      width: size,
      height: size,
      fontSize: "calc(" + (themeSize != null ? themeSize : size) + " / 2.5)"
    },
    excessLabel: {
      width: size,
      height: size
    },
    label: {
      fontSize: "calc(" + (themeSize != null ? themeSize : size) + " / 2.5)",
      lineHeight: size !== "100%" ? themeSize != null ? themeSize : size : undefined
    }
  };
}

var sizes$k = {
  "2xs": getSize$3("4"),
  xs: getSize$3("6"),
  sm: getSize$3("8"),
  md: getSize$3("12"),
  lg: getSize$3("16"),
  xl: getSize$3("24"),
  "2xl": getSize$3("32"),
  full: getSize$3("100%")
};
var defaultProps$m = {
  size: "md"
};
var Avatar = {
  parts: parts$l,
  baseStyle: baseStyle$B,
  sizes: sizes$k,
  defaultProps: defaultProps$m
};

var baseStyle$A = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
};

function variantSolid$2(props) {
  var {
    colorScheme: c,
    theme
  } = props;
  var dark = transparentize(c + ".500", 0.6)(theme);
  return {
    bg: mode(c + ".500", dark)(props),
    color: mode("white", "whiteAlpha.800")(props)
  };
}

function variantSubtle(props) {
  var {
    colorScheme: c,
    theme
  } = props;
  var darkBg = transparentize(c + ".200", 0.16)(theme);
  return {
    bg: mode(c + ".100", darkBg)(props),
    color: mode(c + ".800", c + ".200")(props)
  };
}

function variantOutline$2(props) {
  var {
    colorScheme: c,
    theme
  } = props;
  var darkColor = transparentize(c + ".200", 0.8)(theme);
  var lightColor = getColor(theme, c + ".500");
  var color = mode(lightColor, darkColor)(props);
  return {
    color,
    boxShadow: "inset 0 0 0px 1px " + color
  };
}

var variants$a = {
  solid: variantSolid$2,
  subtle: variantSubtle,
  outline: variantOutline$2
};
var defaultProps$l = {
  variant: "subtle",
  colorScheme: "gray"
};
var Badge$1 = {
  baseStyle: baseStyle$A,
  variants: variants$a,
  defaultProps: defaultProps$l
};

var parts$k = ["container", "item", "link", "separator"];
var baseStyleLink = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyle$z = {
  link: baseStyleLink
};
var Breadcrumb = {
  parts: parts$k,
  baseStyle: baseStyle$z
};

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }
var baseStyle$y = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focus: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
};

function variantGhost(props) {
  var {
    colorScheme: c,
    theme
  } = props;

  if (c === "gray") {
    return {
      color: mode("inherit", "whiteAlpha.900")(props),
      _hover: {
        bg: mode("gray.100", "whiteAlpha.200")(props)
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props)
      }
    };
  }

  var darkHoverBg = transparentize(c + ".200", 0.12)(theme);
  var darkActiveBg = transparentize(c + ".200", 0.24)(theme);
  return {
    color: mode(c + ".600", c + ".200")(props),
    bg: "transparent",
    _hover: {
      bg: mode(c + ".50", darkHoverBg)(props)
    },
    _active: {
      bg: mode(c + ".100", darkActiveBg)(props)
    }
  };
}

function variantOutline$1(props) {
  var {
    colorScheme: c
  } = props;
  var borderColor = mode("gray.200", "whiteAlpha.300")(props);
  return _extends$j({
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor"
  }, variantGhost(props));
}

/** Accessible color overrides for less accessible colors. */
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};

function variantSolid$1(props) {
  var {
    colorScheme: c
  } = props;

  if (c === "gray") {
    var _bg = mode("gray.100", "whiteAlpha.200")(props);

    return {
      bg: _bg,
      _hover: {
        bg: mode("gray.200", "whiteAlpha.300")(props),
        _disabled: {
          bg: _bg
        }
      },
      _active: {
        bg: mode("gray.300", "whiteAlpha.400")(props)
      }
    };
  }

  var {
    bg = c + ".500",
    color = "white",
    hoverBg = c + ".600",
    activeBg = c + ".700"
  } = accessibleColorMap[c] || {};
  var background = mode(bg, c + ".200")(props);
  return {
    bg: background,
    color: mode(color, "gray.800")(props),
    _hover: {
      bg: mode(hoverBg, c + ".300")(props),
      _disabled: {
        bg: background
      }
    },
    _active: {
      bg: mode(activeBg, c + ".400")(props)
    }
  };
}

function variantLink(props) {
  var {
    colorScheme: c
  } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(c + ".500", c + ".200")(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(c + ".700", c + ".500")(props)
    }
  };
}

var variantUnstyled$2 = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0
};
var variants$9 = {
  ghost: variantGhost,
  outline: variantOutline$1,
  solid: variantSolid$1,
  link: variantLink,
  unstyled: variantUnstyled$2
};
var sizes$j = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2
  }
};
var defaultProps$k = {
  variant: "solid",
  size: "md",
  colorScheme: "gray"
};
var Button$1 = {
  baseStyle: baseStyle$y,
  variants: variants$9,
  sizes: sizes$j,
  defaultProps: defaultProps$k
};

var parts$j = ["container", "control", "label", "icon"];

function baseStyleControl$1(props) {
  var {
    colorScheme: c
  } = props;
  return {
    w: "100%",
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(c + ".500", c + ".200")(props),
      borderColor: mode(c + ".500", c + ".200")(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(c + ".600", c + ".300")(props),
        borderColor: mode(c + ".600", c + ".300")(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(c + ".500", c + ".200")(props),
      borderColor: mode(c + ".500", c + ".200")(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focus: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
}

var baseStyleLabel$3 = {
  userSelect: "none",
  _disabled: {
    opacity: 0.4
  }
};
var baseStyleIcon$4 = {
  transitionProperty: "transform",
  transitionDuration: "normal"
};

var baseStyle$x = props => ({
  icon: baseStyleIcon$4,
  control: baseStyleControl$1(props),
  label: baseStyleLabel$3
});

var sizes$i = {
  sm: {
    control: {
      h: 3,
      w: 3
    },
    label: {
      fontSize: "sm"
    },
    icon: {
      fontSize: "0.45rem"
    }
  },
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    },
    icon: {
      fontSize: "0.625rem"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    },
    icon: {
      fontSize: "0.625rem"
    }
  }
};
var defaultProps$j = {
  size: "md",
  colorScheme: "blue"
};
var Checkbox = {
  parts: parts$j,
  baseStyle: baseStyle$x,
  sizes: sizes$i,
  defaultProps: defaultProps$j
};

function baseStyle$w(props) {
  var hoverBg = mode("blackAlpha.100", "whiteAlpha.100")(props);
  var activeBg = mode("blackAlpha.200", "whiteAlpha.200")(props);
  return {
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    },
    _focus: {
      boxShadow: "outline"
    }
  };
}

var sizes$h = {
  lg: {
    w: "40px",
    h: "40px",
    fontSize: "16px"
  },
  md: {
    w: "32px",
    h: "32px",
    fontSize: "12px"
  },
  sm: {
    w: "24px",
    h: "24px",
    fontSize: "10px"
  }
};
var defaultProps$i = {
  size: "md"
};
var CloseButton$1 = {
  baseStyle: baseStyle$w,
  sizes: sizes$h,
  defaultProps: defaultProps$i
};

var {
  variants: variants$8,
  defaultProps: defaultProps$h
} = Badge$1;
var baseStyle$v = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
};
var Code = {
  baseStyle: baseStyle$v,
  variants: variants$8,
  defaultProps: defaultProps$h
};

var baseStyle$u = {
  w: "100%",
  mx: "auto",
  maxW: "60ch",
  px: "1rem"
};
var Container = {
  baseStyle: baseStyle$u
};

var baseStyle$t = {
  opacity: 0.6,
  borderColor: "inherit"
};
var variantSolid = {
  borderStyle: "solid"
};
var variantDashed = {
  borderStyle: "dashed"
};
var variants$7 = {
  solid: variantSolid,
  dashed: variantDashed
};
var defaultProps$g = {
  variant: "solid"
};
var Divider = {
  baseStyle: baseStyle$t,
  variants: variants$7,
  defaultProps: defaultProps$g
};

var parts$i = ["overlay", "dialogContainer", "dialog", "header", "closeButton", "body", "footer"];
var baseStyleOverlay$1 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
};

function baseStyleDialogContainer$1(props) {
  var {
    isCentered,
    scrollBehavior
  } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto"
  };
}

function baseStyleDialog$1(props) {
  var {
    scrollBehavior
  } = props;
  return {
    borderRadius: "md",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    my: "3.75rem",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : undefined,
    boxShadow: mode("lg", "dark-lg")(props)
  };
}

var baseStyleHeader$2 = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton$2 = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};

function baseStyleBody$2(props) {
  var {
    scrollBehavior
  } = props;
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === "inside" ? "auto" : undefined
  };
}

var baseStyleFooter$2 = {
  px: 6,
  py: 4
};

var baseStyle$s = props => ({
  overlay: baseStyleOverlay$1,
  dialogContainer: baseStyleDialogContainer$1(props),
  dialog: baseStyleDialog$1(props),
  header: baseStyleHeader$2,
  closeButton: baseStyleCloseButton$2,
  body: baseStyleBody$2(props),
  footer: baseStyleFooter$2
});
/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */


function getSize$2(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        minH: "100vh",
        my: 0
      }
    };
  }

  return {
    dialog: {
      maxW: value
    }
  };
}

var sizes$g = {
  xs: getSize$2("xs"),
  sm: getSize$2("sm"),
  md: getSize$2("md"),
  lg: getSize$2("lg"),
  xl: getSize$2("xl"),
  "2xl": getSize$2("2xl"),
  "3xl": getSize$2("3xl"),
  "4xl": getSize$2("4xl"),
  "5xl": getSize$2("5xl"),
  "6xl": getSize$2("6xl"),
  full: getSize$2("full")
};
var defaultProps$f = {
  size: "md"
};
var Modal = {
  parts: parts$i,
  baseStyle: baseStyle$s,
  sizes: sizes$g,
  defaultProps: defaultProps$f
};

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }
var parts$h = Modal.parts;
/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */

function getSize$1(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        h: "100vh"
      }
    };
  }

  return {
    dialog: {
      maxW: value
    }
  };
}

var baseStyleOverlay = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
};
var baseStyleDialogContainer = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
};

function baseStyleDialog(props) {
  var {
    isFullHeight
  } = props;
  return _extends$i({}, isFullHeight && {
    height: "100vh"
  }, {
    zIndex: "modal",
    maxH: "100vh",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    boxShadow: mode("lg", "dark-lg")(props)
  });
}

var baseStyleHeader$1 = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton$1 = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody$1 = {
  px: 6,
  py: 2,
  flex: 1,
  overflow: "auto"
};
var baseStyleFooter$1 = {
  px: 6,
  py: 4
};

var baseStyle$r = props => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: baseStyleDialog(props),
  header: baseStyleHeader$1,
  closeButton: baseStyleCloseButton$1,
  body: baseStyleBody$1,
  footer: baseStyleFooter$1
});

var sizes$f = {
  xs: getSize$1("xs"),
  sm: getSize$1("md"),
  md: getSize$1("lg"),
  lg: getSize$1("2xl"),
  xl: getSize$1("4xl"),
  full: getSize$1("full")
};
var defaultProps$e = {
  size: "xs"
};
var Drawer = {
  parts: parts$h,
  baseStyle: baseStyle$r,
  sizes: sizes$f,
  defaultProps: defaultProps$e
};

var parts$g = ["preview", "input"];
var baseStylePreview = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyleInput = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focus: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyle$q = {
  preview: baseStylePreview,
  input: baseStyleInput
};
var Editable = {
  parts: parts$g,
  baseStyle: baseStyle$q
};

var parts$f = ["container", "requiredIndicator", "helperText"];

function baseStyleRequiredIndicator(props) {
  return {
    marginStart: 1,
    color: mode("red.500", "red.300")(props)
  };
}

function baseStyleHelperText(props) {
  return {
    mt: 2,
    color: mode("gray.500", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm"
  };
}

var baseStyle$p = props => ({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator(props),
  helperText: baseStyleHelperText(props)
});

var Form = {
  parts: parts$f,
  baseStyle: baseStyle$p
};

var baseStyle$o = {
  fontSize: "md",
  marginEnd: 3,
  mb: 2,
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
};
var FormLabel = {
  baseStyle: baseStyle$o
};

var baseStyle$n = {
  fontFamily: "heading",
  fontWeight: "bold"
};
var sizes$e = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
};
var defaultProps$d = {
  size: "xl"
};
var Heading = {
  baseStyle: baseStyle$n,
  sizes: sizes$e,
  defaultProps: defaultProps$d
};

var parts$e = ["field", "addon"];
var baseStyle$m = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal"
  }
};
var size = {
  lg: {
    fontSize: "lg",
    px: 4,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: 4,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: 3,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: 2,
    h: 6,
    borderRadius: "sm"
  }
};
var sizes$d = {
  lg: {
    field: size.lg,
    addon: size.lg
  },
  md: {
    field: size.md,
    addon: size.md
  },
  sm: {
    field: size.sm,
    addon: size.sm
  },
  xs: {
    field: size.xs,
    addon: size.xs
  }
};

function getDefaults(props) {
  var {
    focusBorderColor: fc,
    errorBorderColor: ec
  } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}

function variantOutline(props) {
  var {
    theme
  } = props;
  var {
    focusBorderColor: fc,
    errorBorderColor: ec
  } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: "0 0 0 1px " + getColor(theme, ec)
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: "0 0 0 1px " + getColor(theme, fc)
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
}

function variantFilled(props) {
  var {
    theme
  } = props;
  var {
    focusBorderColor: fc,
    errorBorderColor: ec
  } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme, ec)
      },
      _focus: {
        bg: "transparent",
        borderColor: getColor(theme, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
}

function variantFlushed(props) {
  var {
    theme
  } = props;
  var {
    focusBorderColor: fc,
    errorBorderColor: ec
  } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: "0px 1px 0px 0px " + getColor(theme, ec)
      },
      _focus: {
        borderColor: getColor(theme, fc),
        boxShadow: "0px 1px 0px 0px " + getColor(theme, fc)
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent"
    }
  };
}

var variantUnstyled$1 = {
  field: {
    bg: "transparent",
    px: 0,
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: 0,
    height: "auto"
  }
};
var variants$6 = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled$1
};
var defaultProps$c = {
  size: "md",
  variant: "outline"
};
var Input = {
  parts: parts$e,
  baseStyle: baseStyle$m,
  sizes: sizes$d,
  variants: variants$6,
  defaultProps: defaultProps$c
};

function baseStyle$l(props) {
  return {
    bg: mode("gray.100", "whiteAlpha")(props),
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap"
  };
}

var Kbd = {
  baseStyle: baseStyle$l
};

var baseStyle$k = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var Link = {
  baseStyle: baseStyle$k
};

var parts$d = ["container", "item", "icon"];
var baseStyleContainer$3 = {};
var baseStyleItem$1 = {};
var baseStyleIcon$3 = {
  marginEnd: "0.5rem",
  display: "inline",
  verticalAlign: "text-bottom"
};
var baseStyle$j = {
  container: baseStyleContainer$3,
  item: baseStyleItem$1,
  icon: baseStyleIcon$3
};
var List = {
  parts: parts$d,
  baseStyle: baseStyle$j
};

var parts$c = ["item", "command", "list", "button", "groupTitle", "divider"];

function baseStyleList(props) {
  return {
    bg: mode("#fff", "gray.700")(props),
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px"
  };
}

function baseStyleItem(props) {
  return {
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _active: {
      bg: mode("gray.200", "whiteAlpha.200")(props)
    },
    _expanded: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
}

var baseStyleGroupTitle = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
};
var baseStyleCommand = {
  opacity: 0.6
};
var baseStyleDivider = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6
};
var baseStyleButton = {
  transitionProperty: "common",
  transitionDuration: "normal"
};

var baseStyle$i = props => ({
  button: baseStyleButton,
  list: baseStyleList(props),
  item: baseStyleItem(props),
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider
});

var Menu = {
  parts: parts$c,
  baseStyle: baseStyle$i
};

var typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    body: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    mono: "SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
/**
 * @deprecated
 * You can derive the Typography type from the DefaultChakraTheme
 *
 * type Typography = Pick<
 *   DefaultChakraTheme,
 *   | "letterSpacings"
 *   | "lineHeights"
 *   | "fontWeights"
 *   | "fonts"
 *   | "fontSizes"
 *  >
 */

var typography$1 = typography;

var _Input$baseStyle;

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }
var parts$b = ["root", "field", "stepper", "stepperGroup"];
var {
  variants: variants$5,
  defaultProps: defaultProps$b
} = Input;
var baseStyleRoot$1 = {
  "--number-input-stepper-width": "24px",
  "--number-input-field-padding": "calc(var(--number-input-stepper-width) + 0.5rem)"
};
var baseStyleField$1 = (_Input$baseStyle = Input.baseStyle) == null ? void 0 : _Input$baseStyle.field;
var baseStyleStepperGroup = {
  width: "var(--number-input-stepper-width)"
};

function baseStyleStepper(props) {
  return {
    borderStart: "1px solid",
    borderStartColor: mode("inherit", "whiteAlpha.300")(props),
    color: mode("inherit", "whiteAlpha.800")(props),
    _active: {
      bg: mode("gray.200", "whiteAlpha.300")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
}

var baseStyle$h = props => ({
  root: baseStyleRoot$1,
  field: baseStyleField$1,
  stepperGroup: baseStyleStepperGroup,
  stepper: baseStyleStepper(props)
});

function getSize(size) {
  var sizeStyle = Input.sizes[size];
  var radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  var resolvedFontSize = typography$1.fontSizes[sizeStyle.field.fontSize];
  return {
    field: _extends$h({}, sizeStyle.field, {
      paddingInlineEnd: "var(--number-input-field-padding)",
      verticalAlign: "top"
    }),
    stepper: {
      fontSize: "calc(" + resolvedFontSize + " * 0.75)",
      _first: {
        borderTopEndRadius: radius[size]
      },
      _last: {
        borderBottomEndRadius: radius[size],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  };
}

var sizes$c = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg")
};
var NumberInput = {
  parts: parts$b,
  baseStyle: baseStyle$h,
  sizes: sizes$c,
  variants: variants$5,
  defaultProps: defaultProps$b
};

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

var baseStyle$g = _extends$g({}, Input.baseStyle.field, {
  textAlign: "center"
});

var sizes$b = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
};
var variants$4 = {
  outline: props => Input.variants.outline(props).field,
  flushed: props => Input.variants.flushed(props).field,
  filled: props => Input.variants.filled(props).field,
  unstyled: Input.variants.unstyled.field
};
var defaultProps$a = Input.defaultProps;
var PinInput = {
  baseStyle: baseStyle$g,
  sizes: sizes$b,
  variants: variants$4,
  defaultProps: defaultProps$a
};

var parts$a = ["popper", "content", "header", "body", "footer", "arrow"];
var baseStylePopper = {
  zIndex: 10
};

function baseStyleContent(props) {
  var bg = mode("white", "gray.700")(props);
  var shadowColor = mode("gray.200", "whiteAlpha.300")(props);
  return {
    "--popover-bg": "colors." + bg,
    bg: "var(--popover-bg)",
    "--popper-arrow-bg": "var(--popover-bg)",
    "--popper-arrow-shadow-color": "colors." + shadowColor,
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focus: {
      outline: 0,
      boxShadow: "outline"
    }
  };
}

var baseStyleHeader = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
};
var baseStyleBody = {
  px: 3,
  py: 2
};
var baseStyleFooter = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
};

var baseStyle$f = props => ({
  popper: baseStylePopper,
  content: baseStyleContent(props),
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
  arrow: {}
});

var Popover = {
  parts: parts$a,
  baseStyle: baseStyle$f
};

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }
var parts$9 = ["track", "filledTrack", "label"];

function filledStyle(props) {
  var {
    colorScheme: c,
    theme: t,
    isIndeterminate,
    hasStripe
  } = props;
  var stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
  var bgColor = mode(c + ".500", c + ".200")(props);
  var gradient = "linear-gradient(\n    to right,\n    transparent 0%,\n    " + getColor(t, bgColor) + " 50%,\n    transparent 100%\n  )";
  var addStripe = !isIndeterminate && hasStripe;
  return _extends$f({}, addStripe && stripeStyle, isIndeterminate ? {
    bgImage: gradient
  } : {
    bgColor
  });
}

var baseStyleLabel$2 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
};

function baseStyleTrack$2(props) {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
}

function baseStyleFilledTrack$1(props) {
  return _extends$f({
    transitionProperty: "common",
    transitionDuration: "slow"
  }, filledStyle(props));
}

var baseStyle$e = props => ({
  label: baseStyleLabel$2,
  filledTrack: baseStyleFilledTrack$1(props),
  track: baseStyleTrack$2(props)
});

var sizes$a = {
  xs: {
    track: {
      h: "0.25rem"
    }
  },
  sm: {
    track: {
      h: "0.5rem"
    }
  },
  md: {
    track: {
      h: "0.75rem"
    }
  },
  lg: {
    track: {
      h: "1rem"
    }
  }
};
var defaultProps$9 = {
  size: "md",
  colorScheme: "blue"
};
var Progress = {
  parts: parts$9,
  sizes: sizes$a,
  baseStyle: baseStyle$e,
  defaultProps: defaultProps$9
};

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }
var parts$8 = ["container", "control", "label"];

function baseStyleControl(props) {
  var {
    control
  } = Checkbox.baseStyle(props);
  return _extends$e({}, control, {
    borderRadius: "full",
    _checked: _extends$e({}, control["_checked"], {
      _before: {
        content: "\"\"",
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    })
  });
}

var baseStyle$d = props => ({
  label: Checkbox.baseStyle(props).label,
  control: baseStyleControl(props)
});

var sizes$9 = {
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    }
  },
  sm: {
    control: {
      width: 3,
      height: 3
    },
    label: {
      fontSize: "sm"
    }
  }
};
var defaultProps$8 = {
  size: "md",
  colorScheme: "blue"
};
var Radio = {
  parts: parts$8,
  baseStyle: baseStyle$d,
  sizes: sizes$9,
  defaultProps: defaultProps$8
};

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }
var parts$7 = ["field", "icon"];

function baseStyleField(props) {
  return _extends$d({}, Input.baseStyle.field, {
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    "> option, > optgroup": {
      bg: mode("white", "gray.700")(props)
    }
  });
}

var baseStyleIcon$2 = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5
  }
};

var baseStyle$c = props => ({
  field: baseStyleField(props),
  icon: baseStyleIcon$2
});

var sizes$8 = mergeWith({}, Input.sizes, {
  xs: {
    icon: {
      insetEnd: "0.25rem"
    }
  }
});
var Select = {
  parts: parts$7,
  baseStyle: baseStyle$c,
  sizes: sizes$8,
  variants: Input.variants,
  defaultProps: Input.defaultProps
};

var fade = (startColor, endColor) => keyframes({
  from: {
    borderColor: startColor,
    background: startColor
  },
  to: {
    borderColor: endColor,
    background: endColor
  }
});

var baseStyle$b = props => {
  var defaultStartColor = mode("gray.100", "gray.800")(props);
  var defaultEndColor = mode("gray.400", "gray.600")(props);
  var {
    startColor = defaultStartColor,
    endColor = defaultEndColor,
    speed,
    theme
  } = props;
  var start = getColor(theme, startColor);
  var end = getColor(theme, endColor);
  return {
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start,
    background: end,
    animation: speed + "s linear infinite alternate " + fade(start, end)
  };
};

var Skeleton = {
  baseStyle: baseStyle$b
};

var baseStyle$a = props => ({
  borderRadius: "md",
  fontWeight: "semibold",
  _focus: {
    boxShadow: "outline",
    padding: "1rem",
    position: "fixed",
    top: "1.5rem",
    insetStart: "1.5rem",
    bg: mode("white", "gray.700")(props)
  }
});

var SkipLink = {
  baseStyle: baseStyle$a
};

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }
var parts$6 = ["container", "thumb", "track", "filledTrack"];

function thumbOrientation(props) {
  return orient({
    orientation: props.orientation,
    vertical: {
      left: "50%",
      transform: "translateX(-50%)",
      _active: {
        transform: "translateX(-50%) scale(1.15)"
      }
    },
    horizontal: {
      top: "50%",
      transform: "translateY(-50%)",
      _active: {
        transform: "translateY(-50%) scale(1.15)"
      }
    }
  });
}

var baseStyleContainer$2 = props => {
  var {
    orientation
  } = props;
  return _extends$c({
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    }
  }, orient({
    orientation,
    vertical: {
      h: "100%"
    },
    horizontal: {
      w: "100%"
    }
  }));
};

function baseStyleTrack$1(props) {
  return {
    borderRadius: "sm",
    bg: mode("gray.200", "whiteAlpha.200")(props),
    _disabled: {
      bg: mode("gray.300", "whiteAlpha.300")(props)
    }
  };
}

function baseStyleThumb$1(props) {
  return _extends$c({
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  }, thumbOrientation(props));
}

function baseStyleFilledTrack(props) {
  var {
    colorScheme: c
  } = props;
  return {
    bg: mode(c + ".500", c + ".200")(props)
  };
}

var baseStyle$9 = props => ({
  container: baseStyleContainer$2(props),
  track: baseStyleTrack$1(props),
  thumb: baseStyleThumb$1(props),
  filledTrack: baseStyleFilledTrack(props)
});

function sizeLg(props) {
  return {
    thumb: {
      w: "16px",
      h: "16px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
}

function sizeMd(props) {
  return {
    thumb: {
      w: "14px",
      h: "14px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
}

function sizeSm(props) {
  return {
    thumb: {
      w: "10px",
      h: "10px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "2px"
      },
      vertical: {
        w: "2px"
      }
    })
  };
}

var sizes$7 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var defaultProps$7 = {
  size: "md",
  colorScheme: "blue"
};
var Slider = {
  parts: parts$6,
  sizes: sizes$7,
  baseStyle: baseStyle$9,
  defaultProps: defaultProps$7
};

var baseStyle$8 = {
  width: "var(--spinner-size)",
  height: "var(--spinner-size)"
};
var sizes$6 = {
  xs: {
    "--spinner-size": "0.75rem"
  },
  sm: {
    "--spinner-size": "1rem"
  },
  md: {
    "--spinner-size": "1.5rem"
  },
  lg: {
    "--spinner-size": "2rem"
  },
  xl: {
    "--spinner-size": "3rem"
  }
};
var defaultProps$6 = {
  size: "md"
};
var Spinner$1 = {
  baseStyle: baseStyle$8,
  sizes: sizes$6,
  defaultProps: defaultProps$6
};

var parts$5 = ["label", "number", "icon", "helpText", "container"];
var baseStyleContainer$1 = {};
var baseStyleLabel$1 = {
  fontWeight: "medium"
};
var baseStyleHelpText = {
  opacity: 0.8,
  marginBottom: 2
};
var baseStyleNumber = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
};
var baseStyleIcon$1 = {
  marginEnd: 1,
  w: "14px",
  h: "14px",
  verticalAlign: "middle"
};
var baseStyle$7 = {
  container: baseStyleContainer$1,
  label: baseStyleLabel$1,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon$1
};
var sizes$5 = {
  md: {
    label: {
      fontSize: "sm"
    },
    helpText: {
      fontSize: "sm"
    },
    number: {
      fontSize: "2xl"
    }
  }
};
var defaultProps$5 = {
  size: "md"
};
var Stat = {
  parts: parts$5,
  baseStyle: baseStyle$7,
  sizes: sizes$5,
  defaultProps: defaultProps$5
};

var parts$4 = ["container", "track", "thumb"];

function baseStyleTrack(props) {
  var {
    colorScheme: c
  } = props;
  return {
    borderRadius: "full",
    p: "2px",
    width: "var(--slider-track-width)",
    height: "var(--slider-track-height)",
    transitionProperty: "common",
    transitionDuration: "fast",
    bg: mode("gray.300", "whiteAlpha.400")(props),
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      bg: mode(c + ".500", c + ".200")(props)
    }
  };
}

var baseStyleThumb = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: "var(--slider-track-height)",
  height: "var(--slider-track-height)",
  _checked: {
    transform: "translateX(var(--slider-thumb-x))"
  }
};

var baseStyle$6 = props => ({
  container: {
    "--slider-track-diff": "calc(var(--slider-track-width) - var(--slider-track-height))",
    "--slider-thumb-x": "var(--slider-track-diff)",
    _rtl: {
      "--slider-thumb-x": "calc(-1 * var(--slider-track-diff))"
    }
  },
  track: baseStyleTrack(props),
  thumb: baseStyleThumb
});

var sizes$4 = {
  sm: {
    container: {
      "--slider-track-width": "1.375rem",
      "--slider-track-height": "0.75rem"
    }
  },
  md: {
    container: {
      "--slider-track-width": "1.875rem",
      "--slider-track-height": "1rem"
    }
  },
  lg: {
    container: {
      "--slider-track-width": "2.875rem",
      "--slider-track-height": "1.5rem"
    }
  }
};
var defaultProps$4 = {
  size: "md",
  colorScheme: "blue"
};
var Switch = {
  parts: parts$4,
  baseStyle: baseStyle$6,
  sizes: sizes$4,
  defaultProps: defaultProps$4
};

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }
var parts$3 = ["table", "thead", "tbody", "tr", "th", "td", "caption"];
var baseStyle$5 = {
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
};
var numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
};

var simpleVariant = props => {
  var {
    colorScheme: c
  } = props;
  return {
    th: _extends$b({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c + ".100", c + ".700")(props)
    }, numericStyles),
    td: _extends$b({
      borderBottom: "1px",
      borderColor: mode(c + ".100", c + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};

var stripedVariant = props => {
  var {
    colorScheme: c
  } = props;
  return {
    th: _extends$b({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c + ".100", c + ".700")(props)
    }, numericStyles),
    td: _extends$b({
      borderBottom: "1px",
      borderColor: mode(c + ".100", c + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(c + ".100", c + ".700")(props)
          },
          td: {
            background: mode(c + ".100", c + ".700")(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};

var variants$3 = {
  simple: simpleVariant,
  striped: stripedVariant,
  unstyled: {}
};
var sizes$3 = {
  sm: {
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  },
  md: {
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  },
  lg: {
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  }
};
var defaultProps$3 = {
  variant: "simple",
  size: "md",
  colorScheme: "gray"
};
var Table = {
  parts: parts$3,
  baseStyle: baseStyle$5,
  variants: variants$3,
  sizes: sizes$3,
  defaultProps: defaultProps$3
};

var parts$2 = ["root", "tablist", "tab", "tabpanels", "tabpanel", "indicator"];

function baseStyleRoot(props) {
  var {
    orientation
  } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
}

function baseStyleTab(props) {
  var {
    isFitted
  } = props;
  return {
    flex: isFitted ? 1 : undefined,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focus: {
      zIndex: 1,
      boxShadow: "outline"
    }
  };
}

function baseStyleTablist(props) {
  var {
    align = "start",
    orientation
  } = props;
  var alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
}

var baseStyleTabpanel = {
  p: 4
};

var baseStyle$4 = props => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
});

var sizes$2 = {
  sm: {
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  },
  md: {
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  },
  lg: {
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  }
};

function variantLine(props) {
  var {
    colorScheme: c,
    orientation
  } = props;
  var isVertical = orientation === "vertical";
  var borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  var marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        color: mode(c + ".600", c + ".300")(props),
        borderColor: "currentColor"
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props)
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      }
    }
  };
}

function variantEnclosed(props) {
  var {
    colorScheme: c
  } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      _selected: {
        color: mode(c + ".600", c + ".300")(props),
        borderColor: "inherit",
        borderBottomColor: mode("white", "gray.800")(props)
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}

function variantEnclosedColored(props) {
  var {
    colorScheme: c
  } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      bg: mode("gray.50", "whiteAlpha.50")(props),
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        bg: mode("#fff", "gray.800")(props),
        color: mode(c + ".600", c + ".300")(props),
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}

function variantSoftRounded(props) {
  var {
    colorScheme: c,
    theme
  } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme, c + ".700"),
        bg: getColor(theme, c + ".100")
      }
    }
  };
}

function variantSolidRounded(props) {
  var {
    colorScheme: c
  } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode("gray.600", "inherit")(props),
      _selected: {
        color: mode("#fff", "gray.800")(props),
        bg: mode(c + ".600", c + ".300")(props)
      }
    }
  };
}

var variantUnstyled = {};
var variants$2 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled
};
var defaultProps$2 = {
  size: "md",
  variant: "line",
  colorScheme: "blue"
};
var Tabs = {
  parts: parts$2,
  baseStyle: baseStyle$4,
  sizes: sizes$2,
  variants: variants$2,
  defaultProps: defaultProps$2
};

var parts$1 = ["container", "label", "closeButton"];
var baseStyleContainer = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyleLabel = {
  lineHeight: 1.2
};
var baseStyleCloseButton = {
  fontSize: "18px",
  w: "1.25rem",
  h: "1.25rem",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "0.375rem",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focus: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
};
var baseStyle$3 = {
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton
};
var sizes$1 = {
  sm: {
    container: {
      minH: "1.25rem",
      minW: "1.25rem",
      fontSize: "xs",
      px: 2,
      borderRadius: "md"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  },
  md: {
    container: {
      minH: "1.5rem",
      minW: "1.5rem",
      fontSize: "sm",
      borderRadius: "md",
      px: 2
    }
  },
  lg: {
    container: {
      minH: 8,
      minW: 8,
      fontSize: "md",
      borderRadius: "md",
      px: 3
    }
  }
};
var variants$1 = {
  subtle: props => ({
    container: Badge$1.variants.subtle(props)
  }),
  solid: props => ({
    container: Badge$1.variants.solid(props)
  }),
  outline: props => ({
    container: Badge$1.variants.outline(props)
  })
};
var defaultProps$1 = {
  size: "md",
  variant: "subtle",
  colorScheme: "gray"
};
var Tag = {
  parts: parts$1,
  variants: variants$1,
  baseStyle: baseStyle$3,
  sizes: sizes$1,
  defaultProps: defaultProps$1
};

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

var baseStyle$2 = _extends$a({}, Input.baseStyle.field, {
  paddingY: "8px",
  minHeight: "80px",
  lineHeight: "short",
  verticalAlign: "top"
});

var variants = {
  outline: props => Input.variants.outline(props).field,
  flushed: props => Input.variants.flushed(props).field,
  filled: props => Input.variants.filled(props).field,
  unstyled: Input.variants.unstyled.field
};
var sizes = {
  xs: Input.sizes.xs.field,
  sm: Input.sizes.sm.field,
  md: Input.sizes.md.field,
  lg: Input.sizes.lg.field
};
var defaultProps = {
  size: "md",
  variant: "outline"
};
var Textarea = {
  baseStyle: baseStyle$2,
  sizes,
  variants,
  defaultProps
};

function baseStyle$1(props) {
  var bg = mode("gray.700", "gray.300")(props);
  return {
    "--tooltip-bg": "colors." + bg,
    px: "8px",
    py: "2px",
    bg: "var(--tooltip-bg)",
    "--popper-arrow-bg": "var(--tooltip-bg)",
    color: mode("whiteAlpha.900", "gray.900")(props),
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "320px",
    zIndex: "tooltip"
  };
}

var Tooltip = {
  baseStyle: baseStyle$1
};

var parts = ["text", "icon"];

function baseStyleText(props) {
  return {
    color: mode("red.500", "red.300")(props),
    mt: 2,
    fontSize: "sm"
  };
}

function baseStyleIcon(props) {
  return {
    marginEnd: "0.5em",
    color: mode("red.500", "red.300")(props)
  };
}

var baseStyle = props => ({
  text: baseStyleText(props),
  icon: baseStyleIcon(props)
});

var FormError = {
  parts,
  baseStyle
};

var components = {
  Accordion,
  Alert,
  Avatar,
  Badge: Badge$1,
  Breadcrumb,
  Button: Button$1,
  Checkbox,
  CloseButton: CloseButton$1,
  Code,
  Container,
  Divider,
  Drawer,
  Editable,
  Form,
  FormLabel,
  Heading,
  Input,
  Kbd,
  Link,
  List,
  Menu,
  Modal,
  NumberInput,
  PinInput,
  Popover,
  Progress,
  Radio,
  Select,
  Skeleton,
  SkipLink,
  Slider,
  Spinner: Spinner$1,
  Stat,
  Switch,
  Table,
  Tabs,
  Tag,
  Textarea,
  Tooltip,
  FormError
};

var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var borders$1 = borders;

/**
 * Breakpoints for responsive design
 */

var breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
});
var breakpoints$1 = breakpoints;

/**
 * @deprecated
 * You can derive the Colors type from the DefaultChakraTheme:
 *
 * type Colors = DefaultChakraTheme["colors"]
 */
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var colors$1 = colors;

var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
/**
 * @deprecated
 * You can derive the Radii type from the DefaultChakraTheme
 *
 * type Radii = DefaultChakraTheme['radii']
 */

var radii$1 = radii;

var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
/**
 * @deprecated
 * You can derive the Shadows type from the DefaultChakraTheme
 *
 * type Shadows = DefaultChakraTheme['shadows']
 */

var shadows$1 = shadows;

var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var transition$1 = transition;

var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
/**
 * @deprecated
 * You can derive the ZIndices type from the DefaultChakraTheme
 *
 * type ZIndices = DefaultChakraTheme['zIndices']
 */

var zIndices$1 = zIndices;

var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var blur$1 = blur;

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var foundations = _extends$9({
  breakpoints: breakpoints$1,
  zIndices: zIndices$1,
  radii: radii$1,
  blur: blur$1,
  colors: colors$1
}, typography$1, {
  sizes: sizes$m,
  shadows: shadows$1,
  space: spacing,
  borders: borders$1,
  transition: transition$1
});

var foundations$1 = foundations;

var styles = {
  global: props => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props)
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word"
    }
  })
};
var styles$1 = styles;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
var direction = "ltr";
var config$1 = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = _extends$8({
  direction
}, foundations$1, {
  components,
  styles: styles$1,
  config: config$1
});
var defaultTheme = theme;

var doc = {
  body: {
    classList: {
      add() {},

      remove() {}

    }
  },

  addEventListener() {},

  removeEventListener() {},

  activeElement: {
    blur() {},

    nodeName: ""
  },

  querySelector() {
    return null;
  },

  querySelectorAll() {
    return [];
  },

  getElementById() {
    return null;
  },

  createEvent() {
    return {
      initEvent() {}

    };
  },

  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},

      setAttribute() {},

      getElementsByTagName() {
        return [];
      }

    };
  }

};
var ssrDocument = doc;

var noop = () => {};

var win = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: noop,
  removeEventListener: noop,

  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }

    };
  },

  matchMedia() {
    return {
      matches: false,
      addListener: noop,
      removeListener: noop
    };
  },

  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }

    return setTimeout(callback, 0);
  },

  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") return;
    clearTimeout(id);
  },

  setTimeout: () => 0,
  clearTimeout: noop,
  setInterval: () => 0,
  clearInterval: noop
};
var ssrWindow = win;

var mockEnv = {
  window: ssrWindow,
  document: ssrDocument
};
var defaultEnv = isBrowser$1 ? {
  window,
  document
} : mockEnv;
var EnvironmentContext = /*#__PURE__*/react.createContext(defaultEnv);
function EnvironmentProvider(props) {
  var {
    children,
    environment: environmentProp
  } = props;
  var [node, setNode] = react.useState(null);
  var context = react.useMemo(() => {
    var _ref;

    var doc = node == null ? void 0 : node.ownerDocument;
    var win = node == null ? void 0 : node.ownerDocument.defaultView;
    var nodeEnv = doc ? {
      document: doc,
      window: win
    } : undefined;
    var env = (_ref = environmentProp != null ? environmentProp : nodeEnv) != null ? _ref : defaultEnv;
    return env;
  }, [node, environmentProp]);
  var showEnvGetter = !node && !environmentProp;
  return /*#__PURE__*/react.createElement(EnvironmentContext.Provider, {
    value: context
  }, children, showEnvGetter && /*#__PURE__*/react.createElement("span", {
    ref: el => {
      if (el) setNode(el);
    }
  }));
}

/**
 * The global provider that must be added to make all Chakra components
 * work correctly
 */
var ChakraProvider = props => {
  var {
    children,
    colorModeManager,
    portalZIndex,
    resetCSS = true,
    theme = defaultTheme,
    environment,
    cssVarsRoot
  } = props;

  var _children = /*#__PURE__*/react.createElement(EnvironmentProvider, {
    environment: environment
  }, children);

  return /*#__PURE__*/react.createElement(IdProvider, null, /*#__PURE__*/react.createElement(ThemeProvider, {
    theme: theme,
    cssVarsRoot: cssVarsRoot
  }, /*#__PURE__*/react.createElement(ColorModeProvider, {
    colorModeManager: colorModeManager,
    options: theme.config
  }, resetCSS && /*#__PURE__*/react.createElement(CSSReset$1, null), /*#__PURE__*/react.createElement(GlobalStyle, null), portalZIndex ? /*#__PURE__*/react.createElement(PortalManager, {
    zIndex: portalZIndex
  }, _children) : _children)));
};

var [ButtonGroupProvider, useButtonGroup] = createContext({
  strict: false,
  name: "ButtonGroupContext"
});

/**
 * Styles to visually hide an element
 * but make it accessible to screen-readers
 */
var visuallyHiddenStyle = {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
/**
 * Visually hidden component used to hide
 * elements on screen
 */

var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
/**
 * Visually hidden input component for designing
 * custom input components using the html `input`
 * as a proxy
 */


chakra("input", {
  baseStyle: visuallyHiddenStyle
});

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});

/**
 * Spinner is used to indicate the loading state of a page or a component,
 * It renders a `div` by default.
 *
 * @see Docs https://chakra-ui.com/spinner
 */
var Spinner = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyleConfig("Spinner", props);

  var _omitThemingProps = omitThemingProps(props),
      {
    label = "Loading...",
    thickness = "2px",
    speed = "0.45s",
    emptyColor = "transparent",
    className
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose$7(_omitThemingProps, ["label", "thickness", "speed", "emptyColor", "className"]);

  var _className = cx("chakra-spinner", className);

  var spinnerStyles = _extends$7({
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: spin + " " + speed + " linear infinite"
  }, styles);

  return /*#__PURE__*/react.createElement(chakra.div, _extends$7({
    ref: ref,
    __css: spinnerStyles,
    className: _className
  }, rest), label && /*#__PURE__*/react.createElement(VisuallyHidden, null, label));
});

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ButtonSpinner = props => {
  var {
    label,
    placement,
    children = /*#__PURE__*/react.createElement(Spinner, {
      color: "currentColor",
      width: "1em",
      height: "1em"
    }),
    className,
    __css
  } = props,
      rest = _objectWithoutPropertiesLoose$6(props, ["label", "placement", "spacing", "children", "className", "__css"]);

  var _className = cx("chakra-button__spinner", className);

  var marginProp = placement === "start" ? "marginEnd" : "marginStart";
  var spinnerStyles = react.useMemo(() => _extends$6({
    display: "flex",
    alignItems: "center",
    position: label ? "relative" : "absolute",
    [marginProp]: label ? "0.5rem" : 0,
    fontSize: "1em",
    lineHeight: "normal"
  }, __css), [__css, label, marginProp]);
  return /*#__PURE__*/react.createElement(chakra.div, _extends$6({
    className: _className
  }, rest, {
    __css: spinnerStyles
  }), children);
};

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ButtonIcon = props => {
  var {
    children,
    className
  } = props,
      rest = _objectWithoutPropertiesLoose$5(props, ["children", "className"]);

  var _children = /*#__PURE__*/react.isValidElement(children) ? /*#__PURE__*/react.cloneElement(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;

  var _className = cx("chakra-button__icon", className);

  return /*#__PURE__*/react.createElement(chakra.span, _extends$5({
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0
  }, rest, {
    className: _className
  }), _children);
};

function useButtonType(value) {
  var [isButton, setIsButton] = react.useState(!value);
  var refCallback = react.useCallback(node => {
    if (!node) return;
    setIsButton(node.tagName === "BUTTON");
  }, []);
  var type = isButton ? "button" : undefined;
  return {
    ref: refCallback,
    type
  };
}

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var Button = /*#__PURE__*/forwardRef((props, ref) => {
  var group = useButtonGroup();
  var styles = useStyleConfig("Button", _extends$4({}, group, props));

  var _omitThemingProps = omitThemingProps(props),
      {
    isDisabled = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    isFullWidth,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose$4(_omitThemingProps, ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"]);
  /**
   * When button is used within ButtonGroup (i.e flushed with sibling buttons),
   * it is important to add a `zIndex` on focus.
   *
   * So let's read the component styles and then add `zIndex` to it.
   */


  var buttonStyles = react.useMemo(() => {
    var _styles$_focus;

    var _focus = mergeWith({}, (_styles$_focus = styles == null ? void 0 : styles["_focus"]) != null ? _styles$_focus : {}, {
      zIndex: 1
    });

    return _extends$4({
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      width: isFullWidth ? "100%" : "auto"
    }, styles, !!group && {
      _focus
    });
  }, [styles, group, isFullWidth]);
  var {
    ref: _ref,
    type: defaultType
  } = useButtonType(as);
  var contentProps = {
    rightIcon,
    leftIcon,
    iconSpacing,
    children
  };
  return /*#__PURE__*/react.createElement(chakra.button, _extends$4({
    disabled: isDisabled || isLoading,
    ref: mergeRefs(ref, _ref),
    as: as,
    type: type != null ? type : defaultType,
    "data-active": dataAttr(isActive),
    "data-loading": dataAttr(isLoading),
    __css: buttonStyles,
    className: cx("chakra-button", className)
  }, rest), isLoading && spinnerPlacement === "start" && /*#__PURE__*/react.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--start",
    label: loadingText,
    placement: "start"
  }, spinner), isLoading ? loadingText || /*#__PURE__*/react.createElement(chakra.span, {
    opacity: 0
  }, /*#__PURE__*/react.createElement(ButtonContent, contentProps)) : /*#__PURE__*/react.createElement(ButtonContent, contentProps), isLoading && spinnerPlacement === "end" && /*#__PURE__*/react.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--end",
    label: loadingText,
    placement: "end"
  }, spinner));
});

function ButtonContent(props) {
  var {
    leftIcon,
    rightIcon,
    children,
    iconSpacing
  } = props;
  return /*#__PURE__*/react.createElement(react.Fragment, null, leftIcon && /*#__PURE__*/react.createElement(ButtonIcon, {
    marginEnd: iconSpacing
  }, leftIcon), children, rightIcon && /*#__PURE__*/react.createElement(ButtonIcon, {
    marginStart: iconSpacing
  }, rightIcon));
}

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var IconButton = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    icon,
    children,
    isRound,
    "aria-label": ariaLabel
  } = props,
      rest = _objectWithoutPropertiesLoose$3(props, ["icon", "children", "isRound", "aria-label"]);
  /**
   * Passing the icon as prop or children should work
   */


  var element = icon || children;

  var _children = /*#__PURE__*/react.isValidElement(element) ? /*#__PURE__*/react.cloneElement(element, {
    "aria-hidden": true,
    focusable: false
  }) : null;

  return /*#__PURE__*/react.createElement(Button, _extends$3({
    padding: "0",
    borderRadius: isRound ? "full" : undefined,
    ref: ref,
    "aria-label": ariaLabel
  }, rest), _children);
});

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * React component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://chakra-ui.com/badge
 */
var Badge = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyleConfig("Badge", props);

  var _omitThemingProps = omitThemingProps(props),
      rest = _objectWithoutPropertiesLoose$2(_omitThemingProps, ["className"]);

  return /*#__PURE__*/react.createElement(chakra.span, _extends$2({
    ref: ref,
    className: cx("chakra-badge", props.className)
  }, rest, {
    __css: _extends$2({
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle"
    }, styles)
  }));
});

/**
 * Box is the most abstract component on top of which other chakra
 * components are built. It renders a `div` element by default.
 *
 * @see Docs https://chakra-ui.com/box
 */
var Box = chakra("div");

/**
 * If we ever run into SSR issues with this, check this post to find a fix for it:
 * @see https://medium.com/@emmenko/patching-lobotomized-owl-selector-for-emotion-ssr-5a582a3c424c
 */
var selector = "& > *:not(style) ~ *:not(style)";
function getStackStyles(options) {
  var {
    spacing,
    direction
  } = options;
  var directionStyles = {
    column: {
      marginTop: spacing,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0
    },
    row: {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: spacing
    },
    "column-reverse": {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: spacing,
      marginStart: 0
    },
    "row-reverse": {
      marginTop: 0,
      marginEnd: spacing,
      marginBottom: 0,
      marginStart: 0
    }
  };
  return {
    flexDirection: direction,
    [selector]: mapResponsive(direction, value => directionStyles[value])
  };
}
function getDividerStyles(options) {
  var {
    spacing,
    direction
  } = options;
  var dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": mapResponsive(direction, value => dividerStyles[value])
  };
}

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var StackItem = props => /*#__PURE__*/react.createElement(chakra.div, _extends$1({
  className: "chakra-stack__item"
}, props, {
  __css: _extends$1({
    display: "inline-block",
    flex: "0 0 auto",
    minWidth: 0
  }, props["__css"])
}));

/**
 * Stacks help you easily create flexible and automatically distributed layouts
 *
 * You can stack elements in the horizontal or vertical direction,
 * and apply a space or/and divider between each element.
 *
 * It uses `display: flex` internally and renders a `div`.
 *
 * @see Docs https://chakra-ui.com/stack
 *
 */
var Stack = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren
  } = props,
      rest = _objectWithoutPropertiesLoose$1(props, ["isInline", "direction", "align", "justify", "spacing", "wrap", "children", "divider", "className", "shouldWrapChildren"]);

  var direction = isInline ? "row" : directionProp != null ? directionProp : "column";
  var styles = react.useMemo(() => getStackStyles({
    direction,
    spacing
  }), [direction, spacing]);
  var dividerStyle = react.useMemo(() => getDividerStyles({
    spacing,
    direction
  }), [spacing, direction]);
  var hasDivider = !!divider;
  var shouldUseChildren = !shouldWrapChildren && !hasDivider;
  var validChildren = getValidChildren(children);
  var clones = shouldUseChildren ? validChildren : validChildren.map((child, index) => {
    // Prefer provided child key, fallback to index
    var key = typeof child.key !== "undefined" ? child.key : index;
    var isLast = index + 1 === validChildren.length;
    var wrappedChild = /*#__PURE__*/react.createElement(StackItem, {
      key: key
    }, child);

    var _child = shouldWrapChildren ? wrappedChild : child;

    if (!hasDivider) return _child;
    var clonedDivider = /*#__PURE__*/react.cloneElement(divider, {
      __css: dividerStyle
    });

    var _divider = isLast ? null : clonedDivider;

    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: key
    }, _child, _divider);
  });

  var _className = cx("chakra-stack", className);

  return /*#__PURE__*/react.createElement(chakra.div, _extends$1({
    ref: ref,
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    flexDirection: styles.flexDirection,
    flexWrap: wrap,
    className: _className,
    __css: hasDivider ? {} : {
      [selector]: styles[selector]
    }
  }, rest), clones);
});
/**
 * A view that arranges its children in a horizontal line.
 */


var HStack = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/react.createElement(Stack, _extends$1({
  align: "center"
}, props, {
  direction: "row",
  ref: ref
})));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Used to render texts or paragraphs.
 *
 * @see Docs https://chakra-ui.com/text
 */
var Text = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyleConfig("Text", props);

  var _omitThemingProps = omitThemingProps(props),
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "align", "decoration", "casing"]);

  var aliasedProps = filterUndefined({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /*#__PURE__*/react.createElement(chakra.p, _extends({
    ref: ref,
    className: cx("chakra-text", props.className)
  }, aliasedProps, rest, {
    __css: styles
  }));
});

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && react.createContext(DefaultContext);

var __assign$5 =  function () {
  __assign$5 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$5.apply(this, arguments);
};

var __rest$2 =  function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react.createElement(node.tag, __assign$5({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react.createElement(IconBase, __assign$5({
      attr: __assign$5({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest$2(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return react.createElement("svg", __assign$5({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign$5(__assign$5({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? react.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function HiStar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}}]})(props);
}function HiUserGroup (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}}]})(props);
}function HiX (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
}function HiOutlineCalendar (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
}function HiOutlineClock (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
}

const CloseButton = (props) => (react.createElement(IconButton, { fontSize: "1.5em", variant: "ghost", icon: react.createElement(HiX, null), ...props }));

function Banner(props) {
    const { actionButton, bannerContent, bgColor, ...rest } = props;
    const [isHidden, setIsHidden] = react.useState(false);
    return (react.createElement(Box, { display: isHidden ? 'none' : 'block', pos: "fixed", bottom: "0", left: "0", width: "full", as: "section", ...rest },
        react.createElement(Box, { zIndex: "9999", bg: bgColor || 'blue.600', color: "white", py: "5", px: { base: '3', md: '6', lg: '8' } },
            react.createElement(HStack, { spacing: "3" },
                react.createElement(Stack, { direction: { base: 'column', sm: 'row' }, justifyContent: "center", alignItems: "center", spacing: { base: '3', md: '6' }, width: "full" },
                    react.createElement(Text, { fontSize: "3xl" },
                        react.createElement("b", null, "FC: "),
                        bannerContent),
                    actionButton),
                react.createElement(CloseButton, { onClick: () => setIsHidden(true), alignSelf: { base: 'self-start', sm: 'initial' }, "aria-label": "Close banner" })))));
}

const emptyCourseDetailsFile = { freeCourses: {}, coursesWithCoupon: {} };
function useCourses() {
    const [courses, setCourses] = react.useState(emptyCourseDetailsFile);
    react.useEffect(() => {
        console.log('initializing courses from local storage');
        chrome.storage.local.get([StorageKeys.Courses], function (result) {
            setCourses(result[StorageKeys.Courses] || emptyCourseDetailsFile);
        });
    }, []);
    return courses;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics$2 = function(d, b) {
    extendStatics$2 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$2(d, b);
};

function __extends$2(d, b) {
    extendStatics$2(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$4 = function() {
    __assign$4 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};

function __values$3(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read$5(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread$4() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read$5(arguments[i]));
    return ar;
}

/**
 * Session Status
 */
var SessionStatus;
(function (SessionStatus) {
    /** JSDoc */
    SessionStatus["Ok"] = "ok";
    /** JSDoc */
    SessionStatus["Exited"] = "exited";
    /** JSDoc */
    SessionStatus["Crashed"] = "crashed";
    /** JSDoc */
    SessionStatus["Abnormal"] = "abnormal";
})(SessionStatus || (SessionStatus = {}));
var RequestSessionStatus;
(function (RequestSessionStatus) {
    /** JSDoc */
    RequestSessionStatus["Ok"] = "ok";
    /** JSDoc */
    RequestSessionStatus["Errored"] = "errored";
    /** JSDoc */
    RequestSessionStatus["Crashed"] = "crashed";
})(RequestSessionStatus || (RequestSessionStatus = {}));

/** JSDoc */
// eslint-disable-next-line import/export
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Severity) {
    /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case 'error':
                return Severity.Error;
            case 'fatal':
                return Severity.Fatal;
            case 'critical':
                return Severity.Critical;
            case 'log':
            default:
                return Severity.Log;
        }
    }
    Severity.fromString = fromString;
})(Severity || (Severity = {}));

/** The status of an event. */
// eslint-disable-next-line import/export
var Status;
(function (Status) {
    /** The status could not be determined. */
    Status["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    Status["Skipped"] = "skipped";
    /** The event was sent to Sentry successfully. */
    Status["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    Status["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    Status["Invalid"] = "invalid";
    /** A server-side error occurred during submission. */
    Status["Failed"] = "failed";
})(Status || (Status = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Status) {
    /**
     * Converts a HTTP status code into a {@link Status}.
     *
     * @param code The HTTP response status code.
     * @returns The send status or {@link Status.Unknown}.
     */
    function fromHttpCode(code) {
        if (code >= 200 && code < 300) {
            return Status.Success;
        }
        if (code === 429) {
            return Status.RateLimit;
        }
        if (code >= 400 && code < 500) {
            return Status.Invalid;
        }
        if (code >= 500) {
            return Status.Failed;
        }
        return Status.Unknown;
    }
    Status.fromHttpCode = fromHttpCode;
})(Status || (Status = {}));

var TransactionSamplingMethod;
(function (TransactionSamplingMethod) {
    TransactionSamplingMethod["Explicit"] = "explicitly_set";
    TransactionSamplingMethod["Sampler"] = "client_sampler";
    TransactionSamplingMethod["Rate"] = "client_rate";
    TransactionSamplingMethod["Inheritance"] = "inheritance";
})(TransactionSamplingMethod || (TransactionSamplingMethod = {}));

var Outcome;
(function (Outcome) {
    Outcome["BeforeSend"] = "before_send";
    Outcome["EventProcessor"] = "event_processor";
    Outcome["NetworkError"] = "network_error";
    Outcome["QueueOverflow"] = "queue_overflow";
    Outcome["RateLimitBackoff"] = "ratelimit_backoff";
    Outcome["SampleRate"] = "sample_rate";
})(Outcome || (Outcome = {}));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __read$4(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread$3() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read$4(arguments[i]));
    return ar;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$3 = function() {
    __assign$3 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};

function __read$3(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread$2() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read$3(arguments[i]));
    return ar;
}

/**
 * Consumes the promise and logs the error when it rejects.
 * @param promise A promise to forget.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forget(promise) {
    void promise.then(null, function (e) {
        // TODO: Use a better logging mechanism
        // eslint-disable-next-line no-console
        console.error(e);
    });
}

/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
}
/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */
function loadModule(moduleName) {
    var mod;
    try {
        mod = dynamicRequire(module, moduleName);
    }
    catch (e) {
        // no-empty
    }
    try {
        var cwd = dynamicRequire(module, 'process').cwd;
        mod = dynamicRequire(module, cwd() + "/node_modules/" + moduleName);
    }
    catch (e) {
        // no-empty
    }
    return mod;
}

/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */
var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
    return (isNodeEnv()
        ? global
        : typeof window !== 'undefined' // eslint-disable-line no-restricted-globals
            ? window // eslint-disable-line no-restricted-globals
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (Object.prototype.toString.call(wat)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMError]';
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMException]';
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return Object.prototype.toString.call(wat) === '[object String]';
}
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return Object.prototype.toString.call(wat) === '[object Object]';
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return Object.prototype.toString.call(wat) === '[object RegExp]';
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat && wat.then && typeof wat.then === 'function');
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    }
    catch (_e) {
        return false;
    }
}

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem, keyAttrs) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        var currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        var height = 0;
        var len = 0;
        var separator = ' > ';
        var sepLength = separator.length;
        var nextStr = void 0;
        // eslint-disable-next-line no-plusplus
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    }
    catch (_oO) {
        return '<unknown>';
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
    var _a, _b;
    var elem = el;
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    var keyAttrPairs = ((_a = keyAttrs) === null || _a === void 0 ? void 0 : _a.length) ? keyAttrs.filter(function (keyAttr) { return elem.getAttribute(keyAttr); }).map(function (keyAttr) { return [keyAttr, elem.getAttribute(keyAttr)]; })
        : null;
    if ((_b = keyAttrPairs) === null || _b === void 0 ? void 0 : _b.length) {
        keyAttrPairs.forEach(function (keyAttrPair) {
            out.push("[" + keyAttrPair[0] + "=\"" + keyAttrPair[1] + "\"]");
        });
    }
    else {
        if (elem.id) {
            out.push("#" + elem.id);
        }
        // eslint-disable-next-line prefer-const
        className = elem.className;
        if (className && isString(className)) {
            classes = className.split(/\s+/);
            for (i = 0; i < classes.length; i++) {
                out.push("." + classes[i]);
            }
        }
    }
    var allowedAttrs = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < allowedAttrs.length; i++) {
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
/**
 * A safe form of location.href
 */
function getLocationHref() {
    var global = getGlobalObject();
    try {
        return global.document.location.href;
    }
    catch (oO) {
        return '';
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
    extendStatics$1(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$2 = function() {
    __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};

function __values$2(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read$2(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

var setPrototypeOf = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
/**
 * setPrototypeOf polyfill using __proto__
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function setProtoOf(obj, proto) {
    // @ts-ignore __proto__ does not exist on obj
    obj.__proto__ = proto;
    return obj;
}
/**
 * setPrototypeOf polyfill using mixin
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function mixinProperties(obj, proto) {
    for (var prop in proto) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
            // @ts-ignore typescript complains about indexing so we remove
            obj[prop] = proto[prop];
        }
    }
    return obj;
}

/** An error emitted by Sentry SDKs and related utilities. */
var SentryError = /** @class */ (function (_super) {
    __extends$1(SentryError, _super);
    function SentryError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _newTarget.prototype.constructor.name;
        setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return SentryError;
}(Error));

/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
/** Error message */
var ERROR_MESSAGE = 'Invalid Dsn';
/** The Sentry Dsn, identifying a Sentry instance and project. */
var Dsn = /** @class */ (function () {
    /** Creates a new Dsn component */
    function Dsn(from) {
        if (typeof from === 'string') {
            this._fromString(from);
        }
        else {
            this._fromComponents(from);
        }
        this._validate();
    }
    /**
     * Renders the string representation of this Dsn.
     *
     * By default, this will render the public representation without the password
     * component. To get the deprecated private representation, set `withPassword`
     * to true.
     *
     * @param withPassword When set to true, the password will be included.
     */
    Dsn.prototype.toString = function (withPassword) {
        if (withPassword === void 0) { withPassword = false; }
        var _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, publicKey = _a.publicKey;
        return (protocol + "://" + publicKey + (withPassword && pass ? ":" + pass : '') +
            ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
    };
    /** Parses a string into this Dsn. */
    Dsn.prototype._fromString = function (str) {
        var match = DSN_REGEX.exec(str);
        if (!match) {
            throw new SentryError(ERROR_MESSAGE);
        }
        var _a = __read$2(match.slice(1), 6), protocol = _a[0], publicKey = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
        var path = '';
        var projectId = lastPath;
        var split = projectId.split('/');
        if (split.length > 1) {
            path = split.slice(0, -1).join('/');
            projectId = split.pop();
        }
        if (projectId) {
            var projectMatch = projectId.match(/^\d+/);
            if (projectMatch) {
                projectId = projectMatch[0];
            }
        }
        this._fromComponents({ host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, publicKey: publicKey });
    };
    /** Maps Dsn components into this instance. */
    Dsn.prototype._fromComponents = function (components) {
        // TODO this is for backwards compatibility, and can be removed in a future version
        if ('user' in components && !('publicKey' in components)) {
            components.publicKey = components.user;
        }
        this.user = components.publicKey || '';
        this.protocol = components.protocol;
        this.publicKey = components.publicKey || '';
        this.pass = components.pass || '';
        this.host = components.host;
        this.port = components.port || '';
        this.path = components.path || '';
        this.projectId = components.projectId;
    };
    /** Validates this Dsn and throws on error. */
    Dsn.prototype._validate = function () {
        var _this = this;
        ['protocol', 'publicKey', 'host', 'projectId'].forEach(function (component) {
            if (!_this[component]) {
                throw new SentryError(ERROR_MESSAGE + ": " + component + " missing");
            }
        });
        if (!this.projectId.match(/^\d+$/)) {
            throw new SentryError(ERROR_MESSAGE + ": Invalid projectId " + this.projectId);
        }
        if (this.protocol !== 'http' && this.protocol !== 'https') {
            throw new SentryError(ERROR_MESSAGE + ": Invalid protocol " + this.protocol);
        }
        if (this.port && isNaN(parseInt(this.port, 10))) {
            throw new SentryError(ERROR_MESSAGE + ": Invalid port " + this.port);
        }
    };
    return Dsn;
}());

// TODO: Implement different loggers for different environments
var global$9 = getGlobalObject();
/** Prefix for logging strings */
var PREFIX = 'Sentry Logger ';
/**
 * Temporarily unwrap `console.log` and friends in order to perform the given callback using the original methods.
 * Restores wrapping after the callback completes.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
    var global = getGlobalObject();
    var levels = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
    if (!('console' in global)) {
        return callback();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (level in global.console && originalConsole[level].__sentry_original__) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this._enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this._enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this._enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global$9.console.log(PREFIX + "[Log]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global$9.console.warn(PREFIX + "[Warn]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global$9.console.error(PREFIX + "[Error]: " + args.join(' '));
        });
    };
    return Logger;
}());
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
global$9.__SENTRY__ = global$9.__SENTRY__ || {};
var logger = global$9.__SENTRY__.logger || (global$9.__SENTRY__.logger = new Logger());

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
var Memo = /** @class */ (function () {
    function Memo() {
        this._hasWeakSet = typeof WeakSet === 'function';
        this._inner = this._hasWeakSet ? new WeakSet() : [];
    }
    /**
     * Sets obj to remember.
     * @param obj Object to remember
     */
    Memo.prototype.memoize = function (obj) {
        if (this._hasWeakSet) {
            if (this._inner.has(obj)) {
                return true;
            }
            this._inner.add(obj);
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (var i = 0; i < this._inner.length; i++) {
            var value = this._inner[i];
            if (value === obj) {
                return true;
            }
        }
        this._inner.push(obj);
        return false;
    };
    /**
     * Removes object from internal storage.
     * @param obj Object to forget
     */
    Memo.prototype.unmemoize = function (obj) {
        if (this._hasWeakSet) {
            this._inner.delete(obj);
        }
        else {
            for (var i = 0; i < this._inner.length; i++) {
                if (this._inner[i] === obj) {
                    this._inner.splice(i, 1);
                    break;
                }
            }
        }
    };
    return Memo;
}());

var defaultFunctionName = '<anonymous>';
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== 'function') {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    if (typeof str !== 'string' || max === 0) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
    if (!isString(value)) {
        return false;
    }
    if (isRegExp(pattern)) {
        return pattern.test(value);
    }
    if (typeof pattern === 'string') {
        return value.indexOf(pattern) !== -1;
    }
    return false;
}

/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacementFactory(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === 'function') {
        try {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __sentry_original__: {
                    enumerable: false,
                    value: original,
                },
            });
        }
        catch (_Oo) {
            // This can throw if multiple fill happens on a global object like XMLHttpRequest
            // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
        }
    }
    source[name] = wrapped;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
/**
 * Transforms any object into an object literal with all its attributes
 * attached to it.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 */
function getWalkSource(value) {
    if (isError(value)) {
        var error = value;
        var err = {
            message: error.message,
            name: error.name,
            stack: error.stack,
        };
        for (var i in error) {
            if (Object.prototype.hasOwnProperty.call(error, i)) {
                err[i] = error[i];
            }
        }
        return err;
    }
    if (isEvent(value)) {
        var event_1 = value;
        var source = {};
        // Accessing event attributes can throw (see https://github.com/getsentry/sentry-javascript/issues/768 and
        // https://github.com/getsentry/sentry-javascript/issues/838), but accessing `type` hasn't been wrapped in a
        // try-catch in at least two years and no one's complained, so that's likely not an issue anymore
        source.type = event_1.type;
        try {
            source.target = isElement(event_1.target)
                ? htmlTreeAsString(event_1.target)
                : Object.prototype.toString.call(event_1.target);
        }
        catch (_oO) {
            source.target = '<unknown>';
        }
        try {
            source.currentTarget = isElement(event_1.currentTarget)
                ? htmlTreeAsString(event_1.currentTarget)
                : Object.prototype.toString.call(event_1.currentTarget);
        }
        catch (_oO) {
            source.currentTarget = '<unknown>';
        }
        if (typeof CustomEvent !== 'undefined' && isInstanceOf(value, CustomEvent)) {
            source.detail = event_1.detail;
        }
        for (var attr in event_1) {
            if (Object.prototype.hasOwnProperty.call(event_1, attr)) {
                source[attr] = event_1[attr];
            }
        }
        return source;
    }
    return value;
}
/** Calculates bytes size of input string */
function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/** JSDoc */
function normalizeToSize(object, 
// Default Node.js REPL depth
depth, 
// 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize) {
    if (depth === void 0) { depth = 3; }
    if (maxSize === void 0) { maxSize = 100 * 1024; }
    var serialized = normalize(object, depth);
    if (jsonSize(serialized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return serialized;
}
/**
 * Transform any non-primitive, BigInt, or Symbol-type value into a string. Acts as a no-op on strings, numbers,
 * booleans, null, and undefined.
 *
 * @param value The value to stringify
 * @returns For non-primitive, BigInt, and Symbol-type values, a string denoting the value's type, type and value, or
 *  type and `description` property, respectively. For non-BigInt, non-Symbol primitives, returns the original value,
 *  unchanged.
 */
function serializeValue(value) {
    var type = Object.prototype.toString.call(value);
    // Node.js REPL notation
    if (typeof value === 'string') {
        return value;
    }
    if (type === '[object Object]') {
        return '[Object]';
    }
    if (type === '[object Array]') {
        return '[Array]';
    }
    var normalized = normalizeValue(value);
    return isPrimitive(normalized) ? normalized : type;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
function normalizeValue(value, key) {
    if (key === 'domain' && value && typeof value === 'object' && value._events) {
        return '[Domain]';
    }
    if (key === 'domainEmitter') {
        return '[DomainEmitter]';
    }
    if (typeof global !== 'undefined' && value === global) {
        return '[Global]';
    }
    // It's safe to use `window` and `document` here in this manner, as we are asserting using `typeof` first
    // which won't throw if they are not present.
    // eslint-disable-next-line no-restricted-globals
    if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
    }
    // eslint-disable-next-line no-restricted-globals
    if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
    }
    // React's SyntheticEvent thingy
    if (isSyntheticEvent(value)) {
        return '[SyntheticEvent]';
    }
    if (typeof value === 'number' && value !== value) {
        return '[NaN]';
    }
    if (value === void 0) {
        return '[undefined]';
    }
    if (typeof value === 'function') {
        return "[Function: " + getFunctionName(value) + "]";
    }
    // symbols and bigints are considered primitives by TS, but aren't natively JSON-serilaizable
    if (typeof value === 'symbol') {
        return "[" + String(value) + "]";
    }
    if (typeof value === 'bigint') {
        return "[BigInt: " + String(value) + "]";
    }
    return value;
}
/**
 * Walks an object to perform a normalization on it
 *
 * @param key of object that's walked in current iteration
 * @param value object to be walked
 * @param depth Optional number indicating how deep should walking be performed
 * @param memo Optional Memo class handling decycling
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function walk(key, value, depth, memo) {
    if (depth === void 0) { depth = +Infinity; }
    if (memo === void 0) { memo = new Memo(); }
    // If we reach the maximum depth, serialize whatever has left
    if (depth === 0) {
        return serializeValue(value);
    }
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // If value implements `toJSON` method, call it and return early
    if (value !== null && value !== undefined && typeof value.toJSON === 'function') {
        return value.toJSON();
    }
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    // If normalized value is a primitive, there are no branches left to walk, so we can just bail out, as theres no point in going down that branch any further
    var normalized = normalizeValue(value, key);
    if (isPrimitive(normalized)) {
        return normalized;
    }
    // Create source that we will use for next itterations, either objectified error object (Error type with extracted keys:value pairs) or the input itself
    var source = getWalkSource(value);
    // Create an accumulator that will act as a parent for all future itterations of that branch
    var acc = Array.isArray(value) ? [] : {};
    // If we already walked that branch, bail out, as it's circular reference
    if (memo.memoize(value)) {
        return '[Circular ~]';
    }
    // Walk all keys of the source
    for (var innerKey in source) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(source, innerKey)) {
            continue;
        }
        // Recursively walk through all the child nodes
        acc[innerKey] = walk(innerKey, source[innerKey], depth - 1, memo);
    }
    // Once walked through all the branches, remove the parent from memo storage
    memo.unmemoize(value);
    // Return accumulated values
    return acc;
}
/**
 * normalize()
 *
 * - Creates a copy to prevent original input mutation
 * - Skip non-enumerablers
 * - Calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializeable values (undefined/NaN/Functions) to serializable format
 * - Translates known global objects/Classes to a string representations
 * - Takes care of Error objects serialization
 * - Optionally limit depth of final output
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function normalize(input, depth) {
    try {
        return JSON.parse(JSON.stringify(input, function (key, value) { return walk(key, value, depth); }));
    }
    catch (_oO) {
        return '**non-serializable**';
    }
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function extractExceptionKeysForMessage(exception, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    var keys = Object.keys(getWalkSource(exception));
    keys.sort();
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return truncate(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return truncate(serialized, maxLength);
    }
    return '';
}
/**
 * Given any object, return the new object with removed keys that value was `undefined`.
 * Works recursively on objects and arrays.
 */
function dropUndefinedKeys(val) {
    var e_1, _a;
    if (isPlainObject(val)) {
        var obj = val;
        var rv = {};
        try {
            for (var _b = __values$2(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (typeof obj[key] !== 'undefined') {
                    rv[key] = dropUndefinedKeys(obj[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rv;
    }
    if (Array.isArray(val)) {
        return val.map(dropUndefinedKeys);
    }
    return val;
}

/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
    if (!('fetch' in getGlobalObject())) {
        return false;
    }
    try {
        new Headers();
        new Request('');
        new Response();
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
    if (!supportsFetch()) {
        return false;
    }
    var global = getGlobalObject();
    // Fast path to avoid DOM I/O
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (isNativeFetch(global.fetch)) {
        return true;
    }
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    var result = false;
    var doc = global.document;
    // eslint-disable-next-line deprecation/deprecation
    if (doc && typeof doc.createElement === "function") {
        try {
            var sandbox = doc.createElement('iframe');
            sandbox.hidden = true;
            doc.head.appendChild(sandbox);
            if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                result = isNativeFetch(sandbox.contentWindow.fetch);
            }
            doc.head.removeChild(sandbox);
        }
        catch (err) {
            logger.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
        }
    }
    return result;
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) {
        return false;
    }
    try {
        new Request('_', {
            referrerPolicy: 'origin',
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = getGlobalObject();
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var chrome = global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}

var global$8 = getGlobalObject();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */
var handlers = {};
var instrumented = {};
/** Instruments given API */
function instrument(type) {
    if (instrumented[type]) {
        return;
    }
    instrumented[type] = true;
    switch (type) {
        case 'console':
            instrumentConsole();
            break;
        case 'dom':
            instrumentDOM();
            break;
        case 'xhr':
            instrumentXHR();
            break;
        case 'fetch':
            instrumentFetch();
            break;
        case 'history':
            instrumentHistory();
            break;
        case 'error':
            instrumentError();
            break;
        case 'unhandledrejection':
            instrumentUnhandledRejection();
            break;
        default:
            logger.warn('unknown instrumentation type:', type);
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(handler) {
    if (!handler || typeof handler.type !== 'string' || typeof handler.callback !== 'function') {
        return;
    }
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type].push(handler.callback);
    instrument(handler.type);
}
/** JSDoc */
function triggerHandlers(type, data) {
    var e_1, _a;
    if (!type || !handlers[type]) {
        return;
    }
    try {
        for (var _b = __values$2(handlers[type] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            try {
                handler(data);
            }
            catch (e) {
                logger.error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + getFunctionName(handler) + "\nError: " + e);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/** JSDoc */
function instrumentConsole() {
    if (!('console' in global$8)) {
        return;
    }
    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level) {
        if (!(level in global$8.console)) {
            return;
        }
        fill(global$8.console, level, function (originalConsoleLevel) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                triggerHandlers('console', { args: args, level: level });
                // this fails for some browsers. :(
                if (originalConsoleLevel) {
                    Function.prototype.apply.call(originalConsoleLevel, global$8.console, args);
                }
            };
        });
    });
}
/** JSDoc */
function instrumentFetch() {
    if (!supportsNativeFetch()) {
        return;
    }
    fill(global$8, 'fetch', function (originalFetch) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var handlerData = {
                args: args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args),
                },
                startTimestamp: Date.now(),
            };
            triggerHandlers('fetch', __assign$2({}, handlerData));
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return originalFetch.apply(global$8, args).then(function (response) {
                triggerHandlers('fetch', __assign$2(__assign$2({}, handlerData), { endTimestamp: Date.now(), response: response }));
                return response;
            }, function (error) {
                triggerHandlers('fetch', __assign$2(__assign$2({}, handlerData), { endTimestamp: Date.now(), error: error }));
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** Extract `method` from fetch call arguments */
function getFetchMethod(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if ('Request' in global$8 && isInstanceOf(fetchArgs[0], Request) && fetchArgs[0].method) {
        return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
        return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
}
/** Extract `url` from fetch call arguments */
function getFetchUrl(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if (typeof fetchArgs[0] === 'string') {
        return fetchArgs[0];
    }
    if ('Request' in global$8 && isInstanceOf(fetchArgs[0], Request)) {
        return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/** JSDoc */
function instrumentXHR() {
    if (!('XMLHttpRequest' in global$8)) {
        return;
    }
    // Poor man's implementation of ES6 `Map`, tracking and keeping in sync key and value separately.
    var requestKeys = [];
    var requestValues = [];
    var xhrproto = XMLHttpRequest.prototype;
    fill(xhrproto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var url = args[1];
            xhr.__sentry_xhr__ = {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                method: isString(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
            };
            // if Sentry key appears in URL, don't capture it as a request
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (isString(url) && xhr.__sentry_xhr__.method === 'POST' && url.match(/sentry_key/)) {
                xhr.__sentry_own_request__ = true;
            }
            var onreadystatechangeHandler = function () {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        if (xhr.__sentry_xhr__) {
                            xhr.__sentry_xhr__.status_code = xhr.status;
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    try {
                        var requestPos = requestKeys.indexOf(xhr);
                        if (requestPos !== -1) {
                            // Make sure to pop both key and value to keep it in sync.
                            requestKeys.splice(requestPos);
                            var args_1 = requestValues.splice(requestPos)[0];
                            if (xhr.__sentry_xhr__ && args_1[0] !== undefined) {
                                xhr.__sentry_xhr__.body = args_1[0];
                            }
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    triggerHandlers('xhr', {
                        args: args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: xhr,
                    });
                }
            };
            if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
                fill(xhr, 'onreadystatechange', function (original) {
                    return function () {
                        var readyStateArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            readyStateArgs[_i] = arguments[_i];
                        }
                        onreadystatechangeHandler();
                        return original.apply(xhr, readyStateArgs);
                    };
                });
            }
            else {
                xhr.addEventListener('readystatechange', onreadystatechangeHandler);
            }
            return originalOpen.apply(xhr, args);
        };
    });
    fill(xhrproto, 'send', function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            requestKeys.push(this);
            requestValues.push(args);
            triggerHandlers('xhr', {
                args: args,
                startTimestamp: Date.now(),
                xhr: this,
            });
            return originalSend.apply(this, args);
        };
    });
}
var lastHref;
/** JSDoc */
function instrumentHistory() {
    if (!supportsHistory()) {
        return;
    }
    var oldOnPopState = global$8.onpopstate;
    global$8.onpopstate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = global$8.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers('history', {
            from: from,
            to: to,
        });
        if (oldOnPopState) {
            // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
            // https://github.com/getsentry/sentry-javascript/issues/3344
            // https://github.com/bugsnag/bugsnag-js/issues/469
            try {
                return oldOnPopState.apply(this, args);
            }
            catch (_oO) {
                // no-empty
            }
        }
    };
    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers('history', {
                    from: from,
                    to: to,
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    fill(global$8.history, 'pushState', historyReplacementFunction);
    fill(global$8.history, 'replaceState', historyReplacementFunction);
}
var debounceDuration = 1000;
var debounceTimerID;
var lastCapturedEvent;
/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */
function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) {
        return true;
    }
    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) {
        return true;
    }
    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (previous.target !== current.target) {
            return true;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
}
/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== 'keypress') {
        return false;
    }
    try {
        var target = event.target;
        if (!target || !target.tagName) {
            return true;
        }
        // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
        // e.g.tabbing through elements, hotkeys, etc.
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
            return false;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    return true;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler, globalListener) {
    if (globalListener === void 0) { globalListener = false; }
    return function (event) {
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || lastCapturedEvent === event) {
            return;
        }
        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event)) {
            return;
        }
        var name = event.type === 'keypress' ? 'input' : event.type;
        // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
        if (debounceTimerID === undefined) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
        // If that's the case, emit the previous event and store locally the newly-captured DOM event.
        else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = global$8.setTimeout(function () {
            debounceTimerID = undefined;
        }, debounceDuration);
    };
}
/** JSDoc */
function instrumentDOM() {
    if (!('document' in global$8)) {
        return;
    }
    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    var triggerDOMHandler = triggerHandlers.bind(null, 'dom');
    var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    global$8.document.addEventListener('click', globalDOMEventHandler, false);
    global$8.document.addEventListener('keypress', globalDOMEventHandler, false);
    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    ['EventTarget', 'Node'].forEach(function (target) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = global$8[target] && global$8[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        fill(proto, 'addEventListener', function (originalAddEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_1 = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
                        var handlerForType = (handlers_1[type] = handlers_1[type] || { refCount: 0 });
                        if (!handlerForType.handler) {
                            var handler = makeDOMEventHandler(triggerDOMHandler);
                            handlerForType.handler = handler;
                            originalAddEventListener.call(this, type, handler, options);
                        }
                        handlerForType.refCount += 1;
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        fill(proto, 'removeEventListener', function (originalRemoveEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_2 = el.__sentry_instrumentation_handlers__ || {};
                        var handlerForType = handlers_2[type];
                        if (handlerForType) {
                            handlerForType.refCount -= 1;
                            // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                            if (handlerForType.refCount <= 0) {
                                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                handlerForType.handler = undefined;
                                delete handlers_2[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                            }
                            // If there are no longer any custom handlers of any type on this element, cleanup everything.
                            if (Object.keys(handlers_2).length === 0) {
                                delete el.__sentry_instrumentation_handlers__;
                            }
                        }
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
var _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
    _oldOnErrorHandler = global$8.onerror;
    global$8.onerror = function (msg, url, line, column, error) {
        triggerHandlers('error', {
            column: column,
            error: error,
            line: line,
            msg: msg,
            url: url,
        });
        if (_oldOnErrorHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
    };
}
var _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global$8.onunhandledrejection;
    global$8.onunhandledrejection = function (e) {
        triggerHandlers('unhandledrejection', e);
        if (_oldOnUnhandledRejectionHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
    };
}

/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = getGlobalObject();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // eslint-disable-next-line no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // eslint-disable-next-line no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    if (event.message) {
        return event.message;
    }
    if (event.exception && event.exception.values && event.exception.values[0]) {
        var exception = event.exception.values[0];
        if (exception.type && exception.value) {
            return exception.type + ": " + exception.value;
        }
        return exception.type || exception.value || event.event_id || '<unknown>';
    }
    return event.event_id || '<unknown>';
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
    event.exception = event.exception || {};
    event.exception.values = event.exception.values || [];
    event.exception.values[0] = event.exception.values[0] || {};
    event.exception.values[0].value = event.exception.values[0].value || value || '';
    event.exception.values[0].type = event.exception.values[0].type || type || 'Error';
}
/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
function addExceptionMechanism(event, newMechanism) {
    var _a;
    if (!event.exception || !event.exception.values) {
        return;
    }
    var exceptionValue0 = event.exception.values[0];
    var defaultMechanism = { type: 'generic', handled: true };
    var currentMechanism = exceptionValue0.mechanism;
    exceptionValue0.mechanism = __assign$2(__assign$2(__assign$2({}, defaultMechanism), currentMechanism), newMechanism);
    if (newMechanism && 'data' in newMechanism) {
        var mergedData = __assign$2(__assign$2({}, (_a = currentMechanism) === null || _a === void 0 ? void 0 : _a.data), newMechanism.data);
        exceptionValue0.mechanism.data = mergedData;
    }
}
var defaultRetryAfter = 60 * 1000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param now current unix timestamp
 * @param header string representation of 'Retry-After' header
 */
function parseRetryAfterHeader(now, header) {
    if (!header) {
        return defaultRetryAfter;
    }
    var headerDelay = parseInt("" + header, 10);
    if (!isNaN(headerDelay)) {
        return headerDelay * 1000;
    }
    var headerDate = Date.parse("" + header);
    if (!isNaN(headerDate)) {
        return headerDate - now;
    }
    return defaultRetryAfter;
}
/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
function checkOrSetAlreadyCaught(exception) {
    var _a;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if ((_a = exception) === null || _a === void 0 ? void 0 : _a.__sentry_captured__) {
        return true;
    }
    try {
        // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
        // `ExtraErrorData` integration
        Object.defineProperty(exception, '__sentry_captured__', {
            value: true,
        });
    }
    catch (err) {
        // `exception` is a primitive, so we can't mark it seen
    }
    return false;
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** SyncPromise internal states */
var States;
(function (States) {
    /** Pending */
    States["PENDING"] = "PENDING";
    /** Resolved / OK */
    States["RESOLVED"] = "RESOLVED";
    /** Rejected / Error */
    States["REJECTED"] = "REJECTED";
})(States || (States = {}));
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
var SyncPromise = /** @class */ (function () {
    function SyncPromise(executor) {
        var _this = this;
        this._state = States.PENDING;
        this._handlers = [];
        /** JSDoc */
        this._resolve = function (value) {
            _this._setResult(States.RESOLVED, value);
        };
        /** JSDoc */
        this._reject = function (reason) {
            _this._setResult(States.REJECTED, reason);
        };
        /** JSDoc */
        this._setResult = function (state, value) {
            if (_this._state !== States.PENDING) {
                return;
            }
            if (isThenable(value)) {
                void value.then(_this._resolve, _this._reject);
                return;
            }
            _this._state = state;
            _this._value = value;
            _this._executeHandlers();
        };
        // TODO: FIXME
        /** JSDoc */
        this._attachHandler = function (handler) {
            _this._handlers = _this._handlers.concat(handler);
            _this._executeHandlers();
        };
        /** JSDoc */
        this._executeHandlers = function () {
            if (_this._state === States.PENDING) {
                return;
            }
            var cachedHandlers = _this._handlers.slice();
            _this._handlers = [];
            cachedHandlers.forEach(function (handler) {
                if (handler.done) {
                    return;
                }
                if (_this._state === States.RESOLVED) {
                    if (handler.onfulfilled) {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        handler.onfulfilled(_this._value);
                    }
                }
                if (_this._state === States.REJECTED) {
                    if (handler.onrejected) {
                        handler.onrejected(_this._value);
                    }
                }
                handler.done = true;
            });
        };
        try {
            executor(this._resolve, this._reject);
        }
        catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */
    SyncPromise.resolve = function (value) {
        return new SyncPromise(function (resolve) {
            resolve(value);
        });
    };
    /** JSDoc */
    SyncPromise.reject = function (reason) {
        return new SyncPromise(function (_, reject) {
            reject(reason);
        });
    };
    /** JSDoc */
    SyncPromise.all = function (collection) {
        return new SyncPromise(function (resolve, reject) {
            if (!Array.isArray(collection)) {
                reject(new TypeError("Promise.all requires an array as input."));
                return;
            }
            if (collection.length === 0) {
                resolve([]);
                return;
            }
            var counter = collection.length;
            var resolvedCollection = [];
            collection.forEach(function (item, index) {
                void SyncPromise.resolve(item)
                    .then(function (value) {
                    resolvedCollection[index] = value;
                    counter -= 1;
                    if (counter !== 0) {
                        return;
                    }
                    resolve(resolvedCollection);
                })
                    .then(null, reject);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            _this._attachHandler({
                done: false,
                onfulfilled: function (result) {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                        return;
                    }
                    try {
                        resolve(onfulfilled(result));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
                onrejected: function (reason) {
                    if (!onrejected) {
                        reject(reason);
                        return;
                    }
                    try {
                        resolve(onrejected(reason));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.catch = function (onrejected) {
        return this.then(function (val) { return val; }, onrejected);
    };
    /** JSDoc */
    SyncPromise.prototype.finally = function (onfinally) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            var val;
            var isRejected;
            return _this.then(function (value) {
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, function (reason) {
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(function () {
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.toString = function () {
        return '[object SyncPromise]';
    };
    return SyncPromise;
}());

/** A simple queue that holds promises. */
var PromiseBuffer = /** @class */ (function () {
    function PromiseBuffer(_limit) {
        this._limit = _limit;
        /** Internal set of queued Promises */
        this._buffer = [];
    }
    /**
     * Says if the buffer is ready to take more requests
     */
    PromiseBuffer.prototype.isReady = function () {
        return this._limit === undefined || this.length() < this._limit;
    };
    /**
     * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
     *
     * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
     *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
     *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
     *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
     *        limit check.
     * @returns The original promise.
     */
    PromiseBuffer.prototype.add = function (taskProducer) {
        var _this = this;
        if (!this.isReady()) {
            return SyncPromise.reject(new SentryError('Not adding Promise due to buffer limit reached.'));
        }
        // start the task and add its promise to the queue
        var task = taskProducer();
        if (this._buffer.indexOf(task) === -1) {
            this._buffer.push(task);
        }
        void task
            .then(function () { return _this.remove(task); })
            // Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
            // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
            // have promises, so TS has to polyfill when down-compiling.)
            .then(null, function () {
            return _this.remove(task).then(null, function () {
                // We have to add another catch here because `this.remove()` starts a new promise chain.
            });
        });
        return task;
    };
    /**
     * Remove a promise from the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns Removed promise.
     */
    PromiseBuffer.prototype.remove = function (task) {
        var removedTask = this._buffer.splice(this._buffer.indexOf(task), 1)[0];
        return removedTask;
    };
    /**
     * This function returns the number of unresolved promises in the queue.
     */
    PromiseBuffer.prototype.length = function () {
        return this._buffer.length;
    };
    /**
     * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
     * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
     * `false` otherwise
     */
    PromiseBuffer.prototype.drain = function (timeout) {
        var _this = this;
        return new SyncPromise(function (resolve) {
            // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
            var capturedSetTimeout = setTimeout(function () {
                if (timeout && timeout > 0) {
                    resolve(false);
                }
            }, timeout);
            // if all promises resolve in time, cancel the timer and resolve to `true`
            void SyncPromise.all(_this._buffer)
                .then(function () {
                clearTimeout(capturedSetTimeout);
                resolve(true);
            })
                .then(null, function () {
                resolve(true);
            });
        });
    };
    return PromiseBuffer;
}());

/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
var dateTimestampSource = {
    nowSeconds: function () { return Date.now() / 1000; },
};
/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
    var performance = getGlobalObject().performance;
    if (!performance || !performance.now) {
        return undefined;
    }
    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    var timeOrigin = Date.now() - performance.now();
    return {
        now: function () { return performance.now(); },
        timeOrigin: timeOrigin,
    };
}
/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
    try {
        var perfHooks = dynamicRequire(module, 'perf_hooks');
        return perfHooks.performance;
    }
    catch (_) {
        return undefined;
    }
}
/**
 * The Performance API implementation for the current platform, if available.
 */
var platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === undefined
    ? dateTimestampSource
    : {
        nowSeconds: function () { return (platformPerformance.timeOrigin + platformPerformance.now()) / 1000; },
    };
/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
// Re-exported with an old name for backwards-compatibility.
var timestampWithMs = timestampInSeconds;
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
var browserPerformanceTimeOrigin = (function () {
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    var performance = getGlobalObject().performance;
    if (!performance || !performance.now) {
        return undefined;
    }
    var threshold = 3600 * 1000;
    var performanceNow = performance.now();
    var dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    var timeOriginDelta = performance.timeOrigin
        ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
        : threshold;
    var timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    // eslint-disable-next-line deprecation/deprecation
    var navigationStart = performance.timing && performance.timing.navigationStart;
    var hasNavigationStart = typeof navigationStart === 'number';
    // if navigationStart isn't available set delta to threshold so it isn't used
    var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    var navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            return performance.timeOrigin;
        }
        else {
            return navigationStart;
        }
    }
    return dateNow;
})();

/**
 * Absolute maximum number of breadcrumbs added to an event.
 * The `maxBreadcrumbs` option cannot be higher than this value.
 */
var MAX_BREADCRUMBS = 100;
/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope = /** @class */ (function () {
    function Scope() {
        /** Flag if notifying is happening. */
        this._notifyingListeners = false;
        /** Callback for client to receive scope changes. */
        this._scopeListeners = [];
        /** Callback list that will be called after {@link applyToEvent}. */
        this._eventProcessors = [];
        /** Array of breadcrumbs. */
        this._breadcrumbs = [];
        /** User */
        this._user = {};
        /** Tags */
        this._tags = {};
        /** Extra */
        this._extra = {};
        /** Contexts */
        this._contexts = {};
    }
    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
    Scope.clone = function (scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = __spread$2(scope._breadcrumbs);
            newScope._tags = __assign$3({}, scope._tags);
            newScope._extra = __assign$3({}, scope._extra);
            newScope._contexts = __assign$3({}, scope._contexts);
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._session = scope._session;
            newScope._transactionName = scope._transactionName;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = __spread$2(scope._eventProcessors);
            newScope._requestSession = scope._requestSession;
        }
        return newScope;
    };
    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
    Scope.prototype.addScopeListener = function (callback) {
        this._scopeListeners.push(callback);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addEventProcessor = function (callback) {
        this._eventProcessors.push(callback);
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setUser = function (user) {
        this._user = user || {};
        if (this._session) {
            this._session.update({ user: user });
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getUser = function () {
        return this._user;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getRequestSession = function () {
        return this._requestSession;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setRequestSession = function (requestSession) {
        this._requestSession = requestSession;
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTags = function (tags) {
        this._tags = __assign$3(__assign$3({}, this._tags), tags);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTag = function (key, value) {
        var _a;
        this._tags = __assign$3(__assign$3({}, this._tags), (_a = {}, _a[key] = value, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtras = function (extras) {
        this._extra = __assign$3(__assign$3({}, this._extra), extras);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtra = function (key, extra) {
        var _a;
        this._extra = __assign$3(__assign$3({}, this._extra), (_a = {}, _a[key] = extra, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setFingerprint = function (fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setLevel = function (level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTransactionName = function (name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Can be removed in major version.
     * @deprecated in favor of {@link this.setTransactionName}
     */
    Scope.prototype.setTransaction = function (name) {
        return this.setTransactionName(name);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setContext = function (key, context) {
        var _a;
        if (context === null) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this._contexts[key];
        }
        else {
            this._contexts = __assign$3(__assign$3({}, this._contexts), (_a = {}, _a[key] = context, _a));
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSpan = function (span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSpan = function () {
        return this._span;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getTransaction = function () {
        var _a, _b, _c, _d;
        // often, this span will be a transaction, but it's not guaranteed to be
        var span = this.getSpan();
        // try it the new way first
        if ((_a = span) === null || _a === void 0 ? void 0 : _a.transaction) {
            return (_b = span) === null || _b === void 0 ? void 0 : _b.transaction;
        }
        // fallback to the old way (known bug: this only finds transactions with sampled = true)
        if ((_d = (_c = span) === null || _c === void 0 ? void 0 : _c.spanRecorder) === null || _d === void 0 ? void 0 : _d.spans[0]) {
            return span.spanRecorder.spans[0];
        }
        // neither way found a transaction
        return undefined;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSession = function (session) {
        if (!session) {
            delete this._session;
        }
        else {
            this._session = session;
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSession = function () {
        return this._session;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.update = function (captureContext) {
        if (!captureContext) {
            return this;
        }
        if (typeof captureContext === 'function') {
            var updatedScope = captureContext(this);
            return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
            this._tags = __assign$3(__assign$3({}, this._tags), captureContext._tags);
            this._extra = __assign$3(__assign$3({}, this._extra), captureContext._extra);
            this._contexts = __assign$3(__assign$3({}, this._contexts), captureContext._contexts);
            if (captureContext._user && Object.keys(captureContext._user).length) {
                this._user = captureContext._user;
            }
            if (captureContext._level) {
                this._level = captureContext._level;
            }
            if (captureContext._fingerprint) {
                this._fingerprint = captureContext._fingerprint;
            }
            if (captureContext._requestSession) {
                this._requestSession = captureContext._requestSession;
            }
        }
        else if (isPlainObject(captureContext)) {
            // eslint-disable-next-line no-param-reassign
            captureContext = captureContext;
            this._tags = __assign$3(__assign$3({}, this._tags), captureContext.tags);
            this._extra = __assign$3(__assign$3({}, this._extra), captureContext.extra);
            this._contexts = __assign$3(__assign$3({}, this._contexts), captureContext.contexts);
            if (captureContext.user) {
                this._user = captureContext.user;
            }
            if (captureContext.level) {
                this._level = captureContext.level;
            }
            if (captureContext.fingerprint) {
                this._fingerprint = captureContext.fingerprint;
            }
            if (captureContext.requestSession) {
                this._requestSession = captureContext.requestSession;
            }
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clear = function () {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._requestSession = undefined;
        this._span = undefined;
        this._session = undefined;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
        var maxCrumbs = typeof maxBreadcrumbs === 'number' ? Math.min(maxBreadcrumbs, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
        // No data has been changed, so don't notify scope listeners
        if (maxCrumbs <= 0) {
            return this;
        }
        var mergedBreadcrumb = __assign$3({ timestamp: dateTimestampInSeconds() }, breadcrumb);
        this._breadcrumbs = __spread$2(this._breadcrumbs, [mergedBreadcrumb]).slice(-maxCrumbs);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clearBreadcrumbs = function () {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event Event
     * @param hint May contain additional information about the original exception.
     * @hidden
     */
    Scope.prototype.applyToEvent = function (event, hint) {
        var _a;
        if (this._extra && Object.keys(this._extra).length) {
            event.extra = __assign$3(__assign$3({}, this._extra), event.extra);
        }
        if (this._tags && Object.keys(this._tags).length) {
            event.tags = __assign$3(__assign$3({}, this._tags), event.tags);
        }
        if (this._user && Object.keys(this._user).length) {
            event.user = __assign$3(__assign$3({}, this._user), event.user);
        }
        if (this._contexts && Object.keys(this._contexts).length) {
            event.contexts = __assign$3(__assign$3({}, this._contexts), event.contexts);
        }
        if (this._level) {
            event.level = this._level;
        }
        if (this._transactionName) {
            event.transaction = this._transactionName;
        }
        // We want to set the trace context for normal events only if there isn't already
        // a trace context on the event. There is a product feature in place where we link
        // errors with transaction and it relies on that.
        if (this._span) {
            event.contexts = __assign$3({ trace: this._span.getTraceContext() }, event.contexts);
            var transactionName = (_a = this._span.transaction) === null || _a === void 0 ? void 0 : _a.name;
            if (transactionName) {
                event.tags = __assign$3({ transaction: transactionName }, event.tags);
            }
        }
        this._applyFingerprint(event);
        event.breadcrumbs = __spread$2((event.breadcrumbs || []), this._breadcrumbs);
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        return this._notifyEventProcessors(__spread$2(getGlobalEventProcessors(), this._eventProcessors), event, hint);
    };
    /**
     * This will be called after {@link applyToEvent} is finished.
     */
    Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        return new SyncPromise(function (resolve, reject) {
            var processor = processors[index];
            if (event === null || typeof processor !== 'function') {
                resolve(event);
            }
            else {
                var result = processor(__assign$3({}, event), hint);
                if (isThenable(result)) {
                    void result
                        .then(function (final) { return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve); })
                        .then(null, reject);
                }
                else {
                    void _this._notifyEventProcessors(processors, result, hint, index + 1)
                        .then(resolve)
                        .then(null, reject);
                }
            }
        });
    };
    /**
     * This will be called on every set call.
     */
    Scope.prototype._notifyScopeListeners = function () {
        var _this = this;
        // We need this check for this._notifyingListeners to be able to work on scope during updates
        // If this check is not here we'll produce endless recursion when something is done with the scope
        // during the callback.
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach(function (callback) {
                callback(_this);
            });
            this._notifyingListeners = false;
        }
    };
    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
    Scope.prototype._applyFingerprint = function (event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint
            ? Array.isArray(event.fingerprint)
                ? event.fingerprint
                : [event.fingerprint]
            : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) {
            event.fingerprint = event.fingerprint.concat(this._fingerprint);
        }
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) {
            delete event.fingerprint;
        }
    };
    return Scope;
}());
/**
 * Returns the global event processors.
 */
function getGlobalEventProcessors() {
    /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access  */
    var global = getGlobalObject();
    global.__SENTRY__ = global.__SENTRY__ || {};
    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
    return global.__SENTRY__.globalEventProcessors;
    /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}

/**
 * @inheritdoc
 */
var Session = /** @class */ (function () {
    function Session(context) {
        this.errors = 0;
        this.sid = uuid4();
        this.duration = 0;
        this.status = SessionStatus.Ok;
        this.init = true;
        this.ignoreDuration = false;
        // Both timestamp and started are in seconds since the UNIX epoch.
        var startingTime = timestampInSeconds();
        this.timestamp = startingTime;
        this.started = startingTime;
        if (context) {
            this.update(context);
        }
    }
    /** JSDoc */
    // eslint-disable-next-line complexity
    Session.prototype.update = function (context) {
        if (context === void 0) { context = {}; }
        if (context.user) {
            if (!this.ipAddress && context.user.ip_address) {
                this.ipAddress = context.user.ip_address;
            }
            if (!this.did && !context.did) {
                this.did = context.user.id || context.user.email || context.user.username;
            }
        }
        this.timestamp = context.timestamp || timestampInSeconds();
        if (context.ignoreDuration) {
            this.ignoreDuration = context.ignoreDuration;
        }
        if (context.sid) {
            // Good enough uuid validation. — Kamil
            this.sid = context.sid.length === 32 ? context.sid : uuid4();
        }
        if (context.init !== undefined) {
            this.init = context.init;
        }
        if (!this.did && context.did) {
            this.did = "" + context.did;
        }
        if (typeof context.started === 'number') {
            this.started = context.started;
        }
        if (this.ignoreDuration) {
            this.duration = undefined;
        }
        else if (typeof context.duration === 'number') {
            this.duration = context.duration;
        }
        else {
            var duration = this.timestamp - this.started;
            this.duration = duration >= 0 ? duration : 0;
        }
        if (context.release) {
            this.release = context.release;
        }
        if (context.environment) {
            this.environment = context.environment;
        }
        if (!this.ipAddress && context.ipAddress) {
            this.ipAddress = context.ipAddress;
        }
        if (!this.userAgent && context.userAgent) {
            this.userAgent = context.userAgent;
        }
        if (typeof context.errors === 'number') {
            this.errors = context.errors;
        }
        if (context.status) {
            this.status = context.status;
        }
    };
    /** JSDoc */
    Session.prototype.close = function (status) {
        if (status) {
            this.update({ status: status });
        }
        else if (this.status === SessionStatus.Ok) {
            this.update({ status: SessionStatus.Exited });
        }
        else {
            this.update();
        }
    };
    /** JSDoc */
    Session.prototype.toJSON = function () {
        return dropUndefinedKeys({
            sid: "" + this.sid,
            init: this.init,
            // Make sure that sec is converted to ms for date constructor
            started: new Date(this.started * 1000).toISOString(),
            timestamp: new Date(this.timestamp * 1000).toISOString(),
            status: this.status,
            errors: this.errors,
            did: typeof this.did === 'number' || typeof this.did === 'string' ? "" + this.did : undefined,
            duration: this.duration,
            attrs: dropUndefinedKeys({
                release: this.release,
                environment: this.environment,
                ip_address: this.ipAddress,
                user_agent: this.userAgent,
            }),
        });
    };
    return Session;
}());

/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
var API_VERSION = 4;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
var DEFAULT_BREADCRUMBS = 100;
/**
 * @inheritDoc
 */
var Hub = /** @class */ (function () {
    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
    function Hub(client, scope, _version) {
        if (scope === void 0) { scope = new Scope(); }
        if (_version === void 0) { _version = API_VERSION; }
        this._version = _version;
        /** Is a {@link Layer}[] containing the client and scope */
        this._stack = [{}];
        this.getStackTop().scope = scope;
        if (client) {
            this.bindClient(client);
        }
    }
    /**
     * @inheritDoc
     */
    Hub.prototype.isOlderThan = function (version) {
        return this._version < version;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.bindClient = function (client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) {
            client.setupIntegrations();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.pushScope = function () {
        // We want to clone the content of prev scope
        var scope = Scope.clone(this.getScope());
        this.getStack().push({
            client: this.getClient(),
            scope: scope,
        });
        return scope;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.popScope = function () {
        if (this.getStack().length <= 1)
            return false;
        return !!this.getStack().pop();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.withScope = function (callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        }
        finally {
            this.popScope();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getClient = function () {
        return this.getStackTop().client;
    };
    /** Returns the scope of the top stack. */
    Hub.prototype.getScope = function () {
        return this.getStackTop().scope;
    };
    /** Returns the scope stack for domains or the process. */
    Hub.prototype.getStack = function () {
        return this._stack;
    };
    /** Returns the topmost scope layer in the order domain > local > process. */
    Hub.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Hub.prototype.captureException = function (exception, hint) {
        var eventId = (this._lastEventId = uuid4());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error('Sentry syntheticException');
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: exception,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureException', exception, __assign$3(__assign$3({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureMessage = function (message, level, hint) {
        var eventId = (this._lastEventId = uuid4());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error(message);
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: message,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureMessage', message, level, __assign$3(__assign$3({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureEvent = function (event, hint) {
        var eventId = uuid4();
        if (event.type !== 'transaction') {
            this._lastEventId = eventId;
        }
        this._invokeClient('captureEvent', event, __assign$3(__assign$3({}, hint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.lastEventId = function () {
        return this._lastEventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope || !client)
            return;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _b = (client.getOptions && client.getOptions()) || {}, _c = _b.beforeBreadcrumb, beforeBreadcrumb = _c === void 0 ? null : _c, _d = _b.maxBreadcrumbs, maxBreadcrumbs = _d === void 0 ? DEFAULT_BREADCRUMBS : _d;
        if (maxBreadcrumbs <= 0)
            return;
        var timestamp = dateTimestampInSeconds();
        var mergedBreadcrumb = __assign$3({ timestamp: timestamp }, breadcrumb);
        var finalBreadcrumb = beforeBreadcrumb
            ? consoleSandbox(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
            : mergedBreadcrumb;
        if (finalBreadcrumb === null)
            return;
        scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setUser = function (user) {
        var scope = this.getScope();
        if (scope)
            scope.setUser(user);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTags = function (tags) {
        var scope = this.getScope();
        if (scope)
            scope.setTags(tags);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtras = function (extras) {
        var scope = this.getScope();
        if (scope)
            scope.setExtras(extras);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTag = function (key, value) {
        var scope = this.getScope();
        if (scope)
            scope.setTag(key, value);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtra = function (key, extra) {
        var scope = this.getScope();
        if (scope)
            scope.setExtra(key, extra);
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype.setContext = function (name, context) {
        var scope = this.getScope();
        if (scope)
            scope.setContext(name, context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.configureScope = function (callback) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (scope && client) {
            callback(scope);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.run = function (callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        }
        finally {
            makeMain(oldHub);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getIntegration = function (integration) {
        var client = this.getClient();
        if (!client)
            return null;
        try {
            return client.getIntegration(integration);
        }
        catch (_oO) {
            logger.warn("Cannot retrieve integration " + integration.id + " from the current Hub");
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSpan = function (context) {
        return this._callExtensionMethod('startSpan', context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startTransaction = function (context, customSamplingContext) {
        return this._callExtensionMethod('startTransaction', context, customSamplingContext);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.traceHeaders = function () {
        return this._callExtensionMethod('traceHeaders');
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureSession = function (endSession) {
        if (endSession === void 0) { endSession = false; }
        // both send the update and pull the session from the scope
        if (endSession) {
            return this.endSession();
        }
        // only send the update
        this._sendSessionUpdate();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.endSession = function () {
        var _a, _b, _c, _d, _e;
        (_c = (_b = (_a = this.getStackTop()) === null || _a === void 0 ? void 0 : _a.scope) === null || _b === void 0 ? void 0 : _b.getSession()) === null || _c === void 0 ? void 0 : _c.close();
        this._sendSessionUpdate();
        // the session is over; take it off of the scope
        (_e = (_d = this.getStackTop()) === null || _d === void 0 ? void 0 : _d.scope) === null || _e === void 0 ? void 0 : _e.setSession();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSession = function (context) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        var _b = (client && client.getOptions()) || {}, release = _b.release, environment = _b.environment;
        // Will fetch userAgent if called from browser sdk
        var global = getGlobalObject();
        var userAgent = (global.navigator || {}).userAgent;
        var session = new Session(__assign$3(__assign$3(__assign$3({ release: release,
            environment: environment }, (scope && { user: scope.getUser() })), (userAgent && { userAgent: userAgent })), context));
        if (scope) {
            // End existing session if there's one
            var currentSession = scope.getSession && scope.getSession();
            if (currentSession && currentSession.status === SessionStatus.Ok) {
                currentSession.update({ status: SessionStatus.Exited });
            }
            this.endSession();
            // Afterwards we set the new session on the scope
            scope.setSession(session);
        }
        return session;
    };
    /**
     * Sends the current Session on the scope
     */
    Hub.prototype._sendSessionUpdate = function () {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope)
            return;
        var session = scope.getSession && scope.getSession();
        if (session) {
            if (client && client.captureSession) {
                client.captureSession(session);
            }
        }
    };
    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._invokeClient = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _b = this.getStackTop(), scope = _b.scope, client = _b.client;
        if (client && client[method]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            (_a = client)[method].apply(_a, __spread$2(args, [scope]));
        }
    };
    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._callExtensionMethod = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
            return sentry.extensions[method].apply(this, args);
        }
        logger.warn("Extension method " + method + " couldn't be found, doing nothing.");
    };
    return Hub;
}());
/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
    var carrier = getGlobalObject();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined,
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
        setHubOnCarrier(registry, new Hub());
    }
    // Prefer domains over global if they are there (applicable only to Node environment)
    if (isNodeEnv()) {
        return getHubFromActiveDomain(registry);
    }
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */
function getHubFromActiveDomain(registry) {
    var _a, _b, _c;
    try {
        var activeDomain = (_c = (_b = (_a = getMainCarrier().__SENTRY__) === null || _a === void 0 ? void 0 : _a.extensions) === null || _b === void 0 ? void 0 : _b.domain) === null || _c === void 0 ? void 0 : _c.active;
        // If there's no active domain, just return global hub
        if (!activeDomain) {
            return getHubFromCarrier(registry);
        }
        // If there's no hub on current domain, or it's an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, Scope.clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    }
    catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub)
        return carrier.__SENTRY__.hub;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = new Hub();
    return carrier.__SENTRY__.hub;
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */
function setHubOnCarrier(carrier, hub) {
    if (!carrier)
        return false;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = hub;
    return true;
}

/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = getCurrentHub();
    if (hub && hub[method]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return hub[method].apply(hub, __spread$3(args));
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
    var syntheticException;
    try {
        throw new Error('Sentry syntheticException');
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureException', exception, {
        captureContext: captureContext,
        originalException: exception,
        syntheticException: syntheticException,
    });
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
    callOnHub('withScope', callback);
}

var SENTRY_API_VERSION = '7';
/**
 * Helper class to provide urls, headers and metadata that can be used to form
 * different types of requests to Sentry endpoints.
 * Supports both envelopes and regular event requests.
 **/
var API = /** @class */ (function () {
    /** Create a new instance of API */
    function API(dsn, metadata, tunnel) {
        if (metadata === void 0) { metadata = {}; }
        this.dsn = dsn;
        this._dsnObject = new Dsn(dsn);
        this.metadata = metadata;
        this._tunnel = tunnel;
    }
    /** Returns the Dsn object. */
    API.prototype.getDsn = function () {
        return this._dsnObject;
    };
    /** Does this transport force envelopes? */
    API.prototype.forceEnvelope = function () {
        return !!this._tunnel;
    };
    /** Returns the prefix to construct Sentry ingestion API endpoints. */
    API.prototype.getBaseApiEndpoint = function () {
        var dsn = this.getDsn();
        var protocol = dsn.protocol ? dsn.protocol + ":" : '';
        var port = dsn.port ? ":" + dsn.port : '';
        return protocol + "//" + dsn.host + port + (dsn.path ? "/" + dsn.path : '') + "/api/";
    };
    /** Returns the store endpoint URL. */
    API.prototype.getStoreEndpoint = function () {
        return this._getIngestEndpoint('store');
    };
    /**
     * Returns the store endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        return this.getStoreEndpoint() + "?" + this._encodedAuth();
    };
    /**
     * Returns the envelope endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
        if (this.forceEnvelope()) {
            return this._tunnel;
        }
        return this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
    };
    /** Returns only the path component for the store endpoint. */
    API.prototype.getStoreEndpointPath = function () {
        var dsn = this.getDsn();
        return (dsn.path ? "/" + dsn.path : '') + "/api/" + dsn.projectId + "/store/";
    };
    /**
     * Returns an object that can be used in request headers.
     * This is needed for node and the old /store endpoint in sentry
     */
    API.prototype.getRequestHeaders = function (clientName, clientVersion) {
        // CHANGE THIS to use metadata but keep clientName and clientVersion compatible
        var dsn = this.getDsn();
        var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
        header.push("sentry_client=" + clientName + "/" + clientVersion);
        header.push("sentry_key=" + dsn.publicKey);
        if (dsn.pass) {
            header.push("sentry_secret=" + dsn.pass);
        }
        return {
            'Content-Type': 'application/json',
            'X-Sentry-Auth': header.join(', '),
        };
    };
    /** Returns the url to the report dialog endpoint. */
    API.prototype.getReportDialogEndpoint = function (dialogOptions) {
        if (dialogOptions === void 0) { dialogOptions = {}; }
        var dsn = this.getDsn();
        var endpoint = this.getBaseApiEndpoint() + "embed/error-page/";
        var encodedOptions = [];
        encodedOptions.push("dsn=" + dsn.toString());
        for (var key in dialogOptions) {
            if (key === 'dsn') {
                continue;
            }
            if (key === 'user') {
                if (!dialogOptions.user) {
                    continue;
                }
                if (dialogOptions.user.name) {
                    encodedOptions.push("name=" + encodeURIComponent(dialogOptions.user.name));
                }
                if (dialogOptions.user.email) {
                    encodedOptions.push("email=" + encodeURIComponent(dialogOptions.user.email));
                }
            }
            else {
                encodedOptions.push(encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]));
            }
        }
        if (encodedOptions.length) {
            return endpoint + "?" + encodedOptions.join('&');
        }
        return endpoint;
    };
    /** Returns the envelope endpoint URL. */
    API.prototype._getEnvelopeEndpoint = function () {
        return this._getIngestEndpoint('envelope');
    };
    /** Returns the ingest API endpoint for target. */
    API.prototype._getIngestEndpoint = function (target) {
        if (this._tunnel) {
            return this._tunnel;
        }
        var base = this.getBaseApiEndpoint();
        var dsn = this.getDsn();
        return "" + base + dsn.projectId + "/" + target + "/";
    };
    /** Returns a URL-encoded string with auth config suitable for a query string. */
    API.prototype._encodedAuth = function () {
        var dsn = this.getDsn();
        var auth = {
            // We send only the minimum set of required information. See
            // https://github.com/getsentry/sentry-javascript/issues/2572.
            sentry_key: dsn.publicKey,
            sentry_version: SENTRY_API_VERSION,
        };
        return urlEncode(auth);
    };
    return API;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __values$1(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read$1(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread$1() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read$1(arguments[i]));
    return ar;
}

var installedIntegrations = [];
/**
 * @private
 */
function filterDuplicates(integrations) {
    return integrations.reduce(function (acc, integrations) {
        if (acc.every(function (accIntegration) { return integrations.name !== accIntegration.name; })) {
            acc.push(integrations);
        }
        return acc;
    }, []);
}
/** Gets integration to install */
function getIntegrationsToSetup(options) {
    var defaultIntegrations = (options.defaultIntegrations && __spread$1(options.defaultIntegrations)) || [];
    var userIntegrations = options.integrations;
    var integrations = __spread$1(filterDuplicates(defaultIntegrations));
    if (Array.isArray(userIntegrations)) {
        // Filter out integrations that are also included in user options
        integrations = __spread$1(integrations.filter(function (integrations) {
            return userIntegrations.every(function (userIntegration) { return userIntegration.name !== integrations.name; });
        }), filterDuplicates(userIntegrations));
    }
    else if (typeof userIntegrations === 'function') {
        integrations = userIntegrations(integrations);
        integrations = Array.isArray(integrations) ? integrations : [integrations];
    }
    // Make sure that if present, `Debug` integration will always run last
    var integrationsNames = integrations.map(function (i) { return i.name; });
    var alwaysLastToRun = 'Debug';
    if (integrationsNames.indexOf(alwaysLastToRun) !== -1) {
        integrations.push.apply(integrations, __spread$1(integrations.splice(integrationsNames.indexOf(alwaysLastToRun), 1)));
    }
    return integrations;
}
/** Setup given integration */
function setupIntegration(integration) {
    if (installedIntegrations.indexOf(integration.name) !== -1) {
        return;
    }
    integration.setupOnce(addGlobalEventProcessor, getCurrentHub);
    installedIntegrations.push(integration.name);
    logger.log("Integration installed: " + integration.name);
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(options) {
    var integrations = {};
    getIntegrationsToSetup(options).forEach(function (integration) {
        integrations[integration.name] = integration;
        setupIntegration(integration);
    });
    // set the `initialized` flag so we don't run through the process again unecessarily; use `Object.defineProperty`
    // because by default it creates a property which is nonenumerable, which we want since `initialized` shouldn't be
    // considered a member of the index the way the actual integrations are
    Object.defineProperty(integrations, 'initialized', { value: true });
    return integrations;
}

var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
var BaseClient = /** @class */ (function () {
    /**
     * Initializes this client instance.
     *
     * @param backendClass A constructor function to create the backend.
     * @param options Options for the client.
     */
    function BaseClient(backendClass, options) {
        /** Array of used integrations. */
        this._integrations = {};
        /** Number of calls being processed */
        this._numProcessing = 0;
        this._backend = new backendClass(options);
        this._options = options;
        if (options.dsn) {
            this._dsn = new Dsn(options.dsn);
        }
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseClient.prototype.captureException = function (exception, hint, scope) {
        var _this = this;
        // ensure we haven't captured this very object before
        if (checkOrSetAlreadyCaught(exception)) {
            logger.log(ALREADY_SEEN_ERROR);
            return;
        }
        var eventId = hint && hint.event_id;
        this._process(this._getBackend()
            .eventFromException(exception, hint)
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        var promisedEvent = isPrimitive(message)
            ? this._getBackend().eventFromMessage(String(message), level, hint)
            : this._getBackend().eventFromException(message, hint);
        this._process(promisedEvent
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureEvent = function (event, hint, scope) {
        var _a;
        // ensure we haven't captured this very object before
        if (((_a = hint) === null || _a === void 0 ? void 0 : _a.originalException) && checkOrSetAlreadyCaught(hint.originalException)) {
            logger.log(ALREADY_SEEN_ERROR);
            return;
        }
        var eventId = hint && hint.event_id;
        this._process(this._captureEvent(event, hint, scope).then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureSession = function (session) {
        if (!this._isEnabled()) {
            logger.warn('SDK not enabled, will not capture session.');
            return;
        }
        if (!(typeof session.release === 'string')) {
            logger.warn('Discarded session because of missing or non-string release');
        }
        else {
            this._sendSession(session);
            // After sending, we set init false to indicate it's not the first occurrence
            session.update({ init: false });
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getDsn = function () {
        return this._dsn;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getOptions = function () {
        return this._options;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getTransport = function () {
        return this._getBackend().getTransport();
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.flush = function (timeout) {
        var _this = this;
        return this._isClientDoneProcessing(timeout).then(function (clientFinished) {
            return _this.getTransport()
                .close(timeout)
                .then(function (transportFlushed) { return clientFinished && transportFlushed; });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.close = function (timeout) {
        var _this = this;
        return this.flush(timeout).then(function (result) {
            _this.getOptions().enabled = false;
            return result;
        });
    };
    /**
     * Sets up the integrations
     */
    BaseClient.prototype.setupIntegrations = function () {
        if (this._isEnabled() && !this._integrations.initialized) {
            this._integrations = setupIntegrations(this._options);
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getIntegration = function (integration) {
        try {
            return this._integrations[integration.id] || null;
        }
        catch (_oO) {
            logger.warn("Cannot retrieve integration " + integration.id + " from the current Client");
            return null;
        }
    };
    /** Updates existing session based on the provided event */
    BaseClient.prototype._updateSessionFromEvent = function (session, event) {
        var e_1, _a;
        var crashed = false;
        var errored = false;
        var exceptions = event.exception && event.exception.values;
        if (exceptions) {
            errored = true;
            try {
                for (var exceptions_1 = __values$1(exceptions), exceptions_1_1 = exceptions_1.next(); !exceptions_1_1.done; exceptions_1_1 = exceptions_1.next()) {
                    var ex = exceptions_1_1.value;
                    var mechanism = ex.mechanism;
                    if (mechanism && mechanism.handled === false) {
                        crashed = true;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (exceptions_1_1 && !exceptions_1_1.done && (_a = exceptions_1.return)) _a.call(exceptions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // A session is updated and that session update is sent in only one of the two following scenarios:
        // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
        // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
        var sessionNonTerminal = session.status === SessionStatus.Ok;
        var shouldUpdateAndSend = (sessionNonTerminal && session.errors === 0) || (sessionNonTerminal && crashed);
        if (shouldUpdateAndSend) {
            session.update(__assign$1(__assign$1({}, (crashed && { status: SessionStatus.Crashed })), { errors: session.errors || Number(errored || crashed) }));
            this.captureSession(session);
        }
    };
    /** Deliver captured session to Sentry */
    BaseClient.prototype._sendSession = function (session) {
        this._getBackend().sendSession(session);
    };
    /**
     * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
     * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
     * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
     * `false` otherwise
     */
    BaseClient.prototype._isClientDoneProcessing = function (timeout) {
        var _this = this;
        return new SyncPromise(function (resolve) {
            var ticked = 0;
            var tick = 1;
            var interval = setInterval(function () {
                if (_this._numProcessing == 0) {
                    clearInterval(interval);
                    resolve(true);
                }
                else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        clearInterval(interval);
                        resolve(false);
                    }
                }
            }, tick);
        });
    };
    /** Returns the current backend. */
    BaseClient.prototype._getBackend = function () {
        return this._backend;
    };
    /** Determines whether this SDK is enabled and a valid Dsn is present. */
    BaseClient.prototype._isEnabled = function () {
        return this.getOptions().enabled !== false && this._dsn !== undefined;
    };
    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
    BaseClient.prototype._prepareEvent = function (event, scope, hint) {
        var _this = this;
        var _a = this.getOptions().normalizeDepth, normalizeDepth = _a === void 0 ? 3 : _a;
        var prepared = __assign$1(__assign$1({}, event), { event_id: event.event_id || (hint && hint.event_id ? hint.event_id : uuid4()), timestamp: event.timestamp || dateTimestampInSeconds() });
        this._applyClientOptions(prepared);
        this._applyIntegrationsMetadata(prepared);
        // If we have scope given to us, use it as the base for further modifications.
        // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
        var finalScope = scope;
        if (hint && hint.captureContext) {
            finalScope = Scope.clone(finalScope).update(hint.captureContext);
        }
        // We prepare the result here with a resolved Event.
        var result = SyncPromise.resolve(prepared);
        // This should be the last thing called, since we want that
        // {@link Hub.addEventProcessor} gets the finished prepared event.
        if (finalScope) {
            // In case we have a hub we reassign it.
            result = finalScope.applyToEvent(prepared, hint);
        }
        return result.then(function (evt) {
            if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
                return _this._normalizeEvent(evt, normalizeDepth);
            }
            return evt;
        });
    };
    /**
     * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
     * Normalized keys:
     * - `breadcrumbs.data`
     * - `user`
     * - `contexts`
     * - `extra`
     * @param event Event
     * @returns Normalized event
     */
    BaseClient.prototype._normalizeEvent = function (event, depth) {
        if (!event) {
            return null;
        }
        var normalized = __assign$1(__assign$1(__assign$1(__assign$1(__assign$1({}, event), (event.breadcrumbs && {
            breadcrumbs: event.breadcrumbs.map(function (b) { return (__assign$1(__assign$1({}, b), (b.data && {
                data: normalize(b.data, depth),
            }))); }),
        })), (event.user && {
            user: normalize(event.user, depth),
        })), (event.contexts && {
            contexts: normalize(event.contexts, depth),
        })), (event.extra && {
            extra: normalize(event.extra, depth),
        }));
        // event.contexts.trace stores information about a Transaction. Similarly,
        // event.spans[] stores information about child Spans. Given that a
        // Transaction is conceptually a Span, normalization should apply to both
        // Transactions and Spans consistently.
        // For now the decision is to skip normalization of Transactions and Spans,
        // so this block overwrites the normalized event to add back the original
        // Transaction information prior to normalization.
        if (event.contexts && event.contexts.trace) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            normalized.contexts.trace = event.contexts.trace;
        }
        var _a = this.getOptions()._experiments, _experiments = _a === void 0 ? {} : _a;
        if (_experiments.ensureNoCircularStructures) {
            return normalize(normalized);
        }
        return normalized;
    };
    /**
     *  Enhances event using the client configuration.
     *  It takes care of all "static" values like environment, release and `dist`,
     *  as well as truncating overly long values.
     * @param event event instance to be enhanced
     */
    BaseClient.prototype._applyClientOptions = function (event) {
        var options = this.getOptions();
        var environment = options.environment, release = options.release, dist = options.dist, _a = options.maxValueLength, maxValueLength = _a === void 0 ? 250 : _a;
        if (!('environment' in event)) {
            event.environment = 'environment' in options ? environment : 'production';
        }
        if (event.release === undefined && release !== undefined) {
            event.release = release;
        }
        if (event.dist === undefined && dist !== undefined) {
            event.dist = dist;
        }
        if (event.message) {
            event.message = truncate(event.message, maxValueLength);
        }
        var exception = event.exception && event.exception.values && event.exception.values[0];
        if (exception && exception.value) {
            exception.value = truncate(exception.value, maxValueLength);
        }
        var request = event.request;
        if (request && request.url) {
            request.url = truncate(request.url, maxValueLength);
        }
    };
    /**
     * This function adds all used integrations to the SDK info in the event.
     * @param event The event that will be filled with all integrations.
     */
    BaseClient.prototype._applyIntegrationsMetadata = function (event) {
        var integrationsArray = Object.keys(this._integrations);
        if (integrationsArray.length > 0) {
            event.sdk = event.sdk || {};
            event.sdk.integrations = __spread$1((event.sdk.integrations || []), integrationsArray);
        }
    };
    /**
     * Tells the backend to send this event
     * @param event The Sentry event to send
     */
    BaseClient.prototype._sendEvent = function (event) {
        this._getBackend().sendEvent(event);
    };
    /**
     * Processes the event and logs an error in case of rejection
     * @param event
     * @param hint
     * @param scope
     */
    BaseClient.prototype._captureEvent = function (event, hint, scope) {
        return this._processEvent(event, hint, scope).then(function (finalEvent) {
            return finalEvent.event_id;
        }, function (reason) {
            logger.error(reason);
            return undefined;
        });
    };
    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
    BaseClient.prototype._processEvent = function (event, hint, scope) {
        var _this = this;
        var _a, _b;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _c = this.getOptions(), beforeSend = _c.beforeSend, sampleRate = _c.sampleRate;
        var transport = this.getTransport();
        if (!this._isEnabled()) {
            return SyncPromise.reject(new SentryError('SDK not enabled, will not capture event.'));
        }
        var isTransaction = event.type === 'transaction';
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        // Sampling for transaction happens somewhere else
        if (!isTransaction && typeof sampleRate === 'number' && Math.random() > sampleRate) {
            (_b = (_a = transport).recordLostEvent) === null || _b === void 0 ? void 0 : _b.call(_a, Outcome.SampleRate, 'event');
            return SyncPromise.reject(new SentryError("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")"));
        }
        return this._prepareEvent(event, scope, hint)
            .then(function (prepared) {
            var _a, _b;
            if (prepared === null) {
                (_b = (_a = transport).recordLostEvent) === null || _b === void 0 ? void 0 : _b.call(_a, Outcome.EventProcessor, event.type || 'event');
                throw new SentryError('An event processor returned null, will not send event.');
            }
            var isInternalException = hint && hint.data && hint.data.__sentry__ === true;
            if (isInternalException || isTransaction || !beforeSend) {
                return prepared;
            }
            var beforeSendResult = beforeSend(prepared, hint);
            return _this._ensureBeforeSendRv(beforeSendResult);
        })
            .then(function (processedEvent) {
            var _a, _b;
            if (processedEvent === null) {
                (_b = (_a = transport).recordLostEvent) === null || _b === void 0 ? void 0 : _b.call(_a, Outcome.BeforeSend, event.type || 'event');
                throw new SentryError('`beforeSend` returned `null`, will not send event.');
            }
            var session = scope && scope.getSession && scope.getSession();
            if (!isTransaction && session) {
                _this._updateSessionFromEvent(session, processedEvent);
            }
            _this._sendEvent(processedEvent);
            return processedEvent;
        })
            .then(null, function (reason) {
            if (reason instanceof SentryError) {
                throw reason;
            }
            _this.captureException(reason, {
                data: {
                    __sentry__: true,
                },
                originalException: reason,
            });
            throw new SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + reason);
        });
    };
    /**
     * Occupies the client with processing and event
     */
    BaseClient.prototype._process = function (promise) {
        var _this = this;
        this._numProcessing += 1;
        void promise.then(function (value) {
            _this._numProcessing -= 1;
            return value;
        }, function (reason) {
            _this._numProcessing -= 1;
            return reason;
        });
    };
    /**
     * Verifies that return value of configured `beforeSend` is of expected type.
     */
    BaseClient.prototype._ensureBeforeSendRv = function (rv) {
        var nullErr = '`beforeSend` method has to return `null` or a valid event.';
        if (isThenable(rv)) {
            return rv.then(function (event) {
                if (!(isPlainObject(event) || event === null)) {
                    throw new SentryError(nullErr);
                }
                return event;
            }, function (e) {
                throw new SentryError("beforeSend rejected with " + e);
            });
        }
        else if (!(isPlainObject(rv) || rv === null)) {
            throw new SentryError(nullErr);
        }
        return rv;
    };
    return BaseClient;
}());

/** Noop transport */
var NoopTransport = /** @class */ (function () {
    function NoopTransport() {
    }
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.sendEvent = function (_) {
        return SyncPromise.resolve({
            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: Status.Skipped,
        });
    };
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.close = function (_) {
        return SyncPromise.resolve(true);
    };
    return NoopTransport;
}());

/**
 * This is the base implemention of a Backend.
 * @hidden
 */
var BaseBackend = /** @class */ (function () {
    /** Creates a new backend instance. */
    function BaseBackend(options) {
        this._options = options;
        if (!this._options.dsn) {
            logger.warn('No DSN provided, backend will not do anything.');
        }
        this._transport = this._setupTransport();
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
        throw new SentryError('Backend has to implement `eventFromException` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
        throw new SentryError('Backend has to implement `eventFromMessage` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendEvent = function (event) {
        void this._transport.sendEvent(event).then(null, function (reason) {
            logger.error("Error while sending event: " + reason);
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendSession = function (session) {
        if (!this._transport.sendSession) {
            logger.warn("Dropping session because custom transport doesn't implement sendSession");
            return;
        }
        void this._transport.sendSession(session).then(null, function (reason) {
            logger.error("Error while sending session: " + reason);
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.getTransport = function () {
        return this._transport;
    };
    /**
     * Sets up the transport so it can be used later to send requests.
     */
    BaseBackend.prototype._setupTransport = function () {
        return new NoopTransport();
    };
    return BaseBackend;
}());

/** Extract sdk info from from the API metadata */
function getSdkMetadataForEnvelopeHeader(api) {
    if (!api.metadata || !api.metadata.sdk) {
        return;
    }
    var _a = api.metadata.sdk, name = _a.name, version = _a.version;
    return { name: name, version: version };
}
/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
        return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = __spread$1((event.sdk.integrations || []), (sdkInfo.integrations || []));
    event.sdk.packages = __spread$1((event.sdk.packages || []), (sdkInfo.packages || []));
    return event;
}
/** Creates a SentryRequest from a Session. */
function sessionToSentryRequest(session, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var envelopeHeaders = JSON.stringify(__assign$1(__assign$1({ sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (api.forceEnvelope() && { dsn: api.getDsn().toString() })));
    // I know this is hacky but we don't want to add `session` to request type since it's never rate limited
    var type = 'aggregates' in session ? 'sessions' : 'session';
    var itemHeaders = JSON.stringify({
        type: type,
    });
    return {
        body: envelopeHeaders + "\n" + itemHeaders + "\n" + JSON.stringify(session),
        type: type,
        url: api.getEnvelopeEndpointWithUrlEncodedAuth(),
    };
}
/** Creates a SentryRequest from an event. */
function eventToSentryRequest(event, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var eventType = event.type || 'event';
    var useEnvelope = eventType === 'transaction' || api.forceEnvelope();
    var _a = event.debug_meta || {}, transactionSampling = _a.transactionSampling, metadata = __rest$1(_a, ["transactionSampling"]);
    var _b = transactionSampling || {}, samplingMethod = _b.method, sampleRate = _b.rate;
    if (Object.keys(metadata).length === 0) {
        delete event.debug_meta;
    }
    else {
        event.debug_meta = metadata;
    }
    var req = {
        body: JSON.stringify(sdkInfo ? enhanceEventWithSdkInfo(event, api.metadata.sdk) : event),
        type: eventType,
        url: useEnvelope ? api.getEnvelopeEndpointWithUrlEncodedAuth() : api.getStoreEndpointWithUrlEncodedAuth(),
    };
    // https://develop.sentry.dev/sdk/envelopes/
    // Since we don't need to manipulate envelopes nor store them, there is no
    // exported concept of an Envelope with operations including serialization and
    // deserialization. Instead, we only implement a minimal subset of the spec to
    // serialize events inline here.
    if (useEnvelope) {
        var envelopeHeaders = JSON.stringify(__assign$1(__assign$1({ event_id: event.event_id, sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (api.forceEnvelope() && { dsn: api.getDsn().toString() })));
        var itemHeaders = JSON.stringify({
            type: eventType,
            // TODO: Right now, sampleRate may or may not be defined (it won't be in the cases of inheritance and
            // explicitly-set sampling decisions). Are we good with that?
            sample_rates: [{ id: samplingMethod, rate: sampleRate }],
        });
        // The trailing newline is optional. We intentionally don't send it to avoid
        // sending unnecessary bytes.
        //
        // const envelope = `${envelopeHeaders}\n${itemHeaders}\n${req.body}\n`;
        var envelope = envelopeHeaders + "\n" + itemHeaders + "\n" + req.body;
        req.body = envelope;
    }
    return req;
}

/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */
function initAndBind(clientClass, options) {
    var _a;
    if (options.debug === true) {
        logger.enable();
    }
    var hub = getCurrentHub();
    (_a = hub.getScope()) === null || _a === void 0 ? void 0 : _a.update(options.initialScope);
    var client = new clientClass(options);
    hub.bindClient(client);
}

var SDK_VERSION = '6.15.0';

var originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */
var FunctionToString = /** @class */ (function () {
    function FunctionToString() {
        /**
         * @inheritDoc
         */
        this.name = FunctionToString.id;
    }
    /**
     * @inheritDoc
     */
    FunctionToString.prototype.setupOnce = function () {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        originalFunctionToString = Function.prototype.toString;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Function.prototype.toString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = this.__sentry_original__ || this;
            return originalFunctionToString.apply(context, args);
        };
    };
    /**
     * @inheritDoc
     */
    FunctionToString.id = 'FunctionToString';
    return FunctionToString;
}());

// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
/** Inbound filters configurable by the user */
var InboundFilters = /** @class */ (function () {
    function InboundFilters(_options) {
        if (_options === void 0) { _options = {}; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = InboundFilters.id;
    }
    /**
     * @inheritDoc
     */
    InboundFilters.prototype.setupOnce = function () {
        addGlobalEventProcessor(function (event) {
            var hub = getCurrentHub();
            if (!hub) {
                return event;
            }
            var self = hub.getIntegration(InboundFilters);
            if (self) {
                var client = hub.getClient();
                var clientOptions = client ? client.getOptions() : {};
                // This checks prevents most of the occurrences of the bug linked below:
                // https://github.com/getsentry/sentry-javascript/issues/2622
                // The bug is caused by multiple SDK instances, where one is minified and one is using non-mangled code.
                // Unfortunatelly we cannot fix it reliably (thus reserved property in rollup's terser config),
                // as we cannot force people using multiple instances in their apps to sync SDK versions.
                var options = typeof self._mergeOptions === 'function' ? self._mergeOptions(clientOptions) : {};
                if (typeof self._shouldDropEvent !== 'function') {
                    return event;
                }
                return self._shouldDropEvent(event, options) ? null : event;
            }
            return event;
        });
    };
    /** JSDoc */
    InboundFilters.prototype._shouldDropEvent = function (event, options) {
        if (this._isSentryError(event, options)) {
            logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + getEventDescription(event));
            return true;
        }
        if (this._isIgnoredError(event, options)) {
            logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + getEventDescription(event));
            return true;
        }
        if (this._isDeniedUrl(event, options)) {
            logger.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + getEventDescription(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        if (!this._isAllowedUrl(event, options)) {
            logger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + getEventDescription(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        return false;
    };
    /** JSDoc */
    InboundFilters.prototype._isSentryError = function (event, options) {
        if (!options.ignoreInternal) {
            return false;
        }
        try {
            return ((event &&
                event.exception &&
                event.exception.values &&
                event.exception.values[0] &&
                event.exception.values[0].type === 'SentryError') ||
                false);
        }
        catch (_oO) {
            return false;
        }
    };
    /** JSDoc */
    InboundFilters.prototype._isIgnoredError = function (event, options) {
        if (!options.ignoreErrors || !options.ignoreErrors.length) {
            return false;
        }
        return this._getPossibleEventMessages(event).some(function (message) {
            // Not sure why TypeScript complains here...
            return options.ignoreErrors.some(function (pattern) { return isMatchingPattern(message, pattern); });
        });
    };
    /** JSDoc */
    InboundFilters.prototype._isDeniedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.denyUrls || !options.denyUrls.length) {
            return false;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? false : options.denyUrls.some(function (pattern) { return isMatchingPattern(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._isAllowedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.allowUrls || !options.allowUrls.length) {
            return true;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? true : options.allowUrls.some(function (pattern) { return isMatchingPattern(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._mergeOptions = function (clientOptions) {
        if (clientOptions === void 0) { clientOptions = {}; }
        return {
            allowUrls: __spread$1((this._options.whitelistUrls || []), (this._options.allowUrls || []), (clientOptions.whitelistUrls || []), (clientOptions.allowUrls || [])),
            denyUrls: __spread$1((this._options.blacklistUrls || []), (this._options.denyUrls || []), (clientOptions.blacklistUrls || []), (clientOptions.denyUrls || [])),
            ignoreErrors: __spread$1((this._options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
            ignoreInternal: typeof this._options.ignoreInternal !== 'undefined' ? this._options.ignoreInternal : true,
        };
    };
    /** JSDoc */
    InboundFilters.prototype._getPossibleEventMessages = function (event) {
        if (event.message) {
            return [event.message];
        }
        if (event.exception) {
            try {
                var _a = (event.exception.values && event.exception.values[0]) || {}, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c;
                return ["" + value, type + ": " + value];
            }
            catch (oO) {
                logger.error("Cannot extract message for event " + getEventDescription(event));
                return [];
            }
        }
        return [];
    };
    /** JSDoc */
    InboundFilters.prototype._getLastValidUrl = function (frames) {
        if (frames === void 0) { frames = []; }
        var _a, _b;
        for (var i = frames.length - 1; i >= 0; i--) {
            var frame = frames[i];
            if (((_a = frame) === null || _a === void 0 ? void 0 : _a.filename) !== '<anonymous>' && ((_b = frame) === null || _b === void 0 ? void 0 : _b.filename) !== '[native code]') {
                return frame.filename || null;
            }
        }
        return null;
    };
    /** JSDoc */
    InboundFilters.prototype._getEventFilterUrl = function (event) {
        try {
            if (event.stacktrace) {
                var frames_1 = event.stacktrace.frames;
                return this._getLastValidUrl(frames_1);
            }
            if (event.exception) {
                var frames_2 = event.exception.values && event.exception.values[0].stacktrace && event.exception.values[0].stacktrace.frames;
                return this._getLastValidUrl(frames_2);
            }
            return null;
        }
        catch (oO) {
            logger.error("Cannot extract url for event " + getEventDescription(event));
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    InboundFilters.id = 'InboundFilters';
    return InboundFilters;
}());

/**
 * This was originally forked from https://github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 */
// global reference to slice
var UNKNOWN_FUNCTION = '?';
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chrome$1 = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
var reactMinifiedRegexp = /Minified React error #\d+;/i;
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function computeStackTrace(ex) {
    var stack = null;
    var popSize = 0;
    if (ex) {
        if (typeof ex.framesToPop === 'number') {
            popSize = ex.framesToPop;
        }
        else if (reactMinifiedRegexp.test(ex.message)) {
            popSize = 1;
        }
    }
    try {
        // This must be tried first because Opera 10 *destroys*
        // its stacktrace property if you try to access the stack
        // property first!!
        stack = computeStackTraceFromStacktraceProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    try {
        stack = computeStackTraceFromStackProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    return {
        message: extractMessage(ex),
        name: ex && ex.name,
        stack: [],
        failed: true,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, complexity
function computeStackTraceFromStackProp(ex) {
    var _a, _b;
    if (!ex || !ex.stack) {
        return null;
    }
    var stack = [];
    var lines = ex.stack.split('\n');
    var isEval;
    var submatch;
    var parts;
    var element;
    for (var i = 0; i < lines.length; ++i) {
        if ((parts = chrome$1.exec(lines[i]))) {
            var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
            isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
            if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = submatch[1]; // url
                parts[3] = submatch[2]; // line
                parts[4] = submatch[3]; // column
            }
            // Arpad: Working with the regexp above is super painful. it is quite a hack, but just stripping the `address at `
            // prefix here seems like the quickest solution for now.
            var url = parts[2] && parts[2].indexOf('address at ') === 0 ? parts[2].substr('address at '.length) : parts[2];
            // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
            // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
            var func = parts[1] || UNKNOWN_FUNCTION;
            _a = __read$5(extractSafariExtensionDetails(func, url), 2), func = _a[0], url = _a[1];
            element = {
                url: url,
                func: func,
                args: isNative ? [parts[2]] : [],
                line: parts[3] ? +parts[3] : null,
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = winjs.exec(lines[i]))) {
            element = {
                url: parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: [],
                line: +parts[3],
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = gecko.exec(lines[i]))) {
            isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
            if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || "eval";
                parts[3] = submatch[1];
                parts[4] = submatch[2];
                parts[5] = ''; // no column when eval
            }
            else if (i === 0 && !parts[5] && ex.columnNumber !== void 0) {
                // FireFox uses this awesome columnNumber property for its top frame
                // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                // so adding 1
                // NOTE: this hack doesn't work if top-most frame is eval
                stack[0].column = ex.columnNumber + 1;
            }
            var url = parts[3];
            var func = parts[1] || UNKNOWN_FUNCTION;
            _b = __read$5(extractSafariExtensionDetails(func, url), 2), func = _b[0], url = _b[1];
            element = {
                url: url,
                func: func,
                args: parts[2] ? parts[2].split(',') : [],
                line: parts[4] ? +parts[4] : null,
                column: parts[5] ? +parts[5] : null,
            };
        }
        else {
            continue;
        }
        if (!element.func && element.line) {
            element.func = UNKNOWN_FUNCTION;
        }
        stack.push(element);
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function computeStackTraceFromStacktraceProp(ex) {
    if (!ex || !ex.stacktrace) {
        return null;
    }
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace;
    var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
    var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i;
    var lines = stacktrace.split('\n');
    var stack = [];
    var parts;
    for (var line = 0; line < lines.length; line += 2) {
        var element = null;
        if ((parts = opera10Regex.exec(lines[line]))) {
            element = {
                url: parts[2],
                func: parts[3],
                args: [],
                line: +parts[1],
                column: null,
            };
        }
        else if ((parts = opera11Regex.exec(lines[line]))) {
            element = {
                url: parts[6],
                func: parts[3] || parts[4],
                args: parts[5] ? parts[5].split(',') : [],
                line: +parts[1],
                column: +parts[2],
            };
        }
        if (element) {
            if (!element.func && element.line) {
                element.func = UNKNOWN_FUNCTION;
            }
            stack.push(element);
        }
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunatelly "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */
var extractSafariExtensionDetails = function (func, url) {
    var isSafariExtension = func.indexOf('safari-extension') !== -1;
    var isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;
    return isSafariExtension || isSafariWebExtension
        ? [
            func.indexOf('@') !== -1 ? func.split('@')[0] : UNKNOWN_FUNCTION,
            isSafariExtension ? "safari-extension:" + url : "safari-web-extension:" + url,
        ]
        : [func, url];
};
/** Remove N number of frames from the stack */
function popFrames(stacktrace, popSize) {
    try {
        return __assign$4(__assign$4({}, stacktrace), { stack: stacktrace.stack.slice(popSize) });
    }
    catch (e) {
        return stacktrace;
    }
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    return message;
}

var STACKTRACE_LIMIT = 50;
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */
function exceptionFromStacktrace(stacktrace) {
    var frames = prepareFramesForEvent(stacktrace.stack);
    var exception = {
        type: stacktrace.name,
        value: stacktrace.message,
    };
    if (frames && frames.length) {
        exception.stacktrace = { frames: frames };
    }
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
/**
 * @hidden
 */
function eventFromPlainObject(exception, syntheticException, rejection) {
    var event = {
        exception: {
            values: [
                {
                    type: isEvent(exception) ? exception.constructor.name : rejection ? 'UnhandledRejection' : 'Error',
                    value: "Non-Error " + (rejection ? 'promise rejection' : 'exception') + " captured with keys: " + extractExceptionKeysForMessage(exception),
                },
            ],
        },
        extra: {
            __serialized__: normalizeToSize(exception),
        },
    };
    if (syntheticException) {
        var stacktrace = computeStackTrace(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
/**
 * @hidden
 */
function eventFromStacktrace(stacktrace) {
    var exception = exceptionFromStacktrace(stacktrace);
    return {
        exception: {
            values: [exception],
        },
    };
}
/**
 * @hidden
 */
function prepareFramesForEvent(stack) {
    if (!stack || !stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].func || '';
    var lastFrameFunction = localStack[localStack.length - 1].func || '';
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
        localStack = localStack.slice(1);
    }
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
        localStack = localStack.slice(0, -1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack
        .slice(0, STACKTRACE_LIMIT)
        .map(function (frame) { return ({
        colno: frame.column === null ? undefined : frame.column,
        filename: frame.url || localStack[0].url,
        function: frame.func || '?',
        in_app: true,
        lineno: frame.line === null ? undefined : frame.line,
    }); })
        .reverse();
}

/**
 * Builds and Event from a Exception
 * @hidden
 */
function eventFromException(options, exception, hint) {
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromUnknownInput(exception, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    addExceptionMechanism(event); // defaults to { type: 'generic', handled: true }
    event.level = Severity.Error;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return SyncPromise.resolve(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(options, message, level, hint) {
    if (level === void 0) { level = Severity.Info; }
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromString(message, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    event.level = level;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return SyncPromise.resolve(event);
}
/**
 * @hidden
 */
function eventFromUnknownInput(exception, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event;
    if (isErrorEvent(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        var errorEvent = exception;
        // eslint-disable-next-line no-param-reassign
        exception = errorEvent.error;
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
    // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
    // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    // https://webidl.spec.whatwg.org/#es-DOMException-specialness
    if (isDOMError(exception) || isDOMException(exception)) {
        var domException = exception;
        if ('stack' in exception) {
            event = eventFromStacktrace(computeStackTrace(exception));
        }
        else {
            var name_1 = domException.name || (isDOMError(domException) ? 'DOMError' : 'DOMException');
            var message = domException.message ? name_1 + ": " + domException.message : name_1;
            event = eventFromString(message, syntheticException, options);
            addExceptionTypeValue(event, message);
        }
        if ('code' in domException) {
            event.tags = __assign$4(__assign$4({}, event.tags), { 'DOMException.code': "" + domException.code });
        }
        return event;
    }
    if (isError(exception)) {
        // we have a real Error object, do nothing
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    if (isPlainObject(exception) || isEvent(exception)) {
        // If it is plain Object or Event, serialize it manually and extract options
        // This will allow us to group events based on top-level keys
        // which is much better than creating new group when any key/value change
        var objectException = exception;
        event = eventFromPlainObject(objectException, syntheticException, options.rejection);
        addExceptionMechanism(event, {
            synthetic: true,
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(exception, syntheticException, options);
    addExceptionTypeValue(event, "" + exception, undefined);
    addExceptionMechanism(event, {
        synthetic: true,
    });
    return event;
}
/**
 * @hidden
 */
function eventFromString(input, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event = {
        message: input,
    };
    if (options.attachStacktrace && syntheticException) {
        var stacktrace = computeStackTrace(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}

var global$7 = getGlobalObject();
var cachedFetchImpl;
/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * const f = window.fetch;
 * window.fetch = function () {
 *   const p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */
function getNativeFetchImplementation() {
    var _a, _b;
    if (cachedFetchImpl) {
        return cachedFetchImpl;
    }
    /* eslint-disable @typescript-eslint/unbound-method */
    // Fast path to avoid DOM I/O
    if (isNativeFetch(global$7.fetch)) {
        return (cachedFetchImpl = global$7.fetch.bind(global$7));
    }
    var document = global$7.document;
    var fetchImpl = global$7.fetch;
    // eslint-disable-next-line deprecation/deprecation
    if (typeof ((_a = document) === null || _a === void 0 ? void 0 : _a.createElement) === "function") {
        try {
            var sandbox = document.createElement('iframe');
            sandbox.hidden = true;
            document.head.appendChild(sandbox);
            if ((_b = sandbox.contentWindow) === null || _b === void 0 ? void 0 : _b.fetch) {
                fetchImpl = sandbox.contentWindow.fetch;
            }
            document.head.removeChild(sandbox);
        }
        catch (e) {
            logger.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', e);
        }
    }
    return (cachedFetchImpl = fetchImpl.bind(global$7));
    /* eslint-enable @typescript-eslint/unbound-method */
}
/**
 * Sends sdk client report using sendBeacon or fetch as a fallback if available
 *
 * @param url report endpoint
 * @param body report payload
 */
function sendReport(url, body) {
    var isRealNavigator = Object.prototype.toString.call(global$7 && global$7.navigator) === '[object Navigator]';
    var hasSendBeacon = isRealNavigator && typeof global$7.navigator.sendBeacon === 'function';
    if (hasSendBeacon) {
        // Prevent illegal invocations - https://xgwang.me/posts/you-may-not-know-beacon/#it-may-throw-error%2C-be-sure-to-catch
        var sendBeacon = global$7.navigator.sendBeacon.bind(global$7.navigator);
        return sendBeacon(url, body);
    }
    if (supportsFetch()) {
        var fetch_1 = getNativeFetchImplementation();
        return forget(fetch_1(url, {
            body: body,
            method: 'POST',
            credentials: 'omit',
            keepalive: true,
        }));
    }
}

var CATEGORY_MAPPING = {
    event: 'error',
    transaction: 'transaction',
    session: 'session',
    attachment: 'attachment',
};
var global$6 = getGlobalObject();
/** Base Transport class implementation */
var BaseTransport = /** @class */ (function () {
    function BaseTransport(options) {
        var _this = this;
        this.options = options;
        /** A simple buffer holding all requests. */
        this._buffer = new PromiseBuffer(30);
        /** Locks transport after receiving rate limits in a response */
        this._rateLimits = {};
        this._outcomes = {};
        this._api = new API(options.dsn, options._metadata, options.tunnel);
        // eslint-disable-next-line deprecation/deprecation
        this.url = this._api.getStoreEndpointWithUrlEncodedAuth();
        if (this.options.sendClientReports && global$6.document) {
            global$6.document.addEventListener('visibilitychange', function () {
                if (global$6.document.visibilityState === 'hidden') {
                    _this._flushOutcomes();
                }
            });
        }
    }
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendEvent = function (_) {
        throw new SentryError('Transport Class has to implement `sendEvent` method');
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.close = function (timeout) {
        return this._buffer.drain(timeout);
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.recordLostEvent = function (reason, category) {
        var _a;
        if (!this.options.sendClientReports) {
            return;
        }
        // We want to track each category (event, transaction, session) separately
        // but still keep the distinction between different type of outcomes.
        // We could use nested maps, but it's much easier to read and type this way.
        // A correct type for map-based implementation if we want to go that route
        // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
        var key = CATEGORY_MAPPING[category] + ":" + reason;
        logger.log("Adding outcome: " + key);
        this._outcomes[key] = (_a = this._outcomes[key], (_a !== null && _a !== void 0 ? _a : 0)) + 1;
    };
    /**
     * Send outcomes as an envelope
     */
    BaseTransport.prototype._flushOutcomes = function () {
        if (!this.options.sendClientReports) {
            return;
        }
        var outcomes = this._outcomes;
        this._outcomes = {};
        // Nothing to send
        if (!Object.keys(outcomes).length) {
            logger.log('No outcomes to flush');
            return;
        }
        logger.log("Flushing outcomes:\n" + JSON.stringify(outcomes, null, 2));
        var url = this._api.getEnvelopeEndpointWithUrlEncodedAuth();
        // Envelope header is required to be at least an empty object
        var envelopeHeader = JSON.stringify(__assign$4({}, (this.options.tunnel && { dsn: this._api.getDsn().toString() })));
        var itemHeaders = JSON.stringify({
            type: 'client_report',
        });
        var item = JSON.stringify({
            timestamp: dateTimestampInSeconds(),
            discarded_events: Object.keys(outcomes).map(function (key) {
                var _a = __read$5(key.split(':'), 2), category = _a[0], reason = _a[1];
                return {
                    reason: reason,
                    category: category,
                    quantity: outcomes[key],
                };
            }),
        });
        var envelope = envelopeHeader + "\n" + itemHeaders + "\n" + item;
        try {
            sendReport(url, envelope);
        }
        catch (e) {
            logger.error(e);
        }
    };
    /**
     * Handle Sentry repsonse for promise-based transports.
     */
    BaseTransport.prototype._handleResponse = function (_a) {
        var requestType = _a.requestType, response = _a.response, headers = _a.headers, resolve = _a.resolve, reject = _a.reject;
        var status = Status.fromHttpCode(response.status);
        /**
         * "The name is case-insensitive."
         * https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
         */
        var limited = this._handleRateLimit(headers);
        if (limited)
            logger.warn("Too many " + requestType + " requests, backing off until: " + this._disabledUntil(requestType));
        if (status === Status.Success) {
            resolve({ status: status });
            return;
        }
        reject(response);
    };
    /**
     * Gets the time that given category is disabled until for rate limiting
     */
    BaseTransport.prototype._disabledUntil = function (requestType) {
        var category = CATEGORY_MAPPING[requestType];
        return this._rateLimits[category] || this._rateLimits.all;
    };
    /**
     * Checks if a category is rate limited
     */
    BaseTransport.prototype._isRateLimited = function (requestType) {
        return this._disabledUntil(requestType) > new Date(Date.now());
    };
    /**
     * Sets internal _rateLimits from incoming headers. Returns true if headers contains a non-empty rate limiting header.
     */
    BaseTransport.prototype._handleRateLimit = function (headers) {
        var e_1, _a, e_2, _b;
        var now = Date.now();
        var rlHeader = headers['x-sentry-rate-limits'];
        var raHeader = headers['retry-after'];
        if (rlHeader) {
            try {
                // rate limit headers are of the form
                //     <header>,<header>,..
                // where each <header> is of the form
                //     <retry_after>: <categories>: <scope>: <reason_code>
                // where
                //     <retry_after> is a delay in ms
                //     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
                //         <category>;<category>;...
                //     <scope> is what's being limited (org, project, or key) - ignored by SDK
                //     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
                for (var _c = __values$3(rlHeader.trim().split(',')), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var limit = _d.value;
                    var parameters = limit.split(':', 2);
                    var headerDelay = parseInt(parameters[0], 10);
                    var delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
                    try {
                        for (var _e = (e_2 = void 0, __values$3(parameters[1].split(';'))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var category = _f.value;
                            this._rateLimits[category || 'all'] = new Date(now + delay);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        }
        else if (raHeader) {
            this._rateLimits.all = new Date(now + parseRetryAfterHeader(now, raHeader));
            return true;
        }
        return false;
    };
    return BaseTransport;
}());

/** `fetch` based transport */
var FetchTransport = /** @class */ (function (_super) {
    __extends$2(FetchTransport, _super);
    function FetchTransport(options, fetchImpl) {
        if (fetchImpl === void 0) { fetchImpl = getNativeFetchImplementation(); }
        var _this = _super.call(this, options) || this;
        _this._fetch = fetchImpl;
        return _this;
    }
    /**
     * @inheritDoc
     */
    FetchTransport.prototype.sendEvent = function (event) {
        return this._sendRequest(eventToSentryRequest(event, this._api), event);
    };
    /**
     * @inheritDoc
     */
    FetchTransport.prototype.sendSession = function (session) {
        return this._sendRequest(sessionToSentryRequest(session, this._api), session);
    };
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    FetchTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        if (this._isRateLimited(sentryRequest.type)) {
            this.recordLostEvent(Outcome.RateLimitBackoff, sentryRequest.type);
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        var options = {
            body: sentryRequest.body,
            method: 'POST',
            // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
            // https://caniuse.com/#feat=referrer-policy
            // It doesn't. And it throw exception instead of ignoring this parameter...
            // REF: https://github.com/getsentry/raven-js/issues/1233
            referrerPolicy: (supportsReferrerPolicy() ? 'origin' : ''),
        };
        if (this.options.fetchParameters !== undefined) {
            Object.assign(options, this.options.fetchParameters);
        }
        if (this.options.headers !== undefined) {
            options.headers = this.options.headers;
        }
        return this._buffer
            .add(function () {
            return new SyncPromise(function (resolve, reject) {
                void _this._fetch(sentryRequest.url, options)
                    .then(function (response) {
                    var headers = {
                        'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
                        'retry-after': response.headers.get('Retry-After'),
                    };
                    _this._handleResponse({
                        requestType: sentryRequest.type,
                        response: response,
                        headers: headers,
                        resolve: resolve,
                        reject: reject,
                    });
                })
                    .catch(reject);
            });
        })
            .then(undefined, function (reason) {
            // It's either buffer rejection or any other xhr/fetch error, which are treated as NetworkError.
            if (reason instanceof SentryError) {
                _this.recordLostEvent(Outcome.QueueOverflow, sentryRequest.type);
            }
            else {
                _this.recordLostEvent(Outcome.NetworkError, sentryRequest.type);
            }
            throw reason;
        });
    };
    return FetchTransport;
}(BaseTransport));

/** `XHR` based transport */
var XHRTransport = /** @class */ (function (_super) {
    __extends$2(XHRTransport, _super);
    function XHRTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    XHRTransport.prototype.sendEvent = function (event) {
        return this._sendRequest(eventToSentryRequest(event, this._api), event);
    };
    /**
     * @inheritDoc
     */
    XHRTransport.prototype.sendSession = function (session) {
        return this._sendRequest(sessionToSentryRequest(session, this._api), session);
    };
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    XHRTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        if (this._isRateLimited(sentryRequest.type)) {
            this.recordLostEvent(Outcome.RateLimitBackoff, sentryRequest.type);
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        return this._buffer
            .add(function () {
            return new SyncPromise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        var headers = {
                            'x-sentry-rate-limits': request.getResponseHeader('X-Sentry-Rate-Limits'),
                            'retry-after': request.getResponseHeader('Retry-After'),
                        };
                        _this._handleResponse({ requestType: sentryRequest.type, response: request, headers: headers, resolve: resolve, reject: reject });
                    }
                };
                request.open('POST', sentryRequest.url);
                for (var header in _this.options.headers) {
                    if (Object.prototype.hasOwnProperty.call(_this.options.headers, header)) {
                        request.setRequestHeader(header, _this.options.headers[header]);
                    }
                }
                request.send(sentryRequest.body);
            });
        })
            .then(undefined, function (reason) {
            // It's either buffer rejection or any other xhr/fetch error, which are treated as NetworkError.
            if (reason instanceof SentryError) {
                _this.recordLostEvent(Outcome.QueueOverflow, sentryRequest.type);
            }
            else {
                _this.recordLostEvent(Outcome.NetworkError, sentryRequest.type);
            }
            throw reason;
        });
    };
    return XHRTransport;
}(BaseTransport));

/**
 * The Sentry Browser SDK Backend.
 * @hidden
 */
var BrowserBackend = /** @class */ (function (_super) {
    __extends$2(BrowserBackend, _super);
    function BrowserBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromException = function (exception, hint) {
        return eventFromException(this._options, exception, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromMessage = function (message, level, hint) {
        if (level === void 0) { level = Severity.Info; }
        return eventFromMessage(this._options, message, level, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype._setupTransport = function () {
        if (!this._options.dsn) {
            // We return the noop transport here in case there is no Dsn.
            return _super.prototype._setupTransport.call(this);
        }
        var transportOptions = __assign$4(__assign$4({}, this._options.transportOptions), { dsn: this._options.dsn, tunnel: this._options.tunnel, sendClientReports: this._options.sendClientReports, _metadata: this._options._metadata });
        if (this._options.transport) {
            return new this._options.transport(transportOptions);
        }
        if (supportsFetch()) {
            return new FetchTransport(transportOptions);
        }
        return new XHRTransport(transportOptions);
    };
    return BrowserBackend;
}(BaseBackend));

var global$5 = getGlobalObject();
var ignoreOnError = 0;
/**
 * @hidden
 */
function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */
function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(function () {
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 * @hidden
 */
function wrap$1(fn, options, before) {
    if (options === void 0) { options = {}; }
    if (typeof fn !== 'function') {
        return fn;
    }
    try {
        // We don't wanna wrap it twice
        if (fn.__sentry__) {
            return fn;
        }
        // If this has already been wrapped in the past, return that wrapped function
        if (fn.__sentry_wrapped__) {
            return fn.__sentry_wrapped__;
        }
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    /* eslint-disable prefer-rest-params */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var sentryWrapped = function () {
        var args = Array.prototype.slice.call(arguments);
        try {
            if (before && typeof before === 'function') {
                before.apply(this, arguments);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            var wrappedArguments = args.map(function (arg) { return wrap$1(arg, options); });
            if (fn.handleEvent) {
                // Attempt to invoke user-land function
                // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
                //       means the sentry.javascript SDK caught an error invoking your application code. This
                //       is expected behavior and NOT indicative of a bug with sentry.javascript.
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                return fn.handleEvent.apply(this, wrappedArguments);
            }
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        }
        catch (ex) {
            ignoreNextOnError();
            withScope(function (scope) {
                scope.addEventProcessor(function (event) {
                    var processedEvent = __assign$4({}, event);
                    if (options.mechanism) {
                        addExceptionTypeValue(processedEvent, undefined, undefined);
                        addExceptionMechanism(processedEvent, options.mechanism);
                    }
                    processedEvent.extra = __assign$4(__assign$4({}, processedEvent.extra), { arguments: args });
                    return processedEvent;
                });
                captureException(ex);
            });
            throw ex;
        }
    };
    /* eslint-enable prefer-rest-params */
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for (var property in fn) {
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    }
    catch (_oO) { } // eslint-disable-line no-empty
    fn.prototype = fn.prototype || {};
    sentryWrapped.prototype = fn.prototype;
    Object.defineProperty(fn, '__sentry_wrapped__', {
        enumerable: false,
        value: sentryWrapped,
    });
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    Object.defineProperties(sentryWrapped, {
        __sentry__: {
            enumerable: false,
            value: true,
        },
        __sentry_original__: {
            enumerable: false,
            value: fn,
        },
    });
    // Restore original function name (not all browsers allow that)
    try {
        var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
        if (descriptor.configurable) {
            Object.defineProperty(sentryWrapped, 'name', {
                get: function () {
                    return fn.name;
                },
            });
        }
        // eslint-disable-next-line no-empty
    }
    catch (_oO) { }
    return sentryWrapped;
}
/**
 * Injects the Report Dialog script
 * @hidden
 */
function injectReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!global$5.document) {
        return;
    }
    if (!options.eventId) {
        logger.error("Missing eventId option in showReportDialog call");
        return;
    }
    if (!options.dsn) {
        logger.error("Missing dsn option in showReportDialog call");
        return;
    }
    var script = global$5.document.createElement('script');
    script.async = true;
    script.src = new API(options.dsn).getReportDialogEndpoint(options);
    if (options.onLoad) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        script.onload = options.onLoad;
    }
    var injectionPoint = global$5.document.head || global$5.document.body;
    if (injectionPoint) {
        injectionPoint.appendChild(script);
    }
}

/** Global handlers */
var GlobalHandlers = /** @class */ (function () {
    /** JSDoc */
    function GlobalHandlers(options) {
        /**
         * @inheritDoc
         */
        this.name = GlobalHandlers.id;
        /** JSDoc */
        this._onErrorHandlerInstalled = false;
        /** JSDoc */
        this._onUnhandledRejectionHandlerInstalled = false;
        this._options = __assign$4({ onerror: true, onunhandledrejection: true }, options);
    }
    /**
     * @inheritDoc
     */
    GlobalHandlers.prototype.setupOnce = function () {
        Error.stackTraceLimit = 50;
        if (this._options.onerror) {
            logger.log('Global Handler attached: onerror');
            this._installGlobalOnErrorHandler();
        }
        if (this._options.onunhandledrejection) {
            logger.log('Global Handler attached: onunhandledrejection');
            this._installGlobalOnUnhandledRejectionHandler();
        }
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnErrorHandler = function () {
        var _this = this;
        if (this._onErrorHandlerInstalled) {
            return;
        }
        addInstrumentationHandler({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            callback: function (data) {
                var error = data.error;
                var currentHub = getCurrentHub();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || shouldIgnoreOnError() || isFailedOwnDelivery) {
                    return;
                }
                var client = currentHub.getClient();
                var event = error === undefined && isString(data.msg)
                    ? _this._eventFromIncompleteOnError(data.msg, data.url, data.line, data.column)
                    : _this._enhanceEventWithInitialFrame(eventFromUnknownInput(error || data.msg, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: false,
                    }), data.url, data.line, data.column);
                addExceptionMechanism(event, {
                    handled: false,
                    type: 'onerror',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
            },
            type: 'error',
        });
        this._onErrorHandlerInstalled = true;
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnUnhandledRejectionHandler = function () {
        var _this = this;
        if (this._onUnhandledRejectionHandlerInstalled) {
            return;
        }
        addInstrumentationHandler({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            callback: function (e) {
                var error = e;
                // dig the object of the rejection out of known event types
                try {
                    // PromiseRejectionEvents store the object of the rejection under 'reason'
                    // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
                    if ('reason' in e) {
                        error = e.reason;
                    }
                    // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
                    // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
                    // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
                    // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
                    // https://github.com/getsentry/sentry-javascript/issues/2380
                    else if ('detail' in e && 'reason' in e.detail) {
                        error = e.detail.reason;
                    }
                }
                catch (_oO) {
                    // no-empty
                }
                var currentHub = getCurrentHub();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || shouldIgnoreOnError() || isFailedOwnDelivery) {
                    return true;
                }
                var client = currentHub.getClient();
                var event = isPrimitive(error)
                    ? _this._eventFromRejectionWithPrimitive(error)
                    : eventFromUnknownInput(error, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: true,
                    });
                event.level = Severity.Error;
                addExceptionMechanism(event, {
                    handled: false,
                    type: 'onunhandledrejection',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
                return;
            },
            type: 'unhandledrejection',
        });
        this._onUnhandledRejectionHandlerInstalled = true;
    };
    /**
     * This function creates a stack from an old, error-less onerror handler.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalHandlers.prototype._eventFromIncompleteOnError = function (msg, url, line, column) {
        var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        // If 'message' is ErrorEvent, get real message from inside
        var message = isErrorEvent(msg) ? msg.message : msg;
        var name;
        var groups = message.match(ERROR_TYPES_RE);
        if (groups) {
            name = groups[1];
            message = groups[2];
        }
        var event = {
            exception: {
                values: [
                    {
                        type: name || 'Error',
                        value: message,
                    },
                ],
            },
        };
        return this._enhanceEventWithInitialFrame(event, url, line, column);
    };
    /**
     * Create an event from a promise rejection where the `reason` is a primitive.
     *
     * @param reason: The `reason` property of the promise rejection
     * @returns An Event object with an appropriate `exception` value
     */
    GlobalHandlers.prototype._eventFromRejectionWithPrimitive = function (reason) {
        return {
            exception: {
                values: [
                    {
                        type: 'UnhandledRejection',
                        // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
                        value: "Non-Error promise rejection captured with value: " + String(reason),
                    },
                ],
            },
        };
    };
    /** JSDoc */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalHandlers.prototype._enhanceEventWithInitialFrame = function (event, url, line, column) {
        event.exception = event.exception || {};
        event.exception.values = event.exception.values || [];
        event.exception.values[0] = event.exception.values[0] || {};
        event.exception.values[0].stacktrace = event.exception.values[0].stacktrace || {};
        event.exception.values[0].stacktrace.frames = event.exception.values[0].stacktrace.frames || [];
        var colno = isNaN(parseInt(column, 10)) ? undefined : column;
        var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
        var filename = isString(url) && url.length > 0 ? url : getLocationHref();
        if (event.exception.values[0].stacktrace.frames.length === 0) {
            event.exception.values[0].stacktrace.frames.push({
                colno: colno,
                filename: filename,
                function: '?',
                in_app: true,
                lineno: lineno,
            });
        }
        return event;
    };
    /**
     * @inheritDoc
     */
    GlobalHandlers.id = 'GlobalHandlers';
    return GlobalHandlers;
}());

var DEFAULT_EVENT_TARGET = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload',
];
/** Wrap timer functions and event targets to catch errors and provide better meta data */
var TryCatch = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function TryCatch(options) {
        /**
         * @inheritDoc
         */
        this.name = TryCatch.id;
        this._options = __assign$4({ XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true }, options);
    }
    /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
    TryCatch.prototype.setupOnce = function () {
        var global = getGlobalObject();
        if (this._options.setTimeout) {
            fill(global, 'setTimeout', this._wrapTimeFunction.bind(this));
        }
        if (this._options.setInterval) {
            fill(global, 'setInterval', this._wrapTimeFunction.bind(this));
        }
        if (this._options.requestAnimationFrame) {
            fill(global, 'requestAnimationFrame', this._wrapRAF.bind(this));
        }
        if (this._options.XMLHttpRequest && 'XMLHttpRequest' in global) {
            fill(XMLHttpRequest.prototype, 'send', this._wrapXHR.bind(this));
        }
        if (this._options.eventTarget) {
            var eventTarget = Array.isArray(this._options.eventTarget) ? this._options.eventTarget : DEFAULT_EVENT_TARGET;
            eventTarget.forEach(this._wrapEventTarget.bind(this));
        }
    };
    /** JSDoc */
    TryCatch.prototype._wrapTimeFunction = function (original) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var originalCallback = args[0];
            args[0] = wrap$1(originalCallback, {
                mechanism: {
                    data: { function: getFunctionName(original) },
                    handled: true,
                    type: 'instrument',
                },
            });
            return original.apply(this, args);
        };
    };
    /** JSDoc */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TryCatch.prototype._wrapRAF = function (original) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function (callback) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return original.call(this, wrap$1(callback, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: getFunctionName(original),
                    },
                    handled: true,
                    type: 'instrument',
                },
            }));
        };
    };
    /** JSDoc */
    TryCatch.prototype._wrapEventTarget = function (target) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var global = getGlobalObject();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = global[target] && global[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        fill(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                try {
                    if (typeof fn.handleEvent === 'function') {
                        fn.handleEvent = wrap$1(fn.handleEvent.bind(fn), {
                            mechanism: {
                                data: {
                                    function: 'handleEvent',
                                    handler: getFunctionName(fn),
                                    target: target,
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        });
                    }
                }
                catch (err) {
                    // can sometimes get 'Permission denied to access property "handle Event'
                }
                return original.call(this, eventName, 
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                wrap$1(fn, {
                    mechanism: {
                        data: {
                            function: 'addEventListener',
                            handler: getFunctionName(fn),
                            target: target,
                        },
                        handled: true,
                        type: 'instrument',
                    },
                }), options);
            };
        });
        fill(proto, 'removeEventListener', function (originalRemoveEventListener) {
            return function (eventName, fn, options) {
                var _a;
                /**
                 * There are 2 possible scenarios here:
                 *
                 * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
                 * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
                 * as a pass-through, and call original `removeEventListener` with it.
                 *
                 * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
                 * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
                 * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
                 * in order for us to make a distinction between wrapped/non-wrapped functions possible.
                 * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
                 *
                 * When someone adds a handler prior to initialization, and then do it again, but after,
                 * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
                 * to get rid of the initial handler and it'd stick there forever.
                 */
                var wrappedEventHandler = fn;
                try {
                    var originalEventHandler = (_a = wrappedEventHandler) === null || _a === void 0 ? void 0 : _a.__sentry_wrapped__;
                    if (originalEventHandler) {
                        originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
                    }
                }
                catch (e) {
                    // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
                }
                return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
            };
        });
    };
    /** JSDoc */
    TryCatch.prototype._wrapXHR = function (originalSend) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
            xmlHttpRequestProps.forEach(function (prop) {
                if (prop in xhr && typeof xhr[prop] === 'function') {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    fill(xhr, prop, function (original) {
                        var wrapOptions = {
                            mechanism: {
                                data: {
                                    function: prop,
                                    handler: getFunctionName(original),
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        };
                        // If Instrument integration has been called before TryCatch, get the name of original function
                        if (original.__sentry_original__) {
                            wrapOptions.mechanism.data.handler = getFunctionName(original.__sentry_original__);
                        }
                        // Otherwise wrap directly
                        return wrap$1(original, wrapOptions);
                    });
                }
            });
            return originalSend.apply(this, args);
        };
    };
    /**
     * @inheritDoc
     */
    TryCatch.id = 'TryCatch';
    return TryCatch;
}());

/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */
var Breadcrumbs = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Breadcrumbs(options) {
        /**
         * @inheritDoc
         */
        this.name = Breadcrumbs.id;
        this._options = __assign$4({ console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true }, options);
    }
    /**
     * Create a breadcrumb of `sentry` from the events themselves
     */
    Breadcrumbs.prototype.addSentryBreadcrumb = function (event) {
        if (!this._options.sentry) {
            return;
        }
        getCurrentHub().addBreadcrumb({
            category: "sentry." + (event.type === 'transaction' ? 'transaction' : 'event'),
            event_id: event.event_id,
            level: event.level,
            message: getEventDescription(event),
        }, {
            event: event,
        });
    };
    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - Console API
     *  - DOM API (click/typing)
     *  - XMLHttpRequest API
     *  - Fetch API
     *  - History API
     */
    Breadcrumbs.prototype.setupOnce = function () {
        var _this = this;
        if (this._options.console) {
            addInstrumentationHandler({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._consoleBreadcrumb.apply(_this, __spread$4(args));
                },
                type: 'console',
            });
        }
        if (this._options.dom) {
            addInstrumentationHandler({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._domBreadcrumb.apply(_this, __spread$4(args));
                },
                type: 'dom',
            });
        }
        if (this._options.xhr) {
            addInstrumentationHandler({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._xhrBreadcrumb.apply(_this, __spread$4(args));
                },
                type: 'xhr',
            });
        }
        if (this._options.fetch) {
            addInstrumentationHandler({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._fetchBreadcrumb.apply(_this, __spread$4(args));
                },
                type: 'fetch',
            });
        }
        if (this._options.history) {
            addInstrumentationHandler({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._historyBreadcrumb.apply(_this, __spread$4(args));
                },
                type: 'history',
            });
        }
    };
    /**
     * Creates breadcrumbs from console API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._consoleBreadcrumb = function (handlerData) {
        var breadcrumb = {
            category: 'console',
            data: {
                arguments: handlerData.args,
                logger: 'console',
            },
            level: Severity.fromString(handlerData.level),
            message: safeJoin(handlerData.args, ' '),
        };
        if (handlerData.level === 'assert') {
            if (handlerData.args[0] === false) {
                breadcrumb.message = "Assertion failed: " + (safeJoin(handlerData.args.slice(1), ' ') || 'console.assert');
                breadcrumb.data.arguments = handlerData.args.slice(1);
            }
            else {
                // Don't capture a breadcrumb for passed assertions
                return;
            }
        }
        getCurrentHub().addBreadcrumb(breadcrumb, {
            input: handlerData.args,
            level: handlerData.level,
        });
    };
    /**
     * Creates breadcrumbs from DOM API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._domBreadcrumb = function (handlerData) {
        var target;
        var keyAttrs = typeof this._options.dom === 'object' ? this._options.dom.serializeAttribute : undefined;
        if (typeof keyAttrs === 'string') {
            keyAttrs = [keyAttrs];
        }
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            target = handlerData.event.target
                ? htmlTreeAsString(handlerData.event.target, keyAttrs)
                : htmlTreeAsString(handlerData.event, keyAttrs);
        }
        catch (e) {
            target = '<unknown>';
        }
        if (target.length === 0) {
            return;
        }
        getCurrentHub().addBreadcrumb({
            category: "ui." + handlerData.name,
            message: target,
        }, {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global,
        });
    };
    /**
     * Creates breadcrumbs from XHR API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._xhrBreadcrumb = function (handlerData) {
        if (handlerData.endTimestamp) {
            // We only capture complete, non-sentry requests
            if (handlerData.xhr.__sentry_own_request__) {
                return;
            }
            var _a = handlerData.xhr.__sentry_xhr__ || {}, method = _a.method, url = _a.url, status_code = _a.status_code, body = _a.body;
            getCurrentHub().addBreadcrumb({
                category: 'xhr',
                data: {
                    method: method,
                    url: url,
                    status_code: status_code,
                },
                type: 'http',
            }, {
                xhr: handlerData.xhr,
                input: body,
            });
            return;
        }
    };
    /**
     * Creates breadcrumbs from fetch API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._fetchBreadcrumb = function (handlerData) {
        // We only capture complete fetch requests
        if (!handlerData.endTimestamp) {
            return;
        }
        if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
            // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
            return;
        }
        if (handlerData.error) {
            getCurrentHub().addBreadcrumb({
                category: 'fetch',
                data: handlerData.fetchData,
                level: Severity.Error,
                type: 'http',
            }, {
                data: handlerData.error,
                input: handlerData.args,
            });
        }
        else {
            getCurrentHub().addBreadcrumb({
                category: 'fetch',
                data: __assign$4(__assign$4({}, handlerData.fetchData), { status_code: handlerData.response.status }),
                type: 'http',
            }, {
                input: handlerData.args,
                response: handlerData.response,
            });
        }
    };
    /**
     * Creates breadcrumbs from history API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._historyBreadcrumb = function (handlerData) {
        var global = getGlobalObject();
        var from = handlerData.from;
        var to = handlerData.to;
        var parsedLoc = parseUrl(global.location.href);
        var parsedFrom = parseUrl(from);
        var parsedTo = parseUrl(to);
        // Initial pushState doesn't provide `from` information
        if (!parsedFrom.path) {
            parsedFrom = parsedLoc;
        }
        // Use only the path component of the URL if the URL matches the current
        // document (almost all the time when using pushState)
        if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
            to = parsedTo.relative;
        }
        if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
            from = parsedFrom.relative;
        }
        getCurrentHub().addBreadcrumb({
            category: 'navigation',
            data: {
                from: from,
                to: to,
            },
        });
    };
    /**
     * @inheritDoc
     */
    Breadcrumbs.id = 'Breadcrumbs';
    return Breadcrumbs;
}());

var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */
var LinkedErrors = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function LinkedErrors(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = LinkedErrors.id;
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
    }
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.setupOnce = function () {
        addGlobalEventProcessor(function (event, hint) {
            var self = getCurrentHub().getIntegration(LinkedErrors);
            if (self) {
                var handler = self._handler && self._handler.bind(self);
                return typeof handler === 'function' ? handler(event, hint) : event;
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._handler = function (event, hint) {
        if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
            return event;
        }
        var linkedErrors = this._walkErrorTree(hint.originalException, this._key);
        event.exception.values = __spread$4(linkedErrors, event.exception.values);
        return event;
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._walkErrorTree = function (error, key, stack) {
        if (stack === void 0) { stack = []; }
        if (!isInstanceOf(error[key], Error) || stack.length + 1 >= this._limit) {
            return stack;
        }
        var stacktrace = computeStackTrace(error[key]);
        var exception = exceptionFromStacktrace(stacktrace);
        return this._walkErrorTree(error[key], key, __spread$4([exception], stack));
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.id = 'LinkedErrors';
    return LinkedErrors;
}());

var global$4 = getGlobalObject();
/** UserAgent */
var UserAgent = /** @class */ (function () {
    function UserAgent() {
        /**
         * @inheritDoc
         */
        this.name = UserAgent.id;
    }
    /**
     * @inheritDoc
     */
    UserAgent.prototype.setupOnce = function () {
        addGlobalEventProcessor(function (event) {
            var _a, _b, _c;
            if (getCurrentHub().getIntegration(UserAgent)) {
                // if none of the information we want exists, don't bother
                if (!global$4.navigator && !global$4.location && !global$4.document) {
                    return event;
                }
                // grab as much info as exists and add it to the event
                var url = ((_a = event.request) === null || _a === void 0 ? void 0 : _a.url) || ((_b = global$4.location) === null || _b === void 0 ? void 0 : _b.href);
                var referrer = (global$4.document || {}).referrer;
                var userAgent = (global$4.navigator || {}).userAgent;
                var headers = __assign$4(__assign$4(__assign$4({}, (_c = event.request) === null || _c === void 0 ? void 0 : _c.headers), (referrer && { Referer: referrer })), (userAgent && { 'User-Agent': userAgent }));
                var request = __assign$4(__assign$4({}, (url && { url: url })), { headers: headers });
                return __assign$4(__assign$4({}, event), { request: request });
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    UserAgent.id = 'UserAgent';
    return UserAgent;
}());

/** Deduplication filter */
var Dedupe = /** @class */ (function () {
    function Dedupe() {
        /**
         * @inheritDoc
         */
        this.name = Dedupe.id;
    }
    /**
     * @inheritDoc
     */
    Dedupe.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (currentEvent) {
            var self = getCurrentHub().getIntegration(Dedupe);
            if (self) {
                // Juuust in case something goes wrong
                try {
                    if (self._shouldDropEvent(currentEvent, self._previousEvent)) {
                        logger.warn("Event dropped due to being a duplicate of previously captured event.");
                        return null;
                    }
                }
                catch (_oO) {
                    return (self._previousEvent = currentEvent);
                }
                return (self._previousEvent = currentEvent);
            }
            return currentEvent;
        });
    };
    /** JSDoc */
    Dedupe.prototype._shouldDropEvent = function (currentEvent, previousEvent) {
        if (!previousEvent) {
            return false;
        }
        if (this._isSameMessageEvent(currentEvent, previousEvent)) {
            return true;
        }
        if (this._isSameExceptionEvent(currentEvent, previousEvent)) {
            return true;
        }
        return false;
    };
    /** JSDoc */
    Dedupe.prototype._isSameMessageEvent = function (currentEvent, previousEvent) {
        var currentMessage = currentEvent.message;
        var previousMessage = previousEvent.message;
        // If neither event has a message property, they were both exceptions, so bail out
        if (!currentMessage && !previousMessage) {
            return false;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
            return false;
        }
        if (currentMessage !== previousMessage) {
            return false;
        }
        if (!this._isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this._isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._getFramesFromEvent = function (event) {
        var exception = event.exception;
        if (exception) {
            try {
                // @ts-ignore Object could be undefined
                return exception.values[0].stacktrace.frames;
            }
            catch (_oO) {
                return undefined;
            }
        }
        else if (event.stacktrace) {
            return event.stacktrace.frames;
        }
        return undefined;
    };
    /** JSDoc */
    Dedupe.prototype._isSameStacktrace = function (currentEvent, previousEvent) {
        var currentFrames = this._getFramesFromEvent(currentEvent);
        var previousFrames = this._getFramesFromEvent(previousEvent);
        // If neither event has a stacktrace, they are assumed to be the same
        if (!currentFrames && !previousFrames) {
            return true;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
            return false;
        }
        currentFrames = currentFrames;
        previousFrames = previousFrames;
        // If number of frames differ, they are not the same
        if (previousFrames.length !== currentFrames.length) {
            return false;
        }
        // Otherwise, compare the two
        for (var i = 0; i < previousFrames.length; i++) {
            var frameA = previousFrames[i];
            var frameB = currentFrames[i];
            if (frameA.filename !== frameB.filename ||
                frameA.lineno !== frameB.lineno ||
                frameA.colno !== frameB.colno ||
                frameA.function !== frameB.function) {
                return false;
            }
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._getExceptionFromEvent = function (event) {
        return event.exception && event.exception.values && event.exception.values[0];
    };
    /** JSDoc */
    Dedupe.prototype._isSameExceptionEvent = function (currentEvent, previousEvent) {
        var previousException = this._getExceptionFromEvent(previousEvent);
        var currentException = this._getExceptionFromEvent(currentEvent);
        if (!previousException || !currentException) {
            return false;
        }
        if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
            return false;
        }
        if (!this._isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this._isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._isSameFingerprint = function (currentEvent, previousEvent) {
        var currentFingerprint = currentEvent.fingerprint;
        var previousFingerprint = previousEvent.fingerprint;
        // If neither event has a fingerprint, they are assumed to be the same
        if (!currentFingerprint && !previousFingerprint) {
            return true;
        }
        // If only one event has a fingerprint, but not the other one, they are not the same
        if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
            return false;
        }
        currentFingerprint = currentFingerprint;
        previousFingerprint = previousFingerprint;
        // Otherwise, compare the two
        try {
            return !!(currentFingerprint.join('') === previousFingerprint.join(''));
        }
        catch (_oO) {
            return false;
        }
    };
    /**
     * @inheritDoc
     */
    Dedupe.id = 'Dedupe';
    return Dedupe;
}());

/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
var BrowserClient = /** @class */ (function (_super) {
    __extends$2(BrowserClient, _super);
    /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
    function BrowserClient(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        options._metadata = options._metadata || {};
        options._metadata.sdk = options._metadata.sdk || {
            name: 'sentry.javascript.browser',
            packages: [
                {
                    name: 'npm:@sentry/browser',
                    version: SDK_VERSION,
                },
            ],
            version: SDK_VERSION,
        };
        _this = _super.call(this, BrowserBackend, options) || this;
        return _this;
    }
    /**
     * Show a report dialog to the user to send feedback to a specific event.
     *
     * @param options Set individual options for the dialog
     */
    BrowserClient.prototype.showReportDialog = function (options) {
        if (options === void 0) { options = {}; }
        // doesn't work without a document (React Native)
        var document = getGlobalObject().document;
        if (!document) {
            return;
        }
        if (!this._isEnabled()) {
            logger.error('Trying to call showReportDialog with Sentry Client disabled');
            return;
        }
        injectReportDialog(__assign$4(__assign$4({}, options), { dsn: options.dsn || this.getDsn() }));
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._prepareEvent = function (event, scope, hint) {
        event.platform = event.platform || 'javascript';
        return _super.prototype._prepareEvent.call(this, event, scope, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._sendEvent = function (event) {
        var integration = this.getIntegration(Breadcrumbs);
        if (integration) {
            integration.addSentryBreadcrumb(event);
        }
        _super.prototype._sendEvent.call(this, event);
    };
    return BrowserClient;
}(BaseClient));

var defaultIntegrations = [
    new InboundFilters(),
    new FunctionToString(),
    new TryCatch(),
    new Breadcrumbs(),
    new GlobalHandlers(),
    new LinkedErrors(),
    new Dedupe(),
    new UserAgent(),
];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */
function init$1(options) {
    if (options === void 0) { options = {}; }
    if (options.defaultIntegrations === undefined) {
        options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === undefined) {
        var window_1 = getGlobalObject();
        // This supports the variable that sentry-webpack-plugin injects
        if (window_1.SENTRY_RELEASE && window_1.SENTRY_RELEASE.id) {
            options.release = window_1.SENTRY_RELEASE.id;
        }
    }
    if (options.autoSessionTracking === undefined) {
        options.autoSessionTracking = true;
    }
    if (options.sendClientReports === undefined) {
        options.sendClientReports = true;
    }
    initAndBind(BrowserClient, options);
    if (options.autoSessionTracking) {
        startSessionTracking();
    }
}
/**
 * Enable automatic Session Tracking for the initial page load.
 */
function startSessionTracking() {
    var window = getGlobalObject();
    var document = window.document;
    if (typeof document === 'undefined') {
        logger.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
        return;
    }
    var hub = getCurrentHub();
    // The only way for this to be false is for there to be a version mismatch between @sentry/browser (>= 6.0.0) and
    // @sentry/hub (< 5.27.0). In the simple case, there won't ever be such a mismatch, because the two packages are
    // pinned at the same version in package.json, but there are edge cases where it's possible. See
    // https://github.com/getsentry/sentry-javascript/issues/3207 and
    // https://github.com/getsentry/sentry-javascript/issues/3234 and
    // https://github.com/getsentry/sentry-javascript/issues/3278.
    if (typeof hub.startSession !== 'function' || typeof hub.captureSession !== 'function') {
        return;
    }
    // The session duration for browser sessions does not track a meaningful
    // concept that can be used as a metric.
    // Automatically captured sessions are akin to page views, and thus we
    // discard their duration.
    hub.startSession({ ignoreDuration: true });
    hub.captureSession();
    // We want to create a session for every navigation as well
    addInstrumentationHandler({
        callback: function (_a) {
            var from = _a.from, to = _a.to;
            // Don't create an additional session for the initial route or if the location did not change
            if (from === undefined || from === to) {
                return;
            }
            hub.startSession({ ignoreDuration: true });
            hub.captureSession();
        },
        type: 'history',
    });
}

/**
 * Inits the React SDK
 */
function init(options) {
    options._metadata = options._metadata || {};
    options._metadata.sdk = options._metadata.sdk || {
        name: 'sentry.javascript.react',
        packages: [
            {
                name: 'npm:@sentry/react',
                version: SDK_VERSION,
            },
        ],
        version: SDK_VERSION,
    };
    init$1(options);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** The status of an Span. */
// eslint-disable-next-line import/export
var SpanStatus;
(function (SpanStatus) {
    /** The operation completed successfully. */
    SpanStatus["Ok"] = "ok";
    /** Deadline expired before operation could complete. */
    SpanStatus["DeadlineExceeded"] = "deadline_exceeded";
    /** 401 Unauthorized (actually does mean unauthenticated according to RFC 7235) */
    SpanStatus["Unauthenticated"] = "unauthenticated";
    /** 403 Forbidden */
    SpanStatus["PermissionDenied"] = "permission_denied";
    /** 404 Not Found. Some requested entity (file or directory) was not found. */
    SpanStatus["NotFound"] = "not_found";
    /** 429 Too Many Requests */
    SpanStatus["ResourceExhausted"] = "resource_exhausted";
    /** Client specified an invalid argument. 4xx. */
    SpanStatus["InvalidArgument"] = "invalid_argument";
    /** 501 Not Implemented */
    SpanStatus["Unimplemented"] = "unimplemented";
    /** 503 Service Unavailable */
    SpanStatus["Unavailable"] = "unavailable";
    /** Other/generic 5xx. */
    SpanStatus["InternalError"] = "internal_error";
    /** Unknown. Any non-standard HTTP status code. */
    SpanStatus["UnknownError"] = "unknown_error";
    /** The operation was cancelled (typically by the user). */
    SpanStatus["Cancelled"] = "cancelled";
    /** Already exists (409) */
    SpanStatus["AlreadyExists"] = "already_exists";
    /** Operation was rejected because the system is not in a state required for the operation's */
    SpanStatus["FailedPrecondition"] = "failed_precondition";
    /** The operation was aborted, typically due to a concurrency issue. */
    SpanStatus["Aborted"] = "aborted";
    /** Operation was attempted past the valid range. */
    SpanStatus["OutOfRange"] = "out_of_range";
    /** Unrecoverable data loss or corruption */
    SpanStatus["DataLoss"] = "data_loss";
})(SpanStatus || (SpanStatus = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (SpanStatus) {
    /**
     * Converts a HTTP status code into a {@link SpanStatus}.
     *
     * @param httpStatus The HTTP response status code.
     * @returns The span status or {@link SpanStatus.UnknownError}.
     */
    function fromHttpCode(httpStatus) {
        if (httpStatus < 400) {
            return SpanStatus.Ok;
        }
        if (httpStatus >= 400 && httpStatus < 500) {
            switch (httpStatus) {
                case 401:
                    return SpanStatus.Unauthenticated;
                case 403:
                    return SpanStatus.PermissionDenied;
                case 404:
                    return SpanStatus.NotFound;
                case 409:
                    return SpanStatus.AlreadyExists;
                case 413:
                    return SpanStatus.FailedPrecondition;
                case 429:
                    return SpanStatus.ResourceExhausted;
                default:
                    return SpanStatus.InvalidArgument;
            }
        }
        if (httpStatus >= 500 && httpStatus < 600) {
            switch (httpStatus) {
                case 501:
                    return SpanStatus.Unimplemented;
                case 503:
                    return SpanStatus.Unavailable;
                case 504:
                    return SpanStatus.DeadlineExceeded;
                default:
                    return SpanStatus.InternalError;
            }
        }
        return SpanStatus.UnknownError;
    }
    SpanStatus.fromHttpCode = fromHttpCode;
})(SpanStatus || (SpanStatus = {}));

var TRACEPARENT_REGEXP = new RegExp('^[ \\t]*' + // whitespace
    '([0-9a-f]{32})?' + // trace_id
    '-?([0-9a-f]{16})?' + // span_id
    '-?([01])?' + // sampled
    '[ \\t]*$');
/**
 * Determines if tracing is currently enabled.
 *
 * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
 */
function hasTracingEnabled(options) {
    if (options === void 0) { options = (_a = getCurrentHub()
        .getClient()) === null || _a === void 0 ? void 0 : _a.getOptions(); }
    var _a;
    if (!options) {
        return false;
    }
    return 'tracesSampleRate' in options || 'tracesSampler' in options;
}
/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */
function extractTraceparentData(traceparent) {
    var matches = traceparent.match(TRACEPARENT_REGEXP);
    if (matches) {
        var parentSampled = void 0;
        if (matches[3] === '1') {
            parentSampled = true;
        }
        else if (matches[3] === '0') {
            parentSampled = false;
        }
        return {
            traceId: matches[1],
            parentSampled: parentSampled,
            parentSpanId: matches[2],
        };
    }
    return undefined;
}
/** Grabs active transaction off scope, if any */
function getActiveTransaction(hub) {
    if (hub === void 0) { hub = getCurrentHub(); }
    var _a, _b;
    return (_b = (_a = hub) === null || _a === void 0 ? void 0 : _a.getScope()) === null || _b === void 0 ? void 0 : _b.getTransaction();
}
/**
 * Converts from milliseconds to seconds
 * @param time time in ms
 */
function msToSec(time) {
    return time / 1000;
}
/**
 * Converts from seconds to milliseconds
 * @param time time in seconds
 */
function secToMs(time) {
    return time * 1000;
}

/**
 * Configures global error listeners
 */
function registerErrorInstrumentation() {
    addInstrumentationHandler({
        callback: errorCallback,
        type: 'error',
    });
    addInstrumentationHandler({
        callback: errorCallback,
        type: 'unhandledrejection',
    });
}
/**
 * If an error or unhandled promise occurs, we mark the active transaction as failed
 */
function errorCallback() {
    var activeTransaction = getActiveTransaction();
    if (activeTransaction) {
        logger.log("[Tracing] Transaction: " + SpanStatus.InternalError + " -> Global error occured");
        activeTransaction.setStatus(SpanStatus.InternalError);
    }
}

/**
 * Keeps track of finished spans for a given transaction
 * @internal
 * @hideconstructor
 * @hidden
 */
var SpanRecorder = /** @class */ (function () {
    function SpanRecorder(maxlen) {
        if (maxlen === void 0) { maxlen = 1000; }
        this.spans = [];
        this._maxlen = maxlen;
    }
    /**
     * This is just so that we don't run out of memory while recording a lot
     * of spans. At some point we just stop and flush out the start of the
     * trace tree (i.e.the first n spans with the smallest
     * start_timestamp).
     */
    SpanRecorder.prototype.add = function (span) {
        if (this.spans.length > this._maxlen) {
            span.spanRecorder = undefined;
        }
        else {
            this.spans.push(span);
        }
    };
    return SpanRecorder;
}());
/**
 * Span contains all data about a span
 */
var Span = /** @class */ (function () {
    /**
     * You should never call the constructor manually, always use `Sentry.startTransaction()`
     * or call `startChild()` on an existing span.
     * @internal
     * @hideconstructor
     * @hidden
     */
    function Span(spanContext) {
        /**
         * @inheritDoc
         */
        this.traceId = uuid4();
        /**
         * @inheritDoc
         */
        this.spanId = uuid4().substring(16);
        /**
         * Timestamp in seconds when the span was created.
         */
        this.startTimestamp = timestampWithMs();
        /**
         * @inheritDoc
         */
        this.tags = {};
        /**
         * @inheritDoc
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.data = {};
        if (!spanContext) {
            return this;
        }
        if (spanContext.traceId) {
            this.traceId = spanContext.traceId;
        }
        if (spanContext.spanId) {
            this.spanId = spanContext.spanId;
        }
        if (spanContext.parentSpanId) {
            this.parentSpanId = spanContext.parentSpanId;
        }
        // We want to include booleans as well here
        if ('sampled' in spanContext) {
            this.sampled = spanContext.sampled;
        }
        if (spanContext.op) {
            this.op = spanContext.op;
        }
        if (spanContext.description) {
            this.description = spanContext.description;
        }
        if (spanContext.data) {
            this.data = spanContext.data;
        }
        if (spanContext.tags) {
            this.tags = spanContext.tags;
        }
        if (spanContext.status) {
            this.status = spanContext.status;
        }
        if (spanContext.startTimestamp) {
            this.startTimestamp = spanContext.startTimestamp;
        }
        if (spanContext.endTimestamp) {
            this.endTimestamp = spanContext.endTimestamp;
        }
    }
    /**
     * @inheritDoc
     * @deprecated
     */
    Span.prototype.child = function (spanContext) {
        return this.startChild(spanContext);
    };
    /**
     * @inheritDoc
     */
    Span.prototype.startChild = function (spanContext) {
        var childSpan = new Span(__assign(__assign({}, spanContext), { parentSpanId: this.spanId, sampled: this.sampled, traceId: this.traceId }));
        childSpan.spanRecorder = this.spanRecorder;
        if (childSpan.spanRecorder) {
            childSpan.spanRecorder.add(childSpan);
        }
        childSpan.transaction = this.transaction;
        return childSpan;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.setTag = function (key, value) {
        var _a;
        this.tags = __assign(__assign({}, this.tags), (_a = {}, _a[key] = value, _a));
        return this;
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Span.prototype.setData = function (key, value) {
        var _a;
        this.data = __assign(__assign({}, this.data), (_a = {}, _a[key] = value, _a));
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.setStatus = function (value) {
        this.status = value;
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.setHttpStatus = function (httpStatus) {
        this.setTag('http.status_code', String(httpStatus));
        var spanStatus = SpanStatus.fromHttpCode(httpStatus);
        if (spanStatus !== SpanStatus.UnknownError) {
            this.setStatus(spanStatus);
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.isSuccess = function () {
        return this.status === SpanStatus.Ok;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.finish = function (endTimestamp) {
        this.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : timestampWithMs();
    };
    /**
     * @inheritDoc
     */
    Span.prototype.toTraceparent = function () {
        var sampledString = '';
        if (this.sampled !== undefined) {
            sampledString = this.sampled ? '-1' : '-0';
        }
        return this.traceId + "-" + this.spanId + sampledString;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.toContext = function () {
        return dropUndefinedKeys({
            data: this.data,
            description: this.description,
            endTimestamp: this.endTimestamp,
            op: this.op,
            parentSpanId: this.parentSpanId,
            sampled: this.sampled,
            spanId: this.spanId,
            startTimestamp: this.startTimestamp,
            status: this.status,
            tags: this.tags,
            traceId: this.traceId,
        });
    };
    /**
     * @inheritDoc
     */
    Span.prototype.updateWithContext = function (spanContext) {
        var _a, _b, _c, _d, _e;
        this.data = (_a = spanContext.data, (_a !== null && _a !== void 0 ? _a : {}));
        this.description = spanContext.description;
        this.endTimestamp = spanContext.endTimestamp;
        this.op = spanContext.op;
        this.parentSpanId = spanContext.parentSpanId;
        this.sampled = spanContext.sampled;
        this.spanId = (_b = spanContext.spanId, (_b !== null && _b !== void 0 ? _b : this.spanId));
        this.startTimestamp = (_c = spanContext.startTimestamp, (_c !== null && _c !== void 0 ? _c : this.startTimestamp));
        this.status = spanContext.status;
        this.tags = (_d = spanContext.tags, (_d !== null && _d !== void 0 ? _d : {}));
        this.traceId = (_e = spanContext.traceId, (_e !== null && _e !== void 0 ? _e : this.traceId));
        return this;
    };
    /**
     * @inheritDoc
     */
    Span.prototype.getTraceContext = function () {
        return dropUndefinedKeys({
            data: Object.keys(this.data).length > 0 ? this.data : undefined,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
            trace_id: this.traceId,
        });
    };
    /**
     * @inheritDoc
     */
    Span.prototype.toJSON = function () {
        return dropUndefinedKeys({
            data: Object.keys(this.data).length > 0 ? this.data : undefined,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            start_timestamp: this.startTimestamp,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
            timestamp: this.endTimestamp,
            trace_id: this.traceId,
        });
    };
    return Span;
}());

/** JSDoc */
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    /**
     * This constructor should never be called manually. Those instrumenting tracing should use
     * `Sentry.startTransaction()`, and internal methods should use `hub.startTransaction()`.
     * @internal
     * @hideconstructor
     * @hidden
     */
    function Transaction(transactionContext, hub) {
        var _this = _super.call(this, transactionContext) || this;
        _this._measurements = {};
        /**
         * The reference to the current hub.
         */
        _this._hub = getCurrentHub();
        if (isInstanceOf(hub, Hub)) {
            _this._hub = hub;
        }
        _this.name = transactionContext.name || '';
        _this.metadata = transactionContext.metadata || {};
        _this._trimEnd = transactionContext.trimEnd;
        // this is because transactions are also spans, and spans have a transaction pointer
        _this.transaction = _this;
        return _this;
    }
    /**
     * JSDoc
     */
    Transaction.prototype.setName = function (name) {
        this.name = name;
    };
    /**
     * Attaches SpanRecorder to the span itself
     * @param maxlen maximum number of spans that can be recorded
     */
    Transaction.prototype.initSpanRecorder = function (maxlen) {
        if (maxlen === void 0) { maxlen = 1000; }
        if (!this.spanRecorder) {
            this.spanRecorder = new SpanRecorder(maxlen);
        }
        this.spanRecorder.add(this);
    };
    /**
     * Set observed measurements for this transaction.
     * @hidden
     */
    Transaction.prototype.setMeasurements = function (measurements) {
        this._measurements = __assign({}, measurements);
    };
    /**
     * Set metadata for this transaction.
     * @hidden
     */
    Transaction.prototype.setMetadata = function (newMetadata) {
        this.metadata = __assign(__assign({}, this.metadata), newMetadata);
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.finish = function (endTimestamp) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        // This transaction is already finished, so we should not flush it again.
        if (this.endTimestamp !== undefined) {
            return undefined;
        }
        if (!this.name) {
            logger.warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
            this.name = '<unlabeled transaction>';
        }
        // just sets the end timestamp
        _super.prototype.finish.call(this, endTimestamp);
        if (this.sampled !== true) {
            // At this point if `sampled !== true` we want to discard the transaction.
            logger.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.');
            (_e = (_c = (_a = this._hub
                .getClient()) === null || _a === void 0 ? void 0 : (_b = _a).getTransport) === null || _c === void 0 ? void 0 : (_d = _c.call(_b)).recordLostEvent) === null || _e === void 0 ? void 0 : _e.call(_d, Outcome.SampleRate, 'transaction');
            return undefined;
        }
        var finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter(function (s) { return s !== _this && s.endTimestamp; }) : [];
        if (this._trimEnd && finishedSpans.length > 0) {
            this.endTimestamp = finishedSpans.reduce(function (prev, current) {
                if (prev.endTimestamp && current.endTimestamp) {
                    return prev.endTimestamp > current.endTimestamp ? prev : current;
                }
                return prev;
            }).endTimestamp;
        }
        var transaction = {
            contexts: {
                trace: this.getTraceContext(),
            },
            spans: finishedSpans,
            start_timestamp: this.startTimestamp,
            tags: this.tags,
            timestamp: this.endTimestamp,
            transaction: this.name,
            type: 'transaction',
            debug_meta: this.metadata,
        };
        var hasMeasurements = Object.keys(this._measurements).length > 0;
        if (hasMeasurements) {
            logger.log('[Measurements] Adding measurements to transaction', JSON.stringify(this._measurements, undefined, 2));
            transaction.measurements = this._measurements;
        }
        logger.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + ".");
        return this._hub.captureEvent(transaction);
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.toContext = function () {
        var spanContext = _super.prototype.toContext.call(this);
        return dropUndefinedKeys(__assign(__assign({}, spanContext), { name: this.name, trimEnd: this._trimEnd }));
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.updateWithContext = function (transactionContext) {
        var _a;
        _super.prototype.updateWithContext.call(this, transactionContext);
        this.name = (_a = transactionContext.name, (_a !== null && _a !== void 0 ? _a : ''));
        this._trimEnd = transactionContext.trimEnd;
        return this;
    };
    return Transaction;
}(Span));

var DEFAULT_IDLE_TIMEOUT = 1000;
var HEARTBEAT_INTERVAL = 5000;
/**
 * @inheritDoc
 */
var IdleTransactionSpanRecorder = /** @class */ (function (_super) {
    __extends(IdleTransactionSpanRecorder, _super);
    function IdleTransactionSpanRecorder(_pushActivity, _popActivity, transactionSpanId, maxlen) {
        if (transactionSpanId === void 0) { transactionSpanId = ''; }
        var _this = _super.call(this, maxlen) || this;
        _this._pushActivity = _pushActivity;
        _this._popActivity = _popActivity;
        _this.transactionSpanId = transactionSpanId;
        return _this;
    }
    /**
     * @inheritDoc
     */
    IdleTransactionSpanRecorder.prototype.add = function (span) {
        var _this = this;
        // We should make sure we do not push and pop activities for
        // the transaction that this span recorder belongs to.
        if (span.spanId !== this.transactionSpanId) {
            // We patch span.finish() to pop an activity after setting an endTimestamp.
            span.finish = function (endTimestamp) {
                span.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : timestampWithMs();
                _this._popActivity(span.spanId);
            };
            // We should only push new activities if the span does not have an end timestamp.
            if (span.endTimestamp === undefined) {
                this._pushActivity(span.spanId);
            }
        }
        _super.prototype.add.call(this, span);
    };
    return IdleTransactionSpanRecorder;
}(SpanRecorder));
/**
 * An IdleTransaction is a transaction that automatically finishes. It does this by tracking child spans as activities.
 * You can have multiple IdleTransactions active, but if the `onScope` option is specified, the idle transaction will
 * put itself on the scope on creation.
 */
var IdleTransaction = /** @class */ (function (_super) {
    __extends(IdleTransaction, _super);
    function IdleTransaction(transactionContext, _idleHub, 
    /**
     * The time to wait in ms until the idle transaction will be finished.
     * @default 1000
     */
    _idleTimeout, 
    // If an idle transaction should be put itself on and off the scope automatically.
    _onScope) {
        if (_idleTimeout === void 0) { _idleTimeout = DEFAULT_IDLE_TIMEOUT; }
        if (_onScope === void 0) { _onScope = false; }
        var _this = _super.call(this, transactionContext, _idleHub) || this;
        _this._idleHub = _idleHub;
        _this._idleTimeout = _idleTimeout;
        _this._onScope = _onScope;
        // Activities store a list of active spans
        _this.activities = {};
        // Amount of times heartbeat has counted. Will cause transaction to finish after 3 beats.
        _this._heartbeatCounter = 0;
        // We should not use heartbeat if we finished a transaction
        _this._finished = false;
        _this._beforeFinishCallbacks = [];
        if (_idleHub && _onScope) {
            // There should only be one active transaction on the scope
            clearActiveTransaction(_idleHub);
            // We set the transaction here on the scope so error events pick up the trace
            // context and attach it to the error.
            logger.log("Setting idle transaction on scope. Span ID: " + _this.spanId);
            _idleHub.configureScope(function (scope) { return scope.setSpan(_this); });
        }
        _this._initTimeout = setTimeout(function () {
            if (!_this._finished) {
                _this.finish();
            }
        }, _this._idleTimeout);
        return _this;
    }
    /** {@inheritDoc} */
    IdleTransaction.prototype.finish = function (endTimestamp) {
        var e_1, _a;
        var _this = this;
        if (endTimestamp === void 0) { endTimestamp = timestampWithMs(); }
        this._finished = true;
        this.activities = {};
        if (this.spanRecorder) {
            logger.log('[Tracing] finishing IdleTransaction', new Date(endTimestamp * 1000).toISOString(), this.op);
            try {
                for (var _b = __values(this._beforeFinishCallbacks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var callback = _c.value;
                    callback(this, endTimestamp);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.spanRecorder.spans = this.spanRecorder.spans.filter(function (span) {
                // If we are dealing with the transaction itself, we just return it
                if (span.spanId === _this.spanId) {
                    return true;
                }
                // We cancel all pending spans with status "cancelled" to indicate the idle transaction was finished early
                if (!span.endTimestamp) {
                    span.endTimestamp = endTimestamp;
                    span.setStatus(SpanStatus.Cancelled);
                    logger.log('[Tracing] cancelling span since transaction ended early', JSON.stringify(span, undefined, 2));
                }
                var keepSpan = span.startTimestamp < endTimestamp;
                if (!keepSpan) {
                    logger.log('[Tracing] discarding Span since it happened after Transaction was finished', JSON.stringify(span, undefined, 2));
                }
                return keepSpan;
            });
            logger.log('[Tracing] flushing IdleTransaction');
        }
        else {
            logger.log('[Tracing] No active IdleTransaction');
        }
        // this._onScope is true if the transaction was previously on the scope.
        if (this._onScope) {
            clearActiveTransaction(this._idleHub);
        }
        return _super.prototype.finish.call(this, endTimestamp);
    };
    /**
     * Register a callback function that gets excecuted before the transaction finishes.
     * Useful for cleanup or if you want to add any additional spans based on current context.
     *
     * This is exposed because users have no other way of running something before an idle transaction
     * finishes.
     */
    IdleTransaction.prototype.registerBeforeFinishCallback = function (callback) {
        this._beforeFinishCallbacks.push(callback);
    };
    /**
     * @inheritDoc
     */
    IdleTransaction.prototype.initSpanRecorder = function (maxlen) {
        var _this = this;
        if (!this.spanRecorder) {
            var pushActivity = function (id) {
                if (_this._finished) {
                    return;
                }
                _this._pushActivity(id);
            };
            var popActivity = function (id) {
                if (_this._finished) {
                    return;
                }
                _this._popActivity(id);
            };
            this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);
            // Start heartbeat so that transactions do not run forever.
            logger.log('Starting heartbeat');
            this._pingHeartbeat();
        }
        this.spanRecorder.add(this);
    };
    /**
     * Start tracking a specific activity.
     * @param spanId The span id that represents the activity
     */
    IdleTransaction.prototype._pushActivity = function (spanId) {
        if (this._initTimeout) {
            clearTimeout(this._initTimeout);
            this._initTimeout = undefined;
        }
        logger.log("[Tracing] pushActivity: " + spanId);
        this.activities[spanId] = true;
        logger.log('[Tracing] new activities count', Object.keys(this.activities).length);
    };
    /**
     * Remove an activity from usage
     * @param spanId The span id that represents the activity
     */
    IdleTransaction.prototype._popActivity = function (spanId) {
        var _this = this;
        if (this.activities[spanId]) {
            logger.log("[Tracing] popActivity " + spanId);
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this.activities[spanId];
            logger.log('[Tracing] new activities count', Object.keys(this.activities).length);
        }
        if (Object.keys(this.activities).length === 0) {
            var timeout = this._idleTimeout;
            // We need to add the timeout here to have the real endtimestamp of the transaction
            // Remember timestampWithMs is in seconds, timeout is in ms
            var end_1 = timestampWithMs() + timeout / 1000;
            setTimeout(function () {
                if (!_this._finished) {
                    _this.finish(end_1);
                }
            }, timeout);
        }
    };
    /**
     * Checks when entries of this.activities are not changing for 3 beats.
     * If this occurs we finish the transaction.
     */
    IdleTransaction.prototype._beat = function () {
        // We should not be running heartbeat if the idle transaction is finished.
        if (this._finished) {
            return;
        }
        var heartbeatString = Object.keys(this.activities).join('');
        if (heartbeatString === this._prevHeartbeatString) {
            this._heartbeatCounter += 1;
        }
        else {
            this._heartbeatCounter = 1;
        }
        this._prevHeartbeatString = heartbeatString;
        if (this._heartbeatCounter >= 3) {
            logger.log("[Tracing] Transaction finished because of no change for 3 heart beats");
            this.setStatus(SpanStatus.DeadlineExceeded);
            this.setTag('heartbeat', 'failed');
            this.finish();
        }
        else {
            this._pingHeartbeat();
        }
    };
    /**
     * Pings the heartbeat
     */
    IdleTransaction.prototype._pingHeartbeat = function () {
        var _this = this;
        logger.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter);
        setTimeout(function () {
            _this._beat();
        }, HEARTBEAT_INTERVAL);
    };
    return IdleTransaction;
}(Transaction));
/**
 * Reset active transaction on scope
 */
function clearActiveTransaction(hub) {
    if (hub) {
        var scope = hub.getScope();
        if (scope) {
            var transaction = scope.getTransaction();
            if (transaction) {
                scope.setSpan(undefined);
            }
        }
    }
}

/** Returns all trace headers that are currently on the top scope. */
function traceHeaders() {
    var scope = this.getScope();
    if (scope) {
        var span = scope.getSpan();
        if (span) {
            return {
                'sentry-trace': span.toTraceparent(),
            };
        }
    }
    return {};
}
/**
 * Makes a sampling decision for the given transaction and stores it on the transaction.
 *
 * Called every time a transaction is created. Only transactions which emerge with a `sampled` value of `true` will be
 * sent to Sentry.
 *
 * @param hub: The hub off of which to read config options
 * @param transaction: The transaction needing a sampling decision
 * @param samplingContext: Default and user-provided data which may be used to help make the decision
 *
 * @returns The given transaction with its `sampled` value set
 */
function sample(transaction, options, samplingContext) {
    // nothing to do if tracing is not enabled
    if (!hasTracingEnabled(options)) {
        transaction.sampled = false;
        return transaction;
    }
    // if the user has forced a sampling decision by passing a `sampled` value in their transaction context, go with that
    if (transaction.sampled !== undefined) {
        transaction.setMetadata({
            transactionSampling: { method: TransactionSamplingMethod.Explicit },
        });
        return transaction;
    }
    // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` were defined, so one of these should
    // work; prefer the hook if so
    var sampleRate;
    if (typeof options.tracesSampler === 'function') {
        sampleRate = options.tracesSampler(samplingContext);
        transaction.setMetadata({
            transactionSampling: {
                method: TransactionSamplingMethod.Sampler,
                // cast to number in case it's a boolean
                rate: Number(sampleRate),
            },
        });
    }
    else if (samplingContext.parentSampled !== undefined) {
        sampleRate = samplingContext.parentSampled;
        transaction.setMetadata({
            transactionSampling: { method: TransactionSamplingMethod.Inheritance },
        });
    }
    else {
        sampleRate = options.tracesSampleRate;
        transaction.setMetadata({
            transactionSampling: {
                method: TransactionSamplingMethod.Rate,
                // cast to number in case it's a boolean
                rate: Number(sampleRate),
            },
        });
    }
    // Since this is coming from the user (or from a function provided by the user), who knows what we might get. (The
    // only valid values are booleans or numbers between 0 and 1.)
    if (!isValidSampleRate(sampleRate)) {
        logger.warn("[Tracing] Discarding transaction because of invalid sample rate.");
        transaction.sampled = false;
        return transaction;
    }
    // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
    if (!sampleRate) {
        logger.log("[Tracing] Discarding transaction because " + (typeof options.tracesSampler === 'function'
            ? 'tracesSampler returned 0 or false'
            : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'));
        transaction.sampled = false;
        return transaction;
    }
    // Now we roll the dice. Math.random is inclusive of 0, but not of 1, so strict < is safe here. In case sampleRate is
    // a boolean, the < comparison will cause it to be automatically cast to 1 if it's true and 0 if it's false.
    transaction.sampled = Math.random() < sampleRate;
    // if we're not going to keep it, we're done
    if (!transaction.sampled) {
        logger.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(sampleRate) + ")");
        return transaction;
    }
    logger.log("[Tracing] starting " + transaction.op + " transaction - " + transaction.name);
    return transaction;
}
/**
 * Checks the given sample rate to make sure it is valid type and value (a boolean, or a number between 0 and 1).
 */
function isValidSampleRate(rate) {
    // we need to check NaN explicitly because it's of type 'number' and therefore wouldn't get caught by this typecheck
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (isNaN(rate) || !(typeof rate === 'number' || typeof rate === 'boolean')) {
        logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(rate) + " of type " + JSON.stringify(typeof rate) + ".");
        return false;
    }
    // in case sampleRate is a boolean, it will get automatically cast to 1 if it's true and 0 if it's false
    if (rate < 0 || rate > 1) {
        logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + rate + ".");
        return false;
    }
    return true;
}
/**
 * Creates a new transaction and adds a sampling decision if it doesn't yet have one.
 *
 * The Hub.startTransaction method delegates to this method to do its work, passing the Hub instance in as `this`, as if
 * it had been called on the hub directly. Exists as a separate function so that it can be injected into the class as an
 * "extension method."
 *
 * @param this: The Hub starting the transaction
 * @param transactionContext: Data used to configure the transaction
 * @param CustomSamplingContext: Optional data to be provided to the `tracesSampler` function (if any)
 *
 * @returns The new transaction
 *
 * @see {@link Hub.startTransaction}
 */
function _startTransaction(transactionContext, customSamplingContext) {
    var _a, _b;
    var options = ((_a = this.getClient()) === null || _a === void 0 ? void 0 : _a.getOptions()) || {};
    var transaction = new Transaction(transactionContext, this);
    transaction = sample(transaction, options, __assign({ parentSampled: transactionContext.parentSampled, transactionContext: transactionContext }, customSamplingContext));
    if (transaction.sampled) {
        transaction.initSpanRecorder((_b = options._experiments) === null || _b === void 0 ? void 0 : _b.maxSpans);
    }
    return transaction;
}
/**
 * Create new idle transaction.
 */
function startIdleTransaction(hub, transactionContext, idleTimeout, onScope, customSamplingContext) {
    var _a, _b;
    var options = ((_a = hub.getClient()) === null || _a === void 0 ? void 0 : _a.getOptions()) || {};
    var transaction = new IdleTransaction(transactionContext, hub, idleTimeout, onScope);
    transaction = sample(transaction, options, __assign({ parentSampled: transactionContext.parentSampled, transactionContext: transactionContext }, customSamplingContext));
    if (transaction.sampled) {
        transaction.initSpanRecorder((_b = options._experiments) === null || _b === void 0 ? void 0 : _b.maxSpans);
    }
    return transaction;
}
/**
 * @private
 */
function _addTracingExtensions() {
    var carrier = getMainCarrier();
    if (!carrier.__SENTRY__) {
        return;
    }
    carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
    if (!carrier.__SENTRY__.extensions.startTransaction) {
        carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
    }
    if (!carrier.__SENTRY__.extensions.traceHeaders) {
        carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
    }
}
/**
 * @private
 */
function _autoloadDatabaseIntegrations() {
    var carrier = getMainCarrier();
    if (!carrier.__SENTRY__) {
        return;
    }
    var packageToIntegrationMapping = {
        mongodb: function () {
            var integration = dynamicRequire(module, './integrations/node/mongo');
            return new integration.Mongo();
        },
        mongoose: function () {
            var integration = dynamicRequire(module, './integrations/node/mongo');
            return new integration.Mongo({ mongoose: true });
        },
        mysql: function () {
            var integration = dynamicRequire(module, './integrations/node/mysql');
            return new integration.Mysql();
        },
        pg: function () {
            var integration = dynamicRequire(module, './integrations/node/postgres');
            return new integration.Postgres();
        },
    };
    var mappedPackages = Object.keys(packageToIntegrationMapping)
        .filter(function (moduleName) { return !!loadModule(moduleName); })
        .map(function (pkg) {
        try {
            return packageToIntegrationMapping[pkg]();
        }
        catch (e) {
            return undefined;
        }
    })
        .filter(function (p) { return p; });
    if (mappedPackages.length > 0) {
        carrier.__SENTRY__.integrations = __spread((carrier.__SENTRY__.integrations || []), mappedPackages);
    }
}
/**
 * This patches the global object and injects the Tracing extensions methods
 */
function addExtensionMethods() {
    _addTracingExtensions();
    // Detect and automatically load specified integrations.
    if (isNodeEnv()) {
        _autoloadDatabaseIntegrations();
    }
    // If an error happens globally, we should make sure transaction status is set to error.
    registerErrorInstrumentation();
}

var global$3 = getGlobalObject();
/**
 * Add a listener that cancels and finishes a transaction when the global
 * document is hidden.
 */
function registerBackgroundTabDetection() {
    if (global$3 && global$3.document) {
        global$3.document.addEventListener('visibilitychange', function () {
            var activeTransaction = getActiveTransaction();
            if (global$3.document.hidden && activeTransaction) {
                logger.log("[Tracing] Transaction: " + SpanStatus.Cancelled + " -> since tab moved to the background, op: " + activeTransaction.op);
                // We should not set status if it is already set, this prevent important statuses like
                // error or data loss from being overwritten on transaction.
                if (!activeTransaction.status) {
                    activeTransaction.setStatus(SpanStatus.Cancelled);
                }
                activeTransaction.setTag('visibilitychange', 'document.hidden');
                activeTransaction.finish();
            }
        });
    }
    else {
        logger.warn('[Tracing] Could not set up background tab detection due to lack of global document');
    }
}

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bindReporter = function (callback, metric, reportAllChanges) {
    var prevValue;
    return function (forceReport) {
        if (metric.value >= 0) {
            if (forceReport || reportAllChanges) {
                metric.delta = metric.value - (prevValue || 0);
                // Report the metric if there's a non-zero delta or if no previous
                // value exists (which can happen in the case of the document becoming
                // hidden when the metric value is 0).
                // See: https://github.com/GoogleChrome/web-vitals/issues/14
                if (metric.delta || prevValue === undefined) {
                    prevValue = metric.value;
                    callback(metric);
                }
            }
        }
    };
};

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */
var generateUniqueID = function () {
    return "v2-" + Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
};

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var initMetric = function (name, value) {
    return {
        name: name,
        value: (value !== null && value !== void 0 ? value : -1),
        delta: 0,
        entries: [],
        id: generateUniqueID(),
    };
};

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Takes a performance entry type and a callback function, and creates a
 * `PerformanceObserver` instance that will observe the specified entry type
 * with buffering enabled and call the callback _for each entry_.
 *
 * This function also feature-detects entry support and wraps the logic in a
 * try/catch to avoid errors in unsupporting browsers.
 */
var observe = function (type, callback) {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            // More extensive feature detect needed for Firefox due to:
            // https://github.com/GoogleChrome/web-vitals/issues/142
            if (type === 'first-input' && !('PerformanceEventTiming' in self)) {
                return;
            }
            var po = new PerformanceObserver(function (l) { return l.getEntries().map(callback); });
            po.observe({ type: type, buffered: true });
            return po;
        }
    }
    catch (e) {
        // Do nothing.
    }
    return;
};

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var onHidden = function (cb, once) {
    var onHiddenOrPageHide = function (event) {
        if (event.type === 'pagehide' || getGlobalObject().document.visibilityState === 'hidden') {
            cb(event);
            if (once) {
                removeEventListener('visibilitychange', onHiddenOrPageHide, true);
                removeEventListener('pagehide', onHiddenOrPageHide, true);
            }
        }
    };
    addEventListener('visibilitychange', onHiddenOrPageHide, true);
    // Some browsers have buggy implementations of visibilitychange,
    // so we use pagehide in addition, just to be safe.
    addEventListener('pagehide', onHiddenOrPageHide, true);
};

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var getCLS = function (onReport, reportAllChanges) {
    var metric = initMetric('CLS', 0);
    var report;
    var sessionValue = 0;
    var sessionEntries = [];
    var entryHandler = function (entry) {
        // Only count layout shifts without recent user input.
        // TODO: Figure out why entry can be undefined
        if (entry && !entry.hadRecentInput) {
            var firstSessionEntry = sessionEntries[0];
            var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
            // If the entry occurred less than 1 second after the previous entry and
            // less than 5 seconds after the first entry in the session, include the
            // entry in the current session. Otherwise, start a new session.
            if (sessionValue &&
                sessionEntries.length !== 0 &&
                entry.startTime - lastSessionEntry.startTime < 1000 &&
                entry.startTime - firstSessionEntry.startTime < 5000) {
                sessionValue += entry.value;
                sessionEntries.push(entry);
            }
            else {
                sessionValue = entry.value;
                sessionEntries = [entry];
            }
            // If the current session value is larger than the current CLS value,
            // update CLS and the entries contributing to it.
            if (sessionValue > metric.value) {
                metric.value = sessionValue;
                metric.entries = sessionEntries;
                if (report) {
                    report();
                }
            }
        }
    };
    var po = observe('layout-shift', entryHandler);
    if (po) {
        report = bindReporter(onReport, metric, reportAllChanges);
        onHidden(function () {
            po.takeRecords().map(entryHandler);
            report(true);
        });
    }
};

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var firstHiddenTime = -1;
var initHiddenTime = function () {
    return getGlobalObject().document.visibilityState === 'hidden' ? 0 : Infinity;
};
var trackChanges = function () {
    // Update the time if/when the document becomes hidden.
    onHidden(function (_a) {
        var timeStamp = _a.timeStamp;
        firstHiddenTime = timeStamp;
    }, true);
};
var getVisibilityWatcher = function () {
    if (firstHiddenTime < 0) {
        // If the document is hidden when this code runs, assume it was hidden
        // since navigation start. This isn't a perfect heuristic, but it's the
        // best we can do until an API is available to support querying past
        // visibilityState.
        firstHiddenTime = initHiddenTime();
        trackChanges();
    }
    return {
        get firstHiddenTime() {
            return firstHiddenTime;
        },
    };
};

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var getFID = function (onReport, reportAllChanges) {
    var visibilityWatcher = getVisibilityWatcher();
    var metric = initMetric('FID');
    var report;
    var entryHandler = function (entry) {
        // Only report if the page wasn't hidden prior to the first input.
        if (report && entry.startTime < visibilityWatcher.firstHiddenTime) {
            metric.value = entry.processingStart - entry.startTime;
            metric.entries.push(entry);
            report(true);
        }
    };
    var po = observe('first-input', entryHandler);
    if (po) {
        report = bindReporter(onReport, metric, reportAllChanges);
        onHidden(function () {
            po.takeRecords().map(entryHandler);
            po.disconnect();
        }, true);
    }
};

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var reportedMetricIDs = {};
var getLCP = function (onReport, reportAllChanges) {
    var visibilityWatcher = getVisibilityWatcher();
    var metric = initMetric('LCP');
    var report;
    var entryHandler = function (entry) {
        // The startTime attribute returns the value of the renderTime if it is not 0,
        // and the value of the loadTime otherwise.
        var value = entry.startTime;
        // If the page was hidden prior to paint time of the entry,
        // ignore it and mark the metric as final, otherwise add the entry.
        if (value < visibilityWatcher.firstHiddenTime) {
            metric.value = value;
            metric.entries.push(entry);
        }
        if (report) {
            report();
        }
    };
    var po = observe('largest-contentful-paint', entryHandler);
    if (po) {
        report = bindReporter(onReport, metric, reportAllChanges);
        var stopListening_1 = function () {
            if (!reportedMetricIDs[metric.id]) {
                po.takeRecords().map(entryHandler);
                po.disconnect();
                reportedMetricIDs[metric.id] = true;
                report(true);
            }
        };
        // Stop listening after input. Note: while scrolling is an input that
        // stop LCP observation, it's unreliable since it can be programmatically
        // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
        ['keydown', 'click'].forEach(function (type) {
            addEventListener(type, stopListening_1, { once: true, capture: true });
        });
        onHidden(stopListening_1, true);
    }
};

var global$2 = getGlobalObject();
var DEFAULT_METRICS_INSTR_OPTIONS = {
    _reportAllChanges: false,
};
/** Class tracking metrics  */
var MetricsInstrumentation = /** @class */ (function () {
    function MetricsInstrumentation(_options) {
        var _a, _b;
        this._measurements = {};
        this._performanceCursor = 0;
        if (!isNodeEnv() && ((_a = global$2) === null || _a === void 0 ? void 0 : _a.performance) && ((_b = global$2) === null || _b === void 0 ? void 0 : _b.document)) {
            if (global$2.performance.mark) {
                global$2.performance.mark('sentry-tracing-init');
            }
            this._trackCLS();
            this._trackLCP(_options._reportAllChanges);
            this._trackFID();
        }
    }
    /** Add performance related spans to a transaction */
    MetricsInstrumentation.prototype.addPerformanceEntries = function (transaction) {
        var _this = this;
        if (!global$2 || !global$2.performance || !global$2.performance.getEntries || !browserPerformanceTimeOrigin) {
            // Gatekeeper if performance API not available
            return;
        }
        logger.log('[Tracing] Adding & adjusting spans using Performance API');
        var timeOrigin = msToSec(browserPerformanceTimeOrigin);
        var entryScriptSrc;
        if (global$2.document && global$2.document.scripts) {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (var i = 0; i < global$2.document.scripts.length; i++) {
                // We go through all scripts on the page and look for 'data-entry'
                // We remember the name and measure the time between this script finished loading and
                // our mark 'sentry-tracing-init'
                if (global$2.document.scripts[i].dataset.entry === 'true') {
                    entryScriptSrc = global$2.document.scripts[i].src;
                    break;
                }
            }
        }
        var entryScriptStartTimestamp;
        var tracingInitMarkStartTime;
        var responseStartTimestamp;
        var requestStartTimestamp;
        global$2.performance
            .getEntries()
            .slice(this._performanceCursor)
            .forEach(function (entry) {
            var startTime = msToSec(entry.startTime);
            var duration = msToSec(entry.duration);
            if (transaction.op === 'navigation' && timeOrigin + startTime < transaction.startTimestamp) {
                return;
            }
            switch (entry.entryType) {
                case 'navigation': {
                    addNavigationSpans(transaction, entry, timeOrigin);
                    responseStartTimestamp = timeOrigin + msToSec(entry.responseStart);
                    requestStartTimestamp = timeOrigin + msToSec(entry.requestStart);
                    break;
                }
                case 'mark':
                case 'paint':
                case 'measure': {
                    var startTimestamp = addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);
                    if (tracingInitMarkStartTime === undefined && entry.name === 'sentry-tracing-init') {
                        tracingInitMarkStartTime = startTimestamp;
                    }
                    // capture web vitals
                    var firstHidden = getVisibilityWatcher();
                    // Only report if the page wasn't hidden prior to the web vital.
                    var shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
                    if (entry.name === 'first-paint' && shouldRecord) {
                        logger.log('[Measurements] Adding FP');
                        _this._measurements['fp'] = { value: entry.startTime };
                        _this._measurements['mark.fp'] = { value: startTimestamp };
                    }
                    if (entry.name === 'first-contentful-paint' && shouldRecord) {
                        logger.log('[Measurements] Adding FCP');
                        _this._measurements['fcp'] = { value: entry.startTime };
                        _this._measurements['mark.fcp'] = { value: startTimestamp };
                    }
                    break;
                }
                case 'resource': {
                    var resourceName = entry.name.replace(global$2.location.origin, '');
                    var endTimestamp = addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
                    // We remember the entry script end time to calculate the difference to the first init mark
                    if (entryScriptStartTimestamp === undefined && (entryScriptSrc || '').indexOf(resourceName) > -1) {
                        entryScriptStartTimestamp = endTimestamp;
                    }
                    break;
                }
                // Ignore other entry types.
            }
        });
        if (entryScriptStartTimestamp !== undefined && tracingInitMarkStartTime !== undefined) {
            _startChild(transaction, {
                description: 'evaluation',
                endTimestamp: tracingInitMarkStartTime,
                op: 'script',
                startTimestamp: entryScriptStartTimestamp,
            });
        }
        this._performanceCursor = Math.max(performance.getEntries().length - 1, 0);
        this._trackNavigator(transaction);
        // Measurements are only available for pageload transactions
        if (transaction.op === 'pageload') {
            // normalize applicable web vital values to be relative to transaction.startTimestamp
            var timeOrigin_1 = msToSec(browserPerformanceTimeOrigin);
            // Generate TTFB (Time to First Byte), which measured as the time between the beginning of the transaction and the
            // start of the response in milliseconds
            if (typeof responseStartTimestamp === 'number') {
                logger.log('[Measurements] Adding TTFB');
                this._measurements['ttfb'] = { value: (responseStartTimestamp - transaction.startTimestamp) * 1000 };
                if (typeof requestStartTimestamp === 'number' && requestStartTimestamp <= responseStartTimestamp) {
                    // Capture the time spent making the request and receiving the first byte of the response.
                    // This is the time between the start of the request and the start of the response in milliseconds.
                    this._measurements['ttfb.requestTime'] = { value: (responseStartTimestamp - requestStartTimestamp) * 1000 };
                }
            }
            ['fcp', 'fp', 'lcp'].forEach(function (name) {
                if (!_this._measurements[name] || timeOrigin_1 >= transaction.startTimestamp) {
                    return;
                }
                // The web vitals, fcp, fp, lcp, and ttfb, all measure relative to timeOrigin.
                // Unfortunately, timeOrigin is not captured within the transaction span data, so these web vitals will need
                // to be adjusted to be relative to transaction.startTimestamp.
                var oldValue = _this._measurements[name].value;
                var measurementTimestamp = timeOrigin_1 + msToSec(oldValue);
                // normalizedValue should be in milliseconds
                var normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1000);
                var delta = normalizedValue - oldValue;
                logger.log("[Measurements] Normalized " + name + " from " + oldValue + " to " + normalizedValue + " (" + delta + ")");
                _this._measurements[name].value = normalizedValue;
            });
            if (this._measurements['mark.fid'] && this._measurements['fid']) {
                // create span for FID
                _startChild(transaction, {
                    description: 'first input delay',
                    endTimestamp: this._measurements['mark.fid'].value + msToSec(this._measurements['fid'].value),
                    op: 'web.vitals',
                    startTimestamp: this._measurements['mark.fid'].value,
                });
            }
            // If FCP is not recorded we should not record the cls value
            // according to the new definition of CLS.
            if (!('fcp' in this._measurements)) {
                delete this._measurements.cls;
            }
            transaction.setMeasurements(this._measurements);
            this._tagMetricInfo(transaction);
        }
    };
    /** Add LCP / CLS data to transaction to allow debugging */
    MetricsInstrumentation.prototype._tagMetricInfo = function (transaction) {
        if (this._lcpEntry) {
            logger.log('[Measurements] Adding LCP Data');
            // Capture Properties of the LCP element that contributes to the LCP.
            if (this._lcpEntry.element) {
                transaction.setTag('lcp.element', htmlTreeAsString(this._lcpEntry.element));
            }
            if (this._lcpEntry.id) {
                transaction.setTag('lcp.id', this._lcpEntry.id);
            }
            if (this._lcpEntry.url) {
                // Trim URL to the first 200 characters.
                transaction.setTag('lcp.url', this._lcpEntry.url.trim().slice(0, 200));
            }
            transaction.setTag('lcp.size', this._lcpEntry.size);
        }
        // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift
        if (this._clsEntry && this._clsEntry.sources) {
            logger.log('[Measurements] Adding CLS Data');
            this._clsEntry.sources.forEach(function (source, index) {
                return transaction.setTag("cls.source." + (index + 1), htmlTreeAsString(source.node));
            });
        }
    };
    /** Starts tracking the Cumulative Layout Shift on the current page. */
    MetricsInstrumentation.prototype._trackCLS = function () {
        var _this = this;
        // See:
        // https://web.dev/evolving-cls/
        // https://web.dev/cls-web-tooling/
        getCLS(function (metric) {
            var entry = metric.entries.pop();
            if (!entry) {
                return;
            }
            logger.log('[Measurements] Adding CLS');
            _this._measurements['cls'] = { value: metric.value };
            _this._clsEntry = entry;
        });
    };
    /**
     * Capture the information of the user agent.
     */
    MetricsInstrumentation.prototype._trackNavigator = function (transaction) {
        var navigator = global$2.navigator;
        if (!navigator) {
            return;
        }
        // track network connectivity
        var connection = navigator.connection;
        if (connection) {
            if (connection.effectiveType) {
                transaction.setTag('effectiveConnectionType', connection.effectiveType);
            }
            if (connection.type) {
                transaction.setTag('connectionType', connection.type);
            }
            if (isMeasurementValue(connection.rtt)) {
                this._measurements['connection.rtt'] = { value: connection.rtt };
            }
            if (isMeasurementValue(connection.downlink)) {
                this._measurements['connection.downlink'] = { value: connection.downlink };
            }
        }
        if (isMeasurementValue(navigator.deviceMemory)) {
            transaction.setTag('deviceMemory', String(navigator.deviceMemory));
        }
        if (isMeasurementValue(navigator.hardwareConcurrency)) {
            transaction.setTag('hardwareConcurrency', String(navigator.hardwareConcurrency));
        }
    };
    /** Starts tracking the Largest Contentful Paint on the current page. */
    MetricsInstrumentation.prototype._trackLCP = function (reportAllChanges) {
        var _this = this;
        getLCP(function (metric) {
            var entry = metric.entries.pop();
            if (!entry) {
                return;
            }
            var timeOrigin = msToSec(browserPerformanceTimeOrigin);
            var startTime = msToSec(entry.startTime);
            logger.log('[Measurements] Adding LCP');
            _this._measurements['lcp'] = { value: metric.value };
            _this._measurements['mark.lcp'] = { value: timeOrigin + startTime };
            _this._lcpEntry = entry;
        }, reportAllChanges);
    };
    /** Starts tracking the First Input Delay on the current page. */
    MetricsInstrumentation.prototype._trackFID = function () {
        var _this = this;
        getFID(function (metric) {
            var entry = metric.entries.pop();
            if (!entry) {
                return;
            }
            var timeOrigin = msToSec(browserPerformanceTimeOrigin);
            var startTime = msToSec(entry.startTime);
            logger.log('[Measurements] Adding FID');
            _this._measurements['fid'] = { value: metric.value };
            _this._measurements['mark.fid'] = { value: timeOrigin + startTime };
        });
    };
    return MetricsInstrumentation;
}());
/** Instrument navigation entries */
function addNavigationSpans(transaction, entry, timeOrigin) {
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'unloadEvent', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'redirect', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'domContentLoadedEvent', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'loadEvent', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'connect', timeOrigin: timeOrigin });
    addPerformanceNavigationTiming({
        transaction: transaction,
        entry: entry,
        event: 'secureConnection',
        timeOrigin: timeOrigin,
        eventEnd: 'connectEnd',
        description: 'TLS/SSL',
    });
    addPerformanceNavigationTiming({
        transaction: transaction,
        entry: entry,
        event: 'fetch',
        timeOrigin: timeOrigin,
        eventEnd: 'domainLookupStart',
        description: 'cache',
    });
    addPerformanceNavigationTiming({ transaction: transaction, entry: entry, event: 'domainLookup', timeOrigin: timeOrigin, description: 'DNS' });
    addRequest(transaction, entry, timeOrigin);
}
/** Create measure related spans */
function addMeasureSpans(transaction, entry, startTime, duration, timeOrigin) {
    var measureStartTimestamp = timeOrigin + startTime;
    var measureEndTimestamp = measureStartTimestamp + duration;
    _startChild(transaction, {
        description: entry.name,
        endTimestamp: measureEndTimestamp,
        op: entry.entryType,
        startTimestamp: measureStartTimestamp,
    });
    return measureStartTimestamp;
}
/** Create resource-related spans */
function addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin) {
    // we already instrument based on fetch and xhr, so we don't need to
    // duplicate spans here.
    if (entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch') {
        return undefined;
    }
    var data = {};
    if ('transferSize' in entry) {
        data['Transfer Size'] = entry.transferSize;
    }
    if ('encodedBodySize' in entry) {
        data['Encoded Body Size'] = entry.encodedBodySize;
    }
    if ('decodedBodySize' in entry) {
        data['Decoded Body Size'] = entry.decodedBodySize;
    }
    var startTimestamp = timeOrigin + startTime;
    var endTimestamp = startTimestamp + duration;
    _startChild(transaction, {
        description: resourceName,
        endTimestamp: endTimestamp,
        op: entry.initiatorType ? "resource." + entry.initiatorType : 'resource',
        startTimestamp: startTimestamp,
        data: data,
    });
    return endTimestamp;
}
/** Create performance navigation related spans */
function addPerformanceNavigationTiming(props) {
    var transaction = props.transaction, entry = props.entry, event = props.event, timeOrigin = props.timeOrigin, eventEnd = props.eventEnd, description = props.description;
    var end = eventEnd ? entry[eventEnd] : entry[event + "End"];
    var start = entry[event + "Start"];
    if (!start || !end) {
        return;
    }
    _startChild(transaction, {
        op: 'browser',
        description: (description !== null && description !== void 0 ? description : event),
        startTimestamp: timeOrigin + msToSec(start),
        endTimestamp: timeOrigin + msToSec(end),
    });
}
/** Create request and response related spans */
function addRequest(transaction, entry, timeOrigin) {
    _startChild(transaction, {
        op: 'browser',
        description: 'request',
        startTimestamp: timeOrigin + msToSec(entry.requestStart),
        endTimestamp: timeOrigin + msToSec(entry.responseEnd),
    });
    _startChild(transaction, {
        op: 'browser',
        description: 'response',
        startTimestamp: timeOrigin + msToSec(entry.responseStart),
        endTimestamp: timeOrigin + msToSec(entry.responseEnd),
    });
}
/**
 * Helper function to start child on transactions. This function will make sure that the transaction will
 * use the start timestamp of the created child span if it is earlier than the transactions actual
 * start timestamp.
 */
function _startChild(transaction, _a) {
    var startTimestamp = _a.startTimestamp, ctx = __rest(_a, ["startTimestamp"]);
    if (startTimestamp && transaction.startTimestamp > startTimestamp) {
        transaction.startTimestamp = startTimestamp;
    }
    return transaction.startChild(__assign({ startTimestamp: startTimestamp }, ctx));
}
/**
 * Checks if a given value is a valid measurement value.
 */
function isMeasurementValue(value) {
    return typeof value === 'number' && isFinite(value);
}

var DEFAULT_TRACING_ORIGINS = ['localhost', /^\//];
var defaultRequestInstrumentationOptions = {
    traceFetch: true,
    traceXHR: true,
    tracingOrigins: DEFAULT_TRACING_ORIGINS,
};
/** Registers span creators for xhr and fetch requests  */
function instrumentOutgoingRequests(_options) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    var _a = __assign(__assign({}, defaultRequestInstrumentationOptions), _options), traceFetch = _a.traceFetch, traceXHR = _a.traceXHR, tracingOrigins = _a.tracingOrigins, shouldCreateSpanForRequest = _a.shouldCreateSpanForRequest;
    // We should cache url -> decision so that we don't have to compute
    // regexp everytime we create a request.
    var urlMap = {};
    var defaultShouldCreateSpan = function (url) {
        if (urlMap[url]) {
            return urlMap[url];
        }
        var origins = tracingOrigins;
        urlMap[url] =
            origins.some(function (origin) { return isMatchingPattern(url, origin); }) &&
                !isMatchingPattern(url, 'sentry_key');
        return urlMap[url];
    };
    // We want that our users don't have to re-implement shouldCreateSpanForRequest themselves
    // That's why we filter out already unwanted Spans from tracingOrigins
    var shouldCreateSpan = defaultShouldCreateSpan;
    if (typeof shouldCreateSpanForRequest === 'function') {
        shouldCreateSpan = function (url) {
            return defaultShouldCreateSpan(url) && shouldCreateSpanForRequest(url);
        };
    }
    var spans = {};
    if (traceFetch) {
        addInstrumentationHandler({
            callback: function (handlerData) {
                fetchCallback(handlerData, shouldCreateSpan, spans);
            },
            type: 'fetch',
        });
    }
    if (traceXHR) {
        addInstrumentationHandler({
            callback: function (handlerData) {
                xhrCallback(handlerData, shouldCreateSpan, spans);
            },
            type: 'xhr',
        });
    }
}
/**
 * Create and track fetch request spans
 */
function fetchCallback(handlerData, shouldCreateSpan, spans) {
    if (!hasTracingEnabled() || !(handlerData.fetchData && shouldCreateSpan(handlerData.fetchData.url))) {
        return;
    }
    if (handlerData.endTimestamp && handlerData.fetchData.__span) {
        var span = spans[handlerData.fetchData.__span];
        if (span) {
            if (handlerData.response) {
                // TODO (kmclb) remove this once types PR goes through
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                span.setHttpStatus(handlerData.response.status);
            }
            else if (handlerData.error) {
                span.setStatus(SpanStatus.InternalError);
            }
            span.finish();
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete spans[handlerData.fetchData.__span];
        }
        return;
    }
    var activeTransaction = getActiveTransaction();
    if (activeTransaction) {
        var span = activeTransaction.startChild({
            data: __assign(__assign({}, handlerData.fetchData), { type: 'fetch' }),
            description: handlerData.fetchData.method + " " + handlerData.fetchData.url,
            op: 'http.client',
        });
        handlerData.fetchData.__span = span.spanId;
        spans[span.spanId] = span;
        var request = (handlerData.args[0] = handlerData.args[0]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var options = (handlerData.args[1] = handlerData.args[1] || {});
        var headers = options.headers;
        if (isInstanceOf(request, Request)) {
            headers = request.headers;
        }
        if (headers) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (typeof headers.append === 'function') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                headers.append('sentry-trace', span.toTraceparent());
            }
            else if (Array.isArray(headers)) {
                headers = __spread(headers, [['sentry-trace', span.toTraceparent()]]);
            }
            else {
                headers = __assign(__assign({}, headers), { 'sentry-trace': span.toTraceparent() });
            }
        }
        else {
            headers = { 'sentry-trace': span.toTraceparent() };
        }
        options.headers = headers;
    }
}
/**
 * Create and track xhr request spans
 */
function xhrCallback(handlerData, shouldCreateSpan, spans) {
    var _a, _b;
    if (!hasTracingEnabled() || ((_a = handlerData.xhr) === null || _a === void 0 ? void 0 : _a.__sentry_own_request__) ||
        !(((_b = handlerData.xhr) === null || _b === void 0 ? void 0 : _b.__sentry_xhr__) && shouldCreateSpan(handlerData.xhr.__sentry_xhr__.url))) {
        return;
    }
    var xhr = handlerData.xhr.__sentry_xhr__;
    // check first if the request has finished and is tracked by an existing span which should now end
    if (handlerData.endTimestamp && handlerData.xhr.__sentry_xhr_span_id__) {
        var span = spans[handlerData.xhr.__sentry_xhr_span_id__];
        if (span) {
            span.setHttpStatus(xhr.status_code);
            span.finish();
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete spans[handlerData.xhr.__sentry_xhr_span_id__];
        }
        return;
    }
    // if not, create a new span to track it
    var activeTransaction = getActiveTransaction();
    if (activeTransaction) {
        var span = activeTransaction.startChild({
            data: __assign(__assign({}, xhr.data), { type: 'xhr', method: xhr.method, url: xhr.url }),
            description: xhr.method + " " + xhr.url,
            op: 'http.client',
        });
        handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
        spans[handlerData.xhr.__sentry_xhr_span_id__] = span;
        if (handlerData.xhr.setRequestHeader) {
            try {
                handlerData.xhr.setRequestHeader('sentry-trace', span.toTraceparent());
            }
            catch (_) {
                // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
            }
        }
    }
}

var global$1 = getGlobalObject();
/**
 * Default function implementing pageload and navigation transactions
 */
function instrumentRoutingWithDefaults(customStartTransaction, startTransactionOnPageLoad, startTransactionOnLocationChange) {
    if (startTransactionOnPageLoad === void 0) { startTransactionOnPageLoad = true; }
    if (startTransactionOnLocationChange === void 0) { startTransactionOnLocationChange = true; }
    if (!global$1 || !global$1.location) {
        logger.warn('Could not initialize routing instrumentation due to invalid location');
        return;
    }
    var startingUrl = global$1.location.href;
    var activeTransaction;
    if (startTransactionOnPageLoad) {
        activeTransaction = customStartTransaction({ name: global$1.location.pathname, op: 'pageload' });
    }
    if (startTransactionOnLocationChange) {
        addInstrumentationHandler({
            callback: function (_a) {
                var to = _a.to, from = _a.from;
                /**
                 * This early return is there to account for some cases where a navigation transaction starts right after
                 * long-running pageload. We make sure that if `from` is undefined and a valid `startingURL` exists, we don't
                 * create an uneccessary navigation transaction.
                 *
                 * This was hard to duplicate, but this behavior stopped as soon as this fix was applied. This issue might also
                 * only be caused in certain development environments where the usage of a hot module reloader is causing
                 * errors.
                 */
                if (from === undefined && startingUrl && startingUrl.indexOf(to) !== -1) {
                    startingUrl = undefined;
                    return;
                }
                if (from !== to) {
                    startingUrl = undefined;
                    if (activeTransaction) {
                        logger.log("[Tracing] Finishing current transaction with op: " + activeTransaction.op);
                        // If there's an open transaction on the scope, we need to finish it before creating an new one.
                        activeTransaction.finish();
                    }
                    activeTransaction = customStartTransaction({ name: global$1.location.pathname, op: 'navigation' });
                }
            },
            type: 'history',
        });
    }
}

var DEFAULT_MAX_TRANSACTION_DURATION_SECONDS = 600;
var DEFAULT_BROWSER_TRACING_OPTIONS = __assign({ idleTimeout: DEFAULT_IDLE_TIMEOUT, markBackgroundTransactions: true, maxTransactionDuration: DEFAULT_MAX_TRANSACTION_DURATION_SECONDS, routingInstrumentation: instrumentRoutingWithDefaults, startTransactionOnLocationChange: true, startTransactionOnPageLoad: true }, defaultRequestInstrumentationOptions);
/**
 * The Browser Tracing integration automatically instruments browser pageload/navigation
 * actions as transactions, and captures requests, metrics and errors as spans.
 *
 * The integration can be configured with a variety of options, and can be extended to use
 * any routing library. This integration uses {@see IdleTransaction} to create transactions.
 */
var BrowserTracing = /** @class */ (function () {
    function BrowserTracing(_options) {
        /**
         * @inheritDoc
         */
        this.name = BrowserTracing.id;
        this._emitOptionsWarning = false;
        var tracingOrigins = defaultRequestInstrumentationOptions.tracingOrigins;
        // NOTE: Logger doesn't work in constructors, as it's initialized after integrations instances
        if (_options &&
            _options.tracingOrigins &&
            Array.isArray(_options.tracingOrigins) &&
            _options.tracingOrigins.length !== 0) {
            tracingOrigins = _options.tracingOrigins;
        }
        else {
            this._emitOptionsWarning = true;
        }
        this.options = __assign(__assign(__assign({}, DEFAULT_BROWSER_TRACING_OPTIONS), _options), { tracingOrigins: tracingOrigins });
        this._metrics = new MetricsInstrumentation(__assign(__assign({}, DEFAULT_METRICS_INSTR_OPTIONS), this.options._metricOptions));
    }
    /**
     * @inheritDoc
     */
    BrowserTracing.prototype.setupOnce = function (_, getCurrentHub) {
        var _this = this;
        this._getCurrentHub = getCurrentHub;
        if (this._emitOptionsWarning) {
            logger.warn('[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.');
            logger.warn("[Tracing] We added a reasonable default for you: " + defaultRequestInstrumentationOptions.tracingOrigins);
        }
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.options, instrumentRouting = _a.routingInstrumentation, startTransactionOnLocationChange = _a.startTransactionOnLocationChange, startTransactionOnPageLoad = _a.startTransactionOnPageLoad, markBackgroundTransactions = _a.markBackgroundTransactions, traceFetch = _a.traceFetch, traceXHR = _a.traceXHR, tracingOrigins = _a.tracingOrigins, shouldCreateSpanForRequest = _a.shouldCreateSpanForRequest;
        instrumentRouting(function (context) { return _this._createRouteTransaction(context); }, startTransactionOnPageLoad, startTransactionOnLocationChange);
        if (markBackgroundTransactions) {
            registerBackgroundTabDetection();
        }
        instrumentOutgoingRequests({ traceFetch: traceFetch, traceXHR: traceXHR, tracingOrigins: tracingOrigins, shouldCreateSpanForRequest: shouldCreateSpanForRequest });
    };
    /** Create routing idle transaction. */
    BrowserTracing.prototype._createRouteTransaction = function (context) {
        var _this = this;
        if (!this._getCurrentHub) {
            logger.warn("[Tracing] Did not create " + context.op + " transaction because _getCurrentHub is invalid.");
            return undefined;
        }
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.options, beforeNavigate = _a.beforeNavigate, idleTimeout = _a.idleTimeout, maxTransactionDuration = _a.maxTransactionDuration;
        var parentContextFromHeader = context.op === 'pageload' ? getHeaderContext() : undefined;
        var expandedContext = __assign(__assign(__assign({}, context), parentContextFromHeader), { trimEnd: true });
        var modifiedContext = typeof beforeNavigate === 'function' ? beforeNavigate(expandedContext) : expandedContext;
        // For backwards compatibility reasons, beforeNavigate can return undefined to "drop" the transaction (prevent it
        // from being sent to Sentry).
        var finalContext = modifiedContext === undefined ? __assign(__assign({}, expandedContext), { sampled: false }) : modifiedContext;
        if (finalContext.sampled === false) {
            logger.log("[Tracing] Will not send " + finalContext.op + " transaction because of beforeNavigate.");
        }
        logger.log("[Tracing] Starting " + finalContext.op + " transaction on scope");
        var hub = this._getCurrentHub();
        var location = getGlobalObject().location;
        var idleTransaction = startIdleTransaction(hub, finalContext, idleTimeout, true, { location: location });
        idleTransaction.registerBeforeFinishCallback(function (transaction, endTimestamp) {
            _this._metrics.addPerformanceEntries(transaction);
            adjustTransactionDuration(secToMs(maxTransactionDuration), transaction, endTimestamp);
        });
        return idleTransaction;
    };
    /**
     * @inheritDoc
     */
    BrowserTracing.id = 'BrowserTracing';
    return BrowserTracing;
}());
/**
 * Gets transaction context from a sentry-trace meta.
 *
 * @returns Transaction context data from the header or undefined if there's no header or the header is malformed
 */
function getHeaderContext() {
    var header = getMetaContent('sentry-trace');
    if (header) {
        return extractTraceparentData(header);
    }
    return undefined;
}
/** Returns the value of a meta tag */
function getMetaContent(metaName) {
    var el = getGlobalObject().document.querySelector("meta[name=" + metaName + "]");
    return el ? el.getAttribute('content') : null;
}
/** Adjusts transaction value based on max transaction duration */
function adjustTransactionDuration(maxDuration, transaction, endTimestamp) {
    var diff = endTimestamp - transaction.startTimestamp;
    var isOutdatedTransaction = endTimestamp && (diff > maxDuration || diff < 0);
    if (isOutdatedTransaction) {
        transaction.setStatus(SpanStatus.DeadlineExceeded);
        transaction.setTag('maxTransactionDurationExceeded', 'true');
    }
}

/**
 * Express integration
 *
 * Provides an request and error handler for Express framework as well as tracing capabilities
 */
var Express = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Express(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Express.id;
        this._router = options.router || options.app;
        this._methods = (Array.isArray(options.methods) ? options.methods : []).concat('use');
    }
    /**
     * @inheritDoc
     */
    Express.prototype.setupOnce = function () {
        if (!this._router) {
            logger.error('ExpressIntegration is missing an Express instance');
            return;
        }
        instrumentMiddlewares(this._router, this._methods);
    };
    /**
     * @inheritDoc
     */
    Express.id = 'Express';
    return Express;
}());
/**
 * Wraps original middleware function in a tracing call, which stores the info about the call as a span,
 * and finishes it once the middleware is done invoking.
 *
 * Express middlewares have 3 various forms, thus we have to take care of all of them:
 * // sync
 * app.use(function (req, res) { ... })
 * // async
 * app.use(function (req, res, next) { ... })
 * // error handler
 * app.use(function (err, req, res, next) { ... })
 *
 * They all internally delegate to the `router[method]` of the given application instance.
 */
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
function wrap(fn, method) {
    var arity = fn.length;
    switch (arity) {
        case 2: {
            return function (req, res) {
                var transaction = res.__sentry_transaction;
                if (transaction) {
                    var span_1 = transaction.startChild({
                        description: fn.name,
                        op: "middleware." + method,
                    });
                    res.once('finish', function () {
                        span_1.finish();
                    });
                }
                return fn.call(this, req, res);
            };
        }
        case 3: {
            return function (req, res, next) {
                var _a;
                var transaction = res.__sentry_transaction;
                var span = (_a = transaction) === null || _a === void 0 ? void 0 : _a.startChild({
                    description: fn.name,
                    op: "middleware." + method,
                });
                fn.call(this, req, res, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var _a;
                    (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                    next.call.apply(next, __spread([this], args));
                });
            };
        }
        case 4: {
            return function (err, req, res, next) {
                var _a;
                var transaction = res.__sentry_transaction;
                var span = (_a = transaction) === null || _a === void 0 ? void 0 : _a.startChild({
                    description: fn.name,
                    op: "middleware." + method,
                });
                fn.call(this, err, req, res, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var _a;
                    (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                    next.call.apply(next, __spread([this], args));
                });
            };
        }
        default: {
            throw new Error("Express middleware takes 2-4 arguments. Got: " + arity);
        }
    }
}
/**
 * Takes all the function arguments passed to the original `app` or `router` method, eg. `app.use` or `router.use`
 * and wraps every function, as well as array of functions with a call to our `wrap` method.
 * We have to take care of the arrays as well as iterate over all of the arguments,
 * as `app.use` can accept middlewares in few various forms.
 *
 * app.use([<path>], <fn>)
 * app.use([<path>], <fn>, ...<fn>)
 * app.use([<path>], ...<fn>[])
 */
function wrapMiddlewareArgs(args, method) {
    return args.map(function (arg) {
        if (typeof arg === 'function') {
            return wrap(arg, method);
        }
        if (Array.isArray(arg)) {
            return arg.map(function (a) {
                if (typeof a === 'function') {
                    return wrap(a, method);
                }
                return a;
            });
        }
        return arg;
    });
}
/**
 * Patches original router to utilize our tracing functionality
 */
function patchMiddleware(router, method) {
    var originalCallback = router[method];
    router[method] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return originalCallback.call.apply(originalCallback, __spread([this], wrapMiddlewareArgs(args, method)));
    };
    return router;
}
/**
 * Patches original router methods
 */
function instrumentMiddlewares(router, methods) {
    if (methods === void 0) { methods = []; }
    methods.forEach(function (method) { return patchMiddleware(router, method); });
}

/** Tracing integration for node-postgres package */
var Postgres = /** @class */ (function () {
    function Postgres(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Postgres.id;
        this._usePgNative = !!options.usePgNative;
    }
    /**
     * @inheritDoc
     */
    Postgres.prototype.setupOnce = function (_, getCurrentHub) {
        var _a;
        var pkg = loadModule('pg');
        if (!pkg) {
            logger.error('Postgres Integration was unable to require `pg` package.');
            return;
        }
        if (this._usePgNative && !((_a = pkg.native) === null || _a === void 0 ? void 0 : _a.Client)) {
            logger.error("Postgres Integration was unable to access 'pg-native' bindings.");
            return;
        }
        var Client = (this._usePgNative ? pkg.native : pkg).Client;
        /**
         * function (query, callback) => void
         * function (query, params, callback) => void
         * function (query) => Promise
         * function (query, params) => Promise
         * function (pg.Cursor) => pg.Cursor
         */
        fill(Client.prototype, 'query', function (orig) {
            return function (config, values, callback) {
                var _a, _b, _c;
                var scope = getCurrentHub().getScope();
                var parentSpan = (_a = scope) === null || _a === void 0 ? void 0 : _a.getSpan();
                var span = (_b = parentSpan) === null || _b === void 0 ? void 0 : _b.startChild({
                    description: typeof config === 'string' ? config : config.text,
                    op: "db",
                });
                if (typeof callback === 'function') {
                    return orig.call(this, config, values, function (err, result) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        callback(err, result);
                    });
                }
                if (typeof values === 'function') {
                    return orig.call(this, config, function (err, result) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        values(err, result);
                    });
                }
                var rv = typeof values !== 'undefined' ? orig.call(this, config, values) : orig.call(this, config);
                if (isThenable(rv)) {
                    return rv.then(function (res) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        return res;
                    });
                }
                (_c = span) === null || _c === void 0 ? void 0 : _c.finish();
                return rv;
            };
        });
    };
    /**
     * @inheritDoc
     */
    Postgres.id = 'Postgres';
    return Postgres;
}());

/** Tracing integration for node-mysql package */
var Mysql = /** @class */ (function () {
    function Mysql() {
        /**
         * @inheritDoc
         */
        this.name = Mysql.id;
    }
    /**
     * @inheritDoc
     */
    Mysql.prototype.setupOnce = function (_, getCurrentHub) {
        var pkg = loadModule('mysql/lib/Connection.js');
        if (!pkg) {
            logger.error('Mysql Integration was unable to require `mysql` package.');
            return;
        }
        // The original function will have one of these signatures:
        //    function (callback) => void
        //    function (options, callback) => void
        //    function (options, values, callback) => void
        fill(pkg, 'createQuery', function (orig) {
            return function (options, values, callback) {
                var _a, _b;
                var scope = getCurrentHub().getScope();
                var parentSpan = (_a = scope) === null || _a === void 0 ? void 0 : _a.getSpan();
                var span = (_b = parentSpan) === null || _b === void 0 ? void 0 : _b.startChild({
                    description: typeof options === 'string' ? options : options.sql,
                    op: "db",
                });
                if (typeof callback === 'function') {
                    return orig.call(this, options, values, function (err, result, fields) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        callback(err, result, fields);
                    });
                }
                if (typeof values === 'function') {
                    return orig.call(this, options, function (err, result, fields) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        values(err, result, fields);
                    });
                }
                return orig.call(this, options, values, callback);
            };
        });
    };
    /**
     * @inheritDoc
     */
    Mysql.id = 'Mysql';
    return Mysql;
}());

var OPERATIONS = [
    'aggregate',
    'bulkWrite',
    'countDocuments',
    'createIndex',
    'createIndexes',
    'deleteMany',
    'deleteOne',
    'distinct',
    'drop',
    'dropIndex',
    'dropIndexes',
    'estimatedDocumentCount',
    'find',
    'findOne',
    'findOneAndDelete',
    'findOneAndReplace',
    'findOneAndUpdate',
    'indexes',
    'indexExists',
    'indexInformation',
    'initializeOrderedBulkOp',
    'insertMany',
    'insertOne',
    'isCapped',
    'mapReduce',
    'options',
    'parallelCollectionScan',
    'rename',
    'replaceOne',
    'stats',
    'updateMany',
    'updateOne',
];
// All of the operations above take `options` and `callback` as their final parameters, but some of them
// take additional parameters as well. For those operations, this is a map of
// { <operation name>:  [<names of additional parameters>] }, as a way to know what to call the operation's
// positional arguments when we add them to the span's `data` object later
var OPERATION_SIGNATURES = {
    // aggregate intentionally not included because `pipeline` arguments are too complex to serialize well
    // see https://github.com/getsentry/sentry-javascript/pull/3102
    bulkWrite: ['operations'],
    countDocuments: ['query'],
    createIndex: ['fieldOrSpec'],
    createIndexes: ['indexSpecs'],
    deleteMany: ['filter'],
    deleteOne: ['filter'],
    distinct: ['key', 'query'],
    dropIndex: ['indexName'],
    find: ['query'],
    findOne: ['query'],
    findOneAndDelete: ['filter'],
    findOneAndReplace: ['filter', 'replacement'],
    findOneAndUpdate: ['filter', 'update'],
    indexExists: ['indexes'],
    insertMany: ['docs'],
    insertOne: ['doc'],
    mapReduce: ['map', 'reduce'],
    rename: ['newName'],
    replaceOne: ['filter', 'doc'],
    updateMany: ['filter', 'update'],
    updateOne: ['filter', 'update'],
};
/** Tracing integration for mongo package */
var Mongo = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Mongo(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Mongo.id;
        this._operations = Array.isArray(options.operations)
            ? options.operations
            : OPERATIONS;
        this._describeOperations = 'describeOperations' in options ? options.describeOperations : true;
        this._useMongoose = !!options.useMongoose;
    }
    /**
     * @inheritDoc
     */
    Mongo.prototype.setupOnce = function (_, getCurrentHub) {
        var moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
        var pkg = loadModule(moduleName);
        if (!pkg) {
            logger.error("Mongo Integration was unable to require `" + moduleName + "` package.");
            return;
        }
        this._instrumentOperations(pkg.Collection, this._operations, getCurrentHub);
    };
    /**
     * Patches original collection methods
     */
    Mongo.prototype._instrumentOperations = function (collection, operations, getCurrentHub) {
        var _this = this;
        operations.forEach(function (operation) { return _this._patchOperation(collection, operation, getCurrentHub); });
    };
    /**
     * Patches original collection to utilize our tracing functionality
     */
    Mongo.prototype._patchOperation = function (collection, operation, getCurrentHub) {
        if (!(operation in collection.prototype))
            return;
        var getSpanContext = this._getSpanContextFromOperationArguments.bind(this);
        fill(collection.prototype, operation, function (orig) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a, _b, _c, _d;
                var lastArg = args[args.length - 1];
                var scope = getCurrentHub().getScope();
                var parentSpan = (_a = scope) === null || _a === void 0 ? void 0 : _a.getSpan();
                // Check if the operation was passed a callback. (mapReduce requires a different check, as
                // its (non-callback) arguments can also be functions.)
                if (typeof lastArg !== 'function' || (operation === 'mapReduce' && args.length === 2)) {
                    var span_1 = (_b = parentSpan) === null || _b === void 0 ? void 0 : _b.startChild(getSpanContext(this, operation, args));
                    var maybePromise = orig.call.apply(orig, __spread([this], args));
                    if (isThenable(maybePromise)) {
                        return maybePromise.then(function (res) {
                            var _a;
                            (_a = span_1) === null || _a === void 0 ? void 0 : _a.finish();
                            return res;
                        });
                    }
                    else {
                        (_c = span_1) === null || _c === void 0 ? void 0 : _c.finish();
                        return maybePromise;
                    }
                }
                var span = (_d = parentSpan) === null || _d === void 0 ? void 0 : _d.startChild(getSpanContext(this, operation, args.slice(0, -1)));
                return orig.call.apply(orig, __spread([this], args.slice(0, -1), [function (err, result) {
                        var _a;
                        (_a = span) === null || _a === void 0 ? void 0 : _a.finish();
                        lastArg(err, result);
                    }]));
            };
        });
    };
    /**
     * Form a SpanContext based on the user input to a given operation.
     */
    Mongo.prototype._getSpanContextFromOperationArguments = function (collection, operation, args) {
        var data = {
            collectionName: collection.collectionName,
            dbName: collection.dbName,
            namespace: collection.namespace,
        };
        var spanContext = {
            op: "db",
            description: operation,
            data: data,
        };
        // If the operation takes no arguments besides `options` and `callback`, or if argument
        // collection is disabled for this operation, just return early.
        var signature = OPERATION_SIGNATURES[operation];
        var shouldDescribe = Array.isArray(this._describeOperations)
            ? this._describeOperations.includes(operation)
            : this._describeOperations;
        if (!signature || !shouldDescribe) {
            return spanContext;
        }
        try {
            // Special case for `mapReduce`, as the only one accepting functions as arguments.
            if (operation === 'mapReduce') {
                var _a = __read(args, 2), map = _a[0], reduce = _a[1];
                data[signature[0]] = typeof map === 'string' ? map : map.name || '<anonymous>';
                data[signature[1]] = typeof reduce === 'string' ? reduce : reduce.name || '<anonymous>';
            }
            else {
                for (var i = 0; i < signature.length; i++) {
                    data[signature[i]] = JSON.stringify(args[i]);
                }
            }
        }
        catch (_oO) {
            // no-empty
        }
        return spanContext;
    };
    /**
     * @inheritDoc
     */
    Mongo.id = 'Mongo';
    return Mongo;
}());

var TracingIntegrations = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Express: Express,
	Postgres: Postgres,
	Mysql: Mysql,
	Mongo: Mongo
});

var Integrations = __assign(__assign({}, TracingIntegrations), { BrowserTracing: BrowserTracing });
// We are patching the global object with our hub extension methods
addExtensionMethods();

const config = {
    sentryDsn: "https://28d8421f244c4e3eba2e2d871a1d599a@o943096.ingest.sentry.io/6073316",
    environment: "DEV"
};

init({
    environment: config.environment,
    dsn: config.sentryDsn,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: .5,
});

export { Badge as A, Banner as B, ChakraProvider as C, HiStar as D, HiUserGroup as E, HiOutlineClock as F, HiOutlineCalendar as G, HStack as H, useIds as I, mergeRefs as J, GenIcon as K, isHTMLElement as L, usePortalManager as M, warn as N, getOwnerDocument as O, Stack as S, Text as T, _extends$r as _, chakra as a, createCommonjsModule as b, createContext as c, reactDom as d, defaultTheme as e, isFunction as f, cx as g, isObject as h, isBrowser$1 as i, callAllHandlers as j, Button as k, Box as l, mergeWith as m, useId as n, isNumber as o, pipe as p, forwardRef as q, react as r, useStyleConfig as s, omitThemingProps as t, useCourses as u, useStyles as v, useTheme as w, useMultiStyleConfig as x, StylesProvider as y, useColorModeValue as z };
