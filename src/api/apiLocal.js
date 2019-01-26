import request from '@/plugins/request'

export function getWebsitesInfo () {
  return request({
    url: '/api/getWebsite',
    method: 'get'
  })
}
