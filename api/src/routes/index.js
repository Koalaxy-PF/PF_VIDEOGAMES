const { Router } = require("express");
const productsRoutes = require("./products");

const router = Router();

router.use("/", productsRoutes);

module.exports = router;
