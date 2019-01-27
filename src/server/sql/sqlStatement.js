const sqlStatement = {
  queryAll: 'select * from websites',
  fuzzyQuery: 'select * from websites where CONCAT(websites.`name`, websites.url, websites.country) like',
  insertWebsite: 'INSERT INTO websites (name, alexa, country, url) VALUES '
}

module.exports = sqlStatement
