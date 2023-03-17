const { Router } = require("express");
const router = Router();
const { Review } = require("../../db");


router.post("/", async (req, res) => {
    try {
        const { userId, productId, calification, comment } = req.body;


        let newComment = await Review.create({
            userId,
            productId,
            calification,
            comment
        })
        res.status(200).send(newComment)
/*         res.status(200).send('New comment has been post successfully') */
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;