const { Router } = require("express");
const Wines = require("../models").wine;
const OrderWine = require("../models").orderwine;
const Order = require("../models").order;
const auth = require("../auth/middleware");

const router = new Router();

router.post("/", auth, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const newOrder = await Order.create({
      status: "pending",
      userId,
    });

    const { wines } = req.body;

    wines.map(async (wine) => {
      const orderWine = await OrderWine.create({
        wineId: wine.id,
        orderId: newOrder.id,
      });
      return orderWine;
    });

    res.status(201).send(newOrder);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
