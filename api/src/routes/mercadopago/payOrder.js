const { Router } = require("express");

const router = Router();

router.get("/:id", (req, res) => {
  res.send("Thanks for your purchase");
});

module.exports = router;
