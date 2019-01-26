import axios from 'axios'
import {
  Notification
} from 'element-ui'
// axios.defaults.headers['Content-Type']
const service = axios.create({
  // baseURL: 'https://api.github.com/search',
  timeout: 10000
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  // 对请求错误做些什么
  Notification({
    title: 'Error',
    message: error.message,
    type: 'error',
    duration: 3 * 1000
  })
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response
}, error => {
  // 对响应错误做点什么
  Notification({
    title: 'Error',
    message: error.response.data.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
