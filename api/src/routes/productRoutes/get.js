const { Router } = require("express");
const { Product } = require("../../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
});

module.exports = router;
