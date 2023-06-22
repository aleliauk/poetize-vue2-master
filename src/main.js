import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import http from "./utils/request";
import common from "./utils/common";
import constant from "./utils/constant";
import mavonEditor from "mavon-editor";
//引入js
//import './utils/live2d'
//import './utils/title'
//引入css
import "./assets/css/animation.css";
import "./assets/css/index.css";
import "./assets/css/tocbot.css";
import "./assets/css/color.css";
import "./assets/css/markdown-highlight.css";
import "./assets/css/font-awesome.min.css";
import "mavon-editor/dist/css/index.css";
//点击涟漪效果
import Ripple from "vue-ripple-directive";
import { vueBaberrage } from "vue-baberrage";

//引入自定义指令，实现元素到达可视区懒加载效果
import "./utils/zoomln";

// 骨架屏组件
import Skeleton from "@/views/common/skeleton";
Vue.component("Skeleton", Skeleton);

Ripple.color = "var(--rippleColor)";
Vue.directive("ripple", Ripple);

Vue.use(ElementUI);
Vue.use(vueBaberrage);
Vue.use(mavonEditor);

Vue.prototype.$http = http;
Vue.prototype.$common = common;
Vue.prototype.$constant = constant;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
