const { Router } = require("express");
const router = Router();
const { User, Role } = require('../../db');
const CryptoJS = require("crypto-js");

router.post('/register', async(req,res)=> {
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

        res.status(200).send({message: 'Usuario registrado correctamente'})

    }catch(err){
        res.status(500).send({ message: 'El usuario o el correo ya están en uso' });
      };
})



module.exports = router;