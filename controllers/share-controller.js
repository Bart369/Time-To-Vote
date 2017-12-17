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
        representative: req.body.representative,
        notificationdate: req.body.notificationdate
    }).then(info => {
        res.redirect('/elections/share')
    }).catch(err => {
        console.log(err).json({ error: err })
    })
}