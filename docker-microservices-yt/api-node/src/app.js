'use strict'

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api', (req, res) => {
  res.send({ message: 'Api node' })
})

module.exports = app
