import Vue from 'vue'
import Vuex from 'vuex'
import model from './modules/model'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  modules: {
    model
  },
  getters: {},
  mutations: {},
  actions: {} // 欢迎加入前端全栈开发交流圈一起学习交流：864305860
})

export default store
