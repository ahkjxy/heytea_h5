(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"0176":function(t,e,i){"use strict";i.r(e);var a=i("d0c8"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},2172:function(t,e,i){"use strict";var a=i("241c4"),n=i.n(a);n.a},"241c4":function(t,e,i){var a=i("71db");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c6204c82",a,!0,{sourceMap:!1,shadowMode:!1})},2628:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),s=a(i("d755")),r=i("2f62"),o={name:"LoginPopup",components:{uniPopup:s.default},props:{},methods:(0,n.default)((0,n.default)({},(0,r.mapMutations)(["SET_USERINFO","SET_ISLOGIN"])),{},{open:function(){this.$refs["popup"].open()},close:function(){this.$refs["popup"].close()},change:function(t){var e=t.show;this.$emit("change",e)},getUserInfo:function(t){"getUserInfo:ok"===t.target.errMsg?(this.SET_USERINFO(t.target.userInfo),this.SET_ISLOGIN(!0),this.close()):uni.showModal({title:"提示",content:"您已取消了授权，请重新授权登录",showCancel:!1})}})};e.default=o},"386b":function(t,e,i){"use strict";i.r(e);var a=i("eb7d"),n=i("0176");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("2172");var r,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"bbc06510",null,!1,a["a"],r);e["default"]=l.exports},"387c":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是app内置的常用样式变量\n *\n * app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tui-list-cell[data-v-16e75238]{position:relative;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-radius[data-v-16e75238]{border-radius:%?12?%;overflow:hidden}.tui-cell-hover[data-v-16e75238]{background:#f7f7f9!important}.tui-list-cell[data-v-16e75238]::after{content:"";position:absolute;border-bottom:%?1?% solid rgba(200,199,204,.3);bottom:0;right:0;left:0}.tui-line-left[data-v-16e75238]::after{left:%?30?%!important}.tui-line-right[data-v-16e75238]::after{right:%?30?%!important}.tui-cell-last[data-v-16e75238]::after{border-bottom:0!important}.arrow[data-v-16e75238]{width:%?20?%;height:%?32?%;position:relative;-webkit-flex-shrink:0;flex-shrink:0;margin-left:%?10?%}',""]),t.exports=e},"492a":function(t,e,i){"use strict";i.r(e);var a=i("2628"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"4e33":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是app内置的常用样式变量\n *\n * app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.popup-content[data-v-1fcd9187]{background-color:#fff;border-radius:%?24?% %?24?% 0 0;height:50vh;padding:%?50?% %?40?%}.close_btn[data-v-1fcd9187]{width:%?40?%;height:%?40?%}',""]),t.exports=e},"57d4":function(t,e,i){"use strict";var a=i("fbde"),n=i.n(a);n.a},5832:function(t,e,i){"use strict";var a=i("ced3"),n=i.n(a);n.a},"5a31":function(t,e,i){"use strict";i.r(e);var a=i("a9e38"),n=i("9a98");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("57d4");var r,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"16e75238",null,!1,a["a"],r);e["default"]=l.exports},"71db":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是app内置的常用样式变量\n *\n * app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-bbc06510]{height:auto;min-height:100%}.content[data-v-bbc06510]{padding:0 %?30?%}.welcome[data-v-bbc06510]{position:relative;margin-top:%?-136?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?32?%;color:#432a21}.member-card[data-v-bbc06510]{background-color:#fff;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;border-radius:%?6?%;margin-bottom:%?40?%}.member-card .info[data-v-bbc06510]{position:relative;margin-top:%?-50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;padding:%?20?% 0;border-bottom:%?1?% solid rgba(200,199,204,.3)}.member-card .info .title[data-v-bbc06510]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?40?%;color:#343434;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.member-card .info .title .tips[data-v-bbc06510]{margin-left:%?10?%;font-size:%?24?%;color:#999;background-color:#e9e9e9;padding:%?10?% %?30?%;border-radius:50rem!important;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.member-card .info .title .tips uni-image[data-v-bbc06510]{width:%?20?%;height:%?20?%}.member-card .info .avatar[data-v-bbc06510]{width:%?150?%;height:%?150?%;border-radius:100%}.member-card .info .badage[data-v-bbc06510]{font-family:neutra;position:absolute;bottom:%?20?%;left:0;border:%?2?% solid #343434;padding:%?2?% %?20?%;border-radius:%?12?%;font-size:%?26?%}.member-card .row[data-v-bbc06510]{margin-top:%?20?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.member-card .row .grid[data-v-bbc06510]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.member-card .row .grid uni-image[data-v-bbc06510]{width:%?100?%;height:%?100?%}.member-card .row .grid .value[data-v-bbc06510]{font-family:neutra;margin-bottom:%?10?%;font-size:%?32?%}.member-card .row .grid .title[data-v-bbc06510]{font-size:%?24?%;color:#666}.xinqiubobao[data-v-bbc06510]{width:100%;position:relative}.xinqiubobao .title[data-v-bbc06510]{margin:%?10?% 0;font-size:%?32?%;font-weight:500}.xinqiubobao .swiper[data-v-bbc06510]{height:%?200?%;margin-bottom:%?10?%}.xinqiubobao .swiper .swiper-item .swiper-item-wrapper[data-v-bbc06510]{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;padding:%?40?% %?60?%;border-radius:%?6?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?40?%}.xinqiubobao .swiper .swiper-item .swiper-item-wrapper uni-image[data-v-bbc06510]{width:%?100?%;height:%?100?%;border-radius:100%;margin-right:%?20?%}.xinqiubobao .swiper .swiper-item .swiper-item-wrapper .desc[data-v-bbc06510]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.xinqiubobao .swiper .swiper-item .swiper-item-wrapper .desc .title[data-v-bbc06510]{font-size:%?28?%;font-weight:500;margin-bottom:%?10?%}.xinqiubobao .swiper .swiper-item .swiper-item-wrapper .desc .desc[data-v-bbc06510]{font-size:%?24?%;color:#666}.task-center[data-v-bbc06510]{margin:%?40?% 0;background-color:#fff;padding:%?10?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?12?%}.task-center .intro[data-v-bbc06510]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.task-center .intro .title[data-v-bbc06510]{font-size:%?32?%;color:#343434}.task-center .intro .subtitle[data-v-bbc06510]{font-family:neutra;font-size:%?24?%}.task-center .image-wrapper[data-v-bbc06510]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.task-center .image-wrapper uni-image[data-v-bbc06510]{width:%?200?%;height:%?200?%}.open-gift[data-v-bbc06510]{width:100%;background-color:#fff;padding:%?30?% %?40?%;margin-bottom:%?20?%}.open-gift .header[data-v-bbc06510]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?20?%}.open-gift .header .title[data-v-bbc06510]{font-size:%?32?%;font-weight:500}.open-gift .header .subtitle[data-v-bbc06510]{font-size:%?26?%;color:#666}.open-gift .row[data-v-bbc06510]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.open-gift .row .grid[data-v-bbc06510]{width:33.3333%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%}.open-gift .row .grid uni-image[data-v-bbc06510]{width:%?70?%;height:%?70?%;margin-bottom:%?20?%}.open-gift .row .grid .title[data-v-bbc06510]{font-size:%?26?%;color:#343434;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.open-gift .row .grid .title .number[data-v-bbc06510]{margin-left:%?5?%;font-family:neutra;color:#f0ad4e}.list-cell-wrapper[data-v-bbc06510]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list-cell-wrapper .title[data-v-bbc06510]{font-size:%?32?%}.list-cell-wrapper .subtitle[data-v-bbc06510]{font-size:%?24?%;color:#999}',""]),t.exports=e},"9a98":function(t,e,i){"use strict";i.r(e);var a=i("e4de"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},a1aa:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uniPopup:i("d755").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-popup",{ref:"popup",attrs:{type:"bottom"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"popup-content d-flex flex-column"},[i("v-uni-view",{staticClass:"d-flex justify-content-end"},[i("v-uni-image",{staticClass:"close_btn",attrs:{src:"/static/images/common/clousex-big.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"d-flex flex-fill flex-column justify-content-between"},[i("v-uni-view",{staticClass:"d-flex flex-column"},[i("v-uni-view",{staticClass:"font-size-extra-lg font-weight-bold text-color-base mb-30"},[t._v("欢迎登陆喜茶星球~")]),i("v-uni-view",{staticClass:"font-size-base text-color-assist"},[t._v("登录后消费可获取积分，享受更好的服务体验")])],1),i("v-uni-view",{staticClass:"d-flex flex-column"},[i("v-uni-button",{staticClass:"w-100 font-size-lg mb-30",attrs:{type:"primary","open-type":"getUserInfo"},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getUserInfo.apply(void 0,arguments)}}},[t._v("微信一键登陆")]),i("v-uni-view",{staticClass:"text-center mb-30 font-size-sm text-color-assist"},[t._v("点击登陆喜茶GO，即表示已阅读并同意"),i("font",{staticClass:"text-color-primary"},[t._v("《喜茶隐私政策》")])],1),i("v-uni-view",{staticClass:"text-center font-primary font-size-sm text-color-primary"},[t._v("《喜茶GO小程序服务指南》")])],1)],1)],1)],1)},s=[]},a9e38:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-cell-class tui-list-cell",class:{"tui-cell-last":t.last,"tui-line-left":t.lineLeft,"tui-line-right":t.lineRight,"tui-radius":t.radius},style:{background:t.bgcolor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default"),t.arrow?i("v-uni-image",{staticClass:"arrow",attrs:{src:"/static/images/common/icon_jump_black3.png"}}):t._e()],2)},s=[]},b1d8:function(t,e,i){"use strict";i.r(e);var a=i("a1aa"),n=i("492a");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("5832");var r,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"1fcd9187",null,!1,a["a"],r);e["default"]=l.exports},ced3:function(t,e,i){var a=i("4e33");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("24df606f",a,!0,{sourceMap:!1,shadowMode:!1})},d0c8:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),s=a(i("5530")),r=a(i("5a31")),o=a(i("b1d8")),l=i("2f62"),c={components:{listCell:r.default,loginPopup:o.default},data:function(){return{boardcast:[]}},computed:(0,s.default)({},(0,l.mapState)(["isLogin","userInfo"])),onLoad:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api("boardcast");case 2:t.boardcast=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{openLoginPopup:function(){this.isLogin||this.$refs["loginPopup"].open()},info:function(){uni.navigateTo({url:"/pages/my/info"})},taskCenter:function(){uni.navigateTo({url:"/pages/task-center/task-center"})},openMember:function(){uni.navigateTo({url:"/pages/my/member"})},myCode:function(){uni.navigateTo({url:"/pages/my/code"})},openBenefits:function(){this.isLogin?uni.navigateTo({url:"/pages/my/benefits"}):this.$refs["loginPopup"].open()}}};e.default=c},e4de:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"ListCell",props:{arrow:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"30rpx"},last:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#343434"},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=a},eb7d:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={listCell:i("5a31").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-image",{staticClass:"w-100",attrs:{src:"https://go.cdn.heytea.com/storage/products/2019/12/18/01954797f3fb470cb6ba1606476c658c.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"welcome",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openLoginPopup.apply(void 0,arguments)}}},[i("v-uni-view",[t._v("你好 "+t._s(t.isLogin?t.userInfo.nickName:"立即登录开启喜茶星球之旅"))]),i("v-uni-view",{staticClass:"font-size-base"},[t._v("灵感之茶，中国制造")])],1),i("v-uni-view",{staticClass:"member-card"},[i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"wenyue-font",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openBenefits.apply(void 0,arguments)}}},[t._v("GO会员")]),i("v-uni-view",{staticClass:"tips",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openMember.apply(void 0,arguments)}}},[i("v-uni-view",[t._v("成为星球会员享双倍积分")]),i("v-uni-image",{attrs:{src:"/static/images/my/icon_arrow.png"}})],1)],1),i("v-uni-image",{staticClass:"avatar",attrs:{src:"https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.info.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"badage"},[t._v("Lv1")])],1),i("v-uni-view",{staticClass:"row"},[i("v-uni-navigator",{staticClass:"grid",attrs:{"open-type":"navigate",url:"/pages/integrals/mall"}},[i("v-uni-image",{attrs:{src:"/static/images/my/me_icon_points.png"}}),i("v-uni-view",{staticClass:"value"},[t._v("63")]),i("v-uni-view",{staticClass:"title"},[t._v("积分商城")])],1),i("v-uni-view",{staticClass:"grid",attrs:{"hover-class":"opacity-6"}},[i("v-uni-image",{attrs:{src:"/static/images/my/me_icon_quan.png"}}),i("v-uni-view",{staticClass:"value"},[t._v("0")]),i("v-uni-view",{staticClass:"title"},[t._v("喜茶劵")])],1),i("v-uni-navigator",{staticClass:"grid",attrs:{"open-type":"navigate",url:"/pages/my/wallet"}},[i("v-uni-image",{attrs:{src:"/static/images/my/me_icon_wallet.png"}}),i("v-uni-view",{staticClass:"value"},[t._v("0.00")]),i("v-uni-view",{staticClass:"title"},[t._v("钱包")])],1),i("v-uni-navigator",{staticClass:"grid",attrs:{"open-type":"navigate",url:"/pages/gifts/gifts"}},[i("v-uni-image",{attrs:{src:"/static/images/my/me_icon_gift_card.png"}}),i("v-uni-view",{staticClass:"value"},[t._v("0")]),i("v-uni-view",{staticClass:"title"},[t._v("阿喜有礼")])],1)],1)],1),i("v-uni-view",{staticClass:"xinqiubobao"},[i("v-uni-view",{staticClass:"title"},[t._v("星球播报")]),i("v-uni-swiper",{staticClass:"swiper",attrs:{"next-margin":"50px",autoplay:!0,interval:5e3,duration:500,circular:!0}},t._l(t.boardcast,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"swiper-item-wrapper"},[i("v-uni-image",{staticClass:"img",attrs:{src:e.coverPic}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"subtitle"},[t._v(t._s(e.subtitle))])],1)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"task-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.taskCenter.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"intro"},[i("v-uni-view",{staticClass:"title"},[t._v("任务中心")]),i("v-uni-view",{staticClass:"subtitle"},[t._v("MISSION CENTER")])],1),i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:"/static/images/my/b3d3a98e3c7f450aaa32fbec6aecdfaf.png"}})],1)],1)],1),i("v-uni-view",{staticClass:"open-gift"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"title"},[t._v("开通礼包")]),i("v-uni-view",{staticClass:"subtitle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openMember.apply(void 0,arguments)}}},[t._v("更多")])],1),i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"grid",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openMember.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/my/member_benefits/me_rights_icon_free.png"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",[t._v("星球赠饮券")]),i("v-uni-view",{staticClass:"number"},[t._v("x1")])],1)],1),i("v-uni-view",{staticClass:"grid",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openMember.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/my/member_benefits/me_rights_icon_1jia1.png"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",[t._v("买一赠一券")]),i("v-uni-view",{staticClass:"number"},[t._v("x1")])],1)],1),i("v-uni-view",{staticClass:"grid",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openMember.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/my/member_benefits/me_rights_icon_2jia1.png"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",[t._v("买二赠一券")]),i("v-uni-view",{staticClass:"number"},[t._v("x2")])],1)],1),i("v-uni-view",{staticClass:"grid",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openMember.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/my/member_benefits/me_rights_icon_qingshi.png"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",[t._v("喜茶轻食券")]),i("v-uni-view",{staticClass:"number"},[t._v("x2")])],1)],1),i("v-uni-view",{staticClass:"grid",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openMember.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/my/member_benefits/me_rights_icon_youxian_new.png"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",[t._v("优先券")]),i("v-uni-view",{staticClass:"number"},[t._v("x2")])],1)],1),i("v-uni-view",{staticClass:"grid",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openMember.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/my/member_benefits/me_rights_icon_waimai_new.png"}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",[t._v("免运费券")]),i("v-uni-view",{staticClass:"number"},[t._v("x2")])],1)],1)],1)],1),i("list-cell",{attrs:{hover:!0,arrow:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myCode.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"list-cell-wrapper"},[i("v-uni-view",{attrs:{view:"title"}},[t._v("会员码")]),i("v-uni-view",{staticClass:"subtitle"},[t._v("门店扫码积分、喜茶钱包和阿喜有礼卡支持")])],1)],1),i("list-cell",{attrs:{hover:!0,arrow:!0}},[i("v-uni-view",{staticClass:"list-cell-wrapper"},[i("v-uni-view",{attrs:{view:"title"}},[t._v("兑换中心")]),i("v-uni-view",{staticClass:"subtitle"},[t._v("兑换星球会员、喜茶券和阿喜有礼卡")])],1)],1),i("list-cell",{attrs:{hover:!0,arrow:!0}},[i("v-uni-view",{staticClass:"list-cell-wrapper"},[i("v-uni-view",{attrs:{view:"title"}},[t._v("星球封面")])],1)],1),i("list-cell",{attrs:{hover:!0,arrow:!0}},[i("v-uni-view",{staticClass:"list-cell-wrapper"},[i("v-uni-view",{attrs:{view:"title"}},[t._v("联系客服")])],1)],1),i("list-cell",{attrs:{hover:!0,arrow:!0}},[i("v-uni-view",{staticClass:"list-cell-wrapper"},[i("v-uni-view",{attrs:{view:"title"}},[t._v("消息中心")])],1)],1),i("list-cell",{attrs:{hover:!0,arrow:!0,last:!0}},[i("v-uni-view",{staticClass:"list-cell-wrapper"},[i("v-uni-view",{attrs:{view:"title"}},[t._v("更多")])],1)],1),i("login-popup",{ref:"loginPopup"})],1)},s=[]},fbde:function(t,e,i){var a=i("387c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("640ef508",a,!0,{sourceMap:!1,shadowMode:!1})}}]);