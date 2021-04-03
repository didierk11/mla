const axios = require("axios");
const config = require("../api.config.json");

console.log(config);

function formatPrice(price, part) {
  const priceParts = price.toString().split(".");
  let result = 0;
  if (part === 0) {
    result = isNaN(parseInt(priceParts[0])) ? 0 : parseInt(priceParts[0]);
  } else {
    result = isNaN(parseInt(priceParts[1])) ? 0 : parseInt(priceParts[1]);
  }
  return result;
}

const getItemList = async function (q) {
  try {
    const response = await axios.get(config.api.baseURL + config.api.searchPath, { params: { q: q, limit: 4 } });
    const items = [];
    const categories = [];
    response.data.results.forEach((element) => {
      categories.push(element.category_id);
      const item = {
        id: element.id,
        title: element.title,
        price: {
          currency: element.currency_id,
          amount: formatPrice(element.price, 0),
          decimals: formatPrice(element.price, 1),
        },
        picture: element.thumbnail,
        condition: element.condition,
        free_shipping: element.shipping.free_shipping,
      };
      items.push(item);
    });

    const result = {
      author: {
        name: config.author.name,
        lastname: config.author.lastname,
      },
      items,
      categories,
    };
    return result;
  } catch (e) {
    console.log(e);
  }
};

const getItemDetails = async function (id) {
  try {

    const response2 = await axios.get(
      config.api.baseURL + config.api.item + id
    );
    const response1 = await axios.get(
      config.api.baseURL +
      config.api.item +
        id +
        config.api.description
    );

    let result = {
      author: {
        name: config.author.name,
        lastname: config.author.lastname,
      },
      item: {
        id: response2.data.id,
        title: response2.data.title,
        price: {
          currency: response2.data.currency_id,
          amount: formatPrice(response2.data.price, 0),
          decimals: formatPrice(response2.data.price, 1),
        },
        picture: response2.data.thumbnail,
        condition: response2.data.condition,
        free_shipping: response2.data.shipping.free_shipping,
        sold_quantity: response2.data.sold_quantity,
        description: response1 ? response1.data.description : ''
      },
    };
    return result;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getItemList, getItemDetails };
