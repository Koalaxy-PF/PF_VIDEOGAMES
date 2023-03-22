const { Router } = require("express");
const router = Router();
const { User } = require('../../db');
const verifyToken = require("../../verifyToken");
const CryptoJS = require("crypto-js");


router.put('/:id',  /* verifyToken, */ async(req,res)=>{
    const { id } = req.params;

        try {
            const user = await User.findOne({
                where: { id: id }
            })
            if(user.is_banned === false){
                const banUser = await User.update(
                    { is_banned: true },
                    { where: { id: id} }
                )
                res.send('User has been banned')
            }else{
                const unbanUser = await User.update(
                    { is_banned: false },
                    { where: { id: id} }
                )
                res.send('User has been unbanned')
            }


        } catch (err) {
            console.log(err)
        }
})


module.exports = router;