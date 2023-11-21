import express from "express";
import cors from "cors";
import router from "./router";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express();
const port = 3001;
// const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(router);
console.log("working");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
