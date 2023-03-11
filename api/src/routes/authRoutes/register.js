const { Router } = require("express");
const router = Router();
const { User, Role } = require('../../db');
const CryptoJS = require("crypto-js");

router.post('/register', async(req,res)=>{
    const { username, name, last_name, email, password, img, date, description, genre,is_admin } = req.body;
    try {
        const newUser = await User.create({
            username,
            name,
            last_name,
            email,
            password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY_CRYPTO).toString(),
            img,
            date,
            description,
            genre,
            is_admin
        })


        res.send(newUser)

    } catch (err) {
        console.log(err)
    }
})



module.exports = router;