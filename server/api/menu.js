import express from "express";

export function MenuApi(db) {
  const api = express.Router();

  api.get("/", async (req, res) => {
    const menu = await db
      .collection("menu")
      .find({})
      .map(({ name, description, ingredients, allergens }) => ({
        name,
        description,
        ingredients,
        allergens,
      }))
      .toArray();

    res.json(menu);
  });

  api.put("/");

  return api;
}
