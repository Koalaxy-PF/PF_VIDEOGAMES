const { Router } = require('express');
const router = Router();

const getGenres = require('./genreRoutes/get')
const postGenres = require('./genreRoutes/post')
const deleteGenres = require('./genreRoutes/delete')

/* *************************  routes GENRES   **************************************** */
router.use("/genres", getGenres);
router.use("/genres", postGenres);
router.use("/genres", deleteGenres);





module.exports = router;