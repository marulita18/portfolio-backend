const { Router } = require("express");
const Wines = require("../models").wine;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allWines = await Wines.findAll();
    res.send(allWines);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const winesById = await Wines.findByPk(id);
    if (!winesById) {
      return res.status(404).send("Wine not found");
    }
    res.send(winesById);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
