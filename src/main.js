import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import setaxios from './setaxios';

Vue.config.productionTip = false
setaxios()
Vue.prototype.$http = axios //为了避免用的时候都要引用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')