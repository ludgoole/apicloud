(window.webpackJsonp=window.webpackJsonp||[]).push([["query"],{"205d":function(a,t,e){"use strict";e.r(t),e("30f2"),e("8300"),e("77fa"),e("fc36"),e("4582"),e("7141");var n=e("7c98"),i=e.n(n),s=(n=e("e9cc"),e.n(n)),u=(n=e("9734"),e("d464")),r=e("310c");n={name:"Game",components:{BaseGua:n.a},data:function(){return{guaXu:1,list:[],tags:["家庭","婚姻","身高","年龄","性格","疾病","家宅","升学","工作","地名","食物","兴趣"]}},computed:{gua:function(){var a=this;return u.a.find((function(t){return t.guaXu===a.guaXu}))||u.a[0]},shangGua:function(){var a=this;return r.a.find((function(t){return t.guaXiang.join()===a.gua.guaXiang.slice(0,3).join()}))},xiaGua:function(){var a=this;return r.a.find((function(t){return t.guaXiang.join()===a.gua.guaXiang.slice(3).join()}))}},created:function(){this.guaXu=Number(this.$route.query.guaXu)||1,this.$bus.$off("global.rightClick").$on("global.rightClick",this.save)},mounted:function(){this.init()},methods:{init:function(){var a=this,t=this;s.a.getItem("MEI_HUA__game").then((function(e){if(e)t.list=e;else try{a.api.readFile({path:"fs://meihua-game.json"},(function(a,e){a.status&&(a=JSON.parse(a.data||"[]"),t.list=a)}))}catch(e){t.$toast({msg:e,location:"middle"})}}))},refresh:function(){this.guaXu=i.a.random(1,64)},toLeiXiang:function(a){this.$router.push({path:"/leiXiang",query:{search:a}})},save:function(){var t=this;if(0===this.list.length)return t.$toast({msg:"暂无数据",location:"middle"});s.a.setItem("MEI_HUA__game",this.list);try{this.api.writeFile({path:"fs://meihua-game.json",data:JSON.stringify(t.list)},(function(a,e){a.status?t.$toast({msg:"保存成功",location:"middle"}):t.$toast({msg:e.msg,location:"middle"})}))}catch(a){t.$toast({msg:a,location:"middle"})}}},onReady:function(){this.$toast({msg:"成功",location:"middle"}),this.save()}},e("425c"),e=e("cba8"),e=Object(e.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"Game"},[e("div",{staticClass:"Game-guaXiang flex flex-column flex-middle"},[e("BaseGua",{attrs:{"gua-xiang":a.gua.guaXiang,size:44},on:{click:a.refresh}}),e("p",[a._v(a._s(a.gua.guaMing))])],1),e("div",{staticClass:"Game-baGua flex flex-center"},[e("div",{staticClass:"Game-baGua--up flex flex-column flex-middle"},[e("BaseGua",{attrs:{"gua-xiang":a.shangGua.guaXiang,size:44},on:{click:a.toLeiXiang}}),e("p",[a._v(a._s(a.shangGua.name))])],1),e("div",{staticClass:"Game-baGua--down flex flex-column flex-middle"},[e("BaseGua",{attrs:{"gua-xiang":a.xiaGua.guaXiang,size:44},on:{click:a.toLeiXiang}}),e("p",[a._v(a._s(a.xiaGua.name))])],1)]),e("div",{staticClass:"Game-tag"},a._l(a.tags,(function(t){return e("van-tag",{key:t,attrs:{type:"primary",size:"large"}},[a._v(a._s(t))])})),1),e("div",{staticClass:"Game-field"},[e("van-field",{attrs:{rows:"10",autosize:"",label:"",type:"textarea",placeholder:"请输入卦象"},model:{value:a.list[a.guaXu-1],callback:function(t){a.$set(a.list,a.guaXu-1,t)},expression:"list[guaXu - 1]"}})],1)])}),[],!1,null,null,null);t.default=e.exports},"2a2c":function(a,t,e){"use strict";e("9b32")},4221:function(a,t,e){"use strict";var n=e("4b8d"),i=e("4f7e"),s=e("c7b3"),u=e("3978"),r=e("b821"),c=e("3e87"),o=e("e001"),g=e("837a");i("search",(function(a,t,e){return[function(t){var e=u(this),i=null==t?void 0:o(t,a);return i?n(i,t,e):new RegExp(t)[a](c(e))},function(a){var n=s(this),i=(a=c(a),e(t,n,a));return i.done?i.value:(i=n.lastIndex,r(i,0)||(n.lastIndex=0),a=g(n,a),r(n.lastIndex,i)||(n.lastIndex=i),null===a?-1:a.index)}]}))},"425c":function(a,t,e){"use strict";e("89c7")},"466f":function(a,t,e){"use strict";e.r(t),e("e9d4"),e("4582");var n=e("d464"),i={name:"Query",components:{BaseGua:e("9734").a},data:function(){return{value:"",ZHOUYI:n.a}},provide:function(){return{}},methods:{onSearch:function(a){Number.isNaN(+a)||3!==a.length?this.$router.push({path:"/guaXiang",query:{search:a}}):this.$router.push({path:"/leiXiang",query:{search:a}})}}};e("50dc"),e=e("cba8"),e=Object(e.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"Query"},[e("van-search",{attrs:{placeholder:"111111 | 111 | 乾 | 1 | 乾宫一世"},on:{search:a.onSearch},model:{value:a.value,callback:function(t){a.value=t},expression:"value"}}),e("van-grid",{attrs:{"column-num":4}},a._l(a.ZHOUYI,(function(t){return e("van-grid-item",{key:t.order,on:{click:function(e){return a.onSearch(t.guaMing)}}},[e("div",{staticClass:"text-center"},[e("BaseGua",{attrs:{"gua-xiang":t.guaXiang,size:55}}),e("p",{staticClass:"Query-guaming"},[a._v(a._s(t.guaMing))])],1)])})),1)],1)}),[],!1,null,null,null);t.default=e.exports},"50dc":function(a,t,e){"use strict";e("9fb6")},5605:function(a,t,e){"use strict";e.r(t);var n=e("291b"),i=(e("e186"),e("2ce8"),e("4221"),e("30f2"),e("8300"),e("e9d4"),e("4582"),e("7241"),e("77fa"),e("1a01"),e("e157"),e("e9cc")),s=e.n(i),u=e("310c");i={name:"LeiXiang",components:{BaseGua:e("9734").a},data:function(){return{BAGUA:u.a,gua:{},dangerous:""}},computed:{search:function(){return this.$route.query.search},timestamp:function(){return this.$route.query.timestamp}},mounted:function(){this.init()},methods:{init:function(){this.toSearch(this.search),this.setDangerousList()},setDangerousList:function(){var a=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.timestamp,n=a.search,t.next=3,s.a.getItem("MEI_HUA__mine");case 3:i=t.sent,(i=i.find((function(a){return a.timestamp===+e})))&&i["".concat(n,".dangerous")]&&(a.dangerous=i["".concat(n,".dangerous")]);case 6:case"end":return t.stop()}}),t)})))()},toSearch:function(a){this.gua=u.a.find((function(t){return Number.isNaN(+a)?t.name===a:3===a.length?t.guaXiang.join("")===a:t.order===+a}))||u.a[0]},change:function(a){this.gua=u.a.find((function(t){return t.guaXiang.join("")===a}))},save:function(){var a=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var e,n,i,u,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.dangerous,n=a.timestamp,i=a.search,t.next=3,s.a.getItem("MEI_HUA__mine");case 3:if(t.t0=t.sent,t.t0){t.next=6;break}t.t0=[];case 6:if(u=t.t0,r=u.find((function(a){return a.timestamp===+n})),c=u.findIndex((function(a){return a.timestamp===+n})),r){t.next=13;break}return t.abrupt("return",a.$toast({msg:"请先保存卦例",location:"middle"}));case 13:return r["".concat(i,".dangerous")]=e,-1<c?u.splice(c,1,r):u.push(r),t.next=17,s.a.setItem("MEI_HUA__mine",u);case 17:a.$toast({msg:"保存成功",location:"middle"});case 18:case"end":return t.stop()}}),t)})))()}}},e("2a2c"),e=e("cba8"),e=Object(e.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"LeiXiang flex flex-column"},[e("van-nav-bar",{attrs:{title:a.gua.name,"right-text":a.gua.wuxing,"left-arrow":""},on:{"click-left":function(t){return a.$router.go(-1)},"click-right":a.save}}),e("div",{staticClass:"LeiXiang-container flex-1"},[e("div",{staticClass:"LeiXiang-leiXiang"},[e("BaseGua",{attrs:{"gua-xiang":a.gua.guaXiang,size:200},on:{change:a.change}})],1),e("div",{staticClass:"LeiXiang-xiang"},[a.timestamp?e("van-field",{attrs:{rows:"1",autosize:"",clearable:"",label:"征兆","label-width":"28",type:"textarea",placeholder:"请输入征兆"},model:{value:a.dangerous,callback:function(t){a.dangerous=t},expression:"dangerous"}}):a._e(),e("ul",a._l(a.gua.leixiang,(function(t){return e("li",{key:t.order},[e("span",[a._v(a._s(t.key)+":")]),a._v(" "+a._s(t.value)+" ")])})),0)],1)])],1)}),[],!1,null,"4f8e4d80",null);t.default=e.exports},"7ae0":function(a,t,e){"use strict";e.r(t);var n=e("291b"),i=(e("e186"),e("af75"),e("2ce8"),e("4221"),e("30f2"),e("8300"),e("e9d4"),e("4582"),e("77fa"),e("1a01"),e("e157"),e("e9cc")),s=e.n(i),u=e("d464");i={name:"GuaXiang",components:{BaseGua:e("9734").a},data:function(){return{ZHOUYI:u.a,gua:{},dangerousList:Array(6).fill("")}},computed:{search:function(){return this.$route.query.search},timestamp:function(){return this.$route.query.timestamp}},mounted:function(){this.init()},methods:{init:function(){this.toSearch(this.search),this.setDangerousList()},setDangerousList:function(){var a=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.timestamp,n=a.search,t.next=3,s.a.getItem("MEI_HUA__mine");case 3:if(t.t0=t.sent,t.t0){t.next=6;break}t.t0=[];case 6:i=t.t0,(i=i.find((function(a){return a.timestamp===+e})))&&i["".concat(n,".dangerousList")]&&(a.dangerousList=i["".concat(n,".dangerousList")]);case 9:case"end":return t.stop()}}),t)})))()},toSearch:function(a){this.gua=u.a.find((function(t){return Number.isNaN(+a)?4===a.length?t.baGong===a:t.guaMing===a:6===a.length?t.guaXiang.join("")===a:t.guaXu===+a}))||u.a[0]},toGame:function(){this.$router.push({path:"/game",query:{guaXu:this.gua.guaXu}})},change:function(a){this.gua=u.a.find((function(t){return t.guaXiang.join("")===a}))},prev:function(a){var t=1===this.gua.guaXu?64:this.gua.guaXu-1;this.gua=u.a.find((function(a){return a.guaXu===t}))},next:function(a){var t=64===this.gua.guaXu?1:this.gua.guaXu+1;this.gua=u.a.find((function(a){return a.guaXu===t}))},save:function(){var a=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var e,n,i,r,c,o,g;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.search,n=a.dangerousList,i=a.timestamp,t.next=3,s.a.getItem("MEI_HUA__mine");case 3:if(t.t0=t.sent,t.t0){t.next=6;break}t.t0=[];case 6:if(r=t.t0,c=r.find((function(a){return a.timestamp===+i})),o=r.findIndex((function(a){return a.timestamp===+i})),c){t.next=19;break}if(i)return t.abrupt("return",a.$toast({msg:"请先保存卦例",location:"middle"}));t.next=14;break;case 14:8<=(g=a.gua.baGongOrder+1)%10&&(g-=8),a.gua=u.a.find((function(a){return a.baGongOrder===g}));case 17:t.next=24;break;case 19:return c["".concat(e,".dangerousList")]=n,-1<o?r.splice(o,1,c):r.push(c),t.next=23,s.a.setItem("MEI_HUA__mine",r);case 23:a.$toast({msg:"保存成功",location:"middle"});case 24:case"end":return t.stop()}}),t)})))()}}},e("a689"),e=e("cba8"),e=Object(e.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"GuaXiang flex flex-column"},[e("van-nav-bar",{attrs:{title:a.gua.guaMing,"right-text":a.gua.baGong,"left-arrow":""},on:{"click-left":function(t){return a.$router.go(-1)},"click-right":a.save}}),e("div",{staticClass:"GuaXiang-container flex-1"},[e("div",{staticClass:"GuaXiang-daXiang"},[e("p",[a._v(a._s(a.gua.daXiang))]),e("p",{staticClass:"font-size-10"},[a._v(a._s(a.gua.yiXiang))])]),e("div",{directives:[{name:"touch",rawName:"v-touch"}],staticClass:"GuaXiang-guaXiang",on:{swipeLeft:a.next,swipeRight:a.prev}},[e("BaseGua",{attrs:{"gua-xiang":a.gua.guaXiang,"na-jia":a.gua.naJia,"shi-ying":a.gua.shiYing,size:160},on:{change:a.change}})],1),e("div",{staticClass:"GuaXiang-leixiang font-size-10",on:{click:a.toGame}},[a._v(" "+a._s(a.gua.leiXiang)+" ")]),e("div",{staticClass:"GuaXiang-guaCi"},[a._v(a._s(a.gua.guaCi))]),e("div",{staticClass:"GuaXiang-yao"},[e("ul",a._l(a.gua.yaoCi,(function(t,n){return e("li",{key:n},[e("p",{staticClass:"GuaXiang-yaoCi text-bold"},[a._v(a._s(t))]),e("p",{staticClass:"GuaXiang-yaoXiang"},[a._v("按："+a._s(a.gua.yaoXiang[n]))]),e("p",{staticClass:"GuaXiang-yaoXiang"},[a._v("析："+a._s(a.gua.yiLi[n].how))]),a.timestamp?e("p",{staticClass:"GuaXiang-fengxian"},[e("van-field",{attrs:{rows:"1",autosize:"",clearable:"",label:"风险","label-width":"28",type:"textarea",placeholder:"请输入危险源"},model:{value:a.dangerousList[n],callback:function(t){a.$set(a.dangerousList,n,t)},expression:"dangerousList[index]"}})],1):a._e()])})),0)])])],1)}),[],!1,null,"049732c2",null);t.default=e.exports},8074:function(a,t,e){},"89c7":function(a,t,e){},"9b32":function(a,t,e){},"9fb6":function(a,t,e){},a689:function(a,t,e){"use strict";e("8074")},b821:function(a,t){a.exports=Object.is||function(a,t){return a===t?0!==a||1/a==1/t:a!=a&&t!=t}}}]);