const app = require("express").Router();
const pool = require("../db");
const autherization = require("../middleware/authorization");

//ROUTES

// get all users
app.get("/users", autherization, async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a user
app.get("/users/:id", autherization, async (req, res) => {
  try {
    const { id } = req.params;
    const article = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.json(article.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//UPDATE users SET attendance = attendance+1, knowledge = knowledge+2, cont = cont+3 WHERE user_id= 'b19264b2-7373-42f0-b454-5f038f581fb0'

// update a user
app.put("/users/:id", autherization, async (req, res) => {
  try {
    const { id } = req.params;
    const { attendance, knowledge, cont, reviews } = req.body;
    console.log(req.body);
    const updateUser = await pool.query(
      "UPDATE users SET attendance = (attendance+$1)/2, knowledge = (knowledge+$2)/2, cont = (cont+$3)/2, reviews = $4 WHERE user_id= $5",
      [attendance, knowledge, cont, reviews, id]
    );
    res.json("User was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = app;
