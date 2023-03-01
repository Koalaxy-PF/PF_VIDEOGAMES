const { Router } = require("express");
const { Product, Genre } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
  const {
    id,
    name,
    description,
    stock,
    img,
    price,
    calification,
    company,
    genres,
    gameMode,
    minRequirements,
    recommendRequirements,
    comments,
    discount,
  } = req.body;

  const productCreated = await Product.create({
    id,
    name,
    description,
    stock,
    img,
    price,
    calification,
    company,
    gameMode,
    minRequirements,
    recommendRequirements,
    comments,
    discount,
  });

  let genreDb = await Genre.findAll({
    where: { name: genres },
  });

  productCreated.addGenre(genreDb);

  res.status(200).send(productCreated);
});

module.exports = router;
