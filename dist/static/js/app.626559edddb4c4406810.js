webpackJsonp([1],{"7vLp":function(t,e,n){t.exports=n.p+"static/img/castle.0a879b7.png"},"8vzP":function(t,e){},BuWR:function(t,e){},HSeP:function(t,e){},IoP4:function(t,e){},KUGr:function(t,e){},MmaJ:function(t,e,n){t.exports=n.p+"static/img/sign.cf1e86f.png"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("wKOd"),n("i3qS")},null,null).exports,o=n("/ocq"),r=n("mtWM"),c=n.n(r),l="//h5api.aylives.cn/aoyuejia/yuepao";c.a.defaults.withCredentials=!0;var u={Axios:c.a,USERINFO:l+"/userinfo",CREATE:function(t,e,n){return l+"/add?pic="+t+"&name="+e+"&people="+n},SHOW:function(t){return l+"/show?id="+t},UPLOAD:"//lars.aylives.cn/Lars/upload",SHARE:function(t){return l+"/api/show?ruleId="+t}},d=n("Zrlr"),p=n.n(d),v=n("wxAW"),h=n.n(v),m=new(function(){function t(){p()(this,t)}return h()(t,[{key:"setCookie",value:function(t,e,n,s){var a=new Date;s?a.setTime(a.getTime()+parseInt(s)):a.setTime(a.getTime()+864e6),document.cookie=t+"="+escape(e)+";domain="+n+";expires="+a.toGMTString()+";path=/"}},{key:"getCookie",value:function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),n=document.cookie.match(e);return n?unescape(n[2]):null}},{key:"pageUrlGetValue",value:function(t){return decodeURI(window.location.href.replace(new RegExp("^(?:.*[&\\?]"+encodeURI(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},{key:"urlGetparam",value:function(t,e){var n=(e||location.search).match(new RegExp("(\\?|&)"+t+"=([^&]*)"));return n?decodeURIComponent(n[2]):null}},{key:"sound",value:function(){if(window.AudioContext=window.AudioContext||window.webkitAudioContext,window.AudioContext){var t=new AudioContext;console.log("audioCtx",t);var e=t.createOscillator(),n=t.createGain();e.connect(n),n.connect(t.destination),e.type="sine",e.frequency.value=520,n.gain.setValueAtTime(0,t.currentTime),n.gain.linearRampToValueAtTime(1,t.currentTime+.01),e.start(t.currentTime),n.gain.exponentialRampToValueAtTime(.001,t.currentTime+1),e.stop(t.currentTime+1)}else alert("AudioContext error")}}]),t}()),f={name:"",props:["time"],data:function(){return{countDownTime:this.time,countTimer:"",year:2018,mounth:11,day:16,hour:15,minute:7,second:30}},created:function(){setInterval(this.change,1e3)},filters:{outputHour:function(t){var e=Math.floor(t/60/60),n=Math.floor(t/60%60),s=Math.floor(t%60);return e=e<10?"0"+e:e,n=n<10?"0"+n:n,s=s<10?"0"+s:s,e>=1?e+":"+n:n+":"+s}},mounted:function(){this.countDown()},methods:{countDown:function(){var t=this;if(clearInterval(this.countTimer),this.countDownTime){t.countTimer=setInterval(function(){t.countDownTime>0?t.countDownTime-=1:clearInterval(t.countTimer)},1e3)}}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"time-text",attrs:{src:this.time}},[this._v("剩余"+this._s(this._f("outputHour")(this.countDownTime)))])])},staticRenderFns:[]};var g=n("VU/8")(f,_,!1,function(t){n("OjiF")},"data-v-4f29243c",null).exports,C=n("9qgI"),x=n.n(C),k=n("xNvf"),w=(k.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[k.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var A=n("VU/8")(w,y,!1,function(t){n("8vzP")},null,null).exports,b={components:{Toast:A,countdown:g},data:function(){return{token:"",currentRoomId:"",points:0,totalPoints:0,city:"",area:"",status:"",name:"",num:"",id:"",clickAble:!0,loading:!0,tip:!1,count:0,showFirst:!0,showSecond:!1,showWait:!1,countDownTime:600,userInfo1:[{id:1,text:1e4},{id:2,text:2e4},{id:3,text:3e4},{id:4,text:4e4},{id:5,text:5e4},{id:6,text:6e4}],userInfo2:[{id:11,text:11111},{id:12,text:21111},{id:13,text:31111},{id:14,text:41111},{id:15,text:51111},{id:16,text:61111}]}},created:function(){this.init()},computed:{},mounted:function(){},methods:{init:function(){this.getToken(),this.getRoomId()},getToken:function(){this.token=m.pageUrlGetValue("token"),m.setCookie("token",this.token,"aylives.cn")},getRoomId:function(){this.currentRoomId=m.pageUrlGetValue("currentRoomId"),m.setCookie("currentRoomId",this.currentRoomId,"aylives.cn")},getParam:function(){var t=this;u.Axios.get(u.USERINFO).then(function(e){200===e.data.code?(t.area=e.data.data.agencyName,t.city=e.data.data.cityName,t.status=e.data.data.added,t.status&&t.$router.push({path:"/poster"})):t.$toast(e.data.msg,1500)})},collect:function(t){var e=t.id,n=document.getElementById("id"+e);this.count++,console.log("count:",this.count),x()(n,{top:40,opacity:0},{duration:1e3,complete:function(){}}),m.sound(),this.refresh(t.text),6===this.count&&(this.showFirst=!1,this.showSecond=!0),12===this.count&&(this.showSecond=!1,this.showWait=!0)},refresh:function(t){this.points+=t},jumpToRank:function(){this.$router.push({path:"/rank"})}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"des-index"},[s("div",{staticClass:"header"},[s("div",{staticClass:"castle"},[s("router-link",{staticClass:"self-castle",attrs:{to:"/personalCenter"}},[s("img",{attrs:{src:n("7vLp"),alt:""}}),t._v(" "),s("p",{staticClass:"title"},[t._v("我的城堡")])]),t._v(" "),s("ul",{staticClass:"point-info"},[s("li",{staticClass:"point-data"},[s("span",[t._v("奥克积分："+t._s(t.points))])]),t._v(" "),s("li",{staticClass:"point-data total-point"},[s("span",[t._v("算力："+t._s(t.totalPoints))])])])],1),t._v(" "),s("ul",{staticClass:"introduce"},[s("li",{staticClass:"introduce-data"},[s("router-link",{attrs:{to:"/rank"}},[t._v("\n          排名\n        ")])],1),t._v(" "),s("li",{staticClass:"introduce-data total-point"},[s("router-link",{attrs:{to:"/explain"}},[t._v("\n          奥克基地\n        ")])],1)])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.showFirst,expression:"showFirst"}],staticClass:"vip-animation"},t._l(t.userInfo1,function(e,a){return s("li",{key:a,staticClass:"animation",attrs:{id:"id"+e.id},on:{click:function(n){t.collect(e)}}},[s("img",{staticClass:"bubble",attrs:{src:n("aoVB"),alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(e.text))])])}))]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.showSecond,expression:"showSecond"}],staticClass:"vip-animation"},t._l(t.userInfo2,function(e,a){return s("li",{key:a,staticClass:"animation",attrs:{id:"id"+e.id},on:{click:function(n){t.collect(e)}}},[s("img",{staticClass:"bubble",attrs:{src:n("aoVB"),alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(e.text))])])}))]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.showWait,expression:"showWait"}],staticClass:"vip-animation"},[s("li",{staticClass:"animation"},[s("img",{staticClass:"bubble",attrs:{src:n("aoVB"),alt:""}}),t._v(" "),s("countdown",{staticClass:"count-down",attrs:{time:t.countDownTime}})],1)])]),t._v(" "),s("div",{staticClass:"content"}),t._v(" "),s("div",{staticClass:"footer"},[s("router-link",{staticClass:"des-btn",attrs:{to:"/getPoints"}},[s("img",{attrs:{src:n("qeuM")}}),t._v(" "),s("p",[t._v("获取能量")])]),t._v(" "),s("router-link",{staticClass:"des-btn btn",attrs:{to:"/build"}},[s("img",{attrs:{src:n("ubiV")}}),t._v(" "),s("p",[t._v("共建计划")])]),t._v(" "),s("router-link",{staticClass:"des-btn btn",attrs:{to:"/share"}},[s("img",{attrs:{src:n("az9f")}}),t._v(" "),s("p",[t._v("邀请好友")])]),t._v(" "),s("router-link",{staticClass:"des-btn btn",attrs:{to:"/store"}},[s("img",{attrs:{src:n("d85F")}}),t._v(" "),s("p",[t._v("市场")])])],1)],1)},staticRenderFns:[]};var I=n("VU/8")(b,S,!1,function(t){n("vf5n")},"data-v-702a0fa2",null).exports,R=(Boolean,Boolean,Boolean,{name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}}),P={render:function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},staticRenderFns:[]};var T=n("VU/8")(R,P,!1,function(t){n("S4Pl")},null,null).exports,N={components:{XTable:T},data:function(){return{token:"",currentRoomId:"",uploadText:"",num:0,points:0,id:"",loading:!0,tip:!1,info:[{rank:1,name:"qq1",points:1e5},{rank:2,name:"qq2",points:1e5},{rank:3,name:"qq3",points:1e5},{rank:4,name:"qq4",points:1e5},{rank:5,name:"qq5",points:1e5},{rank:6,name:"qq6",points:1e5},{rank:7,name:"qq7",points:1e5}]}},created:function(){},mounted:function(){},methods:{}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-rank"},[n("div",{staticClass:"header"},[n("p",[t._v("奥克城荣誉榜")]),t._v(" "),n("ul",[n("li",[t._v("\n        奥克城总注册居民 "+t._s(t.num)+"\n      ")]),t._v(" "),n("li",[t._v("\n        我的算力排名 "+t._s(t.points)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"content"},[n("p",[t._v("算力排行榜")]),t._v(" "),n("x-table",{staticStyle:{"background-color":"#fff"},attrs:{"cell-bordered":!1}},[n("thead",[n("tr",[n("th",[t._v("名次")]),t._v(" "),n("th",[t._v("账户")]),t._v(" "),n("th",[t._v("算力值")])])]),t._v(" "),n("tbody",t._l(t.info,function(e,s){return n("tr",{key:s},[n("td",[t._v(t._s(e.rank))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.points))])])}))])],1)])},staticRenderFns:[]};var F=n("VU/8")(N,V,!1,function(t){n("Np8g")},"data-v-3b57101e",null).exports,U={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"des-explain"},[this._v("\n  奥克基地\n")])},staticRenderFns:[]};var B=n("VU/8")(null,U,!1,function(t){n("Q8zP")},"data-v-5869db88",null).exports,X={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-points"},[n("div",{staticClass:"general-task"},[n("p",{staticClass:"title"},[t._v("普通任务")]),t._v(" "),n("ul",{staticClass:"des-general"},[n("li",[t._v("签到")]),t._v(" "),n("li",[t._v("运动捐步")]),t._v(" "),n("li",[t._v("认证房屋")]),t._v(" "),n("li",[t._v("关注公众号")]),t._v(" "),n("li",[t._v("邀请邻居")]),t._v(" "),n("li",[t._v("租住")])])]),t._v(" "),n("div",{staticClass:"special-task"},[n("p",{staticClass:"title"},[t._v("专属任务")]),t._v(" "),n("ul",{staticClass:"des-special"},[n("li",[t._v("缴费")]),t._v(" "),n("li",[t._v("APP开门")]),t._v(" "),n("li",[t._v("悦分享发帖")]),t._v(" "),n("li",[t._v("邻居串门")]),t._v(" "),n("li",[t._v("小区绿化")])])])])}]};var D=n("VU/8")({name:"points",data:function(){return{token:"",roomId:"",num:0,owner:0,isSigned:!1,showSign:!1}},created:function(){},mounted:function(){},methods:{}},X,!1,function(t){n("exnD")},"data-v-2ef76fd7",null).exports,E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-record"},[t.recordlist?n("ul",{staticClass:"record-list"},t._l(t.recordlist,function(e,s){return n("li",{key:s},[n("div",{staticClass:"left"},[n("p",[t._v(t._s(e.type))]),t._v(" "),n("p",{staticClass:"time"},[t._v(t._s(e.time))])]),t._v(" "),n("div",{staticClass:"right"},[t._v("+"+t._s(e.points))])])})):n("div",{staticClass:"no-points"},[t._v("\n    暂无算力记录\n  ")])])},staticRenderFns:[]};var q=n("VU/8")({name:"points",data:function(){return{token:"",roomId:"",num:0,owner:0,points:0,recordlist:null}},created:function(){},computed:{},mounted:function(){this.getHistoryPoints()},methods:{getHistoryPoints:function(){this.recordlist=[{type:"获取算力名称",time:"2018-11-29 10:20:00",points:1},{type:"签到",time:"2018-11-29 10:10:00",points:9},{type:"关注公众号",time:"2018-11-29 10:10:00",points:10},{type:"运动捐步",time:"2018-11-29 10:10:00",points:100},{type:"抽奖",time:"2018-11-29 10:10:00",points:30},{type:"租住",time:"2018-11-29 10:10:00",points:20},{type:"邀请邻居",time:"2018-11-29 10:10:00",points:40}]}}},E,!1,function(t){n("QsXp")},"data-v-4bdaedfb",null).exports,O={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"des-store"},[this._v("\n  市场\n")])},staticRenderFns:[]};var G=n("VU/8")(null,O,!1,function(t){n("fQhy")},"data-v-522a53ff",null).exports,L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-personal"},[n("div",{staticClass:"center-info"},[n("img",{staticClass:"user-img",attrs:{src:t.personalInfo.userAvater}}),t._v(" "),n("ul",{staticClass:"explain"},[n("li",{staticClass:"name"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),n("li",{staticClass:"title"},[t._v("\n        "+t._s(t.honor)+"\n      ")]),t._v(" "),n("li",{staticClass:"rank"},[t._v("\n        第"+t._s(t.rank)+"名市民\n      ")])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"menu"},[e("li",[this._v("我的算力")]),this._v(" "),e("li",[this._v("我的奥克积分")]),this._v(" "),e("li",[this._v("我的订单")])])}]};var K=n("VU/8")({data:function(){return{name:"paopao",honor:"奥克城创世居民",rank:"",points:"",msg:"",personalInfo:"",userId:"",delId:"",allPreviewerList:[],showConfirm:!1,scrollBottom:!1,showDelete:!1,count:0,pageSize:5}},mounted:function(){},computed:{},methods:{}},L,!1,function(t){n("qMLb")},"data-v-61008c36",null).exports,W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{staticClass:"pulse-out",style:this.loadingStyle},[e("span"),e("span"),e("span"),e("span"),e("span")])])},staticRenderFns:[]};var z=n("VU/8")({props:["color"],computed:{loadingStyle:function(){return{color:this.color||"#fff"}}}},W,!1,function(t){n("KUGr")},"data-v-52d176d0",null).exports,M={components:{loading:z},data:function(){return{token:"",currentRoomId:"",photoUrl:"",name:"",id:0,loading:!0}},created:function(){this.init()},mounted:function(){this.getParam()},methods:{init:function(){this.getToken(),this.getRoomId()},getToken:function(){m.getCookie("token")?this.token=m.getCookie("token"):(this.token=m.pageUrlGetValue("token"),m.setCookie("token",this.token,"aylives.cn"))},getRoomId:function(){m.getCookie("currentRoomId")?this.currentRoomId=m.getCookie("currentRoomId"):(this.currentRoomId=m.pageUrlGetValue("currentRoomId"),m.setCookie("currentRoomId",this.currentRoomId,"aylives.cn"))},getParam:function(){var t=this;u.Axios.get(u.SHOW(this.id)).then(function(e){200===e.data.code?(t.loading=!1,t.photoUrl=e.data.data.pic,t.name=e.data.data.name,t.id=e.data.data.id):t.$toast(e.data.msg,1500)})},share:function(){var t=this.id,e=this.photoUrl+"/thumbnail/200x";document.location="jsinteractive://share?url=https://h5.aylives.cn/points/#/sharePage?"+t+"&image="+e+"&title=奥克城&content=奥克城活动。"}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"poster-container"},[n("div",{staticClass:"des-img"},[t.loading?n("loading",{staticClass:"loading-image",attrs:{color:"#FF9246"}}):n("div",{staticClass:"image",style:"background-image: url("+t.photoUrl+")"},[n("div",{staticClass:"text"},[n("p",[t._v("我是"+t._s(t.name))]),t._v(" "),n("p",[t._v("我为奥悦节代言")])])])],1),t._v(" "),n("div",{staticClass:"share-btn",on:{click:t.share}},[t._v("分享至微信")])])},staticRenderFns:[]};var j=n("VU/8")(M,H,!1,function(t){n("wI6J")},"data-v-7cd105da",null).exports,J={data:function(){return{shareInfo:"",shareId:"",msg:"",userHappyNum:0}},mounted:function(){var t=this,e=window.location.href;if(!(e.indexOf("#")>-1))return this.msg="您想看的照片被藏起来了哦！",null;this.shareId=e.split("#",2)[1].split("?",2)[1],u.Axios.get(u.SHARE(this.shareId)).then(function(e){e.data&&200===e.data.code?(t.shareInfo=e.data.data,t.userHappyNum=t.shareInfo.userHappyNum):(t.shareInfo=null,t.msg="内容暂时保密哦～")})},methods:{downLoadApp:function(){window.location="https://h5.aylives.cn/app/index.html"},report:function(t){var e=this,n=t.happyMomentId;u.Axios.post(u.REPORT(n)).then(function(t){200===t.data.code?e.$vux.toast.show({text:t.data.msg,type:"success"}):e.$vux.toast.show({text:t.data.msg,type:"warn"})})}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-body"},[t.shareInfo?n("div",{staticClass:"des-info"},[n("ul",{staticClass:"photo-list-info"},[n("li",{staticClass:"user-info"},[n("img",{staticClass:"user-image",attrs:{src:t.shareInfo.userAvater,alt:"头像"}}),t._v(" "),n("div",{staticClass:"content-right"},[n("span",{staticClass:"user-name"},[t._v(t._s(t.shareInfo.userName))]),t._v(" "),t.shareInfo.happyMoment?n("div",{staticClass:"content-text"},[t._v(t._s(t.shareInfo.happyMoment.happyMomentContent))]):t._e(),t._v(" "),n("flexbox",{staticClass:"content-photo",attrs:{gutter:2}},t._l(t.shareInfo.happyMoment.happyMomentPhotosArray,function(e,s){return t.shareInfo.happyMoment?n("flexbox-item",{key:s},[1===t.shareInfo.happyMoment.happyMomentPhotosSize?n("img",{staticClass:"photo",staticStyle:{width:"60%"},attrs:{src:e}}):n("div",{staticClass:"figure-photo",style:"background-image: url("+e+")"})]):t._e()}))],1)]),t._v(" "),n("div",{staticClass:"content-bottom"},[t.shareInfo.happyMoment?n("span",[t._v(t._s(t.shareInfo.happyMoment.happyMomentPraise))]):t._e()])])]):n("div",{staticClass:"msg-box"},[n("p",{staticClass:"msg"},[t._v(t._s(t.msg))])]),t._v(" "),n("div",{staticClass:"share-info"},[n("div",{staticClass:"download-title"},[n("div",{staticClass:"download-text",on:{click:t.downLoadApp}},[t._v("下载奥悦家为好友点赞")])]),t._v(" "),n("div",{staticClass:"luck-container"},[n("div",{staticClass:"luck-code"},[n("p",{staticClass:"code"},[t._v("幸运码")]),t._v(" "),n("p",[t._v(t._s(t.userHappyNum))])]),t._v(" "),n("div",{staticClass:"radius"})]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"active-rule"},[n("p",{staticClass:"rule-title"},[t._v("活动规则")]),t._v(" "),n("ul",{staticClass:"explain"},[n("li",[t._v("1.每个小区业主单组照片点赞数第一名可获得价值169元的美的养生壶1个、第2~5名可获得600ML九阳多功能料理机1台、第6~10名可获得65cm粉红豹1只;")]),t._v(" "),n("li",[t._v("2.业主可邀请微信好友搜索幸运码为自己点赞助力;")]),t._v(" "),n("li",[t._v("3.活动时间为2018年09月22日至2018年10月21日;")]),t._v(" "),n("li",[t._v("4.每人每天可为每组照片点赞10次;")]),t._v(" "),n("li",[t._v("5.领取方式：奥悦节闭幕式当天活动现场领取（具体时间以各服务中心安排为准)。")])])])}]};var Q=n("VU/8")(J,Z,!1,function(t){n("IoP4")},"data-v-79bc5e82",null).exports,Y=(Number,Array,String,Number,String,Number,String,Boolean,{name:"x-circle",props:{strokeWidth:{type:Number,default:1},strokeColor:{type:[Array,String],default:"#3FC7FA"},trailWidth:{type:Number,default:1},trailColor:{type:String,default:"#D9D9D9"},percent:{type:Number,default:0},strokeLinecap:{type:String,default:"round"},anticlockwise:{type:Boolean,default:!1}},computed:{radius:function(){return 50-this.strokeWidth/2},pathString:function(){return"M 50,50 m 0,-"+this.radius+"\n      a "+this.radius+","+this.radius+" 0 1 1 0,"+2*this.radius+"\n      a "+this.radius+","+this.radius+" 0 1 1 0,-"+2*this.radius},len:function(){return 2*Math.PI*this.radius},pathStyle:function(){return{"stroke-dasharray":this.len+"px "+this.len+"px","stroke-dashoffset":(this.anticlockwise?this.percent-100:100-this.percent)/100*this.len+"px",transition:"stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"}},isGradient:function(){return"string"!=typeof this.strokeColor}}}),$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-circle"},[n("svg",{attrs:{viewBox:"0 0 100 100"}},[t.isGradient?n("defs",[n("linearGradient",{attrs:{id:"vux-circle-gradient",x1:"10%",y1:"45%",x2:"50%",y2:"0%"}},[n("stop",{style:{"stop-color":t.strokeColor[0],"stop-opacity":1},attrs:{offset:"0%"}}),t._v(" "),n("stop",{style:{"stop-color":t.strokeColor[1],"stop-opacity":1},attrs:{offset:"100%"}})],1)],1):t._e(),t._v(" "),n("path",{attrs:{d:t.pathString,stroke:t.trailColor,"stroke-width":t.trailWidth,"fill-opacity":0}}),t._v(" "),n("path",{style:t.pathStyle,attrs:{d:t.pathString,"stroke-linecap":t.strokeLinecap,stroke:t.isGradient?"url(#vux-circle-gradient)":t.strokeColor,"stroke-width":t.strokeWidth,"fill-opacity":"0"}})]),t._v(" "),n("div",{staticClass:"vux-circle-content"},[t._t("default")],2)])},staticRenderFns:[]};var tt=n("VU/8")(Y,$,!1,function(t){n("BuWR")},null,null).exports,et={components:{XCircle:tt},data:function(){return{todaySteps:0,encyptSteps:0,currentTime:"",donateData:"",donateSteps:0,communityDonateSteps:0,rank:0,token:"",currentRoomId:"",isDonated:!1}},created:function(){this.init()},mounted:function(){this.getDonateData()},computed:{percent:function(){return this.isDonated?0:this.todaySteps>=5e4?100:this.todaySteps/5e4*100},clickAble:function(){return this.todaySteps>=100&&!this.isDonated}},methods:{init:function(){this.todaySteps=m.pageUrlGetValue("steps"),this.encyptSteps=m.pageUrlGetValue("encyptSteps"),this.currentTime=m.pageUrlGetValue("currentTime"),this.token=m.pageUrlGetValue("token"),this.currentRoomId=m.pageUrlGetValue("currentRoomId"),m.getCookie("token")||m.setCookie("token",this.token,"aylives.cn"),m.getCookie("currentRoomId")||m.setCookie("currentRoomId",this.currentRoomId,"aylives.cn")},getDonateData:function(){var t=this;u.Axios.get(u.DONATE_API).then(function(e){200===e.data.code?e.data.data&&(t.donateData=e.data.data,t.donateSteps=e.data.data.donateSteps,t.communityDonateSteps=e.data.data.community.communityDonateSteps,t.rank=e.data.data.community.rank):console.log("tip",e.data.msg)})},donate:function(){var t=this;u.Axios.post(u.DONATE_STEPS(this.encyptSteps,this.currentTime)).then(function(e){200===e.data.code?(t.isDonated=!0,t.getDonateData()):t.$vux.toast.show({text:e.data.msg,type:"warn"})})}}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-steps"},[n("div",{staticClass:"steps-container"},[n("div",{staticClass:"step-content"},[n("div",{staticClass:"step-detail"},[n("x-circle",{attrs:{percent:t.percent,"stroke-width":7,"trail-width":3,"stroke-color":"#FF6800","trail-color":"#FF9E3F"}},[n("span",[n("p",{staticClass:"today-steps"},[t._v("今日步数")]),t._v(" "),n("p",[t._v(t._s(t.todaySteps))])])])],1),t._v(" "),t.clickAble?n("div",{staticClass:"donate-btn",on:{click:t.donate}},[t._v("兑换算力")]):n("div",{staticClass:"donate-btn-disable"},[t._v("兑换算力")])]),t._v(" "),t.donateData?n("ul",{staticClass:"donate-info"},[n("li",[n("p",{staticClass:"donate-data"},[t._v(t._s(t.donateSteps)+"步")]),t._v(" "),n("p",{staticClass:"donate-text"},[t._v("今日已兑换算力")])]),t._v(" "),n("li",[n("p",{staticClass:"donate-data"},[t._v(t._s(t.communityDonateSteps)+"步")]),t._v(" "),n("p",{staticClass:"donate-text"},[t._v("累计兑换算力")])])]):n("ul",{staticClass:"donate-info"},[t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",{staticClass:"donate-data"},[this._v("-")]),this._v(" "),e("p",{staticClass:"donate-text"},[this._v("今日已兑换算力")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",{staticClass:"donate-data"},[this._v("-")]),this._v(" "),e("p",{staticClass:"donate-text"},[this._v("累计兑换算力")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"explain"},[e("div",{staticClass:"explain-title"},[this._v("\n      规则\n    ")]),this._v(" "),e("div",{staticClass:"donate-explain"},[this._v("\n      普通用户兑换一次可得1个算力，认证成为奥园业主、家属、租客参与兑换可得2个算力；\n    ")])])}]};var st=n("VU/8")(et,nt,!1,function(t){n("HSeP")},"data-v-2ffb5eca",null).exports,at={name:"sign",data:function(){return{token:"",roomId:"",num:0,owner:0,points:0,recordlist:null}},created:function(){},computed:{},mounted:function(){},methods:{signIn:function(){alert("签到")}}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"des-sgin"},[e("div",{staticClass:"sign"},[this._m(0),this._v(" "),e("img",{staticClass:"sign-img",attrs:{src:n("MmaJ")},on:{click:this.signIn}})]),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sign-text"},[e("p",[this._v("传说，")]),this._v(" "),e("p",[this._v("每天来到奥克城门打卡签到，都能获得神秘力量...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("p",{staticClass:"title"},[this._v("规则")]),this._v(" "),e("p",{staticClass:"explain"},[this._v("每签到一次可获得个1个算力，业主及家属租客可获得2个算力，每日仅限签到一次。")])])}]};var ot=n("VU/8")(at,it,!1,function(t){n("rSBR")},"data-v-b2348e00",null).exports;s.a.use(o.a);var rt=new o.a({routes:[{path:"/index",name:"index",component:I},{path:"/rank",name:"rank",meta:{title:"排名"},component:F},{path:"/explain",name:"explain",meta:{title:"奥克秘籍"},component:B},{path:"/getPoints",name:"getPoints",meta:{title:"算力任务"},component:D},{path:"/record",name:"record",meta:{title:"算力记录"},component:q},{path:"/store",name:"store",meta:{title:"市场"},component:G},{path:"/personalCenter",name:"personalCenter",meta:{title:"我的城堡"},component:K},{path:"/donateSteps",name:"donateSteps",meta:{title:"天天运动"},component:st},{path:"/signIn",name:"signIn",meta:{title:"健康生活之城"},component:ot},{path:"/share",name:"share",meta:{title:"邀请邻居"},component:j},{path:"/sharePage",name:"sharePage",meta:{title:"分享"},component:Q}]}),ct=(n("j1ja"),n("kLF+"),n("IZMb")),lt=n.n(ct);s.a.use(lt.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:rt,components:{App:i},template:"<App/>"})},Np8g:function(t,e){},OjiF:function(t,e){},Q8zP:function(t,e){},QsXp:function(t,e){},S4Pl:function(t,e){},aoVB:function(t,e){t.exports="data:image/png;base64,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"},az9f:function(t,e,n){t.exports=n.p+"static/img/share.d7c201c.png"},d85F:function(t,e,n){t.exports=n.p+"static/img/store.8310cb2.png"},exnD:function(t,e){},fQhy:function(t,e){},i3qS:function(t,e){},qMLb:function(t,e){},qeuM:function(t,e,n){t.exports=n.p+"static/img/energy.11aff57.png"},rSBR:function(t,e){},ubiV:function(t,e,n){t.exports=n.p+"static/img/build.f1de5e2.png"},vf5n:function(t,e){},wI6J:function(t,e){},wKOd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.626559edddb4c4406810.js.map