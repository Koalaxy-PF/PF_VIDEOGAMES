const { Router } = require("express");
const router = Router();
const { Op } = require('sequelize');
const { User, Role } = require('../../db');
const CryptoJS = require("crypto-js");

router.post('/register', async(req,res) => {

    const { username, name, last_name, email, password, img, date, description, genre } = req.body;
  
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email }]
      }
    });
  
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).send({ message: "El nombre de usuario ya está en uso" });
      } else if (existingUser.email === email) {
        return res.status(400).send({ message: "El correo electrónico ya está en uso" });
      }
    }
  
    await User.create({
      username,
      name,
      last_name,
      email,
      password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY_CRYPTO).toString(),
      img,
      date,
      description,
      genre
    });
  
    res.status(200).send({ message: "El usuario se ha registrado correctamente" });
  });


module.exports = router;