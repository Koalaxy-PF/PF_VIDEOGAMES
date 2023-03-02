const app = require("./src/app.js");
const { conn, Product } = require("./src/db.js");

const { AddDesc } = require("./src/controllers/apidatos");

conn.sync({ force: false }).then(() => {
  // si tenes en true, renueva la base de datos

  app.listen(3000, async () => {
    const dbgame = Product.findAll();

    if (!dbgame.length) {
      const apigame = await AddDesc();
      await Product.bulkCreate(apigame);
      console.log("creados");
    }

    console.log("%s listening at 3000"); // eslint-disable-line no-console
  });
});
