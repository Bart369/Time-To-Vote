const Share = require('../models/Share')

const shareController = {}

shareController.index = (req,res) => {
    console.log(req.params.id)
    Share.findAll(req.params.id)
    .then(elections => {
        res.status(200).json({
            message: 'ok',
            data: { elections }
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
        userid: req.body.userid
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