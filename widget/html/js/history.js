(window.webpackJsonp=window.webpackJsonp||[]).push([["history"],{"0d08":function(e,t,n){"use strict";n.r(t),t.default=[{time:"",name:"神话",children:[{time:"",name:"盘古"},{time:"",name:"女娲"},{time:"",name:"羲和"},{time:"",name:"夸父"},{time:"",name:"刑天"},{time:"",name:"东王公"},{time:"",name:"祝融"},{time:"",name:"西王母"},{time:"",name:"共工"},{time:"",name:"精卫"},{time:"",name:"华旭"},{time:"",name:"伏羲"}]},{time:"",name:"三皇",children:[{time:"",name:"有巢氏"},{time:"",name:"燧人氏"},{time:"",name:"伏羲氏"},{time:"",name:"女娲氏"},{time:"",name:"神农氏"}]},{time:"",name:"五帝",children:[{time:"",name:"黄帝"},{time:"",name:"颛顼"},{time:"",name:"帝喾"},{time:"",name:"尧"},{time:"",name:"瞬"},{time:"",name:"禹"}]},{id:"01",time:"-2027",name:"夏"},{id:"02",time:"-1600",name:"商"},{id:"03",time:"-1046",name:"周",children:[{time:"1046",name:"西周"},{time:"-770",name:"东周",children:[{time:"-770",name:"春秋",children:[{time:"-770",name:"春秋五霸",children:[{time:"-743",name:"郑庄公"},{time:"-685",name:"齐桓公"},{time:"-659",name:"秦穆公"},{time:"-650",name:"宋襄公"},{time:"-636",name:"晋文公"},{time:"-613",name:"楚庄王"},{time:"-514",name:"吴王阖闾"},{time:"-496",name:"越王勾践"}]}]},{time:"-475",name:"战国",children:[{time:"-475",name:"战国七雄",children:[{time:"",name:"秦"},{time:"",name:"燕"},{time:"",name:"韩"},{time:"",name:"赵"},{time:"",name:"魏"},{time:"",name:"楚"},{time:"",name:"齐"}]}]}]}]},{id:"04",time:"-221",name:"秦",diwang:!0},{id:"05",time:"-206",name:"汉",children:[{id:"0501",time:"-202",name:"西汉",diwang:!0},{id:"0502",time:"8",name:"新莽"},{id:"0503",time:"25",name:"东汉",diwang:!0}]},{id:"06",time:"220",name:"三国"},{id:"07",time:"265",name:"晋",diwang:!0,children:[{id:"0701",time:"265",name:"西晋"},{id:"0702",time:"317",name:"东晋",children:[{time:"317",name:"五胡",children:[{time:"",name:"匈奴"},{time:"",name:"鲜卑"},{time:"",name:"羯"},{time:"",name:"氐"},{time:"",name:"羌"}]},{time:"317",name:"十六国",children:[{time:"317",name:"五胡乱炖",children:[{time:"",name:"前凉"},{time:"",name:"成汉"},{time:"",name:"前赵"},{time:"",name:"后赵"},{time:"",name:"前燕"}]},{time:"351",name:"前秦"},{time:"394",name:"五胡乱炖",children:[{time:"",name:"后燕"},{time:"",name:"后秦"},{time:"",name:"西秦"},{time:"",name:"后凉"},{time:"",name:"南凉"},{time:"",name:"西凉"},{time:"",name:"北凉"},{time:"",name:"南燕"},{time:"",name:"北燕"},{time:"",name:"胡夏"}]},{time:"396",name:"北魏"}]}]}]},{id:"08",time:"420",name:"南北朝",children:[{time:"420",name:"南朝",children:[{time:"420",name:"刘宋"},{time:"479",name:"萧齐"},{time:"502",name:"萧梁"},{time:"557",name:"南陈"}]},{time:"420",name:"北朝",children:[{time:"420",name:"北魏",children:[{time:"534",name:"西魏",children:[{time:"550",name:"北周"}]},{time:"534",name:"东魏",children:[{time:"550",name:"北齐"}]}]}]}]},{id:"09",time:"581",name:"隋"},{id:"10",time:"618",name:"唐",diwang:!0},{id:"11",time:"907",name:"五代十国",diwang:!0,children:[{time:"550",name:"五代",children:[{time:"907",name:"后梁"},{time:"923",name:"后唐"},{time:"936",name:"后晋"},{time:"947",name:"后汉"},{time:"951",name:"后周"}]},{time:"550",name:"十国",children:[{time:"",name:"前蜀"},{time:"",name:"后蜀"},{time:"",name:"吴"},{time:"",name:"南唐"},{time:"",name:"吴越"},{time:"",name:"闽"},{time:"",name:"楚"},{time:"",name:"南汉"},{time:"",name:"南平"},{time:"",name:"北汉"}]}]},{id:"12",time:"960",name:"宋",diwang:!0,children:[{time:"960",name:"北宋",children:[{time:"916",name:"辽"},{time:"1038",name:"西夏"}]},{time:"1127",name:"南宋",children:[{time:"1038",name:"西夏"},{time:"1115",name:"金"}]}]},{id:"13",time:"1271",name:"元"},{id:"14",time:"1368",name:"明",diwang:!0},{id:"15",time:"1644",name:"清",diwang:!0},{id:"16",time:"1912",name:"民国"},{id:"17",time:"1949",name:"中国"}]},"0fe6":function(e,t,n){"use strict";n.r(t);var a=n("2669"),i=n("b49e");n("9a2f");var r=n("291b");n("e186"),n("8300"),n("ea5b"),n("e551"),n("654b"),n("fc36");var o=Object(a.b)({name:"Map",setup:function(){t=Object(a.e)({center:"郑州",zoom:7});var e,t=Object(i.a)(Object(i.a)({},Object(a.f)(t)),{},{readyHandler:function(e){e.BMap,e.map},clickHandler:function(e){}}),o=t.center,c=t.zoom,s=t.readyHandler,u=(t=t.clickHandler,e=Object(a.e)({start:"",end:"",startCity:"",endCity:"",waypoints:[],markers:[]}),Object(a.d)(Object(r.a)(regeneratorRuntime.mark((function t(){var i,r,o,c,s,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object(a.c)(),o=o.proxy,o=o.$route.query,i=o.chao,i=void 0===i?"0501":i,r=o.emperor,r=void 0===r?"0501-01":r,o=o.minister,o=void 0===o?"0501-01-lb":o,t.next=4,n("f2f9")("./".concat(i,"/").concat(r,"/").concat(o,"-map"));case 4:i=t.sent,r=i.default,o=r[0].newCity,c=r.slice(-1)[0].newCity,s=r.slice(1,-1).map((function(e){return e.newCity})),u=r.slice(0,o===c?-1:void 0).map((function(e){var t=e.position,n=e.oldCity;e=e.offset;return{position:t,content:n,offset:void 0===e?{width:0,height:20}:e}})),e.start=o,e.end=c,e.startCity=o,e.endCity=c,e.waypoints=s,e.markers=u;case 16:case"end":return t.stop()}}),t)})))),Object(i.a)({},Object(a.f)(e)));return{center:o,zoom:c,readyHandler:s,clickHandler:t,start:u.start,end:u.end,startCity:u.startCity,endCity:u.endCity,waypoints:u.waypoints,markers:u.markers}}}),c=n("cba8");c=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Map flex flex-column overflow-hidden"},[n("van-nav-bar",{attrs:{title:"足迹","left-arrow":""},on:{"click-left":function(t){return e.$router.go(-1)}}}),n("baidu-map",{staticClass:"flex-1",attrs:{center:e.center,zoom:e.zoom},on:{ready:e.readyHandler,click:e.clickHandler}},[n("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),e._l(e.markers,(function(e,t){var a=e.position,i=e.content;e=e.offset;return n("bm-marker",{key:t,attrs:{position:a}},[n("bm-label",{attrs:{content:i,offset:e}})],1)})),e.start?n("bm-driving",{attrs:{start:e.start,end:e.end,startCity:e.startCity,endCity:e.endCity,"auto-viewport":!0,panel:!1,waypoints:e.waypoints}}):e._e()],2)],1)}),[],!1,null,null,null);t.default=c.exports},1361:function(e,t,n){"use strict";const a="clientX",i="clientY",r=16,o="start",c="move",s="cancel",u="end",d={4:"start",5:"move",1:"end",3:"cancel"};function m(e){return d[e]}function l(e,t,n){return e={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(e)][t],void 0!==e&&e[n]||0}function h(e){[1,3,2].includes(e.state)&&(e.state=0)}function p(e){return[5,1,3].includes(e)}function f(e){return e.disabled&&(e.state=0,1)}function b(e,t){return Object.assign(Object.assign(Object.assign({},e),t),{state:0,disabled:!1})}function v(e){return Math.round(100*e)/100}function g(){let e,t,n,a,i=0;return function(r){var c,d;if(e=t,void 0!==r)return r=function(e,t){const{phase:n,points:a,changedPoints:i,nativeEvent:r}=e,c=a.length,d=o===n,m=u===n&&0===c||s===n,l=Date.now(),{x:h,y:p}=k(a)||k(i),f=r["currentTarget"];return Object.assign(e,{id:t,x:h,y:p,timestamp:l,isStart:d,isEnd:m,pointLength:c,currentTarget:f,getOffset(e=f){return e=e.getBoundingClientRect(),{x:h-Math.round(e.left),y:p-Math.round(e.top)}}})}(r,i=Number.MAX_SAFE_INTEGER>i?++i:1),({isStart:c,pointLength:d}=t=r),c&&(n=r,e=void 0,a=1<d?r:void 0),Object.assign(Object.assign({},r),{prevInput:e,startMultiInput:a,startInput:n})}}function k(e){const t=e["length"];if(0<t){if(1===t){const{clientX:t,clientY:n}=e[0];return{x:Math.round(t),y:Math.round(n)}}return e=e.reduce((e,t)=>(e.x+=t[a],e.y+=t[i],e),{x:0,y:0}),{x:Math.round(e.x/t),y:Math.round(e.y/t)}}}function y(e,t,n,a){const i={};for(const o in n)["target","currentTarget","type"].includes(o)||(i[o]=n[o]);let r;document.createEvent?(r=document.createEvent("HTMLEvents")).initEvent(e,null==a?void 0:a.bubbles,null==a?void 0:a.cancelable):r=new Event(e,a),Object.assign(r,i,{match:()=>n.targets&&0<n.targets.length&&n.targets.every(e=>r.currentTarget.contains(e))}),t.dispatchEvent(r)}const x=["touchstart","touchmove","touchend","touchcancel","mousedown"],_=["mousemove","mouseup"],w={domEvents:{bubbles:!0,cancelable:!0},preventDefault:e=>!(!e.target||!("tagName"in e.target))&&(e=e.target["tagName"],!/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(e))};class j extends class{constructor(){this.__map={}}beforeEach(e){this.__interceptor=e}on(e,t){const n=Array.isArray(e)?e:[e];for(const a of n){this.__map[a]=this.__map[a]||[];const e=this.__map[a];e&&e.push(t)}return this}emit(e,t,n){void 0!==this.__interceptor?this.__interceptor(e,()=>{this.__emit(e,t),n&&n()}):(this.__emit(e,t),n&&n())}__emit(e,t){var n=this.__map[e];if(Array.isArray(n)&&null!=n&&n.length)for(const a of n)a(t,e);this.event=t}off(e,t){const n=this.__map[e];if(void 0!==n)if(void 0===t)delete this.__map[e];else{const e=n.findIndex(e=>e===t);n.splice(e,1)}}destroy(){this.__map={}}}{constructor(e,t){super(),this.v="2.1.1",this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.el=e,this.c={},this.__options=Object.assign(Object.assign({},w),t);t=function(e){const t=g();return function(n){const a=[],i=[];Array.from(n.touches).forEach(({clientX:t,clientY:n,target:r})=>{null!=e&&e.contains(r)&&(a.push(r),i.push({clientX:t,clientY:n,target:r}))});var r=Array.from(n.changedTouches).map(({clientX:e,clientY:t,target:n})=>({clientX:e,clientY:t,target:n}));return t({phase:n.type.replace("touch",""),changedPoints:r,points:i,nativeEvent:n,target:n.target,targets:a})}}(this.el);var n,a,i,r=function(){let e,t=!1,n=null;const a=g();return function(i){var{clientX:r,clientY:o,type:c,button:s,target:u}=i;let d,m=[{clientX:r,clientY:o,target:u}];if("mousedown"===c&&0===s)n=u,t=!0,d="start";else{if(!t)return;"mousemove"===c?d="move":"mouseup"===c&&(m=[],d="end",t=!1)}if(s=e||[{clientX:r,clientY:o,target:u}],e=[{clientX:r,clientY:o,target:u}],void 0!==d)return a({phase:d,changedPoints:s,points:m,target:n,targets:[n],nativeEvent:i})}}();if(this.__inputCreatorMap={touchstart:t,touchmove:t,touchend:t,touchcancel:t,mousedown:r,mousemove:r,mouseup:r},this.on("at:after",e=>{var{target:t,__type:n}=e,a=this.__options["domEvents"];a&&void 0!==this.el&&t&&(y(n,t,e,a),y("at:after",t,e,a))}),void 0!==e){let t=!(e.style.webkitTapHighlightColor="rgba(0,0,0,0)");try{const e={};Object.defineProperty(e,"passive",{get(){t=!0}}),window.addEventListener("_",()=>{},e)}catch(e){}this.on("u",(n=e,a=this.catchEvent.bind(this),i=!1===this.__options.preventDefault&&t?{passive:!0}:{passive:!1},x.forEach(e=>{n.addEventListener(e,a,i)}),_.forEach(e=>{window.addEventListener(e,a,i)}),()=>{x.forEach(e=>{n.removeEventListener(e,a)}),_.forEach(e=>{window.removeEventListener(e,a)})}))}}use(e,t){this.__pluginContexts.push(e(this,t))}catchEvent(e){const t=this.__inputCreatorMap[e.type](e);if(void 0!==t){var n=()=>e.preventDefault();!function(e,t){const n=t["preventDefault"];return t=n,"[object Function]"===Object.prototype.toString.call(t)?n(e):n}(e,this.__options)||n(),this.emit("input",t),this.emit2("at:"+t.phase,t,{});const a={};this.__computeFunctionList.forEach(e=>{var n=e(t,a);if(void 0!==n)for(const t in n)a[t]=n[t]}),this.emit("computed",Object.assign(Object.assign(Object.assign({},t),a),{stopPropagation:()=>e.stopPropagation(),stopImmediatePropagation:()=>e.stopImmediatePropagation(),preventDefault:n}))}}compute(e,t){for(const n of e)this.__computeFunctionCreatorList.includes(n)||(this.__computeFunctionCreatorList.push(n),this.__computeFunctionList.push(n()));this.on("computed",t)}beforeEach(e){super.beforeEach((t,n)=>{var a;null!=(a=this.c)&&a.name?e(t,n):n()})}get(e){return this.__pluginContexts.find(t=>e===t.name)}set(e){this.__options=Object.assign(Object.assign({},this.__options),e)}emit2(e,t,n){this.c=n,this.emit(e,Object.assign(Object.assign({},t),{type:e}),()=>{this.emit("at:after",Object.assign(Object.assign({},t),{name:e,__type:e}))})}destroy(){this.emit("u"),super.destroy()}}var O=e=>Math.sqrt(e.x*e.x+e.y*e.y),L=e=>e/Math.PI*180,E=(e,t)=>{var n=((e,t)=>{var n=O(e)*O(t);return 0==n?0:(e=(e.x*t.x+e.y*t.y)/n,1<e&&(e=1),Math.acos(e))})(e,t);return 0<e.x*t.y-t.x*e.y&&(n*=-1),L(n)},C=(e,t)=>{if(0!==e||0!==t)return Math.abs(e)>=Math.abs(t)?0<e?"right":"left":0<t?"down":"up"};function M(){let e=0,t=0;return function(n,a){var{prevVecotr:a,startVecotr:i,activeVecotr:r}=a;return r&&(t=Math.round(E(r,a)),e=Math.round(E(r,i))),{angle:e,deltaAngle:t}}}function T(){return function(e){var t=e["prevInput"];let n=0,a=0,i=0;if(void 0!==t&&(n=e.x-t.x,a=e.y-t.y,0!==n||0!==a)){const e=Math.sqrt(Math.pow(n,2)+Math.pow(a,2));i=Math.round(L(Math.acos(Math.abs(n)/e)))}return{deltaX:n,deltaY:a,deltaXYAngle:i}}}function N(){let e,t=0,n=0,r=0,s=0,u=0;return function(d){var{phase:m,startInput:l}=d;return o===m?(t=0,n=0,r=0,s=0,u=0):c===m&&(t=Math.round(d.points[0][a]-l.points[0][a]),n=Math.round(d.points[0][i]-l.points[0][i]),r=Math.abs(t),s=Math.abs(n),u=Math.round(O({x:r,y:s})),e=C(t,n)),{displacementX:t,displacementY:n,distanceX:r,distanceY:s,distance:u,overallDirection:e}}}function S(){let e=1;return function(t,n){let a=1;var{prevVecotr:n,startVecotr:i,activeVecotr:r}=n;return r&&(a=v(O(r)/O(n)),e=v(O(r)/O(i))),{scale:e,deltaScale:a}}}function P(){let e,t,n=0,a=0,i=0,o=0;return function(c){var s,u,d;return void 0!==c&&(t=t||c.startInput,s=c.timestamp-t.timestamp,r<s&&(u=c.x-t.x,d=c.y-t.y,i=Math.round(u/s*100)/100,o=Math.round(d/s*100)/100,n=Math.abs(i),a=Math.abs(o),e=C(u,d),t=c)),{velocityX:n,velocityY:a,speedX:i,speedY:o,direction:e}}}function $(){let e=0;return function(t){var n=t["phase"];return{maxPointLength:e=o===n?t.pointLength:e}}}function I(e){return{x:e.points[1][a]-e.points[0][a],y:e.points[1][i]-e.points[0][i]}}function D(){let e,t,n;return function(a){var{prevInput:i,startMultiInput:r}=a;return n=void 0!==r&&void 0!==i&&a.id!==r.id&&1<i.pointLength&&1<a.pointLength?(e=I(r),t=I(i),I(a)):void 0,{startVecotr:e,prevVecotr:t,activeVecotr:n}}}const R={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function A(e,t){const n=b(R,t);let a,i,r,o=0;function c(){o=0,a=void 0,i=void 0}return e.compute([N,$],t=>{var s,d,m;f(n)||(({phase:s,x:d,y:m}=t),u===s&&(n.state=0,function(){var{startInput:e,pointLength:a,timestamp:i}=t,i=i-e.timestamp,{distance:e,maxPointLength:r}=t;return r===n.pointLength&&0===a&&n.maxDistance>=e&&n.maxPressTime>i}()?(clearTimeout(r),s={x:d,y:m},d=n,(void 0!==a?(m=O({x:s.x-a.x,y:s.y-a.y}),a=s,d.maxDistanceFromPrevTap>=m):(a=s,1))&&function(e){var t=performance.now();if(void 0===i)return i=t,1;var n=t-i;return i=t,n<e}(n.waitNextTapTime)?o++:o=1,0==o%n.tapTimes?(n.state=1,e.emit2(n.name,t,n),c()):r=setTimeout(()=>{n.state=2,c()},n.waitNextTapTime)):(c(),n.state=2)))}),n}const X={name:"pan",threshold:10,pointLength:1};function H(e,t){const n=b(X,t);return e.compute([P,N,T],t=>{var a;h(n),f(n)||(a=function(){var{pointLength:e,distance:a}=t;return n.pointLength===e&&n.threshold<=a}(),n.state=l(a,n.state,t.phase),(a||p(n.state))&&(a=n["name"],e.emit2(a,t,n),e.emit2(a+m(n.state),t,n),![u,s].includes(t.phase)&&t.direction&&e.emit2(a+t.direction,t,n)))}),n}const Y={name:"swipe",threshold:10,velocity:.3,pointLength:1};function F(e,t){const n=b(Y,t);return e.compute([N,P,$],t=>{var a;n.state=0,!n.disabled&&function(){var e,a,i,r;if(u===t.phase)return({velocityX:e,velocityY:a,distance:i,maxPointLength:r}=t),r===n.pointLength&&0===t.points.length&&n.threshold<i&&n.velocity<Math.max(e,a)}()&&(a=n["name"],n.state=1,e.emit2(a,t,n),e.emit2(a+t.direction,t,n))}),n}const B={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function G(e,t){const n=b(B,t);let a=0;return e.compute([N],t=>{var i,r,c;f(n)||(({phase:i,startInput:c,pointLength:r}=t),o===i&&n.pointLength===r?(h(n),clearTimeout(a),a=setTimeout(()=>{n.state=1,e.emit2(n.name,t,n)},n.minPressTime)):u===i&&1===n.state?e.emit2(n.name+"up",t,n):1!==n.state&&(r=t.timestamp-c.timestamp,(c=t.distance)&&n.maxDistance>c&&!(n.minPressTime>r&&[u,s].includes(i))||(clearTimeout(a),n.state=2)))}),n}const q={name:"pinch",threshold:0,pointLength:2};function z(e,t){const n=b(q,t);return e.compute([D,S],t=>{var a,i;h(n),f(n)||(i=function(){var{pointLength:e,scale:a}=t;return n.pointLength===e&&n.threshold<Math.abs(a-1)}(),a=(n.state=l(i,n.state,t.phase),n)["name"],(i||p(n.state))&&(e.emit2(a,t,n),i=t["deltaScale"],1!==i&&e.emit2(a+(1<i?"in":"out"),t,n)),(i=m(n.state))&&e.emit2(a+i,t,n))}),n}const V={name:"rotate",threshold:0,pointLength:2};function J(e,t){const n=b(V,t);return e.compute([D,M],t=>{var a,i;f(n)||(h(n),i=function(){var{pointLength:e,angle:a}=t;return n.pointLength===e&&n.threshold<Math.abs(a)}(),a=(n.state=l(i,n.state,t.phase),n)["name"],(i||p(n.state))&&e.emit2(a,t,n),(i=m(n.state))&&e.emit2(a+i,t,n))}),n}class U extends j{constructor(e,t){super(e,t),this.use(A),this.use(H),this.use(F),this.use(G),this.use(z),this.use(J)}}U.STATE_POSSIBLE=0,U.STATE_START=4,U.STATE_MOVE=5,U.STATE_END=1,U.STATE_CANCELLED=3,U.STATE_FAILED=2,U.STATE_RECOGNIZED=1,U.tap=A,U.pan=H,U.swipe=F,U.press=G,U.rotate=J,U.pinch=z,U.doubletap=function(e){e.use(A,{name:"doubletap",tapTimes:2});const t=e.get("doubletap");let n;return e.beforeEach((e,a)=>{"tap"===e?(clearTimeout(n),n=setTimeout(()=>{[0,2].includes(t.state)&&a()},300)):a()}),t},t.a={data:function(){return{start:!1,displacementX:0,displacementY:0}},computed:{canvas:function(){return this.$el.querySelector(".rel-map-canvas")}},mounted:function(){var e=new U(this.$el,{preventDefault:function(e){return!1}});this.$on("hook:destroyed",(function(){e.destroy()}))},methods:{onPan:function(e){var t=e.displacementX,n=e.displacementY,a=this.canvas;this.start||(this.displacementX=parseFloat(a.style.marginLeft),this.displacementY=parseFloat(a.style.marginTop),this.start=!0),a.style.marginLeft=this.displacementX+t+"px",a.style.marginTop=this.displacementY+n+"px","end"===e.phase&&(this.start=!1)}}}},2722:function(e,t,n){"use strict";n.r(t);var a=n("291b"),i=(n("e186"),n("7241"),n("8300"),n("ea5b"),n("e551"),n("9a2f"),n("2ce8"),n("792c"),n("fc36"),{layouts:[{label:"中心",layoutName:"tree",layoutClassName:"seeks-layout-center",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1,min_per_width:"120",min_per_height:"140"}],defaultLineMarker:{markerWidth:12,markerHeight:12,refX:6,refY:6,data:"M2,2 L10,6 L2,10 L6,6 L2,2"},defaultLineShape:4,defaultJunctionPoint:"tb",defaultNodeShape:1,defaultNodeBorderWidth:2,defaultNodeColor:"rgba(250, 212, 0, 0.5)",defaultNodeBorderColor:"#FAD400",defaultNodeFontColor:"rgba(0, 0, 0, 1)",defaultShowLineLabel:!0,allowShowMiniView:!1,isMoveByParentNode:!0,hideNodeContentByZoom:!0,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!1,allowShowMiniNameFilter:!1}),r={name:"Relation",mixins:[n("1361").a],data:function(){return{graphOptions:i}},computed:{chao:function(){return this.$route.query.chao},title:function(){return this.$route.query.name}},mounted:function(){this.showSeeksGraph()},methods:{showSeeksGraph:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("2736")("./".concat(t.chao));case 2:a=e.sent,a=a.default,a={rootId:a[0].id,nodes:a.map((function(e){return{id:e.id,text:e.text.replace(" ","<br>"),expandHolderPosition:e.isEnd?"hide":"bottom"}})),links:a.slice(1).map((function(e){return{from:e.ancestors||e.parentId,to:e.id,text:e.relation}}))},t.$refs.seeksRelationGraph.setJsonData(a,(function(e){}));case 6:case"end":return e.stop()}}),e)})))()},onNodeClick:function(e,t){var n=this.chao,a=e.id,i=e.text;this.$refs.seeksRelationGraph.focusNodeById(e.id),this.$router.push({path:"/history/minister",query:{chao:n,emperor:a,name:i.replace("<br>","")}})},onLineClick:function(e,t){},onNodeCollapse:function(e,t){this.$refs.seeksRelationGraph.focusNodeById(e.id)},onNodeExpand:function(e,t){this.$refs.seeksRelationGraph.refresh(),this.$refs.seeksRelationGraph.focusNodeById(e.id)}}},o=n("cba8");o=Object(o.a)(r,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{staticClass:"Emperor"},[t("van-nav-bar",{attrs:{title:e.title,"left-arrow":""},on:{"click-left":function(t){return e.$router.go(-1)}}}),t("div",{staticClass:"Emperor-graph h-88vh m-1",on:{pan:e.onPan}},[t("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:e.graphOptions,"on-node-click":e.onNodeClick,"on-line-click":e.onLineClick,"on-node-expand":e.onNodeExpand,"on-node-collapse":e.onNodeCollapse}})],1)],1)}),[],!1,null,null,null);t.default=o.exports},2736:function(e,t,n){var a={"./04":["84fd","chunk-2d0de5b0"],"./04/":["84fd","chunk-2d0de5b0"],"./04/04-38":["9492","chunk-2d0e546a"],"./04/04-38-02":["d51d","chunk-2d21e35a"],"./04/04-38-02.js":["d51d","chunk-2d21e35a"],"./04/04-38.js":["9492","chunk-2d0e546a"],"./04/index":["84fd","chunk-2d0de5b0"],"./04/index.js":["84fd","chunk-2d0de5b0"],"./0501":["da8c","chunk-2d22895e"],"./0501/":["da8c","chunk-2d22895e"],"./0501/0501-01":["29b1","chunk-2d0b3d8c"],"./0501/0501-01/":["29b1","chunk-2d0b3d8c"],"./0501/0501-01/0501-01-lb":["7de0","chunk-2d0e252e"],"./0501/0501-01/0501-01-lb-map":["9bd0","chunk-2d0f064b"],"./0501/0501-01/0501-01-lb-map.js":["9bd0","chunk-2d0f064b"],"./0501/0501-01/0501-01-lb.js":["7de0","chunk-2d0e252e"],"./0501/0501-01/index":["29b1","chunk-2d0b3d8c"],"./0501/0501-01/index.js":["29b1","chunk-2d0b3d8c"],"./0501/0501-07":["f000","chunk-2d22b900"],"./0501/0501-07/":["f000","chunk-2d22b900"],"./0501/0501-07/0501-07-lx":["ecf4","chunk-2d230aa2"],"./0501/0501-07/0501-07-lx-map":["1458","chunk-2d0ab0fc"],"./0501/0501-07/0501-07-lx-map.js":["1458","chunk-2d0ab0fc"],"./0501/0501-07/0501-07-lx.js":["ecf4","chunk-2d230aa2"],"./0501/0501-07/index":["f000","chunk-2d22b900"],"./0501/0501-07/index.js":["f000","chunk-2d22b900"],"./0501/index":["da8c","chunk-2d22895e"],"./0501/index.js":["da8c","chunk-2d22895e"],"./0501/sample":["f8f2","chunk-2d22dd94"],"./0501/sample.js":["f8f2","chunk-2d22dd94"],"./0503":["9e19","chunk-2d0f0b6a"],"./0503/":["9e19","chunk-2d0f0b6a"],"./0503/0503-01":["d622","chunk-2d21e708"],"./0503/0503-01-lb":["09b2","chunk-2d0a54cf"],"./0503/0503-01-lb.js":["09b2","chunk-2d0a54cf"],"./0503/0503-01.js":["d622","chunk-2d21e708"],"./0503/index":["9e19","chunk-2d0f0b6a"],"./0503/index.js":["9e19","chunk-2d0f0b6a"],"./07":["6604","chunk-2d0cfdba"],"./07/":["6604","chunk-2d0cfdba"],"./07/07-01":["f991","chunk-2d22dbe1"],"./07/07-01-smy":["8d86","chunk-2d0e9420"],"./07/07-01-smy.js":["8d86","chunk-2d0e9420"],"./07/07-01.js":["f991","chunk-2d22dbe1"],"./07/index":["6604","chunk-2d0cfdba"],"./07/index.js":["6604","chunk-2d0cfdba"],"./10":["0339","chunk-2d0a389f"],"./10/":["0339","chunk-2d0a389f"],"./10/10-02":["2d15","chunk-2d0bd90c"],"./10/10-02-lsm":["4b2b","chunk-2d0cba94"],"./10/10-02-lsm.js":["4b2b","chunk-2d0cba94"],"./10/10-02.js":["2d15","chunk-2d0bd90c"],"./10/index":["0339","chunk-2d0a389f"],"./10/index.js":["0339","chunk-2d0a389f"],"./11":["bfa7","chunk-2d21b830"],"./11/":["bfa7","chunk-2d21b830"],"./11/11-01":["0171","chunk-2d0a3191"],"./11/11-01-zw":["f86b","chunk-2d22d7f4"],"./11/11-01-zw.js":["f86b","chunk-2d22d7f4"],"./11/11-01.js":["0171","chunk-2d0a3191"],"./11/index":["bfa7","chunk-2d21b830"],"./11/index.js":["bfa7","chunk-2d21b830"],"./12":["e07c","chunk-2d2245ad"],"./12/":["e07c","chunk-2d2245ad"],"./12/12-01":["3a20","chunk-2d0c4242"],"./12/12-01-zky":["da3e","chunk-2d2288c5"],"./12/12-01-zky.js":["da3e","chunk-2d2288c5"],"./12/12-01.js":["3a20","chunk-2d0c4242"],"./12/index":["e07c","chunk-2d2245ad"],"./12/index.js":["e07c","chunk-2d2245ad"],"./14":["a1a2","chunk-2d207cd7"],"./14/":["a1a2","chunk-2d207cd7"],"./14/14-01":["c88c","chunk-2d217b16"],"./14/14-01-zyz":["0758","chunk-2d0a47e0"],"./14/14-01-zyz.js":["0758","chunk-2d0a47e0"],"./14/14-01.js":["c88c","chunk-2d217b16"],"./14/index":["a1a2","chunk-2d207cd7"],"./14/index.js":["a1a2","chunk-2d207cd7"],"./15":["4e97","chunk-2d0cc685"],"./15/":["4e97","chunk-2d0cc685"],"./15/15-04":["ea6e","chunk-2d22fd81"],"./15/15-04-kx":["8642","chunk-2d0de6f2"],"./15/15-04-kx.js":["8642","chunk-2d0de6f2"],"./15/15-04.js":["ea6e","chunk-2d22fd81"],"./15/index":["4e97","chunk-2d0cc685"],"./15/index.js":["4e97","chunk-2d0cc685"],"./chaodai":["0d08"],"./chaodai.js":["0d08"]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id="2736",e.exports=i},"5b6e":function(e,t,n){"use strict";n.r(t);var a=n("291b"),i=(n("e186"),n("7241"),n("8300"),n("ea5b"),n("e551"),n("654b"),n("9a2f"),n("fc36"),{layouts:[{label:"中心",layoutName:"center",layoutClassName:"seeks-layout-center",min_per_width:"60",distance_coefficient:1}],defaultLineMarker:{markerWidth:12,markerHeight:12,refX:6,refY:6,data:"M2,2 L10,6 L2,10 L6,6 L2,2"},defaultLineShape:0,defaultJunctionPoint:"border",defaultNodeShape:0,defaultNodeWidth:"80",defaultNodeHeight:"80",defaultNodeBorderWidth:2,defaultNodeColor:"rgba(250, 212, 0, 0.5)",defaultNodeBorderColor:"#FAD400",defaultNodeFontColor:"rgba(0, 0, 0, 1)",defaultShowLineLabel:!0,allowShowMiniView:!1,isMoveByParentNode:!0,hideNodeContentByZoom:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowMiniNameFilter:!0}),r=n("1361"),o=n("4260"),c=(r={name:"Minister",mixins:[r.a],data:function(){return{graphOptions:i}},computed:{chao:function(){return this.$route.query.chao},emperor:function(){return this.$route.query.emperor},title:function(){return this.$route.query.name}},mounted:function(){this.showSeeksGraph()},methods:{showSeeksGraph:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("2736")("./".concat(t.chao,"/").concat(t.emperor));case 2:a=e.sent,a=a.default,a=Object(o.b)(a),a={rootId:a[0].id,nodes:a.map((function(e){return{id:e.id,text:e.text}})),links:a.slice(1).map((function(e){return{from:e.parentId,to:e.id,text:e.relation}}))},t.$refs.seeksRelationGraph.setJsonData(a);case 8:case"end":return e.stop()}}),e)})))()},onNodeClick:function(e,t){this.$refs.seeksRelationGraph.focusNodeById(e.id),this.$router.push({path:"/history/life",query:{chao:this.chao,emperor:this.emperor,minister:e.id,name:e.text}})}}},n("cba8"));c=Object(c.a)(r,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{staticClass:"Minister"},[t("van-nav-bar",{attrs:{title:e.title,"left-arrow":""},on:{"click-left":function(t){return e.$router.go(-1)}}}),t("div",{staticClass:"h-88vh m-1",on:{pan:e.onPan}},[t("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:e.graphOptions,"on-node-click":e.onNodeClick}})],1)],1)}),[],!1,null,null,null);t.default=c.exports},e636:function(e,t,n){"use strict";n.r(t);var a=n("b49e"),i=n("291b"),r=(n("e186"),n("7241"),n("8300"),n("ea5b"),n("e551"),n("654b"),n("2669")),o=Object(r.b)({name:"Life",setup:function(){var e=Object(r.c)().proxy,t=e.$route.query,o=t.chao,c=t.emperor,s=t.minister,u=(t=t.name,Object(r.e)({life:[],chao:o,emperor:c,minister:s,name:t,colors:["","red","orange","green","turquoise","blue","purple","black"]}));return Object(r.d)(Object(i.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("2736")("./".concat(o,"/").concat(c,"/").concat(s));case 2:t=e.sent,t=t.default,u.life=t;case 5:case"end":return e.stop()}}),e)})))),Object(a.a)(Object(a.a)({},Object(r.f)(u)),{},{toMap:function(){e.$router.push({path:"/history/map",query:e.$route.query})}})}}),c=n("cba8");c=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Life flex flex-column !overflow-hidden"},[n("van-nav-bar",{attrs:{title:e.name,"right-text":"足迹","left-arrow":""},on:{"click-left":function(t){return e.$router.go(-1)},"click-right":e.toMap}}),n("div",{staticClass:"p-4 flex-1 overflow-auto"},e._l(e.life,(function(e){var t=e.date,a=e.achievement,i=e.title;e=e.description;return n("vue-timeline-update",{key:t+a,attrs:{date:new Date,dateString:t,category:a,title:i||"",description:e,color:"red",icon:"code"}})})),1)],1)}),[],!1,null,null,null);t.default=c.exports},ec5b:function(e,t,n){"use strict";n.r(t);var a=n("b49e"),i=(n("7241"),n("2669")),r=n("0d08"),o=Object(i.b)({name:"History",setup:function(){var e=Object(i.c)().proxy,t=Object(i.e)({cache:[r.default],chaodai:r.default});return Object(a.a)(Object(a.a)({},Object(i.f)(t)),{},{clickHandler:function(e){e.children&&(t.cache.push(e.children),t.chaodai=e.children)},goBackHandler:function(){1<t.cache.length&&(t.cache.pop(),t.chaodai=t.cache[t.cache.length-1])},gotoHandler:function(t){var n=t.id,a=t.name;t.diwang&&e.$router.push({path:"/history/emperor",query:{chao:n,name:a}})}})}});n=n("cba8"),n=Object(n.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{attrs:{title:"历史","right-text":"退出","left-arrow":""},on:{"click-left":e.goBackHandler,"click-right":function(t){return e.$router.go(-1)}}}),n("splitpanes",{staticClass:"default-theme text-center !h-auto",attrs:{horizontal:""}},e._l(e.chaodai,(function(t,a){return n("pane",{key:a},[n("div",{staticClass:"relative flex-center h-60px",class:[t.children?"bg-teal-500 bg-opacity-50":""],on:{click:function(n){return e.clickHandler(t)}}},[t.time?n("p",{staticClass:"absolute top-0 left-0 p-1 text-xs bg-yellow-500 bg-opacity-50"},[e._v(" "+e._s(t.time)+" ")]):e._e(),n("p",{class:[t.diwang?"text-yellow-700":""],on:{click:function(n){return n.stopPropagation(),e.gotoHandler(t)}}},[e._v(" "+e._s(t.name)+" ")])])])})),1)],1)}),[],!1,null,null,null);t.default=n.exports},f2f9:function(e,t,n){var a={"./0501/0501-01/0501-01-lb-map":["9bd0","chunk-2d0f064b"],"./0501/0501-07/0501-07-lx-map":["1458","chunk-2d0ab0fc"]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id="f2f9",e.exports=i}}]);