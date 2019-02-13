import request from '@/plugins/request'

export function fuzzyWebsitesInfo (param) {
  return request({
    url: '/api/fuzzyQueryWebsite',
    method: 'post',
    data: param
  })
}

export function addWebsite (param) {
  return request({
    url: '/api/addWebsite',
    method: 'post',
    data: param
  })
}

export function fuzzyPlanList (param) {
  return request({
    url: '/automation/plan/listpage',
    method: 'post',
    data: param
  })
}

export function fuzzyCaseList (param) {
  return request({
    url: '/automation/case/listpage',
    method: 'post',
    data: param
  })
}
