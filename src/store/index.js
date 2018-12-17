import Vue from 'vue'
import Vuex from 'vuex'
import { getRecordsList } from '@/api/records'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    requestParam: Object,
    recordsData: {commitsData: [], total: Number},
    breadcrumbs: [],
    loadingStatus: true
  },
  modules: {},
  getters: {
    tableData: state => state.recordsData,
    breadCrumbs: state => state.breadcrumbs,
    isLoading: state => state.loadingStatus,
    requestParam: state => state.requestParam
  },
  mutations: {
    updateRecords (state, oData) {
      state.recordsData.commitsData = oData.data.items ? oData.data.items : []
      state.recordsData.total = oData.data.total_count
    },
    updateBreadcrumbs (state, oBreadcrumbs) {
      state.breadcrumbs = [oBreadcrumbs]
    },
    updateLoadingStatus (state, bLoading) {
      state.loadingStatus = bLoading
    },
    updateRequestParam (state, oParam) {
      state.requestParam = oParam
    }
  },
  actions: {
    getRecords ({ commit }, searchParam) {
      return getRecordsList(searchParam)
    }
  } // 欢迎加入前端全栈开发交流圈一起学习交流：864305860
})

export default store
