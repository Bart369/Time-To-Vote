const db = require('../db/config')

const Share = {}

Share.findAll = () => {
    return db.query(`SELECT * FROM electionstonotify`)
};


Share.create = () => {
    return db.one(`
        INSERT INTO electionstonotify
        (statename, electiondate, runoffdate, senate, representatives, notificationdate)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [electionstonotify.statename, electionstonotify.electiondate, electionstonotify.runoffdate, electionstonotify.senate, electionstonotify.representatives, electionstonotify.notificationdate])
};

module.exports = Share