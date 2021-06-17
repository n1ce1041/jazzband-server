const app = require("./index");
const { JsonWebTokenError } = require("jsonwebtoken");
const request = require("supertest")(app);
const pool = require("./db")



describe("/auth/login ROUTE", function () {
  // it("responds with json", function (done) {
  //   request
  //     .post("/auth/login")
  //     .set("Accept", "application/json")
  //     .send({
  //       "email":"ashmagill@gmail.com",
  //       "password":"password"
  //     })
  //     .expect("Content-Type", /json/, done)
  // });
  // it("responds with a 200", function (done) {
  //   request
  //     .post("/auth/login")
  //     .set("Accept", "application/json")
  //     .send({
  //       "email":"ashmagill@gmail.com",
  //       "password":"password"
  //     })
  //     .expect(200, done)
  // });
  it("responds with a token", function () {
    request
      .post("/auth/login")
      .set("Accept", "application/json")
      .send({
        "email":"ashmagill@gmail.com",
        "password":"password"
      })
      .expect("Content-Type", /json/)
      .then((response) => {
        console.log(response.body)
        expect(response.body).objectContaining({
          "token": expect.any(String)
        });
      })
    
  });
});
