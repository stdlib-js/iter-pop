"use strict";var w=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=w(function(L,g){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-function/dist'),b=require('@stdlib/assert-is-iterator-like/dist'),v=require('@stdlib/symbol-iterator/dist'),h=require('@stdlib/utils-noop/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e,r,l){var u,n,a,i,s;if(!b(e))throw new TypeError(d('0Pb46',e));if(arguments.length>1){if(!m(r))throw new TypeError(d('0Pb2H',r));i=r}else i=h;return s=0,n={},f(n,"next",c),f(n,"return",x),v&&m(e[v])&&f(n,v,y),n;function c(){var o,t;return a?{done:!0}:(t=e.next(),s===0?(s+=1,t.done?(a=!0,t):(u=t.value,c())):t.done?(a=!0,i.call(l,u),t):(o={value:u,done:!1},u=t.value,o))}function x(o){return a=!0,arguments.length?{value:o,done:!0}:{done:!0}}function y(){return p(e[v](),i,l)}}g.exports=p
});var F=q();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map