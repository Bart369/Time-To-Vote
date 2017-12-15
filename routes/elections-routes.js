const express = require('express')

const electionsRouter = express.Router()
const electionsController = require('../controllers/elections-controller')

electionsRouter.route('/').get(electionsController.index)
electionsRouter.route('/:id').get(electionsController.show)

module.exports = electionsRouter