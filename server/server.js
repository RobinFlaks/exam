import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { MenuApi } from "./api/menu.js";
import { UserApi } from "./api/users.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET));

const mongodbUrl = process.env.MONGODB_URL;

if (mongodbUrl) {
  const client = new MongoClient(mongodbUrl);

  client
    .connect()
    .then((conn) =>
      app.use(
        "/api/users",
        UserApi(conn.db(process.env.MONGODB_DATABASE || "Catering"))
      )
    );

  client
    .connect()
    .then((conn) =>
      app.use(
        "/api/menu",
        MenuApi(conn.db(process.env.MONGODB_DATABASE || "Catering"))
      )
    );
}

app.use(express.static("../client/dist"));

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
