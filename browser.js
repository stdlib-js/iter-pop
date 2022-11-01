// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).iterPop=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,a,y,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};var c=t;function a(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function m(e,t){return null!=e&&v.call(e,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(e){var t,r,n;if(null==e)return d.call(e);r=e[w],t=m(e,w);try{e[w]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[w]=r:delete e[w],n}:function(e){return d.call(e)},_=Boolean.prototype.toString;var j=b();function h(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===g(e)))}function S(e){return p(e)||h(e)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var O="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof A?A:null;var P=function(e){if(arguments.length){if(!p(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return E()}if(O)return O;if(T)return T;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),B=P.document&&P.document.childNodes,C=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;a(V,"REGEXP",k);var G=Array.isArray?Array.isArray:function(e){return"[object Array]"===g(e)};function L(e){return null!==e&&"object"==typeof e}function F(e){var t,r,n,o;if(("Object"===(r=g(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=k.exec(n.toString()))return t[1]}return L(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(L,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!G(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(L));var I="function"==typeof y||"object"==typeof C||"function"==typeof B?function(e){return F(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?F(e).toLowerCase():t};function M(e){return"function"===I(e)}function R(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)&&M(e.next)}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function J(){}function N(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function e(t,r,n){var o,u,i,f,l;if(!R(t))throw new TypeError(N("0Ci4J",t));if(arguments.length>1){if(!M(r))throw new TypeError(N("0Ci2S",r));f=r}else f=J;return l=0,a(u={},"next",c),a(u,"return",y),U&&M(t[U])&&a(u,U,p),u;function c(){var e,r;return i?{done:!0}:(r=t.next(),0===l?(l+=1,r.done?(i=!0,r):(o=r.value,c())):r.done?(i=!0,f.call(n,o),r):(e={value:o,done:!1},o=r.value,e))}function y(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function p(){return e(t[U](),f,n)}}}));
//# sourceMappingURL=browser.js.map