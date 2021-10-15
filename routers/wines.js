const { Router } = require("express");
const auth = require("../auth/middleware");
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

router.post("/", auth, async (req, res, next) => {
  try {
    const { name, picture, price, description, categoryId } = req.body;
    if ((!name, !picture, !price, !description, !categoryId)) {
      return res.status(400).send("Please provide the correct information");
    }
    const newWine = await Wines.create({
      name,
      picture,
      price,
      description,
      categoryId,
    });
    res.status(201).send(newWine);
  } catch (e) {
    console.log(e.message);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const wineToUpdate = await Wines.findByPk(id);
    if (!wineToUpdate) {
      res.status(404).send("Wine not found");
    }
    const updatedWine = await wineToUpdate.update(parseInt(req.body));
    res.status(200).send(updatedWine);
  } catch (e) {
    next(e.message);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const wineToDelete = await Wines.findByPk(id);
    if (!wineToDelete) {
      res.status(404).send("Wine not found");
    }
    await wineToDelete.destroy();
    res.status(204).send("Wine removed");
  } catch (e) {
    next(e.message);
  }
});
module.exports = router;
