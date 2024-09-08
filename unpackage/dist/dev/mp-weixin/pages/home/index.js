"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const pages_home_useHome = require("./useHome.js");
if (!Array) {
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_grid_item2 = common_vendor.resolveComponent("up-grid-item");
  const _easycom_up_grid2 = common_vendor.resolveComponent("up-grid");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  const _component_transition = common_vendor.resolveComponent("transition");
  (_easycom_up_swiper2 + _easycom_up_icon2 + _easycom_up_grid_item2 + _easycom_up_grid2 + _easycom_up_popup2 + _component_transition)();
}
const _easycom_up_swiper = () => "../../node-modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_up_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_grid_item = () => "../../node-modules/uview-plus/components/u-grid-item/u-grid-item.js";
const _easycom_up_grid = () => "../../node-modules/uview-plus/components/u-grid/u-grid.js";
const _easycom_up_popup = () => "../../node-modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_up_swiper + _easycom_up_icon + _easycom_up_grid_item + _easycom_up_grid + _easycom_up_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const { menuList, createItem, historyList, toPage } = pages_home_useHome.useHome();
    const showPop = common_vendor.ref(false);
    const list1 = common_vendor.ref([
      {
        url: "/static/banner11.png",
        backgroundColor: "#c1cdd1"
        // btnColor: `linear-gradient(to bottom, rgb(30,144,230), rgb(30,144,180))`;
      }
      // 更多图片及其背景色...
    ]);
    const mainItems = common_vendor.ref([
      {
        title: "智能换脸",
        content: "换成TA试试看",
        icon: "/static/face.png",
        bgColor: ["rgba(69,180,233,0.3)", "rgba(69,180,233,0.1)"]
      },
      {
        title: "音频转换",
        content: "清脆声音谁不忘",
        icon: "/static/voice.png",
        bgColor: ["rgba(137,155,247,0.3)", "rgba(137,155,247,0.1)"]
      }
    ]);
    common_vendor.ref(list1.value[0].backgroundColor);
    common_vendor.ref(list1.value[0].btnColor);
    const onSwiperChange = ({ current }) => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onSwiperChange),
        b: common_vendor.p({
          easingFunction: "easeInOutCubic",
          list: list1.value.map((item) => item.url),
          height: "600",
          radius: "0"
        }),
        c: common_assets._imports_0,
        d: common_vendor.o(($event) => showPop.value = true),
        e: common_vendor.p({
          name: "play-right-fill",
          color: "#fff",
          size: "12"
        }),
        f: common_vendor.o(($event) => common_vendor.unref(toPage)("fireChat", "tab")),
        g: common_vendor.f(mainItems.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.content),
            c: item.icon,
            d: `linear-gradient(to bottom, ${item.bgColor[0]}, ${item.bgColor[1]})`,
            e: item
          };
        }),
        h: common_vendor.f(common_vendor.unref(menuList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.itemclass),
            b: common_vendor.f(item.subItems, (subItem, listIndex, i1) => {
              return {
                a: common_vendor.t(subItem.label),
                b: listIndex,
                c: common_vendor.o(($event) => common_vendor.unref(toPage)(subItem), listIndex),
                d: "44e3a1e9-4-" + i0 + "-" + i1 + "," + ("44e3a1e9-3-" + i0)
              };
            }),
            c: "44e3a1e9-3-" + i0 + ",44e3a1e9-0",
            d: item
          };
        }),
        i: common_assets._imports_1,
        j: common_assets._imports_1,
        k: common_vendor.p({
          border: false,
          col: "3",
          gap: "20px"
        }),
        l: common_vendor.f(common_vendor.unref(createItem), (item, k0, i0) => {
          return {
            a: item.src,
            b: common_vendor.t(item.label),
            c: item,
            d: common_vendor.o(($event) => (common_vendor.unref(toPage)(item.label), showPop.value = false), item)
          };
        }),
        m: common_vendor.o(($event) => showPop.value = false),
        n: common_vendor.p({
          show: showPop.value,
          mode: "bottom",
          round: 8,
          closeOnClickOverlay: true,
          safeAreaInsetBottom: true
        }),
        o: common_vendor.p({
          name: "fade",
          type: "animation"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
