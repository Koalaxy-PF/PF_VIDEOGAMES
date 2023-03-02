const { Router } = require("express");
const { Product, Genre } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
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
    minRequirements,
    recommendRequirements,
    comments,
    discount,
  } = req.body;

  const productCreated = await Product.create({
    name,
    description,
    stock,
    img,
    price,
    calification,
    company,
    genre,
    gameMode,
    minRequirements,
    recommendRequirements,
    comments,
    discount,
  });

/*   let genreDb = await Genre.findAll({
    where: { name: genre },
  }); */

/*   productCreated.addGenre(genreDb); */

  res.status(200).send(productCreated);
});

module.exports = router;