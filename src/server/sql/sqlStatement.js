const sqlStatement = {
  queryAll: 'select * from websites.websites',
  fuzzyQuery: 'select * from websites where CONCAT(websites.`name`, websites.url, websites.country) like',
  insertWebsite: 'INSERT INTO websites.websites (name, alexa, country, url) VALUES ',
  fuzzyQueryPlans: 'select * from websites.plans where CONCAT(planName, version, `status`, executionMethod) like',
  insertPlan: 'REPLACE INTO websites.plans (planId, planName, version, executionMethod, status, updateBy, updateTime) VALUES ',
  delPlans: 'DELETE FROM websites.plans WHERE planId IN ',
  fuzzyQueryCases: 'select * from websites.testcases where CONCAT(testcaseName, testcaseDomain, testcaseModule, testcaseUrl, testcaseMethod) like',
  insertCase: 'REPLACE INTO websites.testcases (testcaseId, testcaseName, testcaseDomain, testcaseModule, testcaseUrl, testcaseMethod, testcaseHeader, testcaseBody, testcaseExpected, testcaseCreatedBy, testcaseUpdatedBy, testcaseCreatedTime, testcaseUpdatedTime) VALUES ',
  delCases: 'DELETE FROM websites.testcases WHERE testcaseId IN '
}

module.exports = sqlStatement
