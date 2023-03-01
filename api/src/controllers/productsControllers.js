const axios = require("axios");
const { Product } = require("../db");

const { API_KEY_PRODUCT } = process.env;

const getProducts = async () => {
  try {
    const productsDb = Product.findAll();

    if (!productsDb.length) {
      const api = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY_PRODUCT}&page_size=100`
      );

      //Obtener requisitos minimos y maximos de los juegos
      const response = api.data.results;

      const allGames = await Product.bulkCreate(
        response.map((p) => {
          return {
            id: p.id,
            name: p.name,
            stock: 25,
            price: Math.floor(Math.random() * (10000 - 1000) + 1000),
            description: p.description,
            img: p.background_image,
            calification: p.rating,
            gen: p.genres.map((g) => g.name),
          };
        })
      );
      return allGames;
    } else {
      return productsDb;
    }
  } catch (error) {
    console.log(error);
  }
};

// -----> Experimento

/* const getProducts = async () => {
  try {
    const productsDb = await Product.findAll();

    if (productsDb.length) {
      return productsDb;
    }

    const api = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY_PRODUCT}&page_size=100`
    );
    const games = api.data.results;

   
    const gamesWithDetails = await Promise.all(
      games.map(async (game) => {
        const gameDetailsApi = await axios.get(
          `https://api.rawg.io/api/games/${game.id}?key=${API_KEY_PRODUCT}`
        );
        const gameDetails = gameDetailsApi.data;

        return {
          id: game.id,
          name: game.name,
          stock: 25,
          price: Math.floor(Math.random() * (10000 - 1000) + 1000),
          description: gameDetails.description_raw,
          img: game.background_image,
          calification: game.rating,
          gen: game.genres.map((g) => g.name),
          company: gameDetails.developers.map((d) => d.name),
          minRequirements: gameDetails.platforms
            .map((p) => p.requirements.minimum)
            .filter((r) => !!r),
          maxRequirements: gameDetails.platforms
            .map((p) => p.requirements.recommended)
            .filter((r) => !!r),
        };
      })
    );

    const allGames = await Product.bulkCreate(gamesWithDetails);

    console.log(allGames);
    return allGames;
  } catch (error) {
    console.log(error.message);
  }
}; */

module.exports = { getProducts };
