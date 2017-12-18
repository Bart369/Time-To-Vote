const Share = require('../models/Share')

const shareController = {}

shareController.index = (req,res) => {
    Share.findAll()
    .then(info => {
        res.status(200).json({
            message: 'ok',
            data: { info }
        })
        }).catch(err => {
            console.log(err).json({ error: err })
        })
}

shareController.create = (req,res) => {
    Share.create({
        statename: req.body.statename,
        electiondate: req.body.electiondate,
        runoffdate: req.body.runoffdate,
        senate: req.body.senate,
        representatives: req.body.representatives,
    }).then(election => {
        res.status(201).json({
            message: 'Election added to list to be shared',
            data:{
                election: election,
            }
        })
    }).catch(err => {
        console.log(err).json({ error: err })
        res.status(500).json(err)
    })
}

module.exports = shareController