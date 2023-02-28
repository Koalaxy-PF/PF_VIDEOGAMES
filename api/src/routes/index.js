const { Router } = require('express');
const router = Router();

const getGenres = require('./genreRoutes/get')
const postGenres = require('./genreRoutes/post')

/* *************************  routes GENRES   **************************************** */
router.use("/genres", getGenres);
router.use("/genres", postGenres);





module.exports = router;