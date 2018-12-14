import Vue from 'vue'
import Vuex from 'vuex'
import { getRecordsList } from '@/api/records'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    recordsData: [],
    breadcrumbs: []
  },
  modules: {},
  getters: {
    tableData: state => state.recordsData,
    breadCrumbs: state => state.breadcrumbs
  },
  mutations: {
    updateRecords (state, oData) {
      state.recordsData = oData.data
    },
    updateBreadcrumbs (state, oBreadcrumbs) {
      state.breadcrumbs = [oBreadcrumbs]
    }
  },
  actions: {
    getRecords ({ commit }, searchParam) {
      return getRecordsList(searchParam)
    }
  } // 欢迎加入前端全栈开发交流圈一起学习交流：864305860
})

export default store
