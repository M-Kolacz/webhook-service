import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("OK");
});

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
