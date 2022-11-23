import express from "express";

export function UserApi(db) {
  const api = express.Router();

  api.get("/", async (req, res) => {
    const cookieUsername = req.signedCookies?.username;

    if (!cookieUsername) {
      return res.sendStatus(401);
    }
    const users = await db
      .collection("users")
      .find({ username: cookieUsername })
      .map(({ username }) => ({ username }))
      .toArray();

    res.json(users);
  });

  api.post("/", (req, res) => {
    const { username, password } = req.body;

    db.collection("users").insertOne({ username, password });

    res.sendStatus(204);
  });

  api.post("/login", async (req, res) => {
    const { username, password } = req.body;

    let user = await db
      .collection("users")
      .find({ username: username, password: password })
      .map(({ username, password }) => ({ username, password }))
      .toArray();
    if (user.length > 0) {
      res.cookie("username", username, { signed: true });
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });

  api.post("/logout", (req, res) => {
    res.cookie("username", null, { signed: false });
    res.sendStatus(200);
  });

  return api;
}
