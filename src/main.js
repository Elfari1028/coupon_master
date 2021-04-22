import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import echarts from 'echarts';
import axios from 'axios'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

import { VueAxios } from '@/http/request.js'
Vue.use(VueAxios)
import api from '@/api/api.js'
Vue.prototype.$api = api

Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
