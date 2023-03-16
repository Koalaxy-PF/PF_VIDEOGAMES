const { Router } = require("express");
const axios = require("axios");
const {Cart,User,Productcart} = require('../../db.js') 
const {addProductLibrary} = require('../../controllers/libraryController.js')
const {updateTotalValue} = require('../../controllers/cartController.js')

const {
  PAYPAL_API_TEST,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../../configPaypal");

const router = Router();

router.get("/:id", async (req, res) => {
  //ACA AGUS!!!
  const {id} = req.params
  const { token } = req.query;
  try {
    const response = await axios.post(
      `${PAYPAL_API_TEST}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );
    /*  console.log(response.data);  */
    let cart = await Cart.findOne({
      include: [
        {
          model: User,
          where: { id: id },
        },
        {
          model: Productcart,
        },
      ],
      order: [[Productcart, "createdAt", "DESC"]],
    });

    const usuario = cart.user.id
    const productos = cart.productcarts.map( e => e. productId)

    for(let i = 0; i<productos.length;i++){
      await addProductLibrary(productos[i],usuario)
    }
    
    Productcart.destroy({ where: {
      cartId : cart.id
    },
    })

    await updateTotalValue(cart)

    return res.status(200).send(cart); // Datos del cliente, para manipular desde el front
  } catch (error) {
    console.log(error);
    return res.status(505).send("error");
  }
});
module.exports = router;
