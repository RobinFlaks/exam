import express from "express";

export const CateringApi = express.Router();

export const UserApi = express.Router();

const Users = [
  {
    username: "test",
    password: "tester",
  },
  {
    username: "tested",
    password: "testing",
  },
];

UserApi.get("/", (req, res) => {
  function respond() {
    res.json({
      username: "admin",
      password: "secret",
    });
  }
  setTimeout(respond, 3000);
});

UserApi.post("/", (req, res) => {
  const { username, password } = req.body;

  Users.push({ username, password });

  res.sendStatus(204);
});

CateringApi.get("/", (req, res) => {
  function respond() {
    res.json([
      {
        name: "boiled eggs",
        description: "we take some eggs and boil them in lightly salted water",
        ingredients: "eggs, salt",
        allergens: "egg",
      },
    ]);
  }
  setTimeout(respond, 3000);
});
