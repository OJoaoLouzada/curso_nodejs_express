const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

// Rota
router.get('/', (req, res) => {
  res.sendFile(`${basePath}/vehicleform.html`)
})

module.exports = router