const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
var router = express.Router()

const webViewRoutes = require('./router/webViewRoutes')
const hrClientRoutes = require('./router/hrClientRoutes')
const dashboardRoutes = require('./router/dashboardRoutes')

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/dasboard', dashboardRoutes)
app.use('/webview', webViewRoutes)
app.use('/hr', hrClientRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})