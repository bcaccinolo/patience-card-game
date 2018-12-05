const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'))
})
