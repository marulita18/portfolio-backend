const { Router } = require("express");
const Wines = require("../models").wine;
const OrderWine = require("../models").orderWine;
const Order = require("../models").order;
const auth = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const Orders = await Order.findAll();
    res.send(Orders);
  } catch (e) {
    next(e.message);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const newOrder = await Order.create({
      status: "pending",
      userId,
    });

    const { cart } = req.body;

    const arrayOfPromises = cart.map(async (item) => {
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

router.patch("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const orderToUpdate = await Order.findByPk(id);
    if (!orderToUpdate) {
      res.status(404).send("Order not found");
    }
    console.log("req body", req.body.data);
    const updatedOrder = await orderToUpdate.update({ ...req.body.data });
    res.status(200).send(updatedOrder);
  } catch (e) {
    next(e.message);
  }
});
module.exports = router;
