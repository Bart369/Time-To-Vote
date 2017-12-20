const express = require('express')

const shareRouter = express.Router()
const shareController = require('../controllers/share-controller.js')

shareRouter.route('/:id').get(shareController.index)
shareRouter.route('/').post(shareController.create)

module.exports = shareRouter