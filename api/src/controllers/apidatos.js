const axios = require("axios");
const { Company } = require("../db.js");

const getDetail = async (id) => {
  const detail = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=15017e1f70774fd391be156691d53fac&page&page`
  );

  console.log(detail);
  return detail;
};

const apicompany = async () => {
  const obj = [];

  const games = await gameInfoFinal();
  const companies = games.map((e) => e.company);
  const companiesNotRepet = new Set(companies);

  const res = [...companiesNotRepet];

  for (let i = 0; i < res.length; i++) {
    const objeto = { name: "" };
    objeto.name = res[i];
    obj.push(objeto);
  }
  await Company.bulkCreate(obj);
  console.log("companias creadas");
};

const getApiInfo = async () => {
  let result = []; //uno por uno con su respectiva info
  let gets = []; //5 paginas de 20c/u = 100 arreglos de videojuegos
  let page = [1, 2, 3, 4, 5];

  page.forEach((e) => {
    gets.push(
      axios.get(
        `https://api.rawg.io/api/games?key=15017e1f70774fd391be156691d53fac&page=${e}`
      )
    );
  });

  await Promise.all(gets)
    .then((e) => {
      //100
      e.forEach((e) => {
        let res = e.data;
        result.push(
          ...res.results.map((e) => {
            const objInfo = {
              /*                   id: e.id, */
              img: e.background_image,
              name: e.name,
              genre: e.genres.map((e) => e.name),
              MinRequirements: "",
              RecommendRequirements: "",
              calification: e.rating,
              released: e.released,
              price: Math.round(Math.random() * (5000.99 - 500.99) + 500.99),
              stock: Math.floor(Math.random() * (500 - 0)),
              discount: Math.floor(Math.random() * (50 - 0)),
              description: "",
              company: "",
            };
            return objInfo;
          })
        );
      });
    })
    .then(() => result)
    .catch((error) => console.log(error));
  /*   await Product.bulkCreate(result) */
  return result;
};

const gameInfoFinal = async () => {
  const games = await getApiInfo();
  for (let i = 0; i < games.length; i++) {
    const id = games[i].id;
    const detailinfo = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=15017e1f70774fd391be156691d53fac&page&page`
    );

    //agrega la desc
    const detailDesc = detailinfo.data.description;
    games[i].description = detailDesc;

    //agrego req
    const minreqfiltro = detailinfo.data.platforms.filter(
      (e) => e.platform.id == 4
    );
    const minreq = minreqfiltro;
    games[i].MinRequirements = minreq[0]?.requirements?.minimum;

    const reqfiltro = detailinfo.data.platforms.filter(
      (e) => e.platform.id == 4
    );
    const req = reqfiltro;
    games[i].RecommendRequirements = req[0]?.requirements?.recommended;

    const companyDetail = detailinfo.data.developers[0].name;
    games[i].company = companyDetail;
  }

  return games;
};

module.exports = { getDetail, getApiInfo, gameInfoFinal, apicompany };
