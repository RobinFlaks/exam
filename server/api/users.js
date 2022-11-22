import express from "express";

export function UserApi(db) {
  const api = express.Router();

  api.get("/", async (req, res) => {
    const users = await db
      .collection("users")
      .find({})
      .map(({ username, password }) => ({ username, password }))
      .toArray();

    res.json(users);
  });

  api.post("/", (req, res) => {
    const { username, password } = req.body;

    db.collection("users").insertOne({ username, password });

    res.sendStatus(204);
  });

  return api;
}
