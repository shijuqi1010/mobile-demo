webpackJsonp([1],{"3Uj3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWCAYAAADwza0nAAAA30lEQVQ4T7XUoUpEQRQG4O+CCILRZjD6AMIWbbKYNFgFQd9gt+gjaHHfYAXBatAkYtMiYjcabEZBWAxycC4ssne9HnDKwMz/McPMmal8t0es4B5dfJTxxq4qM4sFLeEK2/ichmsYmWXcYQGn2G8LI9fBLeZxjMMmPL5indnAJWbRx2ASngQjt4OzAnZx/hM3wcj1cIIRtnA9jqfByB3hAO9Yx0ONf4ORG2IPb1jDcwy2gTO4wCZesIrXNjAWmMNNQU9RZf8K01tNHU7qOlIFkCq5VJGnnlXqIae/jj9/Vl9kKzgX7hodEQAAAABJRU5ErkJggg=="},"7vLp":function(t,e,s){t.exports=s.p+"static/img/castle.0a879b7.png"},"8vzP":function(t,e){},BuWR:function(t,e){},"D+mi":function(t,e){},G4zc:function(t,e){},"HK+V":function(t,e){},IoP4:function(t,e){},IuZQ:function(t,e){},KipG:function(t,e){},MmaJ:function(t,e,s){t.exports=s.p+"static/img/sign.cf1e86f.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},a,!1,function(t){s("HK+V")},null,null).exports,o=s("/ocq"),r=s("mtWM"),c=s.n(r),l="//h5api.aylives.cn/aoyuejia/yuepao";c.a.defaults.withCredentials=!0;var d={Axios:c.a,STONE:l+"/userinfo",USERINFO:l+"/userinfo",CREATE:function(t,e,s){return l+"/add?pic="+t+"&name="+e+"&people="+s},SHOW:function(t){return l+"/show?id="+t},UPLOAD:"//lars.aylives.cn/Lars/upload",SHARE:function(t){return l+"/api/show?ruleId="+t}},u=s("Zrlr"),p=s.n(u),v=s("wxAW"),h=s.n(v),m=new(function(){function t(){p()(this,t),this.audioCtx=new AudioContext}return h()(t,[{key:"setCookie",value:function(t,e,s,n){var a=new Date;n?a.setTime(a.getTime()+parseInt(n)):a.setTime(a.getTime()+864e6),document.cookie=t+"="+escape(e)+";domain="+s+";expires="+a.toGMTString()+";path=/"}},{key:"getCookie",value:function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),s=document.cookie.match(e);return s?unescape(s[2]):null}},{key:"pageUrlGetValue",value:function(t){return decodeURI(window.location.href.replace(new RegExp("^(?:.*[&\\?]"+encodeURI(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},{key:"urlGetparam",value:function(t,e){var s=(e||location.search).match(new RegExp("(\\?|&)"+t+"=([^&]*)"));return s?decodeURIComponent(s[2]):null}},{key:"sound",value:function(){if(window.AudioContext=window.AudioContext||window.webkitAudioContext,window.AudioContext){var t=this.audioCtx,e=t.createOscillator(),s=t.createGain();e.connect(s),s.connect(t.destination),e.type="sine",e.frequency.value=520,s.gain.setValueAtTime(0,t.currentTime),s.gain.linearRampToValueAtTime(1,t.currentTime+.01),e.start(t.currentTime),s.gain.exponentialRampToValueAtTime(.001,t.currentTime+1),e.stop(t.currentTime+1)}}}]),t}()),f={name:"",props:["time"],data:function(){return{countDownTime:this.time,countTimer:"",year:2018,mounth:11,day:16,hour:15,minute:7,second:30}},created:function(){setInterval(this.change,1e3)},filters:{outputHour:function(t){var e=Math.floor(t/60/60),s=Math.floor(t/60%60),n=Math.floor(t%60);return e=e<10?"0"+e:e,s=s<10?"0"+s:s,n=n<10?"0"+n:n,e>=1?e+":"+s:s+":"+n}},mounted:function(){this.countDown()},methods:{countDown:function(){var t=this;if(clearInterval(this.countTimer),this.countDownTime){t.countTimer=setInterval(function(){t.countDownTime>0?t.countDownTime-=1:clearInterval(t.countTimer)},1e3)}}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"time-text",attrs:{src:this.time}},[this._v("剩余"+this._s(this._f("outputHour")(this.countDownTime)))])])},staticRenderFns:[]};var C=s("VU/8")(f,_,!1,function(t){s("OjiF")},"data-v-4f29243c",null).exports,g=s("9qgI"),x=s.n(g),y=s("xNvf"),w=(y.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[y.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vux-toast"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),s("transition",{attrs:{name:t.currentTransition}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[s("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?s("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):s("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var k=s("VU/8")(w,b,!1,function(t){s("8vzP")},null,null).exports,A={components:{Toast:k,countdown:C},data:function(){return{token:"",currentRoomId:"",points:0,totalPoints:0,city:"",area:"",status:"",name:"",num:"",id:"",clickAble:!0,loading:!0,tip:!1,count:0,showFirst:!0,showSecond:!1,showWait:!1,countDownTime:600,userInfo1:[{id:1,text:1e4},{id:2,text:2e4},{id:3,text:3e4},{id:4,text:4e4},{id:5,text:5e4},{id:6,text:6e4}],userInfo2:[{id:11,text:11111},{id:12,text:21111},{id:13,text:31111},{id:14,text:41111},{id:15,text:51111},{id:16,text:61111}]}},created:function(){this.init()},computed:{},watch:{},mounted:function(){},methods:{init:function(){this.getToken(),this.getRoomId()},getToken:function(){this.token=m.pageUrlGetValue("token"),m.setCookie("token",this.token,"aylives.cn")},getRoomId:function(){this.currentRoomId=m.pageUrlGetValue("currentRoomId"),m.setCookie("currentRoomId",this.currentRoomId,"aylives.cn")},getStone:function(){var t=this;d.Axios.get(d.STONE).then(function(e){200===e.data.code?(t.area=e.data.data.agencyName,t.city=e.data.data.cityName,t.status=e.data.data.added,t.status&&t.$router.push({path:"/poster"})):t.$toast(e.data.msg,1500)})},collect:function(t){var e=t.id,s=document.getElementById("id"+e);this.count++,x()(s,{top:40,opacity:0},{duration:1e3,complete:function(){}}),m.sound(),this.refresh(t.text),6===this.count&&(this.showFirst=!1,this.showSecond=!0),12===this.count&&(this.showSecond=!1,this.showWait=!0)},refresh:function(t){this.points+=t},jumpToRank:function(){this.$router.push({path:"/rank"})}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-index"},[n("div",{staticClass:"header"},[n("div",{staticClass:"castle"},[n("router-link",{staticClass:"self-castle",attrs:{to:"/personalCenter"}},[n("img",{attrs:{src:s("7vLp"),alt:""}}),t._v(" "),n("p",{staticClass:"title"},[t._v("我的城堡")])]),t._v(" "),n("ul",{staticClass:"point-info"},[n("li",{staticClass:"point-data"},[n("span",[t._v("奥克积分："+t._s(t.points))])]),t._v(" "),n("li",{staticClass:"point-data total-point"},[n("span",[t._v("算力："+t._s(t.totalPoints))])])])],1),t._v(" "),n("ul",{staticClass:"introduce"},[n("li",{staticClass:"introduce-data"},[n("router-link",{attrs:{to:"/rank"}},[t._v("\n          排名\n        ")])],1),t._v(" "),n("li",{staticClass:"introduce-data total-point"},[n("router-link",{attrs:{to:"/explain"}},[t._v("\n          奥克基地\n        ")])],1)])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showFirst,expression:"showFirst"}],staticClass:"vip-animation"},t._l(t.userInfo1,function(e,a){return n("li",{key:a,staticClass:"animation",attrs:{id:"id"+e.id},on:{click:function(s){t.collect(e)}}},[n("img",{staticClass:"bubble",attrs:{src:s("aoVB"),alt:""}}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(e.text))])])}))]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showSecond,expression:"showSecond"}],staticClass:"vip-animation"},t._l(t.userInfo2,function(e,a){return n("li",{key:a,staticClass:"animation",attrs:{id:"id"+e.id},on:{click:function(s){t.collect(e)}}},[n("img",{staticClass:"bubble",attrs:{src:s("aoVB"),alt:""}}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(e.text))])])}))]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showWait,expression:"showWait"}],staticClass:"vip-animation"},[n("li",{staticClass:"animation"},[n("img",{staticClass:"bubble",attrs:{src:s("aoVB"),alt:""}}),t._v(" "),n("countdown",{staticClass:"count-down",attrs:{time:t.countDownTime}})],1)])]),t._v(" "),n("div",{staticClass:"content"}),t._v(" "),n("div",{staticClass:"footer"},[n("router-link",{staticClass:"des-btn",attrs:{to:"/points"}},[n("img",{attrs:{src:s("qeuM")}}),t._v(" "),n("p",[t._v("获取能量")])]),t._v(" "),n("router-link",{staticClass:"des-btn btn",attrs:{to:"/build"}},[n("img",{attrs:{src:s("ubiV")}}),t._v(" "),n("p",[t._v("共建计划")])]),t._v(" "),n("router-link",{staticClass:"des-btn btn",attrs:{to:"/share"}},[n("img",{attrs:{src:s("az9f")}}),t._v(" "),n("p",[t._v("邀请好友")])]),t._v(" "),n("router-link",{staticClass:"des-btn btn",attrs:{to:"/store"}},[n("img",{attrs:{src:s("d85F")}}),t._v(" "),n("p",[t._v("市场")])])],1)],1)},staticRenderFns:[]};var I=s("VU/8")(A,S,!1,function(t){s("G4zc")},"data-v-91b3929c",null).exports,R=(Boolean,Boolean,Boolean,{name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}}),T={render:function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},staticRenderFns:[]};var N=s("VU/8")(R,T,!1,function(t){s("S4Pl")},null,null).exports,V={components:{XTable:N},data:function(){return{token:"",currentRoomId:"",uploadText:"",num:0,points:0,id:"",loading:!0,tip:!1,info:[{rank:1,name:"qq1",points:1e5},{rank:2,name:"qq2",points:1e5},{rank:3,name:"qq3",points:1e5},{rank:4,name:"qq4",points:1e5},{rank:5,name:"qq5",points:1e5},{rank:6,name:"qq6",points:1e5},{rank:7,name:"qq7",points:1e5}]}},created:function(){},mounted:function(){},methods:{}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"des-rank"},[s("div",{staticClass:"header"},[s("p",{staticClass:"title"},[t._v("奥克城荣誉榜")]),t._v(" "),s("ul",{staticClass:"data"},[s("li",{staticClass:"total-num"},[s("p",[t._v(t._s(t.num))]),t._v(" "),s("p",[t._v("奥克城总注册居民")])]),t._v(" "),s("li",{staticClass:"rank"},[s("p",[t._v(t._s(t.points))]),t._v(" "),s("p",[t._v("我的算力排名")])])]),t._v(" "),s("div",{staticClass:"explain"},[t._v("\n      算力是记录“奥居民”对奥克城发展所作的贡献量，也是获取奥克积分数量的主要因素，算力越高，单位时间内矿海生成的奥克积分就越多。算力分为2种，一种是永久算力，即一旦获取，永远不会消失，另一种是临时算力，即获取后过一段时间会逐渐减半最后归零。\n    ")])]),t._v(" "),s("div",{staticClass:"content"},[s("p",{staticClass:"title"},[t._v("算力排行榜")]),t._v(" "),s("x-table",{staticStyle:{"background-color":"#fff"},attrs:{"cell-bordered":!1,"content-bordered":!1}},[s("thead",[s("tr",[s("th",{staticClass:"t-head"},[t._v("名次")]),t._v(" "),s("th",{staticClass:"t-head"},[t._v("居民")]),t._v(" "),s("th",{staticClass:"t-head"},[t._v("算力")])])]),t._v(" "),s("tbody",t._l(t.info,function(e,n){return s("tr",{key:n},[s("td",[t._v(t._s(e.rank))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.points))])])}))])],1)])},staticRenderFns:[]};var P=s("VU/8")(V,B,!1,function(t){s("mIpw")},"data-v-e9f3150c",null).exports,U={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"des-explain"},[this._v("\n  奥克基地\n")])},staticRenderFns:[]};var F=s("VU/8")(null,U,!1,function(t){s("Q8zP")},"data-v-5869db88",null).exports,E={name:"points",data:function(){return{token:"",roomId:"",num:0,owner:0,isSigned:!1,showSign:!1,points:3883,generalTaskList:[{path:"/signIn",icon:"https://img1.aylives.cn/fa21eab5e99549d5b959b112e90008a8.png",content:"签到",rule:"+1～2算力"},{path:"/donateSteps",icon:"https://img1.aylives.cn/9f16d704770d4923afd7ebfcf7e9205a.png",content:"运动捐步",rule:"+1～2算力"},{path:"/attention",icon:"https://img1.aylives.cn/74384931e9ca4501b903a9f9348b0a3d.png",content:"认证房屋",rule:"+20算力"},{path:"/attention",icon:"https://img1.aylives.cn/5e258b091a674bd19a44db401b6294e3.png",content:"关注公众号",rule:"+2～4算力"},{path:"/share",icon:"https://img1.aylives.cn/4827fc99f5cf4cdca26588ed2002ae5e.png",content:"邀请邻居",rule:"+1～2算力"},{path:"/signIn",icon:"https://img1.aylives.cn/b5bf6d5c02d4437cae5b981b71cbfbb4.png",content:"租住",rule:"+20算力"}],specialTaskList:[{path:"/signIn",icon:"https://img1.aylives.cn/160221d2163b46bab2c64760d1075f27.png",content:"缴费",rule:"+2算力"},{path:"/donateSteps",icon:"https://img1.aylives.cn/288dcafe8bf844d58759b528b4e63469.png",content:"APP开门",rule:"+1算力"},{path:"/attention",icon:"https://img1.aylives.cn/5cdc0db944b042068af4c0af2dd781f4.png",content:"悦分享发帖",rule:"+1算力"},{path:"/attention",icon:"https://img1.aylives.cn/8ba0229ab745411d8cf11b65f361f48c.png",content:"悦享物",rule:"+10算力"},{path:"/share",icon:"https://img1.aylives.cn/c9218154e0124ea2a4e756f1a7b7adeb.png",content:"小区绿化",rule:"+1算力"},{path:"/signIn",icon:"https://img1.aylives.cn/7dc8afdf26474cd493ea599d1b1e4cc0.png",content:"邻居串门",rule:"+1算力"}]}},created:function(){},mounted:function(){},methods:{jumpToHappiness:function(){window.location.href="https://h5.aylives.cn/happy/#/happiness"}}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"des-points"},[s("div",{staticClass:"points-banner"},[s("ul",{staticClass:"top"},[s("li",[t._v("当前算力")]),t._v(" "),s("li",[s("router-link",{attrs:{to:"/record"}},[t._v("\n          算力记录\n        ")])],1)]),t._v(" "),s("p",{staticClass:"center"},[t._v(" "+t._s(t.points)+" ")]),t._v(" "),s("p",{staticClass:"explain"},[t._v(" 算力越高，获取的奥克积分越多 ")])]),t._v(" "),s("div",{staticClass:"general-task"},[s("p",{staticClass:"title"},[t._v("普通任务")]),t._v(" "),s("ul",{staticClass:"des-general"},t._l(t.generalTaskList,function(e,n){return(n+1)%3>=0?s("li",{key:n},[s("router-link",{attrs:{to:e.path}},[s("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),t._v(" "),s("p",{staticClass:"type"},[t._v(" "+t._s(e.content)+" ")]),t._v(" "),s("div",{staticClass:"rule-btn"},[t._v(t._s(e.rule))])])],1):t._e()}))]),t._v(" "),s("div",{staticClass:"special-task"},[s("p",{staticClass:"title"},[t._v("专属任务")]),t._v(" "),s("ul",{staticClass:"des-special"},t._l(t.specialTaskList,function(e,n){return(n+1)%3>=0?s("li",{key:n},[s("router-link",{attrs:{to:e.path}},[s("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),t._v(" "),s("p",{staticClass:"type"},[t._v(" "+t._s(e.content)+" ")]),t._v(" "),s("div",{staticClass:"rule-btn"},[t._v(t._s(e.rule))])])],1):t._e()}))]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var D=s("VU/8")(E,X,!1,function(t){s("IuZQ")},"data-v-31bef0bb",null).exports,L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"des-record"},[t.recordlist?s("ul",{staticClass:"record-list"},t._l(t.recordlist,function(e,n){return s("li",{key:n},[s("div",{staticClass:"left"},[s("p",[t._v(t._s(e.type))]),t._v(" "),s("p",{staticClass:"time"},[t._v(t._s(e.time))])]),t._v(" "),s("div",{staticClass:"right"},[t._v("+"+t._s(e.points))])])})):s("div",{staticClass:"no-points"},[t._v("\n    暂无算力记录\n  ")])])},staticRenderFns:[]};var q=s("VU/8")({name:"points",data:function(){return{token:"",roomId:"",num:0,owner:0,points:0,recordlist:null}},created:function(){},computed:{},mounted:function(){this.getHistoryPoints()},methods:{getHistoryPoints:function(){this.recordlist=[{type:"获取算力名称",time:"2018-11-29 10:20:00",points:1},{type:"签到",time:"2018-11-29 10:10:00",points:9},{type:"关注公众号",time:"2018-11-29 10:10:00",points:10},{type:"运动捐步",time:"2018-11-29 10:10:00",points:100},{type:"抽奖",time:"2018-11-29 10:10:00",points:30},{type:"租住",time:"2018-11-29 10:10:00",points:20},{type:"邀请邻居",time:"2018-11-29 10:10:00",points:40}]}}},L,!1,function(t){s("QsXp")},"data-v-4bdaedfb",null).exports,O={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"des-store"},[this._v("\n  市场\n")])},staticRenderFns:[]};var G=s("VU/8")(null,O,!1,function(t){s("fQhy")},"data-v-522a53ff",null).exports,j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-personal"},[n("div",{staticClass:"center-info"},[n("img",{staticClass:"user-img",attrs:{src:t.personalInfo.userAvater}}),t._v(" "),n("ul",{staticClass:"explain"},[n("li",{staticClass:"name"},[t._v("\n        "+t._s(t.personalInfo.name)+"\n      ")]),t._v(" "),n("li",{staticClass:"title"},[t._v("\n        "+t._s(t.personalInfo.honor)+"\n      ")]),t._v(" "),n("li",{staticClass:"rank"},[t._v("\n        第"+t._s(t.personalInfo.rank)+"名市民\n      ")])])]),t._v(" "),n("ul",{staticClass:"menu"},[n("li",{staticClass:"bitspin"},[n("router-link",{staticClass:"record",attrs:{to:"/record"}},[n("span",[t._v("我的算力")]),t._v(" "),n("img",{attrs:{src:s("3Uj3"),alt:""}})])],1),t._v(" "),n("li",{staticClass:"points"},[n("router-link",{staticClass:"record",attrs:{to:"/detail"}},[n("span",[t._v("我的奥克积分")]),t._v(" "),n("img",{attrs:{src:s("3Uj3"),alt:""}})])],1),t._v(" "),n("li",{staticClass:"code"},[n("router-link",{staticClass:"record",attrs:{to:"/share"}},[n("span",[t._v("我的邀请码")]),t._v(" "),n("img",{attrs:{src:s("3Uj3"),alt:""}})])],1)])])},staticRenderFns:[]};var K=s("VU/8")({data:function(){return{points:"",msg:"",personalInfo:{userAvater:"https://img1.aylives.cn/ee1284f082b34dca8b5ec5e3d67ad125.jpg",name:"某某某",honor:"奥克城创世居民",rank:2018},userId:"",delId:"",allPreviewerList:[],showConfirm:!1,scrollBottom:!1,showDelete:!1,count:0,pageSize:5}},mounted:function(){},computed:{},methods:{}},j,!1,function(t){s("qzll")},"data-v-37a3372c",null).exports,W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"des-personal"},[s("div",{staticClass:"center-info"},[s("img",{staticClass:"user-img",attrs:{src:t.personalInfo.userAvater}}),t._v(" "),s("ul",{staticClass:"explain"},[s("li",{staticClass:"name"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),s("li",{staticClass:"title"},[t._v("\n        "+t._s(t.honor)+"\n      ")]),t._v(" "),s("li",{staticClass:"rank"},[t._v("\n        第"+t._s(t.rank)+"名市民\n      ")])])]),t._v(" "),s("div",{staticClass:"detail"},[t._v("\n    奥克积分"+t._s(t.points)+"\n  ")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"menu"},[e("li",[this._v("我的算力")]),this._v(" "),e("li",[this._v("我的奥克积分")]),this._v(" "),e("li",[this._v("我的订单")])])}]};var z=s("VU/8")({data:function(){return{name:"paopao",honor:"奥克城创世居民",rank:"",points:"",msg:"",personalInfo:"",userId:"",delId:"",allPreviewerList:[],showConfirm:!1,scrollBottom:!1,showDelete:!1,count:0,pageSize:5}},mounted:function(){},computed:{},methods:{}},W,!1,function(t){s("KipG")},"data-v-a92d1a00",null).exports,M={data:function(){return{shareCode:"AY3883",invited:8,point:80,canInvite:12,rank:0,token:"",currentRoomId:"",isDonated:!1}},created:function(){},mounted:function(){this.init()},computed:{},methods:{init:function(){},share:function(){document.location="jsinteractive://share?url=https://h5.aylives.cn/points/#/sharePage?image=https://img1.aylives.cn/ac78d2c752c6438195682678be837af8.png"}}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"des-share"},[s("div",{staticClass:"share-container"},[s("div",{staticClass:"share",on:{click:t.share}},[t._v("分享")]),t._v(" "),s("div",{staticClass:"share-content"},[t._m(0),t._v(" "),s("div",{staticClass:"code"},[s("p",[t._v("-您的邀请码-")]),t._v(" "),s("p",{staticClass:"share-code"},[t._v(t._s(t.shareCode))])]),t._v(" "),s("div",{staticClass:"share-detail"},[s("p",[t._v("我已邀请"+t._s(t.invited)+"位邻居")]),t._v(" "),s("p",[t._v("获得"+t._s(t.point)+"算力")]),t._v(" "),s("p",[t._v("还能邀请"+t._s(t.canInvite)+"位")])])])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("p",[this._v("奥园物业与你共同欢迎")]),this._v(" "),e("p",[this._v("新邻居入住奥克城")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"explain"},[e("div",{staticClass:"explain-title"},[this._v("\n      规则\n    ")]),this._v(" "),e("div",{staticClass:"donate-explain"},[this._v("\n      每邀请一个邻居，普通用户可获得个10个算力，业主及家属租客可获得20个算力，每人上限邀请20次。\n    ")])])}]};var J=s("VU/8")(M,H,!1,function(t){s("jdyi")},"data-v-2a1678f4",null).exports,Z={data:function(){return{shareInfo:"",shareId:"",msg:"",userHappyNum:0}},mounted:function(){var t=this,e=window.location.href;if(!(e.indexOf("#")>-1))return this.msg="您想看的照片被藏起来了哦！",null;this.shareId=e.split("#",2)[1].split("?",2)[1],d.Axios.get(d.SHARE(this.shareId)).then(function(e){e.data&&200===e.data.code?(t.shareInfo=e.data.data,t.userHappyNum=t.shareInfo.userHappyNum):(t.shareInfo=null,t.msg="内容暂时保密哦～")})},methods:{downLoadApp:function(){window.location="https://h5.aylives.cn/app/index.html"},report:function(t){var e=this,s=t.happyMomentId;d.Axios.post(d.REPORT(s)).then(function(t){200===t.data.code?e.$vux.toast.show({text:t.data.msg,type:"success"}):e.$vux.toast.show({text:t.data.msg,type:"warn"})})}}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"share-body"},[t.shareInfo?s("div",{staticClass:"des-info"},[s("ul",{staticClass:"photo-list-info"},[s("li",{staticClass:"user-info"},[s("img",{staticClass:"user-image",attrs:{src:t.shareInfo.userAvater,alt:"头像"}}),t._v(" "),s("div",{staticClass:"content-right"},[s("span",{staticClass:"user-name"},[t._v(t._s(t.shareInfo.userName))]),t._v(" "),t.shareInfo.happyMoment?s("div",{staticClass:"content-text"},[t._v(t._s(t.shareInfo.happyMoment.happyMomentContent))]):t._e(),t._v(" "),s("flexbox",{staticClass:"content-photo",attrs:{gutter:2}},t._l(t.shareInfo.happyMoment.happyMomentPhotosArray,function(e,n){return t.shareInfo.happyMoment?s("flexbox-item",{key:n},[1===t.shareInfo.happyMoment.happyMomentPhotosSize?s("img",{staticClass:"photo",staticStyle:{width:"60%"},attrs:{src:e}}):s("div",{staticClass:"figure-photo",style:"background-image: url("+e+")"})]):t._e()}))],1)]),t._v(" "),s("div",{staticClass:"content-bottom"},[t.shareInfo.happyMoment?s("span",[t._v(t._s(t.shareInfo.happyMoment.happyMomentPraise))]):t._e()])])]):s("div",{staticClass:"msg-box"},[s("p",{staticClass:"msg"},[t._v(t._s(t.msg))])]),t._v(" "),s("div",{staticClass:"share-info"},[s("div",{staticClass:"download-title"},[s("div",{staticClass:"download-text",on:{click:t.downLoadApp}},[t._v("下载奥悦家为好友点赞")])]),t._v(" "),s("div",{staticClass:"luck-container"},[s("div",{staticClass:"luck-code"},[s("p",{staticClass:"code"},[t._v("幸运码")]),t._v(" "),s("p",[t._v(t._s(t.userHappyNum))])]),t._v(" "),s("div",{staticClass:"radius"})]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"active-rule"},[s("p",{staticClass:"rule-title"},[t._v("活动规则")]),t._v(" "),s("ul",{staticClass:"explain"},[s("li",[t._v("1.每个小区业主单组照片点赞数第一名可获得价值169元的美的养生壶1个、第2~5名可获得600ML九阳多功能料理机1台、第6~10名可获得65cm粉红豹1只;")]),t._v(" "),s("li",[t._v("2.业主可邀请微信好友搜索幸运码为自己点赞助力;")]),t._v(" "),s("li",[t._v("3.活动时间为2018年09月22日至2018年10月21日;")]),t._v(" "),s("li",[t._v("4.每人每天可为每组照片点赞10次;")]),t._v(" "),s("li",[t._v("5.领取方式：奥悦节闭幕式当天活动现场领取（具体时间以各服务中心安排为准)。")])])])}]};var Y=s("VU/8")(Z,Q,!1,function(t){s("IoP4")},"data-v-79bc5e82",null).exports,$=(Number,Array,String,Number,String,Number,String,Boolean,{name:"x-circle",props:{strokeWidth:{type:Number,default:1},strokeColor:{type:[Array,String],default:"#3FC7FA"},trailWidth:{type:Number,default:1},trailColor:{type:String,default:"#D9D9D9"},percent:{type:Number,default:0},strokeLinecap:{type:String,default:"round"},anticlockwise:{type:Boolean,default:!1}},computed:{radius:function(){return 50-this.strokeWidth/2},pathString:function(){return"M 50,50 m 0,-"+this.radius+"\n      a "+this.radius+","+this.radius+" 0 1 1 0,"+2*this.radius+"\n      a "+this.radius+","+this.radius+" 0 1 1 0,-"+2*this.radius},len:function(){return 2*Math.PI*this.radius},pathStyle:function(){return{"stroke-dasharray":this.len+"px "+this.len+"px","stroke-dashoffset":(this.anticlockwise?this.percent-100:100-this.percent)/100*this.len+"px",transition:"stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"}},isGradient:function(){return"string"!=typeof this.strokeColor}}}),tt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vux-circle"},[s("svg",{attrs:{viewBox:"0 0 100 100"}},[t.isGradient?s("defs",[s("linearGradient",{attrs:{id:"vux-circle-gradient",x1:"10%",y1:"45%",x2:"50%",y2:"0%"}},[s("stop",{style:{"stop-color":t.strokeColor[0],"stop-opacity":1},attrs:{offset:"0%"}}),t._v(" "),s("stop",{style:{"stop-color":t.strokeColor[1],"stop-opacity":1},attrs:{offset:"100%"}})],1)],1):t._e(),t._v(" "),s("path",{attrs:{d:t.pathString,stroke:t.trailColor,"stroke-width":t.trailWidth,"fill-opacity":0}}),t._v(" "),s("path",{style:t.pathStyle,attrs:{d:t.pathString,"stroke-linecap":t.strokeLinecap,stroke:t.isGradient?"url(#vux-circle-gradient)":t.strokeColor,"stroke-width":t.strokeWidth,"fill-opacity":"0"}})]),t._v(" "),s("div",{staticClass:"vux-circle-content"},[t._t("default")],2)])},staticRenderFns:[]};var et=s("VU/8")($,tt,!1,function(t){s("BuWR")},null,null).exports,st={components:{XCircle:et},data:function(){return{todaySteps:0,encyptSteps:0,currentTime:"",donateData:"",donateSteps:0,communityDonateSteps:0,rank:0,token:"",currentRoomId:"",isDonated:!1}},created:function(){this.init()},mounted:function(){this.getDonateData()},computed:{percent:function(){return this.isDonated?0:this.todaySteps>=2e3?100:this.todaySteps/2e3*100},clickAble:function(){return this.todaySteps>=2e3&&!this.isDonated}},methods:{init:function(){this.todaySteps=m.pageUrlGetValue("steps"),this.encyptSteps=m.pageUrlGetValue("encyptSteps"),this.currentTime=m.pageUrlGetValue("currentTime"),this.token=m.pageUrlGetValue("token"),this.currentRoomId=m.pageUrlGetValue("currentRoomId"),m.getCookie("token")||m.setCookie("token",this.token,"aylives.cn"),m.getCookie("currentRoomId")||m.setCookie("currentRoomId",this.currentRoomId,"aylives.cn")},getDonateData:function(){var t=this;d.Axios.get(d.DONATE_API).then(function(e){200===e.data.code?e.data.data&&(t.donateData=e.data.data,t.donateSteps=e.data.data.donateSteps,t.communityDonateSteps=e.data.data.community.communityDonateSteps,t.rank=e.data.data.community.rank):console.log("tip",e.data.msg)})},donate:function(){var t=this;d.Axios.post(d.DONATE_STEPS(this.encyptSteps,this.currentTime)).then(function(e){200===e.data.code?(t.isDonated=!0,t.getDonateData()):t.$vux.toast.show({text:e.data.msg,type:"warn"})})}}},nt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"des-steps"},[s("div",{staticClass:"steps-container"},[s("div",{staticClass:"step-content"},[s("div",{staticClass:"step-detail"},[s("x-circle",{attrs:{percent:t.percent,"stroke-width":7,"trail-width":3,"stroke-color":"#FF6800","trail-color":"#FF9E3F"}},[s("span",[s("p",{staticClass:"today-steps"},[t._v("今日步数")]),t._v(" "),s("p",[t._v(t._s(t.todaySteps))])])])],1),t._v(" "),s("p",{staticClass:"notice"},[t._v("\n        完成2000步后点击“兑换算力”才能获得算力哦\n      ")]),t._v(" "),t.clickAble?s("div",{staticClass:"donate-btn",on:{click:t.donate}},[t._v("兑换算力")]):s("div",{staticClass:"donate-btn-disable"},[t._v("兑换算力")])]),t._v(" "),t.donateData?s("ul",{staticClass:"donate-info"},[s("li",[s("p",{staticClass:"donate-data"},[t._v(t._s(t.donateSteps)+"步")]),t._v(" "),s("p",{staticClass:"donate-text"},[t._v("今日已兑换算力")])]),t._v(" "),s("li",[s("p",{staticClass:"donate-data"},[t._v(t._s(t.communityDonateSteps)+"步")]),t._v(" "),s("p",{staticClass:"donate-text"},[t._v("累计兑换算力")])])]):s("ul",{staticClass:"donate-info"},[t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",{staticClass:"donate-data"},[this._v("-")]),this._v(" "),e("p",{staticClass:"donate-text"},[this._v("今日已兑换算力")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",{staticClass:"donate-data"},[this._v("-")]),this._v(" "),e("p",{staticClass:"donate-text"},[this._v("累计兑换算力")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"explain"},[e("div",{staticClass:"explain-title"},[this._v("\n      规则\n    ")]),this._v(" "),e("div",{staticClass:"donate-explain"},[this._v("\n      每日仅限兑换1次，普通用户兑换一次可得1个算力，认证成为奥园业主、家属、租客参与兑换可得2个算力；\n    ")])])}]};var at=s("VU/8")(st,nt,!1,function(t){s("D+mi")},"data-v-20cc08a4",null).exports,it={name:"sign",data:function(){return{token:"",roomId:"",num:0,owner:0,points:0,recordlist:null}},created:function(){},computed:{},mounted:function(){},methods:{signIn:function(){alert("签到")}}},ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"des-sgin"},[e("div",{staticClass:"sign"},[this._m(0),this._v(" "),e("img",{staticClass:"sign-img",attrs:{src:s("MmaJ")},on:{click:this.signIn}})]),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sign-text"},[e("p",[this._v("传说，")]),this._v(" "),e("p",[this._v("每天来到奥克城门打卡签到，都能获得神秘力量...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("p",{staticClass:"title"},[this._v("规则")]),this._v(" "),e("p",{staticClass:"explain"},[this._v("每签到一次可获得个1个算力，业主及家属租客可获得2个算力，每日仅限签到一次。")])])}]};var rt=s("VU/8")(it,ot,!1,function(t){s("uy2B")},"data-v-1e7305a0",null).exports,ct={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-wechat"},[n("ul",{staticClass:"explain"},[n("li",[t._v("1、微信搜索“奥园悦生活”或扫描下方二维码并关注；")]),t._v(" "),n("li",[t._v("2、在公众号回复“奥克城”获得幸运码；")]),t._v(" "),n("li",[t._v("3、在下方的输入框输入幸运码验证通过即；")]),t._v(" "),n("li",[t._v("4、普通用户关注公众号可获得个2算力，业主及家属租客可获得4个算力。")])]),t._v(" "),n("div",{staticClass:"qrdode"},[n("img",{attrs:{src:s("jWhC"),alt:""}})]),t._v(" "),n("div",{staticClass:"luck-code"},[n("input",{attrs:{type:"text",placeholder:"请输入幸运码"}})]),t._v(" "),n("div",{staticClass:"btn"},[t._v("\n    确定\n  ")])])}]};var lt=s("VU/8")({name:"",data:function(){return{token:"",roomId:"",num:0,owner:0,isSigned:!1,showSign:!1}},created:function(){},mounted:function(){},methods:{}},ct,!1,function(t){s("w0hZ")},"data-v-59418bec",null).exports;n.a.use(o.a);var dt=new o.a({routes:[{path:"/index",name:"index",component:I},{path:"/rank",name:"rank",meta:{title:"排名"},component:P},{path:"/explain",name:"explain",meta:{title:"奥克秘籍"},component:F},{path:"/points",name:"points",meta:{title:"算力任务"},component:D},{path:"/record",name:"record",meta:{title:"算力记录"},component:q},{path:"/store",name:"store",meta:{title:"市场"},component:G},{path:"/personalCenter",name:"personalCenter",meta:{title:"奥克城 健康生活之城"},component:K},{path:"/detail",name:"detail",meta:{title:"积分明细"},component:z},{path:"/donateSteps",name:"donateSteps",meta:{title:"天天运动"},component:at},{path:"/signIn",name:"signIn",meta:{title:"健康生活之城"},component:rt},{path:"/attention",name:"attention",meta:{title:"关注公众号"},component:lt},{path:"/share",name:"share",meta:{title:"邀请邻居"},component:J},{path:"/sharePage",name:"sharePage",meta:{title:"分享"},component:Y}]});dt.beforeEach(function(t,e,s){if(t.meta.title&&(document.title=t.meta.title),/\/http/.test(t.path)){var n=t.path.split("http")[1];window.location.href="http"+n}else s()});var ut=dt,pt=(s("j1ja"),s("kLF+"),s("IZMb")),vt=s.n(pt);n.a.use(vt.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:ut,components:{App:i},template:"<App/>"})},OjiF:function(t,e){},Q8zP:function(t,e){},QsXp:function(t,e){},S4Pl:function(t,e){},aoVB:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAzCAYAAAAkaACZAAAOGElEQVRogdWaa2yk11nHf+d95+b7ZWzv2nvz7mazu8lku0naQJWqCjVhRIM2qClFVaRCQr6AKj4gIaQgoAQhQFwqJFRxkZBQaSktoFJahhA2ENqoTaNkSdbO+hJfdn1d2zPjub33cw4fZsaeGY/tcbIbxF+ydt9znnPO8z+X5znPc0bwHpC+qgXwB8BnALSmVNpg2YwSauvhoYPaR4b1Suyk6nKXjLy7LI4dJO/keUO6hNsHOCkEpyrFPwSS8TGxdVj9xWEbpK/qCPBXwOeAgp3lnfwKl5UkCjB4L2+GYs2JixhOx0V504xxvlqmXGZKN8xjyqa9WRvp8vb6NJfQIAz87hHebO/nXqAPGAc+ER8TG4fhcCjS6au6HfhH4FEry3RhhUtKEq7rUKAGL3DDDHN/7Sixk2oyOqJPAW1NuvbcNTHnLBgX0DuFKmByfZJzWmHWjWHgdx3l9Y445xDkgB+Lj4mlVnm0TDp9VQ9qxTfsHJ3NyNbCMHGGLrIsDM6aXTrdcUHlRYjTB42hJTdLk0aHzIsBrbi5PskRFRDbU/kK+fY4bULwmfiYeLcVLi2RXn1JfshdM/7QyvLYfmRrEY5SOPYTaiY2oj8E9St1AJS7LiaWXjSO+xZ9rTQQBn5HP/+tDOfXzzzd9tpB8sZBAvam//H2If6yuMnjrRLuPApHHsb1N4xRNJuttKmB5W+Io0cfRHaNtNZAK8LFTcbyS5k/2ZorffIg+X1J2xnvZ5Ql/kgExmArg0e6YPhhGLgIKFaURX9h3JBApjX1cUo3jLzMi0EtWY+fh+GPQLSntcbFWacne936HTvjPbuf3J6k7Yz3ayjx2zpjfgRQ+3VihiF+HkY+DNFuADalzSUAVRQjxXeMLFA4QGffmjFWgy0xAiBt7gPS0U4Yfqg8kWbkgB6AxW9lHnLS/i/bGe937YzX9PjuIm1nvJCd8f4Cza/KVfNUs0ZVCAHdx+HYR6F2K0qHxVorLHPibGnKWAbsPbpS9rwx62+KHWOnIXBYqX52HoVjPwrdJ8vj7gkNN/505aKS+ueBr9gZL9ooUkfaznjdwLeB51TaLCBFU98JEOuD4Ueg/xwY9WYqG1jlVa5FkBEXrFljCvAb65xFY9xbExcay6VFAshtK2tC/1kY+RFoi++lGQSWikz9+ZoGngL+w854ddLbpO2MdwL4LpBUJeMtbRmjzToMRWHwATh6GSJNpkR6zKKbW2t/XVx2bhnXqDku7pp4w10SuyYJAI2QLvONxeE2OHIJhi6V/98MxXnn2Op/br0DfAz4vp3x7qnWGRXCDwKvAZeQYkKnzQcbOxEG9J4ub7GOgeYDAaWgyAN71gLusnjEXRXfB/A2xevOvPHwfvJBifsBq1ldexxGHoG+syCaTPPSd7KXrdveNeAc8AM74z0KYNgZ7wnKKzwsQkZWZc2zdS0NMAfpPPHjFHtHy+SbQYRBxNkQMXadoXpB8HPGKd81X/bSxtGDnKZoJyz62RR7OEthQM9JOP4YxSOP93SKUP2BX/iHzANaiFUgDly1M97PCtdTrtbaFqbIghgFtJbk8GjHwBdRIlDxz5q8tlHao1er8pWTCAURxRAhuqoDaUlJ2RS1j4lHm9bERIys2Y4nIgwAtXbY0R6b0iasSwwIE4cItogQGG10C2PnTq4D8tolwKdLK8LCABElLWIIBP0ASmrbWnF9WVKxtuFIPtITipenmptaqk6B6BW2Ld3AUjLUYcaMUNkuao2UJamNqFBG2KhVUKO1h0JorQUCUwhhYOw2p8oFHZT/AIwIGDGa3gF1AMoBJGCCCO387RbWoNCARKAwhNhelOrYvnKVq0OhTlNQOcLKVyqwlBtqN0LipZ+a+KaS+kkzYnDq6cENUPHchGVoWfY5kYEQRz7et9h7b1tc+6q91hVtQ4AIGUjHWPeXxZDMAcEecu0Q6gPRjq1ytAVZwGsiC4gYmD0QOsKGGZODOlA0H18gIsLNzzmrKy9lRv1MeXBhCroutmkzZG4u/M36oAw0hin+Wbz4k+PtwPeABwFi8dAb7aORXcZl9Kmh8c5TkURz9SozXDQWnRnzxH4yVTg5VmM9DLciGz0tp81ede9+MtZtf3LuK7fP07CXZElN5CadasR3DfiYkUwlLOAKsAbgpIPLQUEtNna6/GJWo9k3bjU61AlEa1dO3znA4O3AMnv2J4wmt/jtdInGw6PYKMy4Vf+/BlxJphKWAZBMJZYoE7cBszjjCC3rN6hf9BP5t+UWzTdYGQKMDj3XChOvSEs3atGmpw+KBTPj9rqfCxp9vS7Our6S2qTM60qF547DSKYSrwPPACjN8eKM81bj+Ldfz+TllnFjPwXCg6olMr6NyZ6nuaa/AbVvZOdtycmNH+bSNBgzLyPHvbysXo6fqfADGq6hyVTi74EvAPgl9bC3EUzW1rt593Lxhj6hJTf3UsLsUeeA4n6KqgBbK9CK1f3kAN/sV+f3qtRKr2au2yf9XHC5rjzQC8UFt3pJ+kKF1zaaXQ1eAL4GULzlHVGeriVgbk5tTjkzoTjgNtVEVLbkPlBBua0K2DepJ6J6Uhg0c1wAQXbc7cjPla5DXXbFK0y5vZVD+LUKnzrsIp1MJTTwLPA60FeYchZq6+2M/UCwpUx/1dhzlcIDal8jFXjb/zafuApC/WrPkNZa9pe8bBDz0v7F2nJnxZ8LHNVb0f/ZCp86NL0EJlMJm7JhW5SeTtiL/rWa6ujmu+kJf80cVU7znJTZry6wz3mVbtlyB+6+JkqHBvSuyAtAOmqhMO+NFhfta0D3TrmetFb9C8AiZcPVNJTd8+abTCXWgCcBy17375MldbtaV1ovnVe+8p0Z8wx69xYVBqaI6snG8ioCt5wRlU7TzGgZIT0tQnr3jtEUM9edE1pp6Wy4Z7bLFVvFaecM5eDkyYr+TbHvdT+ZSlwDngYihWm3VLn+AXSl57JvEwjDXTBlU53je29NWdkDvkPvXjKhftXUGOZnXVu52rRWnGtottNYpQUvJ30dBp6u6L0nDkwMJlOJbwLPK6XPFGfdN6rlhdX8Ga20lltGXOaMXTFvKK7LmbImqJIOXI7sNW5oQJ9rLPO25Ly9FgyiwV51t19G/Jwcd7PBKeD5ir774kDSAMlU4veBL3t5+WE/K2cB0PRlF7beAnAXzNNa1rsfEdJRwnqqSXdaVnInKiAMOLskTOaNqO6ua6T0xtYN9zSAddv5H631cLkzlktzbgL4ckXPA9ES6QqeA14tzLtd2tcuQG4xN6zLUQ/Ou6F+GlJBoT61K/hXAXldY0+1YtfZM3tUuqFIZifczmoQZC051WMRFGeciFK8WtGvJbRMOplKeMCn0NiFafdGWWF9JL+UHwfQloj6q0Zdjjs0qO9p7EcFlBq+c40y4SE1WvttLfvrfk62ATib3oRWehTAvR1M+yVlAZ+q6NcSDrPSJFOJdeCJwFFnnVX/OkB2fmt7G/pr5rBydt6UjIjuwWS2tg/pU2f4Aq9hexssG216OyElHbVSWPC2o7HSLSsEoDz9bmnZOwE8UdGrZRyKNEAylZgAPmut+KPSUVkl1cnCWnH7Bua8ax5H7+S4G7dq4NYnDRt9tdmtttO+aKzMhDtS9Rnulj+rAn0eKBWmnKNoPlvR51A4NGmAZCrxHeC3ClPuBgrSM+mdfnyBu7DDq3GrBg4dtd/SqX+gCw/q7VXNz3q+snccQHHesgGsW96a9PRvVvQ4NN4TaYBkKvFFFehXSgveGypQ95Q2rYVqndwyumTOWAEw2vQQBttbXnrUWeU6Xy1IG53qOICXkyv2mr8dsfnFYFH5KhEU1YSzEbycTCW++F51f8+kK/i8uxXkg7xc3JxK11353AVzREvSAGa3Wq6WN27nwOXotjKdeh5ASZ3N3XDrnu/ys1YaxXpx1t0APv9+lH5fpJOphIfm08U5bymw/XP2lrNNDgXObKgXkDVbVsqG3JkKiFDx1eFB1QuorRtupwp2/Fpgq9vKlQ8U59ybKtBPHcZSN8P7XWmSqURGSf1sadZ7bWNqs85o6ZIw/TUjZ3Sqkwg2tSLdLO9S8dVFs1vdY634WX9L1iUE8nOlRS8rr3k5+blkKtHqC+ieeN+kAZKpxKRXlC9Yi3bYLXh1vtpfM/uVI9aNTj0n/d0+GcpxtWjX09JV64X5+ncn6alskAv6rVvebyRTiT2DmMPgjpAGSP5r4t+d28GX1q+v36qr0ODMmkPhPjUk/ebxs/RwQr2qL/uOO9S4EwqzpTnrlvelx//l/n+7U7reMdIAY/90358V5uzv+VZQ/xbtCYKCOKp18yyI1Dpq590j0qqPT5SvLHvFe/Oxr1744zup5x0lDWCteb+Smcn9V2O5zBoxpZonDXzPw77t7XoDtTe8V+wV/5futI53nHQylZDt8egvALuyppEYTWNvbXrNQtAZM2I+94lvXGz2VvK+cOgfz7WK9FU9Svn5d6im2F0bJ6prKQp055ktC+puahngo6NX+vZNML5X3PGVriI+JhYop5tqA4porJuFWrlQuz9NPWEf+Om7RRjuImmA+Jj4AfBztWVt/WRrv8M9XmOO7dnRK33fvZt63VXSAPEx8XXg+ep3pIO6H8CaseB4zecLo1f6/vZu63TXSQPEx8TvAX8NIARD4bZyBtUIyy2Erk7C31F5Xbnb+EBIV/CLwMsAbXHmAMLdXvWx71XgmdErfXs/Dt5BfGCk42PCAz4NTLV1lQ1XqNOPAbOUDde+rx13Eh/kShMfE1ngk0aYPjOsXRFSg8ATo1f6Dvv70f9/SF/Vjy583X1l4VvZx/4vxv9fB+bpd43Lk1UAAAAASUVORK5CYII="},az9f:function(t,e,s){t.exports=s.p+"static/img/share.d7c201c.png"},d85F:function(t,e,s){t.exports=s.p+"static/img/store.8310cb2.png"},fQhy:function(t,e){},jWhC:function(t,e,s){t.exports=s.p+"static/img/qrcode.d0c7281.png"},jdyi:function(t,e){},mIpw:function(t,e){},qeuM:function(t,e,s){t.exports=s.p+"static/img/energy.11aff57.png"},qzll:function(t,e){},ubiV:function(t,e,s){t.exports=s.p+"static/img/build.f1de5e2.png"},uy2B:function(t,e){},w0hZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3ccfe0136b1f14da981c.js.map