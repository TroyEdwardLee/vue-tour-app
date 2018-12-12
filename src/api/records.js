export function getRecords (parameter) {
  return new Promise(
    this.$http.post('/try/ajax/demo_test_post.php', {name: '菜鸟教程', url: 'http://www.runoob.com'}, {emulateJSON: true}).then(function (res) {
      document.write(res.body)
    }, function (res) {
      console.log(res.status)
    })
  )
}
