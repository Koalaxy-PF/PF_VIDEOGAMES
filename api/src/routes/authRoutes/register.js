const { Router } = require("express");
const router = Router();
const { User } = require('../../db');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

router.post('/register', async(req,res)=>{
    const { username, name, last_name, email, password, img, date, description, genre } = req.body;
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
            genre
        })

/*         const accessToken = jwt.sign(
            {id: newUser.id},
            process.env.SECRET_KEY_CRYPTO,
            {expiresIn:86400}
        ) */
        res.send(newUser);


    } catch (err) {
        console.log(err)
    }
})



module.exports = router;