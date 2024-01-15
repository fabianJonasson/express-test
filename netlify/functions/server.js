// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

const express = require("express");
const serverless = require("serverless-http");

const api = express();
const router = express.Router();

router.get("/", (req, res) => res.send("Home!"));

router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

export const handler = serverless(api);
