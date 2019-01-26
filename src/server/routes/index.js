const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sql/sqlStatement')
const sqlConfig = require('../sql/sqlConfig')
const connection = mysql.createConnection(sqlConfig)

connection.connect()

const queryWebsite = router.get('/getWebsite', (req, res) => {
  connection.query($sql.queryAll, (err, result) => {
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
        message: 'Request successfully!'
      }
    )
  })
})

module.exports = {
  queryWebsite
}
