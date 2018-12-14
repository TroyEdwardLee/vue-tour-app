import request from '@/plugins/request'

export function getRecordsListPost (searchParam) {
  return request({
    url: 'vue-tour-app/commits?per_page=5&sha=',
    method: 'post',
    data: searchParam
  })
}

export function getRecordsList (searchParam) {
  return request({
    // url: `vue-tour-app/commits?per_page=15&sha=${searchParam}`,
    url: 'commits?q=author-name:TroyEdwardLee+author-date:2018-12-14+repo:TroyHeaven/vue-tour-app&type=Commits',
    method: 'get'
  })
}
