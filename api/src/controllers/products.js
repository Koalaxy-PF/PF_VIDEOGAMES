const axios = require("axios");
/* const { products } = require("./models/product"); */

const url =
  "https://api.rawg.io/api/games?key=aa3be13a46d24f3b9817c9a4df76cfe3";

const getProducts = async () => {
  try {
    const api = await axios.get(url);
    const response = api.data.results.map((p) => {
      return {
        id: p.id,
        name: p.name,
      };
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts };
