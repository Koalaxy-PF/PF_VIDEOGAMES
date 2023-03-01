const { getProducts } = require("../controllers/products");

const { Router } = require("express");

const router = Router();

router.get("/products", async (req, res) => {
  try {
    const products = await getProducts();
    console.log(products);
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
