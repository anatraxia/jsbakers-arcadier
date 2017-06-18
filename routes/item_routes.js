const express = require('express')
const router = express.Router()
const itemController = require('../controllers/items_controller')

router.get('/', itemController.list)

module.exports = router
