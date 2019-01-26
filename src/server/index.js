const router = require('./routes/index')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const queryWebsite = router.queryWebsite

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use('/api', queryWebsite)
const server = app.listen(8088, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
