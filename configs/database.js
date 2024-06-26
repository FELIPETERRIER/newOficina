const {Pool} = require('pg')
const dotenv = require("dotenv").config()

const pool =  new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    port: process.env.LOCALPGPORT,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD
});


module.exports = pool
