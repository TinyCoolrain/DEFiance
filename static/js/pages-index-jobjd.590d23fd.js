(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-jobjd"],{"0f60":function(t,e,i){"use strict";i.r(e);var a=i("c59e"),n=i("ae63");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7060");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3581cf39",null,!1,a["a"],void 0);e["default"]=r.exports},7060:function(t,e,i){"use strict";var a=i("99f7"),n=i.n(a);n.a},"99f7":function(t,e,i){var a=i("a9583");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6574e766",a,!0,{sourceMap:!1,shadowMode:!1})},"9cb6":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("14d9");var n=a(i("c7eb")),o=a(i("1da1")),s=a(i("e8eb")),r=a(i("3277")),l=a(i("1173")),c={name:"TemplateJob",mixins:[s.default],components:{NavIndexButton:r.default},data:function(){return{loanorder:[],usdtcontract:null,poolcontract:null,today:0,jiedaitime:0,shareurl:"",poolinfo:{maticaddress:"获取中",uapprove:0,urefer:"",usersplit:0,starttime:0,maxDeposit:0,pooluseramount:0,poolsizeamount:0,userrate:1,userdeposit:0}}},onLoad:function(){this.getaddress()},methods:{copy:function(){uni.setClipboardData({data:this.shareurl,success:function(t){uni.getClipboardData({success:function(t){uni.showToast({title:"链接已复制",icon:"none"})}})}})},getaddress:function(){var t=this,e=setInterval((0,o.default)((0,n.default)().mark((function i(){return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:window.ethereum?window.ethereum.enable().then((function(i){t.getadd(),clearInterval(e)})):(clearInterval(e),alert("请使用MetaMask,ImToken,tp等软件打开"));case 2:case"end":return i.stop()}}),i)}))),500)},getadd:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){var i,a,o,s;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,window.web3=new l.default(ethereum),a=window.web3,e.next=5,ethereum.enable();case 5:return e.sent,e.next=8,a.eth.getAccounts();case 8:return o=e.sent,s=o[0],i.poolinfo.maticaddress=s,i.usdtcontract=new a.eth.Contract(i.$store.state.usdtabi,i.$store.state.usdtaddress),i.poolcontract=new a.eth.Contract(i.$store.state.poolabi,i.$store.state.pooladdress),i.poolcontract.methods.userInfo(s).call((function(t,e){t?console.log(t):(console.log(e),0==e.level?i.shareurl="無權限":i.shareurl="https://"+window.location.host+"/#/pages/index/job?pro="+i.poolinfo.maticaddress,i.poolinfo.userdeposit=e.totalRevenue/1e6,i.poolinfo.userrate=e.level,i.poolinfo.maxDeposit=e.maxDeposit,i.jiedaitime=e.loanedtimespam,console.log(i.jiedaitime))})),e.next=16,i.poolcontract.methods.getCurDay().call((function(t,e){t?console.log(t):i.today=e}));case 16:return e.next=18,i.poolcontract.methods.getLoanOrderLength().call((function(t,e){if(t)console.log(t);else{console.log("loanorders:"+e);for(var a=e;a>0;a--)i.poolcontract.methods.loanOrders(i.today,a-1).call((function(t,e){console.log(e),e.isloan&&i.loanorder.push(e)}))}}));case 18:i.usdtcontract.methods.balanceOf(s).call((function(t,e){t?console.log(t):(console.log(e),i.poolinfo.pooluseramount=e)})),console.log(i.gettimespam());case 20:case"end":return e.stop()}}),e)})))()},gettimespam:function(){var t=(new Date).getTime();return t/1e3},loan:function(t){var e=this;return(0,o.default)((0,n.default)().mark((function i(){var a;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=e,!(a.jiedaitime+43200>a.gettimespam())){i.next=4;break}return uni.showToast({title:"十二小時內只允許出借一次",icon:"error",duration:4500}),i.abrupt("return");case 4:if(!(a.poolinfo.maxDeposit<2e9)){i.next=7;break}return uni.showToast({title:"需要參與2000以上",icon:"error",duration:3e3}),i.abrupt("return");case 7:return i.next=9,a.poolcontract.methods.depositByLoan(t.user,t.amount).send({from:a.poolinfo.maticaddress}).on("transactionHash",(function(t){console.log("hash:",t),uni.showModal({content:"交易已經發送，請一分鐘後刷新頁面參與",showCancel:!1,success:function(t){setTimeout((function(){window.location="https://"+window.location.host}),1e3)}})}));case 9:case"end":return i.stop()}}),i)})))()},navto:function(t){uni.navigateTo({url:t})}}};e.default=c},a9583:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-custom-nav-bar__back[data-v-3581cf39]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-3581cf39]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-3581cf39]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 自定义导航栏内容 start */.custom-nav[data-v-3581cf39]{height:100%}.custom-nav__back[data-v-3581cf39]{margin:auto %?5?%;font-size:%?40?%;margin-right:%?10?%;margin-left:%?30?%;flex-basis:5%}.custom-nav__search[data-v-3581cf39]{flex-basis:60%;width:100%;height:100%}.custom-nav__search__box[data-v-3581cf39]{width:100%;height:70%;padding:%?10?% 0;margin:0 %?30?%;border-radius:%?60?% %?60?% 0 %?60?%;font-size:%?24?%;background-color:hsla(0,0%,100%,.2)}.custom-nav__search__icon[data-v-3581cf39]{padding-right:%?10?%;margin-left:%?20?%;font-size:%?30?%}\n/* 自定义导航栏内容 end */.components-list[data-v-3581cf39]{background-color:#f4f4f4;min-height:100vh}.custom-title[data-v-3581cf39]{display:flex;align-items:flex-end;justify-content:flex-end;padding:%?10?% %?20?%}.list__options[data-v-3581cf39]{display:flex;align-items:center;justify-content:space-between}.list__left[data-v-3581cf39]{display:flex;align-items:center;justify-content:flex-start}.list__left__icon[data-v-3581cf39], .list__left__image[data-v-3581cf39]{margin-right:%?18?%}.list__right[data-v-3581cf39]{display:flex;align-items:center;justify-content:flex-end}.list-icon-text[data-v-3581cf39], .list-image-text[data-v-3581cf39]{display:flex;align-items:center;justify-content:space-between}.list-image-text .list__left__image[data-v-3581cf39]{width:%?20?%;height:%?20?%}.list-icon-text .list__left__image[data-v-3581cf39]{width:%?25?%;height:%?25?%}\n/*logo start */.logo-image[data-v-3581cf39]{width:%?65?%;height:%?65?%;position:relative}.logo-pic[data-v-3581cf39]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:50%}\n/* 信息展示 start */.tn-info__container[data-v-3581cf39]{margin-top:%?40?%}.tn-info__item[data-v-3581cf39]{width:48%;margin:%?15?% %?0?%;padding:%?38?% %?28?%;border-radius:%?10?%}.tn-info__item__left--icon[data-v-3581cf39]{width:%?80?%;height:%?80?%;border-radius:50%;font-size:%?40?%;margin-right:%?20?%;position:relative;z-index:1}.tn-info__item__left--icon[data-v-3581cf39]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg3.png)}.tn-info__item__left__content[data-v-3581cf39]{font-size:%?30?%}.tn-info__item__left__content--data[data-v-3581cf39]{margin-top:%?5?%;font-weight:700}.tn-info__item__right--icon[data-v-3581cf39]{font-size:%?30?%;opacity:.5}.job-shadow[data-v-3581cf39]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.07);border-radius:%?20?%}.list-icon-text[data-v-3581cf39], .list-image-text[data-v-3581cf39]{display:flex;align-items:center;justify-content:space-between}.list-image-text .list__left__image[data-v-3581cf39]{width:%?20?%;height:%?20?%}\n/* 信息展示 end */\n/* 图标容器16 start */.tn-cool-color-icon16[data-v-3581cf39]{-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-fill-color:transparent}.icon16__item[data-v-3581cf39]{background-color:#fff;border-radius:%?10?%;padding:%?0?%;margin:%?0?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon16__item--icon[data-v-3581cf39]{width:%?100?%;height:%?100?%;font-size:%?70?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1}\n/* 图标容器16 end */\n/* 底部tabbar start*/.footerfixed[data-v-3581cf39]{position:fixed;width:100%;bottom:0;z-index:999;background-color:#fff;box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07)}.tabbar[data-v-3581cf39]{display:flex;align-items:center;min-height:%?110?%;justify-content:space-between;padding:0;height:calc(%?110?% + env(safe-area-inset-bottom) / 2);padding-bottom:calc(env(safe-area-inset-bottom) / 2)}.tabbar .action[data-v-3581cf39]{font-size:%?22?%;position:relative;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;overflow:initial}.tabbar .action .bar-icon[data-v-3581cf39]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?42?%}.tabbar .action .bar-icon uni-image[data-v-3581cf39]{width:%?50?%;height:%?50?%;display:inline-block}.tabbar .action .bar-circle[data-v-3581cf39]{position:relative;display:block;margin:%?-30?% auto %?20?%;text-align:center;font-size:%?52?%;line-height:%?90?%;background-color:#e72f8c;width:%?90?%!important;height:%?90?%!important;overflow:hidden;border-radius:50%;box-shadow:%?0?% %?0?% %?20?% %?0?% rgba(231,47,140,.5)}.tabbar .action .bar-circle uni-image[data-v-3581cf39]{width:%?60?%;height:%?60?%;display:inline-block;margin:%?15?% auto %?15?%}.www[data-v-3581cf39]{color:grey;font-size:smaller;display:table-cell;vertical-align:bottom;align-items:baseline}',""]),t.exports=e},ae63:function(t,e,i){"use strict";i.r(e);var a=i("9cb6"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c59e:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={tnNavBar:i("d125").default,tnListCell:i("3434").default,tnRate:i("d116").default,tnButton:i("2862").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"template-job tn-safe-area-inset-bottom"},[i("tn-nav-bar",{attrs:{fixed:!0,isBack:!1,bottomShadow:!1,backgroundColor:"#FFFFFF"}},[i("v-uni-view",{staticClass:"custom-nav tn-flex tn-flex-col-center tn-flex-row-left"},[i("v-uni-view",{staticClass:"custom-nav__back"},[i("v-uni-view",{staticClass:"logo-pic tn-shadow-blur",staticStyle:{"background-image":"url('/static/img/logo.png')"}},[i("v-uni-view",{staticClass:"logo-image"})],1)],1)],1)],1),i("v-uni-view",{staticClass:"tn-margin-top",style:{paddingTop:t.vuex_custom_bar_height+"px"}}),i("v-uni-view",{staticClass:"tn-flex tn-flex-wrap tn-margin job-shadow border-content tn-border-solid"},[i("tn-list-cell",[i("v-uni-view",{staticClass:"list-icon-text"},[i("v-uni-view",{staticClass:"list__left"},[i("v-uni-image",{staticClass:"list__left__image",staticStyle:{height:"40rpx",width:"40rpx"},attrs:{src:"/static/img/leavel.png"}}),i("v-uni-view",{staticClass:"list__left__text"},[t._v("等級")])],1),i("v-uni-view",{staticClass:"list__right"},[i("v-uni-view",{staticClass:"tn-text-sm tn-color-gray"},[i("tn-rate",{attrs:{inactiveColor:"#E83A30",activeColor:"#ffda06",size:28},model:{value:t.poolinfo.userrate,callback:function(e){t.$set(t.poolinfo,"userrate",e)},expression:"poolinfo.userrate"}})],1)],1)],1)],1),i("tn-list-cell",[i("v-uni-view",{staticClass:"list-icon-text"},[i("v-uni-view",{staticClass:"list__left"},[i("v-uni-image",{staticClass:"list__left__image",staticStyle:{height:"40rpx",width:"40rpx"},attrs:{src:"/static/img/rewords.png"}}),i("v-uni-view",{staticClass:"list__left__text"},[t._v("累計總收益")])],1),i("v-uni-view",{staticClass:"list__right"},[i("v-uni-view",{staticClass:"tn-text-sm tn-color-bluepurple"},[t._v("$"+t._s(t.poolinfo.userdeposit))])],1)],1)],1),i("tn-list-cell",[i("v-uni-view",{staticClass:"list-icon-text"},[i("v-uni-view",{staticClass:"list__left"},[i("v-uni-image",{staticClass:"list__left__image",staticStyle:{height:"40rpx",width:"40rpx"},attrs:{src:"/static/img/usdt.png"}}),i("v-uni-view",{staticClass:"list__left__text"},[t._v("USDT餘額")])],1),i("v-uni-view",{staticClass:"list__right"},[i("v-uni-view",{staticClass:"tn-text-sm tn-color-bluepurple"},[t._v("$"+t._s(t.poolinfo.pooluseramount/1e6))])],1)],1)],1),i("tn-list-cell",[i("v-uni-view",{staticClass:"list-icon-text"},[i("v-uni-view",{staticClass:"list__left"},[i("v-uni-image",{staticClass:"list__left__image",staticStyle:{height:"40rpx",width:"40rpx"},attrs:{src:"/static/img/link.png"}}),i("v-uni-view",{staticClass:"list__left__text"},[t._v("邀請鏈接:"),i("v-uni-view",{staticClass:"www"},[t._v(t._s(t.shareurl.substring(0,36)+"...."))])],1)],1),i("v-uni-view",{staticClass:"list__right"},[i("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",shape:"round",size:"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"tn-icon-upload tn-margin-right-xs"}),t._v("複製")],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"tn-flex tn-flex-wrap tn-margin "},[t._l(t.loanorder,(function(e,a){return i("tn-list-cell",{key:a},[i("v-uni-view",{staticClass:"list-icon-text"},[i("v-uni-view",{staticClass:"list__left"},[i("v-uni-image",{staticClass:"list__left__image",attrs:{src:"/static/img/order.png"}}),i("v-uni-view",{staticClass:"list__left__text"},[t._v(".."+t._s(e.user.substring(38,42)))]),i("v-uni-view",{staticClass:"tn-text-sm tn-color-gray"},[t._v("【$"+t._s(e.amount/1e6)+"】")])],1),i("v-uni-view",{staticClass:"list__right"},[i("tn-button",{attrs:{backgroundColor:"#3a9608",fontColor:"#FFFFFF",shape:"round",size:"sm"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.loan(e)}}},[i("v-uni-text",{staticClass:"tn-icon-upload tn-margin-right-xs"}),t._v("提供貸款")],1)],1)],1)],1)})),0==t.loanorder.length?i("tn-list-cell",[i("v-uni-view",[t._v("暫無訂單")])],1):t._e()],2),i("v-uni-view",{staticClass:"tabbar footerfixed"},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navto("/pages/index/jobteam")}}},[i("v-uni-view",{staticClass:"bar-icon"},[i("v-uni-image",{attrs:{src:"/static/img/teams.png"}})],1),i("v-uni-view",{staticClass:"tn-color-black"},[t._v("團隊")])],1),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navto("/pages/index/jobin")}}},[i("v-uni-view",{staticClass:"bar-icon"},[i("v-uni-view"),i("v-uni-image",{attrs:{src:"/static/img/ins.png"}})],1),i("v-uni-view",{staticClass:"tn-color-black"},[t._v("參與")])],1),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navto("/pages/index/jobjd")}}},[i("v-uni-view",{staticClass:"bar-circle tn-shadow-blur"},[i("v-uni-image",{attrs:{src:"/static/img/borrowa.png"}})],1),i("v-uni-view",{staticClass:"tn-color-black"},[t._v("借貸")])],1)],1),i("v-uni-view",{staticClass:"tn-padding-xl"}),i("nav-index-button")],1)},o=[]}}]);