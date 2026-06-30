require("dotenv").config();
const {Pool} = require("pg"); // pool tells how to connect node js with postgresql
const pool = new Pool({ // taking config , no data 
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port
});

module.exports = pool;


// Client = one single database connection
// Pool = manages multiple connections automatically