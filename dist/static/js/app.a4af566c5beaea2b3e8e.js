webpackJsonp([1],{"6agf":function(t,e){},"7vLp":function(t,e,n){t.exports=n.p+"static/img/castle.0a879b7.png"},"8a/o":function(t,e){},"9veP":function(t,e){},AXaz:function(t,e){},DIwI:function(t,e){},JO8s:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},s,!1,function(t){n("rdyr"),n("JO8s")},null,null).exports,i=n("/ocq"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{staticClass:"pulse-out",style:this.loadingStyle},[e("span"),e("span"),e("span"),e("span"),e("span")])])},staticRenderFns:[]};var c=n("VU/8")({props:["color"],computed:{loadingStyle:function(){return{color:this.color||"#fff"}}}},r,!1,function(t){n("9veP")},"data-v-79dab122",null).exports,l=n("mtWM"),d=n.n(l),u="//h5api.aylives.cn/aoyuejia/yuepao";d.a.defaults.withCredentials=!0;var p={Axios:d.a,USERINFO:u+"/userinfo",CREATE:function(t,e,n){return u+"/add?pic="+t+"&name="+e+"&people="+n},SHOW:function(t){return u+"/show?id="+t},UPLOAD:"//lars.aylives.cn/Lars/upload",SHARE:function(t){return u+"/api/show?ruleId="+t}},v=n("Zrlr"),h=n.n(v),m=n("wxAW"),f=n.n(m),g=new(function(){function t(){h()(this,t)}return f()(t,[{key:"setCookie",value:function(t,e,n,a){var s=new Date;a?s.setTime(s.getTime()+parseInt(a)):s.setTime(s.getTime()+864e6),document.cookie=t+"="+escape(e)+";domain="+n+";expires="+s.toGMTString()+";path=/"}},{key:"getCookie",value:function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),n=document.cookie.match(e);return n?unescape(n[2]):null}},{key:"pageUrlGetValue",value:function(t){return decodeURI(window.location.href.replace(new RegExp("^(?:.*[&\\?]"+encodeURI(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},{key:"urlGetparam",value:function(t,e){var n=(e||location.search).match(new RegExp("(\\?|&)"+t+"=([^&]*)"));return n?decodeURIComponent(n[2]):null}}]),t}()),A={components:{loading:c},data:function(){return{token:"",currentRoomId:"",uploadText:"",points:0,totalPoints:0,city:"",area:"",status:"",name:"",num:"",id:"",clickAble:!0,uploaded:!1,loading:!0,tip:!1,showBubble:!0,userInfo:[{text:1e4},{text:2e4},{text:3e4},{text:4e4},{text:5e4},{text:6e4},{text:7e4},{text:8e4},{text:9e4},{text:101111}]}},created:function(){this.init()},mounted:function(){0===this.currentRoomId?this.$toast("您还不是奥园业主，请先认证房屋。",1500):this.getParam()},methods:{init:function(){this.getToken(),this.getRoomId()},getToken:function(){this.token=g.pageUrlGetValue("token"),g.setCookie("token",this.token,"aylives.cn")},getRoomId:function(){this.currentRoomId=g.pageUrlGetValue("currentRoomId"),g.setCookie("currentRoomId",this.currentRoomId,"aylives.cn")},getParam:function(){var t=this;p.Axios.get(p.USERINFO).then(function(e){200===e.data.code?(t.area=e.data.data.agencyName,t.city=e.data.data.cityName,t.status=e.data.data.added,t.status&&t.$router.push({path:"/poster"})):t.$toast(e.data.msg,1500)})},collect:function(t){alert("collect"),console.log(t),this.showBubble=!1},jumpToRank:function(){this.$router.push({path:"/rank"})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"des-index"},[a("div",{staticClass:"header"},[a("div",{staticClass:"castle"},[a("router-link",{staticClass:"self-castle",attrs:{to:"/personalCenter"}},[a("img",{attrs:{src:n("7vLp"),alt:""}}),t._v(" "),a("p",{staticClass:"title"},[t._v("我的城堡")])]),t._v(" "),a("ul",{staticClass:"point-info"},[a("li",{staticClass:"point-data"},[a("span",[t._v("奥克积分："+t._s(t.points))])]),t._v(" "),a("li",{staticClass:"point-data total-point"},[a("span",[t._v("算力："+t._s(t.totalPoints))])])])],1),t._v(" "),a("ul",{staticClass:"introduce"},[a("li",{staticClass:"introduce-data",on:{click:t.jumpToRank}},[a("span",[t._v("排名")])]),t._v(" "),t._m(0)])]),t._v(" "),a("ul",{staticClass:"vip-animation"},t._l(t.userInfo,function(e,s){return a("li",{directives:[{name:"show",rawName:"v-show",value:t.showBubble,expression:"showBubble"}],key:s,staticClass:"animation",on:{click:t.collect}},[a("img",{staticClass:"bubble",attrs:{id:s,src:n("aoVB"),alt:""}}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(e.text))])])})),t._v(" "),a("div",{staticClass:"content"}),t._v(" "),a("div",{staticClass:"footer"},[a("router-link",{staticClass:"des-btn",attrs:{to:"/getPoints"}},[a("img",{attrs:{src:n("qeuM")}}),t._v(" "),a("p",[t._v("获取能量")])]),t._v(" "),a("router-link",{staticClass:"des-btn btn",attrs:{to:"/share"}},[a("img",{attrs:{src:n("az9f")}}),t._v(" "),a("p",[t._v("邀请好友")])]),t._v(" "),a("router-link",{staticClass:"des-btn btn",attrs:{to:"/store"}},[a("img",{attrs:{src:n("d85F")}}),t._v(" "),a("p",[t._v("市场")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"introduce-data total-point"},[e("span",[this._v("共建计划")])])}]};var _=n("VU/8")(A,C,!1,function(t){n("dnQk")},"data-v-14e64004",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-points"},[n("div",{staticClass:"general-task"},[n("p",{staticClass:"title"},[t._v("普通任务")]),t._v(" "),n("ul",{staticClass:"des-general"},[n("li",[t._v("签到")]),t._v(" "),n("li",[t._v("运动捐步")]),t._v(" "),n("li",[t._v("认证房屋")]),t._v(" "),n("li",[t._v("关注公众号")]),t._v(" "),n("li",[t._v("邀请邻居")]),t._v(" "),n("li",[t._v("租住")])])]),t._v(" "),n("div",{staticClass:"special-task"},[n("p",{staticClass:"title"},[t._v("专属任务")]),t._v(" "),n("ul",{staticClass:"des-special"},[n("li",[t._v("缴费")]),t._v(" "),n("li",[t._v("APP开门")]),t._v(" "),n("li",[t._v("悦分享发帖")]),t._v(" "),n("li",[t._v("邻居串门")]),t._v(" "),n("li",[t._v("小区绿化")])])])])}]};var y=n("VU/8")({name:"points",data:function(){return{token:"",roomId:"",num:0,owner:0,isSigned:!1,showSign:!1}},created:function(){},mounted:function(){},methods:{}},k,!1,function(t){n("exnD")},"data-v-2ef76fd7",null).exports,b={components:{loading:c},data:function(){return{token:"",currentRoomId:"",uploadText:"",points:0,totalPoints:0,city:"",area:"",status:"",name:"",num:"",id:"",clickAble:!0,uploaded:!1,loading:!0,tip:!1,showBubble:!0}},created:function(){},mounted:function(){},methods:{}},x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"des-index"},[e("p",[this._v("市场正在开发中，敬请期待")])])}]};var S=n("VU/8")(b,x,!1,function(t){n("hq5Z")},"data-v-54bc7882",null).exports,R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-personal"},[n("div",{staticClass:"center-info"},[n("img",{staticClass:"user-img",attrs:{src:t.personalInfo.userAvater}}),t._v(" "),n("ul",{staticClass:"explain"},[n("li",{staticClass:"name"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),n("li",{staticClass:"title"},[t._v("\n        "+t._s(t.honor)+"\n      ")]),t._v(" "),n("li",{staticClass:"rank"},[t._v("\n        第"+t._s(t.rank)+"名市民\n      ")])])]),t._v(" "),n("div",{staticClass:"detail"},[t._v("\n    奥克积分"+t._s(t.points)+"\n  ")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"menu"},[e("li",[this._v("奥克基地")]),this._v(" "),e("li",[this._v("我的算力")]),this._v(" "),e("li",[this._v("我的订单")])])}]};var w=n("VU/8")({data:function(){return{name:"paopao",honor:"奥克城创世居民",rank:"",points:"",msg:"",personalInfo:"",userId:"",delId:"",allPreviewerList:[],showConfirm:!1,scrollBottom:!1,showDelete:!1,count:0,pageSize:5}},mounted:function(){},computed:{},methods:{}},R,!1,function(t){n("Y9YF")},"data-v-00f2fe64",null).exports,I={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"des-index"})},staticRenderFns:[]};var P=n("VU/8")(null,I,!1,function(t){n("8a/o")},"data-v-519dffe6",null).exports,U=(Boolean,Boolean,Boolean,{name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}}),V={render:function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},staticRenderFns:[]};var X=n("VU/8")(U,V,!1,function(t){n("S4Pl")},null,null).exports,B={components:{XTable:X},data:function(){return{token:"",currentRoomId:"",uploadText:"",num:0,points:0,id:"",loading:!0,tip:!1,info:[{rank:1,name:"qq1",points:1e5},{rank:2,name:"qq2",points:1e5},{rank:3,name:"qq3",points:1e5},{rank:4,name:"qq4",points:1e5},{rank:5,name:"qq5",points:1e5},{rank:6,name:"qq6",points:1e5},{rank:7,name:"qq7",points:1e5}]}},created:function(){},mounted:function(){},methods:{}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-rank"},[n("div",{staticClass:"header"},[n("p",[t._v("奥克城荣誉榜")]),t._v(" "),n("ul",[n("li",[t._v("\n        奥克城总注册居民 "+t._s(t.num)+"\n      ")]),t._v(" "),n("li",[t._v("\n        我的算力排名 "+t._s(t.points)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"content"},[n("p",[t._v("算力排行榜")]),t._v(" "),n("x-table",{staticStyle:{"background-color":"#fff"},attrs:{"cell-bordered":!1}},[n("thead",[n("tr",[n("th",[t._v("名次")]),t._v(" "),n("th",[t._v("账户")]),t._v(" "),n("th",[t._v("算力值")])])]),t._v(" "),n("tbody",t._l(t.info,function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.rank))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.points))])])}))])],1)])},staticRenderFns:[]};var N=n("VU/8")(B,G,!1,function(t){n("Np8g")},"data-v-3b57101e",null).exports,T={components:{loading:c},data:function(){return{token:"",currentRoomId:"",photoUrl:"",name:"",id:0,loading:!0}},created:function(){this.init()},mounted:function(){this.getParam()},methods:{init:function(){this.getToken(),this.getRoomId()},getToken:function(){g.getCookie("token")?this.token=g.getCookie("token"):(this.token=g.pageUrlGetValue("token"),g.setCookie("token",this.token,"aylives.cn"))},getRoomId:function(){g.getCookie("currentRoomId")?this.currentRoomId=g.getCookie("currentRoomId"):(this.currentRoomId=g.pageUrlGetValue("currentRoomId"),g.setCookie("currentRoomId",this.currentRoomId,"aylives.cn"))},getParam:function(){var t=this;p.Axios.get(p.SHOW(this.id)).then(function(e){200===e.data.code?(t.loading=!1,t.photoUrl=e.data.data.pic,t.name=e.data.data.name,t.id=e.data.data.id):t.$toast(e.data.msg,1500)})},share:function(){var t=this.id,e=this.photoUrl+"/thumbnail/200x";document.location="jsinteractive://share?url=https://h5.aylives.cn/points/#/sharePage?"+t+"&image="+e+"&title=奥克城&content=奥克城活动。"}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"poster-container"},[n("div",{staticClass:"des-img"},[t.loading?n("loading",{staticClass:"loading-image",attrs:{color:"#FF9246"}}):n("div",{staticClass:"image",style:"background-image: url("+t.photoUrl+")"},[n("div",{staticClass:"text"},[n("p",[t._v("我是"+t._s(t.name))]),t._v(" "),n("p",[t._v("我为奥悦节代言")])])])],1),t._v(" "),n("div",{staticClass:"share-btn",on:{click:t.share}},[t._v("分享至微信")])])},staticRenderFns:[]};var q=n("VU/8")(T,O,!1,function(t){n("DIwI")},"data-v-faea026c",null).exports,z={data:function(){return{shareInfo:"",shareId:"",msg:"",userHappyNum:0}},mounted:function(){var t=this,e=window.location.href;if(!(e.indexOf("#")>-1))return this.msg="您想看的照片被藏起来了哦！",null;this.shareId=e.split("#",2)[1].split("?",2)[1],p.Axios.get(p.SHARE(this.shareId)).then(function(e){e.data&&200===e.data.code?(t.shareInfo=e.data.data,t.userHappyNum=t.shareInfo.userHappyNum):(t.shareInfo=null,t.msg="内容暂时保密哦～")})},methods:{downLoadApp:function(){window.location="https://h5.aylives.cn/app/index.html"},report:function(t){var e=this,n=t.happyMomentId;p.Axios.post(p.REPORT(n)).then(function(t){200===t.data.code?e.$vux.toast.show({text:t.data.msg,type:"success"}):e.$vux.toast.show({text:t.data.msg,type:"warn"})})}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-body"},[t.shareInfo?n("div",{staticClass:"des-info"},[n("ul",{staticClass:"photo-list-info"},[n("li",{staticClass:"user-info"},[n("img",{staticClass:"user-image",attrs:{src:t.shareInfo.userAvater,alt:"头像"}}),t._v(" "),n("div",{staticClass:"content-right"},[n("span",{staticClass:"user-name"},[t._v(t._s(t.shareInfo.userName))]),t._v(" "),t.shareInfo.happyMoment?n("div",{staticClass:"content-text"},[t._v(t._s(t.shareInfo.happyMoment.happyMomentContent))]):t._e(),t._v(" "),n("flexbox",{staticClass:"content-photo",attrs:{gutter:2}},t._l(t.shareInfo.happyMoment.happyMomentPhotosArray,function(e,a){return t.shareInfo.happyMoment?n("flexbox-item",{key:a},[1===t.shareInfo.happyMoment.happyMomentPhotosSize?n("img",{staticClass:"photo",staticStyle:{width:"60%"},attrs:{src:e}}):n("div",{staticClass:"figure-photo",style:"background-image: url("+e+")"})]):t._e()}))],1)]),t._v(" "),n("div",{staticClass:"content-bottom"},[t.shareInfo.happyMoment?n("span",[t._v(t._s(t.shareInfo.happyMoment.happyMomentPraise))]):t._e()])])]):n("div",{staticClass:"msg-box"},[n("p",{staticClass:"msg"},[t._v(t._s(t.msg))])]),t._v(" "),n("div",{staticClass:"share-info"},[n("div",{staticClass:"download-title"},[n("div",{staticClass:"download-text",on:{click:t.downLoadApp}},[t._v("下载奥悦家为好友点赞")])]),t._v(" "),n("div",{staticClass:"luck-container"},[n("div",{staticClass:"luck-code"},[n("p",{staticClass:"code"},[t._v("幸运码")]),t._v(" "),n("p",[t._v(t._s(t.userHappyNum))])]),t._v(" "),n("div",{staticClass:"radius"})]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"active-rule"},[n("p",{staticClass:"rule-title"},[t._v("活动规则")]),t._v(" "),n("ul",{staticClass:"explain"},[n("li",[t._v("1.每个小区业主单组照片点赞数第一名可获得价值169元的美的养生壶1个、第2~5名可获得600ML九阳多功能料理机1台、第6~10名可获得65cm粉红豹1只;")]),t._v(" "),n("li",[t._v("2.业主可邀请微信好友搜索幸运码为自己点赞助力;")]),t._v(" "),n("li",[t._v("3.活动时间为2018年09月22日至2018年10月21日;")]),t._v(" "),n("li",[t._v("4.每人每天可为每组照片点赞10次;")]),t._v(" "),n("li",[t._v("5.领取方式：奥悦节闭幕式当天活动现场领取（具体时间以各服务中心安排为准)。")])])])}]};var F=n("VU/8")(z,E,!1,function(t){n("cMdE")},"data-v-dad08bac",null).exports,L=n("bOdI"),D=n.n(L),K=(Number,Boolean,{name:"x-progress",props:{percent:{type:Number,default:0},showCancel:{type:Boolean,default:!0}},methods:{cancel:function(){this.$emit("on-cancel")}}}),j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-progress"},[e("div",{staticClass:"weui-progress__bar"},[e("div",{staticClass:"weui-progress__inner-bar",style:{width:this.percent+"%"}}),this._v(" "),e("img",{style:{left:this.percent+"%"},attrs:{src:n("fWiM"),width:"20px",height:"20px"}})]),this._v(" "),100===this.percent?e("i",{staticClass:"weui-icon-success"}):e("i",{staticClass:"weui-icon-success-circle"})])},staticRenderFns:[]};var W,M,Y=n("VU/8")(K,j,!1,function(t){n("6agf")},null,null).exports,Z=(W={components:{XProgress:Y},data:function(){return{token:"",currentRoomId:"",todaySteps:0,totalSteps:12e3,encyptSteps:0,currentTime:"",donateData:"",donateSteps:0,communityDonateSteps:0,rank:0,points:0,totalPoints:0,isDonated:!1}},created:function(){this.init()},mounted:function(){},computed:{leftSteps:function(){return this.totalSteps-this.todaySteps},goalPercent:function(){return this.todaySteps<this.totalSteps?this.todaySteps/this.totalSteps*100:100},clickAble:function(){return!this.isDonated}}},D()(W,"created",function(){this.init()}),D()(W,"mounted",function(){0===this.currentRoomId?this.$toast("您还不是奥园业主，请先认证房屋。",2e3):this.getParam()}),D()(W,"methods",{init:function(){this.getToken(),this.getRoomId(),this.todaySteps=g.pageUrlGetValue("steps"),this.encyptSteps=g.pageUrlGetValue("encyptSteps"),this.currentTime=g.pageUrlGetValue("currentTime")},getToken:function(){this.token=g.pageUrlGetValue("token"),g.setCookie("token",this.token,"aylives.cn")},getRoomId:function(){this.currentRoomId=g.pageUrlGetValue("currentRoomId"),g.setCookie("currentRoomId",this.currentRoomId,"aylives.cn")},getParam:function(){var t=this;p.Axios.get(p.RUN_INFO).then(function(e){200===e.data.code?e.data.data&&(t.points=e.data.data.todayStep,t.totalPoints=e.data.data.steps,0!==t.points&&(t.isDonated=!0)):(t.$vux.toast.show({text:e.data.msg,type:"warn"}),console.log("tip",e.data.msg))})},getPoints:function(){var t=this;p.Axios.post(p.DONATE_POINT(this.encyptSteps,this.currentTime)).then(function(e){200===e.data.code?(t.isDonated=!0,t.getParam()):t.$vux.toast.show({text:e.data.msg,type:"warn"})})}}),M={components:{XProgress:Y},data:function(){return{token:"",currentRoomId:"",todaySteps:0,totalSteps:12e3,encyptSteps:0,currentTime:"",donateData:"",donateSteps:0,communityDonateSteps:0,rank:0,points:0,totalPoints:0,isDonated:!1}},created:function(){this.init()},mounted:function(){},computed:{leftSteps:function(){return this.totalSteps-this.todaySteps},goalPercent:function(){return this.todaySteps<this.totalSteps?this.todaySteps/this.totalSteps*100:100},clickAble:function(){return!this.isDonated}}},D()(M,"created",function(){this.init()}),D()(M,"mounted",function(){0===this.currentRoomId?this.$toast("您还不是奥园业主，请先认证房屋。",2e3):this.getParam()}),D()(M,"methods",{init:function(){this.getToken(),this.getRoomId(),this.todaySteps=g.pageUrlGetValue("steps"),this.encyptSteps=g.pageUrlGetValue("encyptSteps"),this.currentTime=g.pageUrlGetValue("currentTime")},getToken:function(){this.token=g.pageUrlGetValue("token"),g.setCookie("token",this.token,"aylives.cn")},getRoomId:function(){this.currentRoomId=g.pageUrlGetValue("currentRoomId"),g.setCookie("currentRoomId",this.currentRoomId,"aylives.cn")},getParam:function(){var t=this;p.Axios.get(p.RUN_INFO).then(function(e){200===e.data.code?e.data.data&&(t.points=e.data.data.todayStep,t.totalPoints=e.data.data.steps,0!==t.points&&(t.isDonated=!0)):(t.$vux.toast.show({text:e.data.msg,type:"warn"}),console.log("tip",e.data.msg))})},getPoints:function(){var t=this;p.Axios.post(p.DONATE_POINT(this.encyptSteps,this.currentTime)).then(function(e){200===e.data.code?(t.isDonated=!0,t.getParam()):t.$vux.toast.show({text:e.data.msg,type:"warn"})})}}),M),H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"des-run"},[n("div",{staticClass:"run-object"},[n("ul",{staticClass:"run-info"},[n("li",{staticClass:"run-data"},[n("span",[t._v("今日已获得积分："+t._s(t.points))])]),t._v(" "),n("li",{staticClass:"run-data total-point"},[n("span",[t._v("累计获得积分："+t._s(t.totalPoints))])])]),t._v(" "),n("x-progress",{staticClass:"run-progress",attrs:{percent:t.goalPercent,"show-cancel":!1}}),t._v(" "),n("div",{staticClass:"run-text"},[t.todaySteps<t.totalSteps?n("p",{staticClass:"text"},[t._v("今天我跑了"+t._s(t.todaySteps)+"步，还差"+t._s(t.leftSteps)+"步抵达上限")]):n("p",{staticClass:"text"},[t._v("今天我跑了"+t._s(t.todaySteps)+"步，已达到上限啦！")])])],1),t._v(" "),t.clickAble?n("div",{staticClass:"run-btn",on:{click:t.getPoints}},[t._v("步数兑换积分")]):n("div",{staticClass:"run-btn-disable"},[t._v("今日已完成积分兑换")])])},staticRenderFns:[]};var J=n("VU/8")(Z,H,!1,function(t){n("AXaz")},"data-v-ea530e08",null).exports;a.default.use(i.a);var Q=new i.a({routes:[{path:"/index",name:"index",component:_},{path:"/getPoints",name:"getPoints",meta:{title:"算力任务"},component:y},{path:"/store",name:"store",meta:{title:"市场"},component:S},{path:"/personalCenter",name:"personalCenter",meta:{title:"我的城堡"},component:w},{path:"/rank",name:"rank",meta:{title:"排名"},component:N},{path:"/explain",name:"explain",meta:{title:"奥克秘籍"},component:P},{path:"/donateSteps",name:"donateSteps",meta:{title:"捐步"},component:J},{path:"/share",name:"share",meta:{title:"邀请邻居"},component:q},{path:"/sharePage",name:"sharePage",meta:{title:"分享"},component:F}]}),$=(n("j1ja"),n("kLF+"),n("lmBj")),tt=n.n($);a.default.use(tt.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:Q,components:{App:o},template:"<App/>"})},Np8g:function(t,e){},S4Pl:function(t,e){},Y9YF:function(t,e){},aoVB:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAzCAYAAAAkaACZAAAOGElEQVRogdWaa2yk11nHf+d95+b7ZWzv2nvz7mazu8lku0naQJWqCjVhRIM2qClFVaRCQr6AKj4gIaQgoAQhQFwqJFRxkZBQaSktoFJahhA2ENqoTaNkSdbO+hJfdn1d2zPjub33cw4fZsaeGY/tcbIbxF+ydt9znnPO8z+X5znPc0bwHpC+qgXwB8BnALSmVNpg2YwSauvhoYPaR4b1Suyk6nKXjLy7LI4dJO/keUO6hNsHOCkEpyrFPwSS8TGxdVj9xWEbpK/qCPBXwOeAgp3lnfwKl5UkCjB4L2+GYs2JixhOx0V504xxvlqmXGZKN8xjyqa9WRvp8vb6NJfQIAz87hHebO/nXqAPGAc+ER8TG4fhcCjS6au6HfhH4FEry3RhhUtKEq7rUKAGL3DDDHN/7Sixk2oyOqJPAW1NuvbcNTHnLBgX0DuFKmByfZJzWmHWjWHgdx3l9Y445xDkgB+Lj4mlVnm0TDp9VQ9qxTfsHJ3NyNbCMHGGLrIsDM6aXTrdcUHlRYjTB42hJTdLk0aHzIsBrbi5PskRFRDbU/kK+fY4bULwmfiYeLcVLi2RXn1JfshdM/7QyvLYfmRrEY5SOPYTaiY2oj8E9St1AJS7LiaWXjSO+xZ9rTQQBn5HP/+tDOfXzzzd9tpB8sZBAvam//H2If6yuMnjrRLuPApHHsb1N4xRNJuttKmB5W+Io0cfRHaNtNZAK8LFTcbyS5k/2ZorffIg+X1J2xnvZ5Ql/kgExmArg0e6YPhhGLgIKFaURX9h3JBApjX1cUo3jLzMi0EtWY+fh+GPQLSntcbFWacne936HTvjPbuf3J6k7Yz3ayjx2zpjfgRQ+3VihiF+HkY+DNFuADalzSUAVRQjxXeMLFA4QGffmjFWgy0xAiBt7gPS0U4Yfqg8kWbkgB6AxW9lHnLS/i/bGe937YzX9PjuIm1nvJCd8f4Cza/KVfNUs0ZVCAHdx+HYR6F2K0qHxVorLHPibGnKWAbsPbpS9rwx62+KHWOnIXBYqX52HoVjPwrdJ8vj7gkNN/505aKS+ueBr9gZL9ooUkfaznjdwLeB51TaLCBFU98JEOuD4Ueg/xwY9WYqG1jlVa5FkBEXrFljCvAb65xFY9xbExcay6VFAshtK2tC/1kY+RFoi++lGQSWikz9+ZoGngL+w854ddLbpO2MdwL4LpBUJeMtbRmjzToMRWHwATh6GSJNpkR6zKKbW2t/XVx2bhnXqDku7pp4w10SuyYJAI2QLvONxeE2OHIJhi6V/98MxXnn2Op/br0DfAz4vp3x7qnWGRXCDwKvAZeQYkKnzQcbOxEG9J4ub7GOgeYDAaWgyAN71gLusnjEXRXfB/A2xevOvPHwfvJBifsBq1ldexxGHoG+syCaTPPSd7KXrdveNeAc8AM74z0KYNgZ7wnKKzwsQkZWZc2zdS0NMAfpPPHjFHtHy+SbQYRBxNkQMXadoXpB8HPGKd81X/bSxtGDnKZoJyz62RR7OEthQM9JOP4YxSOP93SKUP2BX/iHzANaiFUgDly1M97PCtdTrtbaFqbIghgFtJbk8GjHwBdRIlDxz5q8tlHao1er8pWTCAURxRAhuqoDaUlJ2RS1j4lHm9bERIys2Y4nIgwAtXbY0R6b0iasSwwIE4cItogQGG10C2PnTq4D8tolwKdLK8LCABElLWIIBP0ASmrbWnF9WVKxtuFIPtITipenmptaqk6B6BW2Ld3AUjLUYcaMUNkuao2UJamNqFBG2KhVUKO1h0JorQUCUwhhYOw2p8oFHZT/AIwIGDGa3gF1AMoBJGCCCO387RbWoNCARKAwhNhelOrYvnKVq0OhTlNQOcLKVyqwlBtqN0LipZ+a+KaS+kkzYnDq6cENUPHchGVoWfY5kYEQRz7et9h7b1tc+6q91hVtQ4AIGUjHWPeXxZDMAcEecu0Q6gPRjq1ytAVZwGsiC4gYmD0QOsKGGZODOlA0H18gIsLNzzmrKy9lRv1MeXBhCroutmkzZG4u/M36oAw0hin+Wbz4k+PtwPeABwFi8dAb7aORXcZl9Kmh8c5TkURz9SozXDQWnRnzxH4yVTg5VmM9DLciGz0tp81ede9+MtZtf3LuK7fP07CXZElN5CadasR3DfiYkUwlLOAKsAbgpIPLQUEtNna6/GJWo9k3bjU61AlEa1dO3znA4O3AMnv2J4wmt/jtdInGw6PYKMy4Vf+/BlxJphKWAZBMJZYoE7cBszjjCC3rN6hf9BP5t+UWzTdYGQKMDj3XChOvSEs3atGmpw+KBTPj9rqfCxp9vS7Our6S2qTM60qF547DSKYSrwPPACjN8eKM81bj+Ldfz+TllnFjPwXCg6olMr6NyZ6nuaa/AbVvZOdtycmNH+bSNBgzLyPHvbysXo6fqfADGq6hyVTi74EvAPgl9bC3EUzW1rt593Lxhj6hJTf3UsLsUeeA4n6KqgBbK9CK1f3kAN/sV+f3qtRKr2au2yf9XHC5rjzQC8UFt3pJ+kKF1zaaXQ1eAL4GULzlHVGeriVgbk5tTjkzoTjgNtVEVLbkPlBBua0K2DepJ6J6Uhg0c1wAQXbc7cjPla5DXXbFK0y5vZVD+LUKnzrsIp1MJTTwLPA60FeYchZq6+2M/UCwpUx/1dhzlcIDal8jFXjb/zafuApC/WrPkNZa9pe8bBDz0v7F2nJnxZ8LHNVb0f/ZCp86NL0EJlMJm7JhW5SeTtiL/rWa6ujmu+kJf80cVU7znJTZry6wz3mVbtlyB+6+JkqHBvSuyAtAOmqhMO+NFhfta0D3TrmetFb9C8AiZcPVNJTd8+abTCXWgCcBy17375MldbtaV1ovnVe+8p0Z8wx69xYVBqaI6snG8ioCt5wRlU7TzGgZIT0tQnr3jtEUM9edE1pp6Wy4Z7bLFVvFaecM5eDkyYr+TbHvdT+ZSlwDngYihWm3VLn+AXSl57JvEwjDXTBlU53je29NWdkDvkPvXjKhftXUGOZnXVu52rRWnGtottNYpQUvJ30dBp6u6L0nDkwMJlOJbwLPK6XPFGfdN6rlhdX8Ga20lltGXOaMXTFvKK7LmbImqJIOXI7sNW5oQJ9rLPO25Ly9FgyiwV51t19G/Jwcd7PBKeD5ir774kDSAMlU4veBL3t5+WE/K2cB0PRlF7beAnAXzNNa1rsfEdJRwnqqSXdaVnInKiAMOLskTOaNqO6ua6T0xtYN9zSAddv5H631cLkzlktzbgL4ckXPA9ES6QqeA14tzLtd2tcuQG4xN6zLUQ/Ou6F+GlJBoT61K/hXAXldY0+1YtfZM3tUuqFIZifczmoQZC051WMRFGeciFK8WtGvJbRMOplKeMCn0NiFafdGWWF9JL+UHwfQloj6q0Zdjjs0qO9p7EcFlBq+c40y4SE1WvttLfvrfk62ATib3oRWehTAvR1M+yVlAZ+q6NcSDrPSJFOJdeCJwFFnnVX/OkB2fmt7G/pr5rBydt6UjIjuwWS2tg/pU2f4Aq9hexssG216OyElHbVSWPC2o7HSLSsEoDz9bmnZOwE8UdGrZRyKNEAylZgAPmut+KPSUVkl1cnCWnH7Bua8ax5H7+S4G7dq4NYnDRt9tdmtttO+aKzMhDtS9Rnulj+rAn0eKBWmnKNoPlvR51A4NGmAZCrxHeC3ClPuBgrSM+mdfnyBu7DDq3GrBg4dtd/SqX+gCw/q7VXNz3q+snccQHHesgGsW96a9PRvVvQ4NN4TaYBkKvFFFehXSgveGypQ95Q2rYVqndwyumTOWAEw2vQQBttbXnrUWeU6Xy1IG53qOICXkyv2mr8dsfnFYFH5KhEU1YSzEbycTCW++F51f8+kK/i8uxXkg7xc3JxK11353AVzREvSAGa3Wq6WN27nwOXotjKdeh5ASZ3N3XDrnu/ys1YaxXpx1t0APv9+lH5fpJOphIfm08U5bymw/XP2lrNNDgXObKgXkDVbVsqG3JkKiFDx1eFB1QuorRtupwp2/Fpgq9vKlQ8U59ybKtBPHcZSN8P7XWmSqURGSf1sadZ7bWNqs85o6ZIw/TUjZ3Sqkwg2tSLdLO9S8dVFs1vdY634WX9L1iUE8nOlRS8rr3k5+blkKtHqC+ieeN+kAZKpxKRXlC9Yi3bYLXh1vtpfM/uVI9aNTj0n/d0+GcpxtWjX09JV64X5+ncn6alskAv6rVvebyRTiT2DmMPgjpAGSP5r4t+d28GX1q+v36qr0ODMmkPhPjUk/ebxs/RwQr2qL/uOO9S4EwqzpTnrlvelx//l/n+7U7reMdIAY/90358V5uzv+VZQ/xbtCYKCOKp18yyI1Dpq590j0qqPT5SvLHvFe/Oxr1744zup5x0lDWCteb+Smcn9V2O5zBoxpZonDXzPw77t7XoDtTe8V+wV/5futI53nHQylZDt8egvALuyppEYTWNvbXrNQtAZM2I+94lvXGz2VvK+cOgfz7WK9FU9Svn5d6im2F0bJ6prKQp055ktC+puahngo6NX+vZNML5X3PGVriI+JhYop5tqA4porJuFWrlQuz9NPWEf+Om7RRjuImmA+Jj4AfBztWVt/WRrv8M9XmOO7dnRK33fvZt63VXSAPEx8XXg+ep3pIO6H8CaseB4zecLo1f6/vZu63TXSQPEx8TvAX8NIARD4bZyBtUIyy2Erk7C31F5Xbnb+EBIV/CLwMsAbXHmAMLdXvWx71XgmdErfXs/Dt5BfGCk42PCAz4NTLV1lQ1XqNOPAbOUDde+rx13Eh/kShMfE1ngk0aYPjOsXRFSg8ATo1f6Dvv70f9/SF/Vjy583X1l4VvZx/4vxv9fB+bpd43Lk1UAAAAASUVORK5CYII="},az9f:function(t,e,n){t.exports=n.p+"static/img/share.d7c201c.png"},cMdE:function(t,e){},d85F:function(t,e,n){t.exports=n.p+"static/img/store.8310cb2.png"},dnQk:function(t,e){},exnD:function(t,e){},fWiM:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAEB0lEQVRYhcXYz29UVRTA8c+dH5W0pcQoRQwCTVCwamICSkyFhUHBGLck4kITF91o4h/gVtYa3cgCd5qwJUYJxISAEiC4EZQmyC9REmr4IVBKZ+p1cd+bTn/MzGvSwkne5M67d+75zrnnnnvODWP3o3nKALbjVTyLNVia9d3GJfyOoziAC/OZPBQEKmMnPsQrCAXnjziGL7EPkwsBtA1fYENBiFZyFh/hULtBpTZ9S/AVDi4AjGyOg9mcS1oNamWh5fgOLy0AyFxyEm9htAjQchzB+kWCyWUEW2ZCzVyybux/ADAyHfsznS2BPsfmBwCTy+ZMZ0Oal2yb5HQPQ16X7b4cqITTUqArJMcn+OFedGKCq1l0WVnm5S52LAk2PzIvoLN4HpM50Dv4psgvL9T59GZ0cnwqOuY2DoEYEdjUxSePBgOVwlC78G0OdBRDnX5xapyPR6O7/2UAjY9mqgQV0F3ms8eDjS2jzjT5GUNh7H4cwB86HAcXa3xwJboTp3TnjRwsIkRiSH0h0BOCvatYW+0IFLGuhB2dYCJ2X43Ga1Syp1oPqnWqk5TrVOoh9U0G1RrVehp3fyLafTUqcGIGbK8osFS/3GXkNrk7BMR8XZrXqIGfmShrjtxOc2zs6Qg1VMFznUYdvh5Va5mSWXqztcn6UmtqXMg+D1+PNvZ0TBIGK3iq06gzN6jWZr8PMSlLPhOEHKXh6CFzquj09SKarKmYSq5ayo07dGXKQmaZyDQvDqIYMpImr8/ZbtULpVC9haJEz2Rwr5FaNbvnzD0fTd8fU/2V0sy+uaUipZ2PtRvUX+Lv8TRxyCaNjS0fm7Z5mMKLqU8IYmRFdyEL3angz05A63v552ZSr6Ey+U4QGpssfc8DkabQzWBvER6XK/gNL7YbNbSSExc1O47ZS5e/b25P/YmhJwsBnSlJx0ZbGeznmaUxBcTGkwfAFCDzwFitpXY1D6A1nu6LBvsLAf1UkkqVtoE04L1NQV/IlNXzSBxUJqhMaETnap2uGpU6XbVoqej9TaGAO4s4UMJ56WBrKyv6GN5Cb0jKGs9kOj5yy5XruWWi7sDw1mBFXxHjOIbz804/rt1i3xEujZruTk0Hqhit7g92bqF/WSEYZqQfZSlBK1TuRJz7i18vcO4Kt+5SLrOsl4EneGEt61YVrybNkaDxcFPYN3LdzUn+IXz9EGD2ajLEzLqsGz96cJXHcbyGsfzFzDJoDG9LRdxiy0ima6z55Vy1/Si24tQiwpzKdMwqpVtdNlyTytw9iwCzR7pbujZXZ7vbj3sYlnbAQizhSDbXMMZbDWoHlMtBKc3dJUXT+V65HcO72Rwdw0rRG7RmGcCbktk3YDXyw+FfXJYC3VF8b55Xev8D/qltjHqOnyAAAAAASUVORK5CYII="},hq5Z:function(t,e){},qeuM:function(t,e,n){t.exports=n.p+"static/img/energy.11aff57.png"},rdyr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a4af566c5beaea2b3e8e.js.map