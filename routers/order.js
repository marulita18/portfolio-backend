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

    const { cart } = req.body;

    // console.log("our data", data);

    const arrayOfPromises = cart.map(async (item) => {
      // [{ wineId: 1, amount: 4 }]
      const orderWine = await OrderWine.create({
        wineId: item.wineId,
        orderId: newOrder.id,
        bottleAmount: parseInt(item.amount),
      });
      return orderWine;
    });

    await Promise.all(arrayOfPromises);

    res.status(201).send(newOrder);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
