const db = require('../db/config.js')

const Election = {}

Election.findAll = () => {
    return db.manyOrNone(`SELECT * FROM elections`)
}

Election.findById = (id) => {
    return db.one(`SELECT * FROM elections WHERE id = $1`, id)
}

module.exports = Election
