import Vue from 'vue'
import Vuex from 'vuex'
import { getRecordsList } from '@/api/records'
import Cookies from 'js-cookie'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    language: Cookies.get('language') || 'zh',
    requestParam: Object,
    recordsData: {commitsData: [], total: Number},
    breadcrumbs: [],
    loadingStatus: true,
    menusList: []
  },
  modules: {},
  getters: {
    tableData: state => state.recordsData,
    breadCrumbs: state => state.breadcrumbs,
    isLoading: state => state.loadingStatus,
    requestParam: state => state.requestParam,
    menus: state => state.menusList
  },
  mutations: {
    setLanguage (state, language) {
      state.language = language
      Cookies.set('language', language)
    },
    updateMenus (state, aMenus) {
      state.menusList = aMenus
    },
    updateRecords (state, oData) {
      if (oData.data) {
        state.recordsData.commitsData = oData.data && oData.data.items ? oData.data.items : []
        state.recordsData.total = oData.data && oData.data.total_count
      } else {
        state.recordsData.commitsData = []
        state.recordsData.total = 0
      }
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
