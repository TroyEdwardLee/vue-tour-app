const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sql/sqlStatement')
const sqlConfig = require('../sql/sqlConfig')
const connection = mysql.createConnection(sqlConfig)

connection.connect()

const fuzzyQueryWebsite = router.post('/fuzzyQueryWebsite', (req, res) => {
  let param = `${$sql.fuzzyQuery} '%${req.body.keyword}%'`
  connection.query(param, (err, result) => {
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

const insertWebsite = router.post('/addWebsite', (req, res) => {
  let param = `${$sql.insertWebsite}('${req.body.name}', ${req.body.alexa}, '${req.body.country}', '${req.body.url}')`
  connection.query(param, (err, result) => {
    if (err) {
      res.status(500)
      res.json(
        {
          status: false,
          message: err
        }
      )
      return
    }
    res.status(200)
    res.json(
      {
        status: true,
        message: 'Request successfully!'
      }
    )
  })
})

const fuzzyQueryPlans = router.post('/plan/listpage', (req, res) => {
  let param = `${$sql.fuzzyQueryPlans} '%${req.body.blurCheck}%'`
  connection.query(param, (err, result) => {
    if (err) {
      res.status(500)
      res.json(
        {
          result: {
            list: []
          },
          success: false,
          message: err
        }
      )
      return
    }
    res.status(200)
    res.json(
      {
        result: {
          list: result
        },
        success: true,
        message: 'Request successfully!'
      }
    )
  })
})

const insertPlan = router.post('/plan/addPlan', (req, res) => {
  let planId = req.body.planId ? req.body.planId : `plan${new Date().getTime()}`
  let param = `${$sql.insertPlan}('${planId}','${req.body.planName}', '${req.body.version}', '${req.body.executionMethod}', 'Not Start', 'admin', '${new Date().getTime()}')`
  connection.query(param, (err, result) => {
    if (err) {
      res.status(500)
      res.json(
        {
          success: false,
          message: err
        }
      )
      return
    }
    res.status(200)
    res.json(
      {
        success: true,
        message: 'Request successfully!'
      }
    )
  })
})

const deletePlan = router.post('/plan/remove', (req, res) => {
  let planIds = ''
  planIds += req.body.ids.map(item => {
    return `'${item.toString()}'`
  })
  let param = `${$sql.delPlans}(${planIds})`
  connection.query(param, (err, result) => {
    if (err) {
      res.status(500)
      res.json(
        {
          success: false,
          message: err
        }
      )
      return
    }
    res.status(200)
    res.json(
      {
        success: true,
        message: 'Request successfully!'
      }
    )
  })
})

const fuzzyQueryCases = router.post('/case/listpage', (req, res) => {
  let param = `${$sql.fuzzyQueryCases} '%${req.body.blurCheck}%'`
  connection.query(param, (err, result) => {
    if (err) {
      res.status(500)
      res.json(
        {
          result: {
            list: []
          },
          success: false,
          message: err
        }
      )
      return
    }
    res.status(200)
    res.json(
      {
        result: {
          list: result
        },
        success: true,
        message: 'Request successfully!'
      }
    )
  })
})

const deleteCase = router.post('/case/delete', (req, res) => {
  let caseIds = ''
  caseIds += req.body.ids.map(item => {
    return `'${item.toString()}'`
  })
  let param = `${$sql.delCases}(${caseIds})`
  connection.query(param, (err, result) => {
    if (err) {
      res.status(500)
      res.json(
        {
          success: false,
          message: err
        }
      )
      return
    }
    res.status(200)
    res.json(
      {
        success: true,
        message: 'Request successfully!'
      }
    )
  })
})

const insertCase = router.post('/case/add', (req, res) => {
  let testcaseId = req.body.testcase_id ? req.body.testcase_id : `case${new Date().getTime()}`
  let param = `${$sql.insertCase}('${testcaseId}', '${req.body.testcase_name}', '${req.body.testcase_domain}', '${req.body.testcase_module}', '${req.body.testcase_url}', '${req.body.testcase_method}', '${req.body.testcase_header}', '${req.body.testcase_body}', '${req.body.testcase_expected}', 'yugang.li', 'yugang.li', '${new Date().getTime()}', '${new Date().getTime()}')`
  connection.query(param, (err, result) => {
    if (err) {
      res.status(500)
      res.json(
        {
          success: false,
          message: err
        }
      )
      return
    }
    res.status(200)
    res.json(
      {
        success: true,
        message: 'Request successfully!'
      }
    )
  })
})

module.exports = {
  fuzzyQueryWebsite,
  insertWebsite,
  fuzzyQueryPlans,
  insertPlan,
  deletePlan,
  fuzzyQueryCases,
  deleteCase,
  insertCase
}
