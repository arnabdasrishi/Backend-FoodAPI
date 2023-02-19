const express = require("express");
const cors = require("cors");
const { connection } = require('./db');
require("dotenv").config();
const { foodRouter } = require("./routes/Food.routes");
const { userRouter } = require("./routes/User.routes");
const { authenticate } = require("./middlewares/authenticate.middleware");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home Page 🙏");
});

app.use("/user", userRouter);
app.use(authenticate)
app.use("/foods", foodRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connection established");
  } catch (e) {
    console.log(e);
  }
  console.log(`Running on port ${process.env.port}`);
});
