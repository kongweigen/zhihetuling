"use strict";const e=require("../../common/vendor.js"),o=require("../../common/assets.js"),t=require("./useHome.js");if(!Array){(e.resolveComponent("up-swiper")+e.resolveComponent("up-grid-item")+e.resolveComponent("up-grid")+e.resolveComponent("up-tabbar-item")+e.resolveComponent("up-tabbar")+e.resolveComponent("up-popup")+e.resolveComponent("transition"))()}Math||((()=>"../../node-modules/uview-plus/components/u-swiper/u-swiper.js")+(()=>"../../node-modules/uview-plus/components/u-grid-item/u-grid-item.js")+(()=>"../../node-modules/uview-plus/components/u-grid/u-grid.js")+(()=>"../../node-modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js")+(()=>"../../node-modules/uview-plus/components/u-tabbar/u-tabbar.js")+(()=>"../../node-modules/uview-plus/components/u-popup/u-popup.js"))();const n={__name:"index",setup(n){const{menuList:u,createItem:r,historyList:s,toPage:a}=t.useHome(),i=e.ref(!1),l=e.ref([{url:"/static/banner11.png",backgroundColor:"#c1cdd1",btnColor:"rgb(30,144,230)"}]),p=e.ref([{title:"智能换脸",content:"换成TA试试看",icon:"/static/face.svg"},{title:"音频转换",content:"清脆声音谁不忘",icon:"/static/pic.png"}]),c=e.ref(l.value[0].backgroundColor),m=e.ref(l.value[0].btnColor),d=({current:e})=>{c.value=l.value[e].backgroundColor,m.value=l.value[e].btnColor};return(t,n)=>({a:e.o(d),b:e.p({easingFunction:"easeInOutCubic",list:l.value.map((e=>e.url)),height:"600",radius:"0"}),c:o._imports_0,d:e.o((e=>i.value=!0)),e:e.f(e.unref(s),((e,o,t)=>({a:e.img,b:e}))),f:m.value,g:e.f(p.value,((o,t,n)=>({a:e.t(o.title),b:e.t(o.content),c:o.icon,d:o}))),h:e.f(e.unref(u),((o,t,n)=>({a:e.t(o.itemclass),b:e.f(o.subItems,((o,t,u)=>({a:e.t(o.label),b:t,c:e.o((t=>e.unref(a)(o)),t),d:"de2836d8-3-"+n+"-"+u+",de2836d8-2-"+n}))),c:"de2836d8-2-"+n+",de2836d8-0",d:o}))),i:o._imports_1,j:o._imports_1,k:e.p({border:!1,col:"3",gap:"20px"}),l:e.o(t.click1),m:e.p({text:"首页",icon:"home"}),n:e.o(t.click1),o:e.p({text:"火宝",icon:"photo"}),p:e.o(t.click1),q:e.p({text:"我的",icon:"account"}),r:e.o(t.change1),s:e.p({value:t.value1,fixed:!0,placeholder:!1,safeAreaInsetBottom:!0}),t:e.f(e.unref(r),((o,t,n)=>({a:o.src,b:e.t(o.title),c:o}))),v:e.o((e=>i.value=!1)),w:e.p({show:i.value,mode:"bottom",round:8,closeOnClickOverlay:!0,safeAreaInsetBottom:!0}),x:e.p({name:"fade",type:"animation"})})}};wx.createPage(n);
