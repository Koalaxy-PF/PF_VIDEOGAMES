const { Router } = require("express");
const router = Router();

const getGenres = require("./genreRoutes/get");
const postGenres = require("./genreRoutes/post");
const deleteGenres = require("./genreRoutes/delete");

const getProducts = require("./productRoutes/get");
const postProducts = require("./productRoutes/post");
const putProducts = require("./productRoutes/put");
const deleteProducts = require("./productRoutes/delete");

/* *************************  routes GENRES   **************************************** */
router.use("/genres", getGenres);
router.use("/genres", postGenres);
router.use("/genres", deleteGenres);

/* *************************  routes PRODUCTS   **************************************** */
router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/products", putProducts);
router.use("/products", deleteProducts);

module.exports = router;
