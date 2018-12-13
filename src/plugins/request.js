import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.github.com/repos/TroyEdwardLee/vue-tour-app/commits?per_page=3&sha=',
  timeout: 5000
})

export default service
