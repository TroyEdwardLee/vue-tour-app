import request from '@/plugins/request'
import moment from 'moment'

export function getRecordsListPost (searchParam) {
  return request({
    url: 'vue-tour-app/commits?per_page=5&sha=',
    method: 'post',
    data: searchParam
  })
}

export function getRecordsList (searchParam) {
  let authorName = searchParam.username ? `author-name:${searchParam.username}+` : ''
  let authorDateFrom = moment(searchParam.daterange[0]).format('YYYY-MM-DDT00:00:00')
  let authorDateTo = moment(searchParam.daterange[1]).format('YYYY-MM-DDT23:59:59')
  let repo = searchParam.repos ? `+repo:${searchParam.repos}` : ''
  let qParam = `${authorName}author-date:${authorDateFrom}..${authorDateTo}${repo}`
  console.log(moment(searchParam.daterange[1]).format('YYYY-MM-DDT00:00:00+08:00'))
  return request({
    // url: `vue-tour-app/commits?per_page=15&sha=${searchParam}`,
    url: `commits?q=${qParam}&type=Commits&sort=author-date&order=desc&page=${searchParam.page}&per_page=${searchParam.per_page}`,
    method: 'get'
  })
}
