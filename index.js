const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use("/login", (req, res) => {
  res.send("<button>Login</button>")
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})