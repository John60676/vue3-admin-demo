(function(e){function t(t){for(var c,a,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2da5bbb2":"c350c635","chunk-8915f0cc":"1eb0b0ab","chunk-dafd9c64":"b250e5b4"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2da5bbb2":1,"chunk-8915f0cc":1,"chunk-dafd9c64":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-2da5bbb2":"0e433876","chunk-8915f0cc":"0e433876","chunk-dafd9c64":"0e433876"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===c||d===r))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===c||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var c=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,n){c=r[e]=[t,n]}));t.push(c[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"00c2":function(e,t,n){},"183c":function(e,t,n){},"1e09":function(e,t,n){},"3bdf":function(e,t,n){},4678:function(e,t,n){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id="4678"},"4d2e":function(e,t,n){},"5e09":function(e,t,n){},"656f":function(e,t,n){},7482:function(e,t,n){},"941c":function(e,t,n){"use strict";n("99af"),n("13d5"),n("b64b");function c(e,t){return t?"string"===typeof t?" ".concat(e,"--").concat(t):Array.isArray(t)?t.reduce((function(t,n){return t+c(e,n)}),""):Object.keys(t).reduce((function(n,a){return n+(t[a]?c(e,a):"")}),""):""}var a=function(e){return function(t,n){return t&&"string"!==typeof t&&(n=t,t=""),t=t?"".concat(e,"__").concat(t):e,"".concat(t).concat(c(t,n))}};t["a"]=a},c837:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c,a=n("7a23"),r=n("5502"),o={visitedViews:function(e){return e.tagsView.visitedViews},routes:function(e){return e.permission.routes}},u=o,i=(n("4de4"),n("7db0"),n("c740"),n("a434"),n("b0c0"),n("ade3")),s=n("8c4f"),d=(n("d3b7"),n("4b3e"),n("990d")),l=n.n(d),f=(n("d81d"),n("fb6a"),n("956a"),n("a086")),b=n.n(f),j=n("df7c"),m=n.n(j),v=function e(t){var n,c,r=Object(a["toRef"])(t,"route"),o=Object(s["d"])(),u=Array.isArray(r.value.children),i=1===(null===(n=r.value.children)||void 0===n?void 0:n.length),d=Object(a["computed"])((function(){var e,t=Object(a["unref"])(r);return u?i?(null===(e=t.meta)||void 0===e?void 0:e.title)?t:t.children:t:[t]})),l=function(e){o.push(f(e))},f=function(e){return m.a.resolve(t.parentPath,e)},j=function(e){var t;return!(null===(t=e.meta)||void 0===t?void 0:t.hidden)};if(Array.isArray(d.value))c=d.value.filter(j).map((function(e){var t,n,c;return Object(a["createVNode"])(b.a.Item,{key:f(e.path),title:null===(t=e.meta)||void 0===t?void 0:t.title,onClick:function(t){return l(e.path)}},{default:function(){return[Object(a["createVNode"])(Object(a["resolveComponent"])("sx-icon"),{type:null===(n=e.meta)||void 0===n?void 0:n.icon},null),Object(a["createVNode"])("span",null,[null===(c=e.meta)||void 0===c?void 0:c.title])]}})}));else{var v,p,h,O=Object(a["createVNode"])(a["Fragment"],null,[Object(a["createVNode"])(Object(a["resolveComponent"])("sx-icon"),{type:null===(v=d.value.meta)||void 0===v?void 0:v.icon},null),Object(a["createVNode"])("span",null,[null===(p=d.value.meta)||void 0===p?void 0:p.title])]),V=Object(a["computed"])((function(){return f(d.value.path)}));c=Object(a["createVNode"])(b.a.SubMenu,{key:V.value},{default:function(){return[null===(h=d.value.children)||void 0===h?void 0:h.map((function(t){return e({route:t,parentPath:V.value})}))]},title:function(){return O}})}return c},p=v,h=n("941c"),O=(n("656f"),"sx-menu"),V=Object(h["a"])(O),g=Object(a["defineComponent"])({name:O,setup:function(){var e=Object(r["b"])(),t=Object(s["c"])(),n=Object(a["computed"])((function(){return e.state.permission.routes.filter((function(e){return e.children&&e.children.length>=1}))})),c=Object(a["computed"])((function(){return[t.path]})),o=Object(a["ref"])([]);return Object(a["watchEffect"])((function(){var e=t.matched.slice(0,t.matched.length-1);o.value=e.map((function(e){return e.path}))})),function(){return Object(a["createVNode"])("div",{class:V()},[Object(a["createVNode"])(b.a,{theme:"dark",mode:"inline",openKeys:o.value,"onUpdate:openKeys":function(e){return o.value=e},selectedKeys:c.value},{default:function(){return[n.value.map((function(e){return p({route:e,parentPath:e.path})}))]}})])}}}),y=(n("c837"),"sx-logo"),w=Object(h["a"])(y),k=Object(a["defineComponent"])({name:y,setup:function(){return function(){return Object(a["createVNode"])("div",{class:w()},[Object(a["createVNode"])("span",null,[Object(a["createTextVNode"])("Logo")])])}}}),N=(n("99af"),n("e975"),n("8831")),x=n.n(N),C=(n("7482"),"sx-breadcrumb"),I=Object(h["a"])(C),_=Object(a["defineComponent"])({name:C,setup:function(){var e,t=Object(s["d"])(),n=Object(s["c"])(),c=Object(r["b"])(),o=c.state.permission.routes.find((function(e){return e.name===pe}));if(!o||!o.children||0===(null===(e=o.children)||void 0===e?void 0:e.length))throw"请为路由添加一个 name 为 ".concat(pe," 的主页，并至少设置一个 children 路由");var u=Object(a["computed"])((function(){var e=n.matched.map((function(e){return{meta:e.meta,path:e.path,name:e.name,redirect:e.redirect}}));if(e[0].name!==pe){var t=o.children[0];e.unshift({meta:t.meta,path:"".concat(o.path).concat(t.path),name:t.name,redirect:t.redirect})}return e.filter((function(e){return e.meta.title}))})),i=function(e){e.redirect?t.push(e.redirect):t.push(e.path)};return function(){return Object(a["createVNode"])(x.a,{class:I()},{default:function(){return[u.value.map((function(e){return Object(a["createVNode"])(x.a.Item,{key:e.redirect+e.path},{default:function(){return[e.meta.noRedirect?Object(a["createVNode"])("div",{class:I("links","disabled")},[e.meta.title]):Object(a["createVNode"])("div",{class:I("links"),onClick:function(){return i(e)}},[e.meta.title])]}})}))]}})}}}),A=(n("dab2"),n("4796")),E=n.n(A),z=(n("83d1"),n("5023")),T=n.n(z),S=n("4d26"),P=n.n(S),D=(n("f239"),"sx-navbar-avatar-menu"),F=Object(h["a"])(D),R=Object(a["defineComponent"])({name:D,setup:function(){var e=function(){return Object(a["createVNode"])(b.a,{class:F("menu")},{default:function(){return[Object(a["createVNode"])(b.a.Item,{key:"1",title:"个人中心"},{default:function(){return[Object(a["createTextVNode"])("个人中心")]}}),Object(a["createVNode"])(b.a.Item,{key:"2",title:"修改密码"},{default:function(){return[Object(a["createTextVNode"])("修改密码")]}}),Object(a["createVNode"])(b.a.Item,{key:"3",title:"退出登录"},{default:function(){return[Object(a["createTextVNode"])("退出登录")]}})]}})},t="John",n="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png";return function(){return Object(a["createVNode"])(E.a,{class:F()},{default:function(){return[Object(a["createVNode"])("a",{class:P()([F("avatar"),"ant-dropdown-link"])},[Object(a["createVNode"])(T.a,{class:"mr-10",alt:t,src:n},null),Object(a["createVNode"])("span",null,[t])])]},overlay:e})}}}),L=(n("3bdf"),"sx-navbar"),W=Object(h["a"])(L),q=Object(a["defineComponent"])({name:L,setup:function(){return function(){return Object(a["createVNode"])("div",{class:W()},[Object(a["createVNode"])(_,null,null),Object(a["createVNode"])("div",{class:W("nav-tools")},[Object(a["createVNode"])(R,null,null)])])}}}),M=n("9bc4"),U="tagsView/addView",B="tagsView/delView",K="tagsView/delAllView",H="tagsView/delOtherView",J="tagsView/switchView",X=function(e){return{type:U,view:e}},Y=function(e){return{type:B,view:e}},Z=function(){return{type:K}},G=function(e){return{type:H,currentView:e}},Q=function(e,t){return{type:J,oldIndex:e,newIndex:t}},$=n("2b46"),ee=n("31d7"),te=n("4694"),ne=n.n(te),ce=(n("5e09"),"sx-scrollbar"),ae=Object(h["a"])(ce),re=Object(a["defineComponent"])({name:ce,props:{class:{type:String,default:""}},setup:function(e,t){var n=t.slots,c=Object(a["toRefs"])(e),o=c.class,u=Object(a["ref"])(0),i=Object(r["b"])(),s=Object(a["computed"])((function(){return{left:"".concat(u.value,"px")}})),d=200,l=Object(a["ref"])(),f=Object(a["ref"])(),b=function(){var e=l.value,t=f.value;return e.clientWidth<=t.clientWidth?0:t.clientWidth-e.clientWidth},j=function(e){var t=10*-e.deltaY,n=b(),c=u.value+t;c=e.deltaY>=0?c<=n?n:c:c>=0?0:c,u.value=c},m=function(){var e=u.value+d;u.value=e>=0?0:e},v=function(){var e=b(),t=u.value-d;u.value=t<=e?e:t},p=function(){var e=l.value;new ne.a(e,{animation:150,onUpdate:function(e){var t=e.oldIndex,n=e.newIndex;i.dispatch(Q(t,n))}})};return Object(a["onMounted"])((function(){p()})),function(){return Object(a["createVNode"])("div",{class:P()([ae(),o.value])},[Object(a["createVNode"])("div",{class:P()([ae("btn"),ae("btn-left")]),onClick:m},[Object(a["createVNode"])($["a"],null,null)]),Object(a["createVNode"])("div",{class:ae("scroll-wrap"),ref:f},[Object(a["createVNode"])("div",{class:ae("scroll-inner"),style:s.value,onWheel:j,ref:l},[n.default&&n.default()])]),Object(a["createVNode"])("div",{class:P()([ae("btn"),ae("btn-right")]),onClick:v},[Object(a["createVNode"])(ee["a"],null,null)])])}}}),oe=n("5530"),ue=n("a878"),ie=(n("183c"),"sx-tag-item"),se=Object(h["a"])(ie),de=Object(a["defineComponent"])({name:ie,props:{tag:{type:Object,required:!0},onClose:{type:Function,required:!0},onClick:{type:Function,required:!0},onCloseAll:{type:Function,required:!0},onCloseOther:{type:Function,required:!0}},setup:function(e){var t=Object(s["c"])(),n=Object(a["toRefs"])(e),c=n.tag,r=Object(a["computed"])((function(){return c.value.name===t.name})),o=Object(a["computed"])((function(){return P()([se("dot",{active:r.value}),"mr-6"])})),u=Object(a["computed"])((function(){return P()([se({active:r.value}),"mr-10"])})),i=Object(a["computed"])((function(){return!c.value.meta.tagFixed})),d={overlay:function(){return Object(a["createVNode"])(b.a,null,{default:function(){return[Object(a["createVNode"])(b.a.Item,{key:"closeOther",onClick:function(){return e.onCloseOther(c.value)}},{default:function(){return[Object(a["createTextVNode"])("关闭其他")]}}),Object(a["createVNode"])(b.a.Item,{key:"closeAll",onClick:function(){return e.onCloseAll()}},{default:function(){return[Object(a["createTextVNode"])("关闭所有")]}})]}})}};return function(){return Object(a["createVNode"])(E.a,{trigger:["contextmenu"]},Object(oe["a"])({default:function(){return[Object(a["createVNode"])("span",{class:u.value,key:String(c.value.name),onAuxclick:function(){return i.value&&e.onClose(c.value)},onClick:function(){return e.onClick(c.value)}},[Object(a["createVNode"])("div",{class:o.value},null),c.value.meta.title,i.value&&Object(a["createVNode"])("div",{class:P()([se("close"),"ml-10"]),onClick:Object(a["withModifiers"])((function(){return e.onClose(c.value)}),["stop"])},[Object(a["createVNode"])(ue["a"],null,null)])])]}},d))}}}),le=(n("00c2"),"sx-tagbar"),fe=Object(h["a"])(le),be=Object(a["defineComponent"])({name:le,setup:function(){var e=Object(r["b"])(),t=Object(s["c"])(),n=Object(s["d"])(),c=Object(a["computed"])((function(){return Object(M["a"])(t,"matched","redirectedFrom")})),o=Object(a["computed"])((function(){return e.state.tagsView.visitedViews})),u=function(){e.dispatch(X(c.value))},i=function t(n){n.map((function(n){var c,a;n.children?t(n.children):(null===(c=n.meta)||void 0===c?void 0:c.title)&&(null===(a=n.meta)||void 0===a?void 0:a.tagFixed)&&e.dispatch(X(n))}))},d=function(t){e.dispatch(Y(t))},l=function(e){n.push(e)},f=function(t){e.dispatch(G(t))},b=function(){e.dispatch(Z())};return Object(a["onMounted"])((function(){i(e.state.permission.routes),u()})),Object(a["watch"])((function(){return t.name}),u),function(){return Object(a["createVNode"])("div",{class:fe()},[Object(a["createVNode"])(re,null,{default:function(){return[o.value.map((function(e){return Object(a["createVNode"])(de,{key:e.name,onClick:l,onClose:d,onCloseAll:b,onCloseOther:f,tag:e},null)}))]}})])}}}),je=(n("4d2e"),"sx-layout"),me=Object(h["a"])(je),ve=Object(a["defineComponent"])({name:je,setup:function(){var e=Object(a["ref"])(!1);return function(){return Object(a["createVNode"])(l.a,{class:me()},{default:function(){return[Object(a["createVNode"])(l.a.Sider,{class:me("sider"),collapsible:!0,collapsed:e.value,"onUpdate:collapsed":function(t){return e.value=t}},{default:function(){return[Object(a["createVNode"])(k,null,null),Object(a["createVNode"])(g,null,null)]}}),Object(a["createVNode"])(l.a,null,{default:function(){return[Object(a["createVNode"])(l.a.Header,{class:me("header")},{default:function(){return[Object(a["createVNode"])(q,null,null),Object(a["createVNode"])(be,null,null)]}}),Object(a["createVNode"])(l.a.Content,{class:me("content")},{default:function(){return[Object(a["createVNode"])(Object(a["resolveComponent"])("router-view"),null,{default:function(e){var t=e.Component;return Object(a["createVNode"])(a["KeepAlive"],null,{default:function(){return[Object(a["createVNode"])(t,null,null)]}})}})]}})]}})]}})}}}),pe="home",he=[{name:pe,path:"/",component:ve,redirect:"/index",children:[{name:"home/index",path:"index",component:function(){return n.e("chunk-8915f0cc").then(n.bind(null,"1429"))},meta:{title:"首页",icon:"icon-yongyao",tagFixed:!0}}]},{path:"/testPage",component:ve,redirect:"/testPage/index",name:"testPage",children:[{name:"testPage/index",path:"index",component:function(){return n.e("chunk-2da5bbb2").then(n.bind(null,"a442"))},meta:{title:"页面一",icon:"icon-xihuan"}}]},{path:"/error",component:ve,name:"errorPage",redirect:"/error/404",children:[{path:"404",component:function(){return n.e("chunk-dafd9c64").then(n.bind(null,"2075"))},name:"errorPage/404",meta:{title:"404",hidden:!0,noRedirect:!0}}]},{name:"error",path:"/:catchAll(.*)",redirect:"/error/404",meta:{hidden:!0}}],Oe=he,Ve=Object(s["a"])({history:Object(s["b"])(),routes:Oe}),ge=Ve,ye=n("5c8a"),we="ADD_VISITED_VIEW",ke="DEL_VISITED_VIEW",Ne="DEL_ALL_VISITED_VIEW",xe="DEL_OTHER_VISITED_VIEW",Ce="SWITCH_VISITED_VIEW",Ie=(c={},Object(i["a"])(c,we,(function(e,t){var n=t.view;e.visitedViews.find((function(e){return e.name===n.name}))||e.visitedViews.push(n)})),Object(i["a"])(c,ke,(function(e,t){var n=t.view,c=e.visitedViews.findIndex((function(e){return e.name===n.name}));if(-1!==c&&!n.meta.tagFixed&&(e.visitedViews.splice(c,1),ge.currentRoute.value.name===n.name)){var a=e.visitedViews.length-1,r=c>a?c-1:c;ge.push(e.visitedViews[r])}})),Object(i["a"])(c,Ne,(function(e){var t=e.visitedViews.filter((function(e){return e.meta.tagFixed}));e.visitedViews=t,ge.push(e.visitedViews[0])})),Object(i["a"])(c,xe,(function(e,t){var n=t.currentView,c=e.visitedViews.filter((function(e){return e.meta.tagFixed||e.name===n.name}));e.visitedViews=c})),Object(i["a"])(c,Ce,(function(e,t){var n=t.oldIndex,c=t.newIndex;if("undefined"!==typeof n&&"undefined"!==typeof c){var a=Object(ye["default"])(e.visitedViews),r=[a[n],a[c]];a[c]=r[0],a[n]=r[1],e.visitedViews=a}})),c),_e=Ie,Ae={addView:function(e,t){var n=e.commit,c=t.view;n(we,{view:c})},delView:function(e,t){var n=e.commit,c=t.view;n(ke,{view:c})},delAllView:function(e){var t=e.commit;t(Ne)},delOtherView:function(e,t){var n=e.commit,c=t.currentView;n(xe,{currentView:c})},switchView:function(e,t){var n=e.commit,c=t.oldIndex,a=t.newIndex;n(Ce,{oldIndex:c,newIndex:a})}},Ee=Ae,ze={visitedViews:[]},Te={namespaced:!0,state:ze,mutations:_e,actions:Ee},Se=n("2909"),Pe="ADD_ROUTES",De=Object(i["a"])({},Pe,(function(e,t){e.routes=[].concat(Object(Se["a"])(Oe),Object(Se["a"])(t.asyncRoutes))})),Fe=De,Re={addRoutes:function(e,t){var n=e.commit;n(Pe,{asyncRoutes:t.asyncRoutes})}},Le=Re,We={routes:[]},qe={namespaced:!0,state:We,mutations:Fe,actions:Le},Me=Object(r["a"])({getters:u,modules:{tagsView:Te,permission:qe}}),Ue=Me;function Be(e,t,n,c,r,o){var u=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(u)}var Ke=Object(a["defineComponent"])({name:"App"});Ke.render=Be;var He=Ke,Je="permission/addRoutes",Xe=function(e){return{type:Je,asyncRoutes:e}},Ye=function(){Ue.dispatch(Xe([]))},Ze=n("82ec"),Ge=(n("1e09"),Object(a["createApp"])(He));Ge.use(Ue),Ge.use(ge),Ye(),Ge.component("sx-icon",Object(Ze["a"])({scriptUrl:"//at.alicdn.com/t/font_1948824_n8uww7gc6g.js"})),Ge.mount("#app")},f239:function(e,t,n){}});
//# sourceMappingURL=app.fab45d8b.js.map