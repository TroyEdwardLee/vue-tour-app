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
  let authorDateFrom = moment(searchParam.daterange[0]).format('YYYY-MM-DD')
  let authorDateTo = moment(searchParam.daterange[1]).format('YYYY-MM-DD')
  let repo = searchParam.repos ? `repo:${searchParam.repos}+` : ''
  let description = searchParam.desc ? `${searchParam.desc}+` : ''
  let commitCode = searchParam.commitSha ? `${searchParam.commitSha}+` : ''
  let qParam = `${authorName}${description}${commitCode}${repo}author-date:${authorDateFrom}..${authorDateTo}`
  return request({
    // url: `vue-tour-app/commits?per_page=15&sha=${searchParam}`,
    url: `commits?q=${qParam}&type=Commits&sort=author-date&order=desc&page=${searchParam.page}&per_page=${searchParam.per_page}`,
    method: 'get'
  })
}
