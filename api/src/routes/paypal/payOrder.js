const { Router } = require("express");
const axios = require("axios");
const {
  PAYPAL_API_TEST,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../../configPaypal");

const router = Router();

router.get("/", async (req, res) => {
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
    console.log(response.data); // Datos del cliente por consola, para manipular desde el front

    res.send("Thanks for your order");
  } catch (error) {
    console.log(error);
    res.status(505).send("error");
  }
});
module.exports = router;
