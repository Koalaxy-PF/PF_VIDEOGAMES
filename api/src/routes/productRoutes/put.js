const { Router } = require("express");
const { Product } = require("../../db");

const router = Router();

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      stock,
      img,
      price,
      calification,
      company,
      genre,
      gameMode,
      MinRequirements,
      RecommendRequirements,
      comments,
      discount,
      released,
    } = req.body;

    console.log(id);
    console.log(req.body);

    const productUpdate = await Product.findByPk(id);
    productUpdate.name = name;
    productUpdate.stock = stock;
    productUpdate.description = description;
    productUpdate.img = img;
    productUpdate.price = price;
    productUpdate.calification = calification;
    productUpdate.company = company;
    productUpdate.genre = genre;
    productUpdate.gameMode = gameMode;
    productUpdate.MinRequirements = MinRequirements;
    productUpdate.RecommendRequirements = RecommendRequirements;
    productUpdate.comments = comments;
    productUpdate.discount = discount;
    productUpdate.released = released;

    await productUpdate.save();

    res.json(productUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
module.exports = router;
