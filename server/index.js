import express from "express";
import cors from "cors";
import morgan from "morgan";
import post from "./routers/index.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("combined"));

if (mongoose.connect("mongodb://127.0.0.1:27017/blog")) {
  console.log("connected to db");
} else {
  console.log("fail connected to db");
}

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
 
app.use("/", post);

app.listen(process.env.PORT, () => {
  console.log("your server run port 5555");
});
