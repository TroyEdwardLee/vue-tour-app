const router = require('./routes/index')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const fuzzyQueryWebsite = router.fuzzyQueryWebsite
const fuzzyQueryPlans = router.fuzzyQueryPlans
const insertPlan = router.insertPlan
const removePlan = router.deletePlan
const baseUrl = '/api'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use(baseUrl, fuzzyQueryWebsite)
app.use(baseUrl, fuzzyQueryPlans)
app.use(baseUrl, insertPlan)
app.use(baseUrl, removePlan)
const server = app.listen(8088, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
