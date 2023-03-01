const { Router } = require("express");
const { Product } = require("../../db");

const router = Router();

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const {
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

  try {
    // Primer parametro toma el numero de registros a actualizar, el segundo retorna el registro actualizado.
    const [numUpdated, productUpdated] = await Product.update(
      {
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
      },
      { where: { id: id } }
    );

    if (numUpdated === 0) {
      return res.status(404).send("Product not found");
    }

    res.status(200).send(productUpdated);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error to update product");
  }
});
module.exports = router;
