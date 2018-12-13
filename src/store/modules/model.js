import { getRecordsList } from '@/api/records'

const model = {
  state: {
    recordsData: null
  },
  mutations: {},
  actions: {
    getRecords (searchParam) {
      return getRecordsList(searchParam)
    }
  }
}

export default model
