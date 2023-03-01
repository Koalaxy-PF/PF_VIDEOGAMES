const { Router } = require("express");

const { getProducts } = require("../../controllers/productsControllers");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allProducts = await getProducts();
    res.send(allProducts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
});

module.exports = router;
