const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

//middleware

app.use(express.json()); //req.body
app.use(cors());

//ROUTES
//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

//dashboard routes
app.use("/dashboard", require("./routes/dashboard"));

app.listen(port, () => {
  console.log("listening on port 5000");
});

module.exports = app;
