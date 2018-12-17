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
import i18n from './lang' // 国际化

Vue.config.productionTip = false

Object.defineProperties(Vue.prototype, {
  '_': {
    value: _
  },
  '$moment': {
    value: moment
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  moment,
  _,
  i18n: i18n,
  components: { App },
  template: '<App/>'
})
