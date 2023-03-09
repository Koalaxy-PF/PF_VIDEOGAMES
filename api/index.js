const app = require("./src/app.js");
const { conn, Product, Company } = require("./src/db.js");
const { gameInfoFinal, apicompany } = require("./src/controllers/apidatos");
const {jsonGames} = require("./src/JSON/JsonOfVideogame")

conn.sync({ force: false }).then(() => {
  // si tenes en true, renueva la base de datos

  app.listen(3000, async () => {
    const dbgame = await Product.findAll();
    const dbcompany = await Company.findAll();

    if (dbgame.length < 1) {
      await Product.bulkCreate(jsonGames);
      console.log("creados");
    }

    if(!dbcompany.length){
      const companies = await apicompany();
      await Company.bulkCreate(companies)
    }
  
   

    console.log("%s listening at 3000"); // eslint-disable-line no-console
  });
});
