"use strict";(self.webpackChunktalk_react_app=self.webpackChunktalk_react_app||[]).push([[866],{9472:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(7363);var i=n(6417),a=function(t){var e=t.title,n=(t.className,t.children);return function(t){(0,r.useEffect)((function(){document.title=t}),[])}(e),(0,i.jsx)(i.Fragment,{children:n})}},635:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(7363),i=n(6711);var a=n.p+"static/media/home.2538943b125e2fcb7ac37b745f2080d4.svg";var c=n.p+"static/media/home-active.a3c1f2a3521c62f42a4b51d5617210af.svg";var s=n.p+"static/media/my.c9972418418dd8075254bc47bde75ea0.svg";var o=[{name:"\u9996\u9875",icon:a,active:c,route:"/home",title:"\u9996\u9875"},{name:"\u6211\u7684",icon:s,active:n.p+"static/media/my-active.1ed73fdb0d257be913917f231531c938.svg",route:"/my",title:"\u6211\u7684"}],d="index_tabbar__6SrWD",u="index_tabbarItem__SN3+E",h="index_active__IXv4U",x=n(6417),f=function(){var t=(0,i.useNavigate)(),e=(0,i.useLocation)().pathname,n=(0,r.useMemo)((function(){return o.map((function(n){return(0,x.jsxs)("div",{className:u,onClick:function(){return t(n.route)},children:[(0,x.jsx)("img",{src:e===n.route?n.active:n.icon,alt:""}),(0,x.jsx)("div",{className:e===n.route?h:"",children:n.name})]},n.name)}))}),[e]);return(0,x.jsx)("div",{className:d,children:n})}},1853:function(t,e){e.Z={getHome:{method:"get",url:"/api/home"},getList:{method:"post",url:"/api/list"},getVirtuaList:{method:"get",url:"/api/virtuaList"}}},5970:function(t,e,n){n.d(e,{aB:function(){return c}});var r=n(885);var i=n(7467),a=n.n(i),c=a().create({baseURL:"https://www.fastmock.site/mock/".concat("c00624da6261543b2897e35dff28607c")});a().create({baseURL:"https://xxxx"}),a().create({baseURL:"https://xxx"});c.interceptors.response.use((function(t){return t}),function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];return function(t){var e=t.response,r=t.config,a=r.url,c=r.params;return console.error("\n            =========warn begin===========\n            \u5f53\u524d\u8bf7\u6c42\uff1a".concat(a," \u5f02\u5e38\n            \u5f53\u524d\u8bf7\u6c42\u53c2\u6570 \ud83d\udc47\n            ").concat(JSON.stringify(c),"\n            \u9519\u8bef\u7801 ").concat(e[n],"\n            \u9519\u8bef\u6d88\u606f ").concat(e[i],"\n            =========warn end=============\n        ")),Promise.reject(t.response)}}(["status","statusText"]))},4856:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(7363);function i(t){return(0,r.useMemo)((function(){return function(t){return{get:function(e,n){return t.get(e,{params:n})},post:function(e,n){return t.post(e,n)},put:function(e,n){return t.put(e,n)},del:function(e,n){return t.delete(e,n)}}}(t)}),[])}},7601:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(8683),i=n(5970),a=n(4e3),c=n(9706),s=n.n(c),o=n(4856);function d(t,e){var n=t.method,c=t.url,d=e.data,u=void 0===d?{}:d,h=e.config,x=void 0===h?{}:h,f=(0,o.Z)(i.aB);if(!f[n])throw new Error("\u5f53\u524d\u8bf7\u6c42\u65b9\u6cd5\u4ec5\u652f\u6301get/post/put/delete");var l=(0,a.useRequest)((function(){return f[n](c,u)}),x),m=l.data,v=s()(m,"data.data",[]);return(0,r.Z)((0,r.Z)({},l),{},{data:v})}},3866:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var r=n(1853),i=n(7601),a=n(6338),c="index_loader__tDbmV",s="index_home__VTcOz",o="index_content__BIgDC",d="index_title__Tnfh4",u="index_subTitle__hafa+",h="index_list__ak6bO",x="index_item__gC8VE",f="index_info__2kQx-",l="index_rightArrow__q-EI5",m=n(635),v=n(2018),g=n(9706),_=n.n(g),p=n(8683),j=n(5990),w=n(6417),b=function(t){var e=window.screen.width,n=window.screen.height;return(0,w.jsxs)(j.ZP,(0,p.Z)((0,p.Z)({speed:2,width:e,height:n,viewBox:"0 0 ".concat(e," ").concat(n),backgroundColor:"#f3f3f3",foregroundColor:"#85acd5"},t),{},{children:[(0,w.jsx)("rect",{x:"0",y:"20",width:e,height:"60"}),(0,w.jsx)("rect",{x:"0",y:"125",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"165",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"205",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"245",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"285",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"325",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"365",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"405",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"445",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"485",rx:"5",ry:"5",width:e,height:"20"}),(0,w.jsx)("rect",{x:"0",y:"525",rx:"5",ry:"5",width:e,height:"20"})]}))},y=n(1523),N=n(9472);n(7363);var Z=n.p+"static/media/rightArrow.6fdd0650b4ca2d74151b7351dc50e911.svg",k=function(){var t=(0,y.useNavigate)(),e=(0,i.Z)(r.Z.getHome,{}),n=e.data,g=(e.error,e.loading);return g?(0,w.jsxs)("div",{className:c,children:[(0,w.jsx)(b,{}),(0,w.jsx)(m.Z,{})]}):(0,w.jsx)(N.Z,{title:"\u9996\u9875",children:(0,w.jsxs)("div",{className:s,children:[(0,w.jsxs)("div",{className:o,children:[(0,w.jsxs)("div",{className:d,children:[(0,w.jsx)("img",{src:a,alt:""}),_()(n,"title","")]}),(0,w.jsx)("div",{className:u,children:_()(n,"subTitle","")}),(0,w.jsx)("div",{className:h,children:_()(n,"list",[]).map((function(e){return(0,w.jsx)("div",{className:x,onClick:function(){return 9===(n=e.id)?t(v.c.list):10===n?t(v.c.virtuaList):void 0;var n},children:(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)("span",{children:e.content}),e.isRoute&&(0,w.jsx)("img",{className:l,src:Z,alt:""})]})},e.id)}))})]}),(0,w.jsx)(m.Z,{})]})})}},6338:function(t,e,n){t.exports=n.p+"static/media/logo.6679f20bad0a3b0859bf.png"}}]);