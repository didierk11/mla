const axios = require("axios");
const config = require("../api.config.json");

const formatPrice = (price, part) => {
  const priceParts = price.toString().split(".");
  let result = 0;
  if (part === 0) {
    result = isNaN(parseInt(priceParts[0])) ? 0 : parseInt(priceParts[0]);
  } else {
    result = isNaN(parseInt(priceParts[1])) ? 0 : parseInt(priceParts[1]);
  }
  return result;
};

const getItemList = async (q) => {
  try {

    const items = [];
    const categories = [];

    const response = await axios.get(
      config.api.baseURL + config.api.searchPath,
      { params: { q: q, limit: 4 } }
    );
    const response2 = await axios.get(
      config.api.baseURL +
        config.api.categoriesPath +
        response.data.results[0].category_id
    );

    response.data.results.forEach((element) => {
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
        state: element.address.state_name,
      };
      items.push(item);
    });

    response2.data.path_from_root.forEach((element) => {
      categories.push(element.name);
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

const getItemDetails = async (id) => {
  try {
    // item data
    const response2 = await axios.get(
      config.api.baseURL + config.api.item + id
    );
    // item description
    const response1 = await axios.get(
      config.api.baseURL + config.api.item + id + config.api.description
    );
    // item categories
    const response3 = await axios.get(
      config.api.baseURL +
        config.api.categoriesPath +
        response2.data.category_id
    );

    let categories = [];
    response3.data.path_from_root.forEach((element) => {
      categories.push(element.name);
    });

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
        picture: response2.data.pictures[0].secure_url,
        condition: response2.data.condition,
        free_shipping: response2.data.shipping.free_shipping,
        sold_quantity: response2.data.sold_quantity,
        description: response1.data.plain_text,
        categories,
      },
    };
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getItemList, getItemDetails };
