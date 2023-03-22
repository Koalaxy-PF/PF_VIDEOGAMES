const { Router } = require("express");
const router = Router();
const verifyToken = require("../../verifyToken");
const { getAllReviews, getReviewByUserId, getReviewByProductId } = require('../../controllers/reviewControllers')

router.get("/", /* verifyToken, */ async (req, res) => {
    try {
        const { productId } = req.query;
        
        if(productId){

            if("PRODUCT-ID: ", productId);
            const comment = await getReviewByProductId(productId)
            res.status(200).send(comment)
        }
       
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;