const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
require("dotenv").config();

pool.connect();

pool.query("SELECT * FROM users", (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
});

if (process.env.node_env === 'test'){
  pool.query(`create extension if not exists "uuid-ossp";`, (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
  });
  
  pool.query("CREATE TABLE users (user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),user_name VARCHAR(255) NOT NULL,user_email VARCHAR(255) NOT NULL,user_password VARCHAR(255) NOT NULL,teacher_student VARCHAR(1) NOT NULL,attendance INTEGER,knowledge INTEGER,cont INTEGER,reviews VARCHAR(1000));", (err, res) => {
    if (err) throw err;
  });
  
  pool.query("INSERT INTO users (user_name,user_email,user_password,teacher_student,attendance,knowledge,cont,reviews)VALUES('ash','ashmagill@gmail.com','password','t',3,3,2,'good teacher_allways on time_my hero_needs to work on content')", (err, res) => {
    if (err) throw err;
  });
}
// this is ready for docker-compose.yml
//const pool = new Pool({
//user: process.env.PGUSER,
//password: process.env.PGPASSWORD,
//host: process.env.PGHOST,
//port: process.env.PGPORT,
//database: process.env.PGDATABASE,
//});
module.exports = pool;
