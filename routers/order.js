const { Router } = require("express");
const Wines = require("../models").wine;
const OrderWine = require("../models").orderWine;
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

    const { data } = req.body;
    console.log("our data", data);
    data.map(async (wine) => {
      const orderWine = await OrderWine.create({
        wineId: wine.id,
        orderId: newOrder.id,
        bottleAmount: parseInt(wine.amount),
      });
      return orderWine;
    });

    res.status(201).send(newOrder);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
