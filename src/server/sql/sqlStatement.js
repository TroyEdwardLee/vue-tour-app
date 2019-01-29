const sqlStatement = {
  queryAll: 'select * from websites',
  fuzzyQuery: 'select * from websites where CONCAT(websites.`name`, websites.url, websites.country) like',
  insertWebsite: 'INSERT INTO websites (name, alexa, country, url) VALUES ',
  fuzzyQueryPlans: 'select * from plans where CONCAT(plans.planName, plans.version, plans.`status`, plans.executionMethod) like',
  insertPlan: 'REPLACE INTO plans (planId, planName, version, executionMethod, status, updateBy, updateTime) VALUES ',
  delPlans: 'DELETE FROM plans WHERE planId IN '
}

module.exports = sqlStatement
