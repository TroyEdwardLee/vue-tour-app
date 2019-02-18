const router = require('./routes/index')
const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')

const baseUrl = '/api'
const baseUrlTest = '/automation'

const app = express()
const serverHttp = http.createServer(app)
const fuzzyQueryWebsite = router.fuzzyQueryWebsite
const fuzzyQueryPlans = router.fuzzyQueryPlans
const insertPlan = router.insertPlan
const removePlan = router.deletePlan
const fuzzyQueryCases = router.fuzzyQueryCases
const removeCase = router.deleteCase
const insertCase = router.insertCase

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use(baseUrl, fuzzyQueryWebsite)
app.use(baseUrlTest, fuzzyQueryPlans)
app.use(baseUrlTest, insertPlan)
app.use(baseUrlTest, removePlan)
app.use(baseUrlTest, fuzzyQueryCases)
app.use(baseUrlTest, removeCase)
app.use(baseUrlTest, insertCase)
const server = serverHttp.listen(8088, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
