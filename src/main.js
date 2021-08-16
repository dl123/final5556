// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueFeather from 'vue-feather';
import 'bootstrap'

import App from './App'
import router from './router'
import store from './store'
import bus from './bus'
import currencyFilter from './filters/currency'
import globalFunc from '@/libs/globalFunc'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import VueTyperPlugin from 'vue-typer'
//import VueWow from 'vue-wow'
import 'animate.css'
import VueSimpleAlert from "vue-simple-alert"; //npm i vue-simple-alert  https://vuejsexamples.com/simple-alert-for-vue-js/
import i18n from './common/plugins/vue-i18n'  //npm install vue-i18n

import '@/assets/resume/resume.js'  //load js package。 Create by davidlee 20208011

//Vue.use(BootstrapVue)
Vue.use(Vuex);
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
//Vue.use(qs)
Vue.component('feather', VueFeather);
Vue.component('Loading', Loading);
Vue.filter('currency',currencyFilter); //將filter的currency.js，註冊為全域。Create by DavidLee 20200714
Vue.use(globalFunc)
Vue.use(ClientTable); //Client table
Vue.use(ServerTable); //Server table
Vue.use(VueTyperPlugin);
Vue.use(VueSimpleAlert);
//Vue.use(VueWow)

axios.defaults.withCredentials=true;
axios.defaults.headers.common['Authorization'] = 'Bearer '+`${window.localStorage.getItem('Authoriaztion')}`;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})


