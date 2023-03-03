const app = require("./src/app.js");
const { conn, Product, Company } = require("./src/db.js");
const { gameInfoFinal, apicompany } = require("./src/controllers/apidatos");

conn.sync({ force: true }).then(() => {
  // si tenes en true, renueva la base de datos

  app.listen(3000, async () => {
    const dbgame = await Product.findAll();
    const dbcompany = await Company.findAll();

    if (dbgame.length < 1) {
      const apigame = await gameInfoFinal();
      await Product.bulkCreate(apigame);
      console.log("creados");
    }

    if(!dbcompany.length){
      const companies = await apicompany();
      await Company.bulkCreate(companies)
    }
  
   

    console.log("%s listening at 3000"); // eslint-disable-line no-console
  });
});
