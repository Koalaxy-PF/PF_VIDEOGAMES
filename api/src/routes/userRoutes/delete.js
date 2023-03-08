const { Router } = require("express");
const router = Router();
const { User } = require('../../db');


router.delete('/:id', async(req,res)=>{
    const { id } = req.params;
    try {
        if(id){
            await User.destroy({
                where: { id: id }
            })
            res.send('User deleted successfully')
        }
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;