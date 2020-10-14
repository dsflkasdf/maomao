import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ajax from 'ajax'
import jq from 'jquery'

Vue.prototype.axios=axios;
Vue.prototype.ajax=ajax;
Vue.config.productionTip = false

import Scroll from '@/components/Scroll'
Vue.component('Scroll',Scroll);

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
