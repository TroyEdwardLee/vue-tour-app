const sqlStatement = {
  queryAll: 'select * from websites.websites',
  fuzzyQuery: 'select * from websites where CONCAT(websites.`name`, websites.url, websites.country) like',
  insertWebsite: 'INSERT INTO websites.websites (name, alexa, country, url) VALUES ',
  fuzzyQueryPlans: 'select * from websites.plans where CONCAT(planName, version, `status`, executionMethod) like',
  insertPlan: 'REPLACE INTO websites.plans (planId, planName, version, executionMethod, status, updateBy, updateTime) VALUES ',
  delPlans: 'DELETE FROM websites.plans WHERE planId IN ',
  fuzzyQueryCases: 'select * from websites.testcases where CONCAT(testcase_name, testcase_domain, testcase_module, testcase_url, testcase_method) like'
}

module.exports = sqlStatement
