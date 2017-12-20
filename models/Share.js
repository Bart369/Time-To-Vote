const db = require('../db/config.js')

const Share = {}

Share.findAll = (id) => {
    return db.query(`SELECT * FROM shareelections`)
    // return db.query(`SELECT * FROM shareelections WHERE userid = $1`, [id])
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