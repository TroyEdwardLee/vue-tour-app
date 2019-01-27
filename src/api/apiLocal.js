import request from '@/plugins/request'

export function getWebsitesInfo () {
  return request({
    url: '/api/getWebsite',
    method: 'get'
  })
}
export function fuzzyWebsitesInfo (param) {
  return request({
    url: '/api/fuzzyQueryWebsite',
    method: 'post',
    data: param
  })
}
