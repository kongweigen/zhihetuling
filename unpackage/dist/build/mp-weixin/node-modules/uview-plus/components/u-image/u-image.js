"use strict";const i=require("../../../../common/vendor.js"),r={name:"u-image",mixins:[i.mpMixin,i.mixin,i.props$6],data(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1}},watch:{src:{immediate:!0,handler(i){i?(this.isError=!1,this.loading=!0):this.isError=!0}}},computed:{wrapStyle(){let r={};return r.width=i.addUnit(this.width),r.height=i.addUnit(this.height),r.borderRadius="circle"==this.shape?"10000px":i.addUnit(this.radius),r.overflow=this.radius>0?"hidden":"visible",i.deepMerge(r,i.addStyle(this.customStyle))}},mounted(){this.show=!0},emits:["click","error","load"],methods:{addUnit:i.addUnit,onClick(){this.$emit("click")},onErrorHandler(i){this.loading=!1,this.isError=!0,this.$emit("error",i)},onLoadHandler(i){this.loading=!1,this.isError=!1,this.$emit("load",i),this.removeBgColor()},removeBgColor(){this.backgroundStyle={backgroundColor:"transparent"}}}};if(!Array){(i.resolveComponent("u-icon")+i.resolveComponent("u-transition"))()}Math||((()=>"../u-icon/u-icon.js")+(()=>"../u-transition/u-transition.js"))();const o=i._export_sfc(r,[["render",function(r,o,t,d,e,n){return i.e({a:!e.isError},e.isError?{}:{b:r.src,c:r.mode,d:i.o(((...i)=>n.onErrorHandler&&n.onErrorHandler(...i))),e:i.o(((...i)=>n.onLoadHandler&&n.onLoadHandler(...i))),f:r.showMenuByLongpress,g:r.lazyLoad,h:"circle"==r.shape?"10000px":n.addUnit(r.radius),i:n.addUnit(r.width),j:n.addUnit(r.height)},{k:r.showLoading&&e.loading},r.showLoading&&e.loading?{l:i.p({name:r.loadingIcon,width:r.width,height:r.height}),m:"circle"==r.shape?"50%":n.addUnit(r.radius),n:this.bgColor,o:n.addUnit(r.width),p:n.addUnit(r.height)}:{},{q:r.showError&&e.isError&&!e.loading},r.showError&&e.isError&&!e.loading?{r:i.p({name:r.errorIcon,width:r.width,height:r.height}),s:"circle"==r.shape?"50%":n.addUnit(r.radius),t:n.addUnit(r.width),v:n.addUnit(r.height)}:{},{w:i.o(((...i)=>n.onClick&&n.onClick(...i))),x:i.s(n.wrapStyle),y:i.s(e.backgroundStyle),z:i.p({mode:"fade",show:e.show,duration:r.fade?1e3:0})})}],["__scopeId","data-v-d684f6c3"]]);wx.createComponent(o);
