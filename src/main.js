// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element'
import store from './store'
import './main.css'
import moment from 'moment'
import _ from 'lodash'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$moment', { value: moment })
Object.defineProperty(Vue.prototype, '_', { value: _ })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  moment,
  components: {
    App
  },
  template: '<App/>'
})
