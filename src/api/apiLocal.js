import request from '@/plugins/request'

export function fuzzyWebsitesInfo (param) {
  return request({
    url: '/api/fuzzyQueryWebsite',
    method: 'post',
    data: param
  })
}
