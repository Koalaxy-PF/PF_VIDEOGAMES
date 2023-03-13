const { Router } = require("express");
const axios = require("axios");
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
    console.log(id);
    


    return res.send(response.data); // Datos del cliente, para manipular desde el front
  } catch (error) {
    console.log(error);
    return res.status(505).send("error");
  }
});
module.exports = router;
