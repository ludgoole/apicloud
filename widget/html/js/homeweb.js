(function(e){function t(t){for(var r,a,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={homeweb:0},o={homeweb:0},u=[];function i(e){return s.p+"js/"+({"mine~question":"mine~question",mine:"mine","query~question":"query~question",question:"question",query:"query",star:"star"}[e]||e)+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={mine:1,"query~question":1,question:1,query:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"mine~question":"mine~question",mine:"mine","query~question":"query~question",question:"question",query:"query",star:"star"}[e]||e)+".css",o=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;u.push([4,"chunk-vendors"]),n()})({"0252":function(e,t,n){var r={"./axios.js":"1c97","./bus.js":"9d84","./element.js":"b97c","./scroll.js":"e67a","./scrollbar.js":"b6f5","./vant.js":"ecb7"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="0252"},1307:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),a=n("365c");t["default"]={state:{menu:""},getters:{},mutations:{SET_MENU:function(e,t){e.menu=t}},actions:{getMenu:function(e){var t=arguments;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=t.length>1&&void 0!==t[1]?t[1]:{},n.next=4,Object(a["a"])(o);case 4:return u=n.sent,r("SET_MENU",u),n.abrupt("return",u);case 7:case"end":return n.stop()}}),n)})))()}}}},"1c97":function(e,t,n){"use strict";n.r(t);var r=n("8daa");function a(e){e.prototype.$axios=r["a"]}t["default"]={installPlugin:a}},"365c":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n("8daa"),a="/memory";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["b"])("".concat(a,"/login"),e)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["b"])("".concat(a,"/getMenu"),e)}},4:function(e,t,n){e.exports=n("848b")},4260:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("4160"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("159b"),n("ddb0"),n("2b3d");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};return e.keys().forEach((function(r){var a=r.replace(/^[^/]+\/([\w-]+)\.(js|vue)$/,"$1");n[a]=Object.assign({},t,e(r).default)})),n}},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=n("bfa9"),u=n("4260");r["default"].use(a["a"]);var i=Object(u["a"])(n("d307"),{namespaced:!0}),s=new o["a"]({key:"Vuex-Persistence",storage:window.sessionStorage,modules:["menu"],reducer:function(e){return console.log("VuexPersistence:state",e),{token:e.token,auth:e.auth,menu:e.menu}},filter:function(e){return console.log("VuexPersistence:mutation",e),"setToken"===e.type}});t["a"]=new a["a"].Store({state:{token:"",auth:!1},mutations:{setToken:function(e,t){e.token=t},setAuth:function(e,t){e.auth=t}},actions:{},plugins:[s.plugin],modules:i})},"44fd":function(e,t,n){},6912:function(e,t,n){"use strict";n("3cc5"),n("44fd"),n("4160"),n("07ac"),n("159b");var r=n("4260"),a=Object(r["a"])(n("0252"));function o(e){Object.values(a).forEach((function(t){t.installPlugin(e)}))}t["a"]={install:function(e){o(e)}}},"848b":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"web"},[e._v("webindex")])},o=[],u=(n("b0c0"),{name:"web",statusBar:"transparent",onReady:function(){var e=this.$page.pageParam(),t=e.url,n=e.name;this.$frame.open({url:t,name:n,rect:{x:0,y:this.$getSafeArea().top,w:"auto",h:"auto"}})}}),i=u,s=n("2877"),c=Object(s["a"])(i,a,o,!1,null,null,null),l=c.exports,f=n("a18c"),d=n("4360"),p=n("6912"),m=n("f59d"),h=n.n(m),b=n("afa0");r["default"].config.productionTip=!1,r["default"].use(p["a"]),r["default"].use(h.a,{pages:b}),new r["default"]({router:f["a"],store:d["a"],render:function(e){return e(l)}}).$mount("#app"),window.Vue=r["default"],console.log("Vue",[r["default"]]),console.log("Vue.util",r["default"].util)},"8daa":function(e,t,n){"use strict";n.d(t,"b",(function(){return v}));n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("4328"),u=n.n(o),i=(n("a15b"),Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?["production",Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG].join(":"):"production"),s={development:"","development:mock":"https://www.fastmock.site/mock/f59dafeec5617867a33cfe76324c906f/",production:"http://192.168.0.106/","production:test":"http://localhost:3000/"},c={baseURL:s[i],timeout:5e3,withCredentials:!0},l=(n("4ec9"),n("3ca3"),n("ddb0"),n("d4ec")),f=n("bee2"),d=function(){function e(){Object(l["a"])(this,e),this.cancelMap=new Map}return Object(f["a"])(e,[{key:"getKey",value:function(e,t){return e+JSON.stringify(t)}},{key:"get",value:function(e){var t=e.url,n=e.params,r=this.getKey(t,n);return this.cancelMap.get(r)}},{key:"set",value:function(e,t){var n=e.url,r=e.params,a=this.getKey(n,r);return!this.has(n)&&this.cancelMap.set(a,t)}},{key:"has",value:function(e){var t=e.url,n=e.params,r=this.getKey(t,n);return this.cancelMap.has(r)}},{key:"delete",value:function(e){var t=e.url,n=e.params,r=this.getKey(t,n);return this.has({url:t,params:n})&&this.cancelMap.delete(r)}},{key:"cancel",value:function(e){var t=e.url,n=e.params,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"取消请求";this.has({url:t,params:n})&&this.get({url:t,params:n})({url:t,params:n,msg:r}),this.delete({url:t,params:n})}}]),e}(),p=new d,m=n("4360"),h=a.a.create(c),b=a.a.CancelToken;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h({method:"get",url:e,params:t})}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h({method:"post",url:e,data:t,transformRequest:[function(e){return u.a.stringify(e)}],headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h({method:"post",url:e,data:t,transformRequest:[function(e){return JSON.stringify(e)}],headers:{"Content-Type":"application/json;charset=UTF-8"}})}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h({method:"post",url:e,data:t,transformRequest:[function(e){return e}],headers:{"Content-Type":"multipart/form-data"}})}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h({method:"post",url:e,data:t,responseType:"blob"})}h.interceptors.request.use((function(e){return p.cancel(e),e.cancelToken=new b((function(t){p.set(e,t)})),e.headers.Authorization=m["a"].state.login.token,e}),(function(e){return Promise.reject(e)})),h.interceptors.response.use((function(e){p.delete(e.config);var t={};switch(e.status){case 200:"000000"===e.data.errCode?t=e.data instanceof Blob?e.data:e.data.data:(t=e.data,!t.errCode&&(t.errCode="xxxxxx"),!t.errMsg&&(t.errMsg="系统错误"));break;case 301:t.errMsg="永久性重定向";break;case 302:t.errMsg="临时性重定向";break;case 304:t.errMsg="服务器资源未改变";break;case 400:t.errMsg="请求头错误";break;case 403:t.errMsg="禁止访问";break;case 404:t.errMsg="访问的页面不存在";break;case 405:t.errMsg="请求类型或参数错误";break;case 502:t.errMsg="无效网关";break;case 503:t.errMsg="服务器暂时性错误";break}return Promise.resolve(t)}),(function(e){return p.delete(e.message),a.a.isCancel(e)?Promise.resolve(e.message.msg):Promise.reject(e)}));t["a"]={get:g,post:v,postStr:y,upload:w,download:q}},"9d84":function(e,t,n){"use strict";n.r(t);var r=n("2b0e");function a(e){e.prototype.$bus=new r["default"]}t["default"]={installPlugin:a}},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),a=n("8c4f");r["default"].use(a["a"]);var o=[{path:"/",redirect:"/question"},{path:"/question",name:"Question",meta:{title:"卜卦",leftText:"",rightText:""},component:function(){return Promise.all([n.e("mine~question"),n.e("query~question"),n.e("question")]).then(n.bind(null,"e254"))}},{path:"/answer",name:"Answer",component:function(){return Promise.all([n.e("mine~question"),n.e("query~question"),n.e("question")]).then(n.bind(null,"ef87"))}},{path:"/query",name:"Query",meta:{title:"查卦",leftText:"",rightText:""},component:function(){return Promise.all([n.e("query~question"),n.e("query")]).then(n.bind(null,"a962"))}},{path:"/guaXiang",name:"GuaXiang",meta:{title:"",leftText:"",rightText:""},component:function(){return Promise.all([n.e("query~question"),n.e("query")]).then(n.bind(null,"7082"))}},{path:"/star",name:"Star",meta:{title:"名卦",leftText:"",rightText:""},component:function(){return n.e("star").then(n.bind(null,"ef5a"))}},{path:"/mine",name:"Mine",meta:{title:"我的",leftText:"",rightText:"清除"},component:function(){return Promise.all([n.e("mine~question"),n.e("mine")]).then(n.bind(null,"0a4e"))}}],u=new a["a"]({routes:o});t["a"]=u},afa0:function(e){e.exports=JSON.parse('[{"title":"开屏广告页","name":"index","path":"index/index"},{"title":"登录页","name":"login","path":"login/index"},{"title":"应用首页","name":"home","path":"home/index"},{"title":"web页面","name":"web","path":"home/web"}]')},b5ce:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),a=n("365c");t["default"]={state:{token:""},getters:{},mutations:{SET_TOKEN:function(e,t){e.token=t}},actions:{login:function(e){var t=arguments;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=t.length>1&&void 0!==t[1]?t[1]:{},n.next=4,Object(a["b"])(o);case 4:return u=n.sent,r("SET_TOKEN",u.token),n.abrupt("return",u);case 7:case"end":return n.stop()}}),n)})))()}}}},b6f5:function(e,t,n){"use strict";n.r(t);var r=n("5744");function a(e){e.prototype.$Scrollbar=r["a"]}t["default"]={installPlugin:a}},b97c:function(e,t,n){"use strict";n.r(t);var r=n("5c96"),a=n.n(r);n("0fae");function o(e){e.use(a.a)}t["default"]={installPlugin:o}},d307:function(e,t,n){var r={"./login.js":"b5ce","./menu.js":"1307"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="d307"},e67a:function(e,t,n){"use strict";n.r(t);var r=n("b9dd");function a(e){e.use(r["a"],{throttle:600})}t["default"]={installPlugin:a}},ecb7:function(e,t,n){"use strict";n.r(t);n("4160"),n("159b"),n("e7e5");var r=n("d399"),a=(n("4467"),n("c36e")),o=(n("5852"),n("d961")),u=(n("0653"),n("34e9")),i=(n("c194"),n("7744")),s=(n("bda7"),n("5e46")),c=(n("da3c"),n("0b33")),l=(n("342a"),n("1437")),f=(n("5d17"),n("f9bd")),d=(n("be7f"),n("565f")),p=(n("38d5"),n("772a")),m=(n("0ec5"),n("21ab")),h=(n("3df5"),n("2830")),b=(n("5246"),n("6b41")),g=(n("c3a6"),n("ad06")),v=(n("66b9"),n("b650")),y=[v["a"],g["a"],b["a"],h["a"],m["a"],p["a"],d["a"],f["a"],l["a"],c["a"],s["a"],i["a"],u["a"],o["a"],a["a"]];function w(e){y.forEach((function(t){return e.use(t)})),e.prototype.$toast=r["a"]}t["default"]={installPlugin:w}}});