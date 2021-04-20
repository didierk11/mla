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

    const search_response = await axios.get(
      `${config.api.baseURL}/sites/MLA/search`,
      { params: { q: q, limit: 4 } }
    );
    const category_id = search_response.data.results[0].category_id;
    const cat_response = await axios.get(
      `${config.api.baseURL}/categories/${category_id}`
    );

    search_response.data.results.forEach((element) => {
      const {
        id,
        title,
        currency_id,
        price,
        thumbnail,
        condition,
        shipping: { free_shipping },
        address: { state_name },
      } = element;

      const item = {
        id: id,
        title: title,
        price: {
          currency: currency_id,
          amount: formatPrice(price, 0),
          decimals: formatPrice(price, 1),
        },
        picture: thumbnail,
        condition: condition,
        free_shipping: free_shipping,
        state: state_name,
      };
      items.push(item);
    });

    cat_response.data.path_from_root.forEach((element) => {
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
    console.error(e);
  }
};

const getItemDetails = async (item_id) => {
  try {
    // item data
    const item_data_response = await axios.get(
      `${config.api.baseURL}/items/${item_id}`
    );
    // item description
    const item_description_response = await axios.get(
      `${config.api.baseURL}/items/${item_id}/description`
    );
    // item categories
    const category_id = item_data_response.data.category_id;
    const item_categories_response = await axios.get(
      `${config.api.baseURL}/categories/${category_id}`
    );

    let categories = [];
    item_categories_response.data.path_from_root.forEach((element) => {
      categories.push(element.name);
    });

    const {
      author: { name, lastname },
    } = config;

    const {
      data: {
        id,
        title,
        currency_id,
        price,
        pictures,
        condition,
        shipping: { free_shipping },
        sold_quantity,
      },
    } = item_data_response;

    const {
      data: { plain_text },
    } = item_description_response;

    let result = {
      author: {
        name: name,
        lastname: lastname,
      },
      item: {
        id: id,
        title: title,
        price: {
          currency: currency_id,
          amount: formatPrice(price, 0),
          decimals: formatPrice(price, 1),
        },
        picture: pictures[0].secure_url,
        condition: condition,
        free_shipping: free_shipping,
        sold_quantity: sold_quantity,
        description: plain_text,
        categories,
      },
    };
    return result;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getItemList, getItemDetails };
