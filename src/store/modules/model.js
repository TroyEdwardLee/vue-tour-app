import { getRecordsList } from '@/api/records'

const model = {
  state: {
    recordsData: []
  },
  mutations: {
    updateRecords (state, oData) {
      state.recordsData = oData
    }
  },
  actions: {
    getRecords ({ commit }, searchParam) {
      return getRecordsList(searchParam)
    }
  }
}

export default model
