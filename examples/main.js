import Vue from "vue";
import App from "./App.vue";
import DataExaUI from "../src";
Vue.config.productionTip = false;

Vue.use(DataExaUI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
