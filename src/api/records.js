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
    url: `vue-tour-app/commits?per_page=5&sha=${searchParam}`,
    method: 'get'
  })
}
