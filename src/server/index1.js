let express = require('express')
let app = express()
let router = express.Router()
let mysql = require('mysql')
let bodyParser = require('body-parser')
let sql = {
  host: 'localhost',
  user: 'root',
  password: 'Admin@123',
  database: 'websites',
  port: '3306'
}

let connection = mysql.createConnection(sql)

connection.connect()

let route = router.get('/getSys', (req, res) => {
  let sqlSentence = 'select * from websites'
  connection.query(sqlSentence, (err, result) => {
    if (err) {
      res.status(500)
      res.json(
        {
          data: [],
          status: false,
          message: err
        }
      )
      return
    }
    res.status(200)
    res.json(
      {
        data: result,
        status: true,
        message: 'Request successfully'
      }
    )
  })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use('/api/sys', route)
let server = app.listen(8088, () => {
  let host = server.address().address
  let port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
