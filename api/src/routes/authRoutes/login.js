const { Router } = require("express");
const router = Router();
const { User } = require('../../db');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

router.post('/login', async(req,res)=>{
    const { email, password } = req.body;
    try {

        const user = await User.findOne({
            where: { email: email }
        })

        !user && res.send('Incorrect username. Are you registered?');
        const decryptPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY_CRYPTO);
        const originalPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

        originalPassword !== password && res.send('Incorrect password o username.');

        const accessToken = jwt.sign(
            {id: user.id, is_admin: user.is_admin},
            process.env.SECRET_KEY_CRYPTO,
            {expiresIn:86400}
        );

            res.send({user, accessToken})
        /* TENGO QUE ENCONTRAR EL SEMEJANTE DE ._DOC DE MONGO EN SQL 
        const {password, ...info} = user._doc  //para que el response no tenga la contraseña
        res.send({...info, accessToken});
         */

    } catch (err) {
        console.log(err)
    }
})



module.exports = router;