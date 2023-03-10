const { Router } = require ("express");
const router = Router();

const { User, Wishlist, Productwish, Product } =  require( "../../db");

router.get('/:id', async(req,res) => {
    const { id } = req.params
    try {
            let wishlist = await Wishlist.findOne({
                include: [
                    {
                        model: User,
                        where: { id: id}
                    },
                    {
                        model: Productwish,
                        include: { 
                            model: Product,
                        },
                    }
                ],
            order: [[Productwish, "createdAt", "DESC"]],
            });
            console.log(wishlist)
/*             res.send(wishlist) */
    } catch (err) { 
        console.log(err)
    }
})


module.exports = router