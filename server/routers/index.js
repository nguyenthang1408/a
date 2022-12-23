import express, { Router } from "express";
import getData from "../controllers/getData.js";
const Routers = express.Router();
import createData from "../controllers/createTicket.js";
import getBookId from "../controllers/getBookId.js";

Routers.get("/getData", getData);

Routers.get("/createData", createData);

Routers.post("/getBookId", getBookId);

export default Routers;
