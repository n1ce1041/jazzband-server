const router = require("express").Router();
const pool = require("../db");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const autherization = require("../middleware/authorization");

// login route
router.post("/login", validInfo, async (req, res) => {
  try {
    //1. destructure req.body
    const { email, password } = req.body;
    //2. check if user does not exist (if not then throw error)

    const user = await pool.query(
      // before this onlly compaired email, need to compare password
      "SELECT * FROM users WHERE user_email = $1 AND user_password = $2",
      [email, password]
    );
    if (user.rows.length === 0) {
      return res.status(401).json("Password or email is incorrect");
    }
    //3. check if incoming password is the same as the database password

    // add hash later
    if (!password) {
      return res.status(401).json("Password or Email is incorrect");
    }

    //4. give them the jwt token
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/is-verify", autherization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
