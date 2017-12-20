const db = require('../db/config.js')

const Share = {}

Share.findAll = () => {
    return db.query(`SELECT * FROM shareelections`)
};


Share.create = (election) => {
    return db.one(`
        INSERT INTO shareelections
        (statename, electiondate, runoffdate, senate, representatives, userid)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [election.statename, 
        election.electiondate, 
        election.runoffdate, 
        election.senate, 
        election.representatives,
        election.userid]
    )
};

module.exports = Share