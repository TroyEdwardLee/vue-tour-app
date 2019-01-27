const sqlStatement = {
  queryAll: 'select * from websites',
  fuzzyQuery: 'select * from websites where CONCAT(websites.`name`, websites.url, websites.country) like'
}

module.exports = sqlStatement
