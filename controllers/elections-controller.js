const Election = require('../models/Election')

const electionsController = {}

electionsController.index = (req,res) => {
    Election.findAll()
    .then(elections => {
        res.status(200).json({
            message: 'ok',
            data: { elections,}
        })
        }).catch(err => {
            console.log(err).json({ error: err })
        })
}

electionsController.show = (req,res) => {
    Election.findById(req.params.id)
    .then(election => {
        res.status(200).json({
            message: 'ok',
            data: { election, }
        })
        }).catch(err => {
            console.log(err).json({ error: err })
        })
}

module.exports = electionsController