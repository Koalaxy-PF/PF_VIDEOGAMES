const { Router } = require("express");
const mercadopago = require("mercadopago");

const router = Router();
mercadopago.configure({
  access_token:
    "TEST-7548539109315518-031010-dde8cb0d83f1da3868386f0ae69c57ed-229385058",
});

router.post("/", (req, res) => {
  let order = {
    // Cambiar por datos del body
    items: [
      {
        id: 123,
        title: "prueba",
        currency_id: "USD",
        description: "prueba producto",
        quantity: 1,
        unit_price: 50,
      },
    ],
    back_urls: {
      success: "http://localhost:3000",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true, // Para solo recibir pagos por tarjeta o saldo de mercadopago. No efectivo
  };

  mercadopago.preferences
    .create(order)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
});
module.exports = router;
