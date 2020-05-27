const axios = require('axios');

const getRandomQuote = (callback) => {
    axios
      .get("https://programming-quotes-api.herokuapp.com/quotes/random/lang/en")
      .then(async (response) => await callback(response))
      .catch((err) => callback(undefined, err));
}

module.exports = getRandomQuote