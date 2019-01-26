import request from '@/plugins/request'

export function getWebsitesInfo () {
  return request({
    url: '/api/sys/getSys',
    method: 'get'
  })
}
