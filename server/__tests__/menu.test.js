import bodyParser from "body-parser";
import request from "supertest";
import {MenuApi} from "../api/menu.js";
import express from "express";
import { MongoClient } from "mongodb"
import dotenv from "dotenv"

const app = express();
app.use(bodyParser.json())
let mongoClient;


beforeAll(async () => {
  dotenv.config();
  mongoClient = new MongoClient(process.env.MONGODB_URL);
  await mongoClient.connect();
  const database = mongoClient.db("unit_tests");
  await database.collection("menu").deleteMany({});

  app.use("/api/general/menu", MenuApi(database))
});

afterAll(() =>{
  mongoClient.close();
})

describe("server test suite", () => {
  it("server does something", async () => {

    const agent = request.agent(app);
    const response = await agent.get("/api/general/menu");

    expect(response.status).toEqual(200);


  });
});
