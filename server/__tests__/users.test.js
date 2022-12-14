import bodyParser from "body-parser";
import request from "supertest";
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { UserApi } from "../api/users.js";

const app = express();
app.use(bodyParser.json());
let mongoClient;

beforeAll(async () => {
  dotenv.config();
  mongoClient = new MongoClient(process.env.MONGODB_URL);
  await mongoClient.connect();
  const database = mongoClient.db("unit_tests");
  await database.collection("users").deleteMany({});

  app.use("/api/users", UserApi(database));
});

afterAll(() => {
  mongoClient.close();
});

describe("server test suite", () => {
  it("accessing users without token ", async () => {
    const agent = request.agent(app);

    const response = await agent.get("/api/users");

    expect(response.status).toEqual(401);
  });
});
