import express from "express";
import * as path from "path";
import { CateringApi, UserApi } from "./cateringApi.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(express.static("../client/dist"));

app.use("/api/general/users", UserApi);

app.use("/api/general/menu", CateringApi);

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api/")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`started server on http://localhost:${server.address().port}`);
});
