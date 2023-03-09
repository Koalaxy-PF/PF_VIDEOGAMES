const { Router } = require("express");
const router = Router();

const getGenres = require("./genreRoutes/get");
const postGenres = require("./genreRoutes/post");
const deleteGenres = require("./genreRoutes/delete");
const getCompany = require("./companyRoutes/get");

const getProducts = require("./productRoutes/get");
const postProducts = require("./productRoutes/post");
const putProducts = require("./productRoutes/put");
const deleteProducts = require("./productRoutes/delete");


const registerUser = require('./authRoutes/register');
const loginUser = require('./authRoutes/login');
const getUsers = require('./userRoutes/get');
const updateUser = require('./userRoutes/put');
const deleteUser = require('./userRoutes/delete');

const getCart = require('./cartsRoutes/get')
const addProduct = require('./cartsRoutes/post')
const deleteCart = require('./cartsRoutes/delete')


/* *************************  routes GENRES   **************************************** */
router.use("/genres", getGenres);
router.use("/genres", postGenres);
router.use("/genres", deleteGenres);

/*************************************  routes Company ******************************************** */

router.use("/company", getCompany);

/* *************************  routes PRODUCTS   **************************************** */
router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/products", putProducts);
router.use("/products", deleteProducts);

/* *************************  routes USER   **************************************** */
router.use("/auth", registerUser);
router.use("/auth", loginUser);
router.use("/users", getUsers);
router.use("/users", updateUser);
router.use("/users", deleteUser);




/* *************************  routes CARRITO   **************************************** */
router.use("/cart",getCart);
router.use("/cart/addProduct",addProduct);
router.use("/cart/delete",deleteCart);



module.exports = router;
