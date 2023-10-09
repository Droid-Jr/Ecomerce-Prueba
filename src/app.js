const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const port = process.env.PORT || 9000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json({ message: "bienvenido" });
});

app.listen(port, () => {
  console.log("servidor conectado exitosamente", port);
});
