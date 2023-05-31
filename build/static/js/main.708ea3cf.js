/*! For license information please see main.708ea3cf.js.LICENSE.txt */
!function(){"use strict";var t={1739:function(t,e,r){var n=r(1533);e.createRoot=n.createRoot,e.hydrateRoot=n.hydrateRoot},5918:function(t,e,r){var n=r(7363),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,r){var n,i={},f=null,l=null;for(n in void 0!==r&&(f=""+r),void 0!==e.key&&(f=""+e.key),void 0!==e.ref&&(l=e.ref),e)a.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:f,ref:l,props:i,_owner:u.current}}e.Fragment=i,e.jsx=f,e.jsxs=f},6417:function(t,e,r){t.exports=r(5918)},2018:function(t,e,r){r.d(e,{c:function(){return n}});var n={home:"/home",my:"/my",list:"/list",virtuaList:"/virtuaList"}},7363:function(t){t.exports=React},1533:function(t){t.exports=ReactDOM},1523:function(t){t.exports=ReactRouter},6711:function(t){t.exports=ReactRouterDOM},4e3:function(t){t.exports=ahooks},7467:function(t){t.exports=axios},7821:function(t){t.exports=mobx},5560:function(t){t.exports=mobxReactLite},907:function(t,e,r){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Z:function(){return n}})},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void r(f)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(R){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),u=new O(n||[]);return i(a,"_invoke",{value:E(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(R){return{type:"throw",arg:R}}}t.wrap=s;var d={};function p(){}function v(){}function y(){}var m={};l(m,u,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==e&&r.call(b,u)&&(m=b);var w=y.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(i,a,u,c){var f=h(t[i],t,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==(0,n.Z)(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(f.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,f,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,f,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(j.prototype),l(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,f,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}},885:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(181);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,f=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(l){f=!0,o=l}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(f)throw o}}return u}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1002:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:function(){return n}})},181:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(907);function o(t,e){if(t){if("string"===typeof t)return(0,n.Z)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(t,e):void 0}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))},r.u=function(t){return"static/js/"+t+"."+{27:"f2744d43",319:"c4983196",772:"de8400e2",866:"9a991437",908:"5a90a869",980:"409893f3"}[t]+".chunk.js"},r.miniCssF=function(t){return"static/css/"+t+"."+{319:"6424f391",866:"a864588a",908:"1c768bb1",980:"54a091a4"}[t]+".chunk.css"},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={},e="talk-react-app:";r.l=function(n,o,i,a){if(t[n])t[n].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==e+i){u=s;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",e+i),u.src=n),t[n]=[o];var h=function(e,r){u.onerror=u.onload=null,clearTimeout(d);var o=t[n];if(delete t[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(r)})),e)return e(r)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=h.bind(null,u.onerror),u.onload=h.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.p="/talk-react-app/",function(){if("undefined"!==typeof document){var t=function(t){return new Promise((function(e,n){var o=r.miniCssF(t),i=r.p+o;if(function(t,e){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===t||o===e)return a}}(o,i))return e();!function(t,e,r,n,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(r){if(i.onerror=i.onload=null,"load"===r.type)n();else{var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}},i.href=e,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i)}(t,i,null,e,n)}))},e={179:0};r.f.miniCss=function(r,n){e[r]?n.push(e[r]):0!==e[r]&&{319:1,866:1,908:1,980:1}[r]&&n.push(e[r]=t(r).then((function(){e[r]=0}),(function(t){throw delete e[r],t})))}}}(),function(){var t={179:0};r.f.j=function(e,n){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=t[e]=[r,n]}));n.push(o[2]=i);var a=r.p+r.u(e),u=new Error;r.l(a,(function(n){if(r.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}}),"chunk-"+e,e)}};var e=function(e,n){var o,i,a=n[0],u=n[1],c=n[2],f=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)c(r)}for(e&&e(n);f<a.length;f++)i=a[f],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0},n=self.webpackChunktalk_react_app=self.webpackChunktalk_react_app||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),function(){var t=r(7363),e=r.n(t),n=r(6711),o=r(885),i=r(2018),a=r(4e3),u=r(6417);var c=function(){var e=(0,t.useRef)(new Map),r=(0,n.useOutlet)(),c=(0,n.useNavigate)(),f=(0,n.useLocation)().pathname,l=(0,a.useUpdate)();return(0,t.useEffect)((function(){if("/"===f)return c(i.c.home);e.current.has(f)||e.current.set(f,r),l()}),[f]),(0,u.jsx)("div",{children:Array.from(e.current).map((function(t){var e=(0,o.Z)(t,2),r=e[0],n=e[1];return(0,u.jsx)("div",{style:{display:f===r?"block":"none"},children:n},r)}))})};function f(){var t=(0,n.useRouteError)();if((0,n.isRouteErrorResponse)(t)){if(404===t.status)return(0,u.jsx)("div",{children:"This page 404!"});if(401===t.status)return(0,u.jsx)("div",{children:"You aren't authorized"});if(503===t.status)return(0,u.jsx)("div",{children:"Service Unavailable"});if(418===t.status)return(0,u.jsx)("div",{children:"\ud83e\uded6"})}return(0,u.jsx)("div",{children:"Something Error"})}var l=e().lazy((function(){return Promise.all([r.e(772),r.e(866)]).then(r.bind(r,3866))})),s=e().lazy((function(){return r.e(908).then(r.bind(r,2908))})),h=e().lazy((function(){return Promise.all([r.e(772),r.e(319)]).then(r.bind(r,5319))})),d=e().lazy((function(){return Promise.all([r.e(772),r.e(980)]).then(r.bind(r,3980))})),p=[{path:"/",element:(0,u.jsx)(c,{}),children:[{path:"/home",element:(0,u.jsx)(l,{}),errorElement:(0,u.jsx)(f,{})},{path:"/list",element:(0,u.jsx)(h,{}),errorElement:(0,u.jsx)(f,{})},{path:"/virtuaList",element:(0,u.jsx)(d,{}),errorElement:(0,u.jsx)(f,{})}]},{path:"/my",element:(0,u.jsx)(s,{})},{path:"/",element:(0,u.jsx)(l,{}),errorElement:(0,u.jsx)(f,{})}],v=(0,n.createHashRouter)(p);var y=function(){return(0,u.jsx)(t.Suspense,{fallback:(0,u.jsx)("div",{}),children:(0,u.jsx)(n.RouterProvider,{router:v})})},m=function(t){t&&t instanceof Function&&r.e(27).then(r.bind(r,4027)).then((function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;r(t),n(t),o(t),i(t),a(t)}))},g=r(4165),b=r(5861),w=r(1739);function x(){return x=(0,b.Z)((0,g.Z)().mark((function t(e){var r,n;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=window.navigator.userAgent,n=/miniprogram/i.test(r),window.isMiniProgram=!!n,function(){w.createRoot(document.getElementById("root")).render(e)}();case 5:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}!function(t){x.apply(this,arguments)}((0,u.jsx)(y,{})),m()}()}();