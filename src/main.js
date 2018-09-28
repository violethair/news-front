// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import config from './config'
import router from './router'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Sidebar from './Sidebar.vue'
import axios from 'axios'
Vue.use(require('vue-moment'));

var axiosInstance = axios.create({
  baseURL: config.API_URL,
});


window.axios = axiosInstance;
window.config = config;

Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Sidebar', Sidebar);
Vue.config.productionTip = false


/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})