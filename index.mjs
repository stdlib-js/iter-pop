// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var o=e,d=t,l=r,m=n,p=s,j=i;var u=function e(t,r,n){var s,i,u,a,f;if(!l(t))throw new TypeError(j("0Ci4J",t));if(arguments.length>1){if(!d(r))throw new TypeError(j("0Ci2S",r));a=r}else a=p;return f=0,o(i={},"next",h),o(i,"return",v),m&&d(t[m])&&o(i,m,c),i;function h(){var e,r;return u?{done:!0}:(r=t.next(),0===f?(f+=1,r.done?(u=!0,r):(s=r.value,h())):r.done?(u=!0,a.call(n,s),r):(e={value:s,done:!1},s=r.value,e))}function v(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return e(t[m](),a,n)}},a=u;export{a as default};
//# sourceMappingURL=index.mjs.map
