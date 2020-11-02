import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
import { Toast, Tab, Tabs, Dialog, Uploader, Popup } from 'vant'
import 'vant/lib/index.css'

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Uploader)
Vue.use(Popup)
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
