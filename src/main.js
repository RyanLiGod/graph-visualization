import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import iView from "iview";
import "iview/dist/styles/iview.css";
import echarts from 'echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
Vue.use(iView)
Vue.use(VueAxios, axios)

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
