const https = require("https");
var apiModel = require('../models/apiModel');

let itemDescription;

function getItemDescriptionById(req, res, next) {
    https.get(apiModel.apiRoot + apiModel.itemDetailsPath + req.params.id + apiModel.itemDescriptionPath, (result) => {
      let data = "";
      result.on("data", (d) => {
        data += d;
      });
      result.on("end", () => {
        console.log(data);

        const obj = JSON.parse(data);
        itemDescription = obj.plain_text;
        next();
      });
      result.on("error", (e) => {
        console.log(e);
      });
    });
  }

  function getItemAttributesById (req, res, next) {
    https.get(
        apiModel.apiRoot + apiModel.itemDetailsPath + req.params.id,
      (result) => {
        let data = "";
        result.on("data", (d) => {
          data += d;
        });
        result.on("end", () => {
          console.log(data);

          const obj = JSON.parse(data);
          const itemId = obj.id;
          const itemTitle = obj.title;
          const price = obj.price.toString().split(".");
          const itemPrice = isNaN(parseInt(price[0])) ? 0 : parseInt(price[0]);
          const itemDecimal = isNaN(parseInt(price[1]))
            ? 0
            : parseInt(price[1]);

          const itemCurrency = obj.currency_id;
          const itemCondition = obj.condition;
          const itemPicture = obj.thumbnail;
          const itemFreeShipping = obj.shipping.free_shipping;
          const itemSoldQuantity = obj.sold_quantity;

          const objResult = {
            author: {
              name: apiModel.authorName,
              lastname: apiModel.authorLastName,
            },
            item: {
              id: itemId,
              title: itemTitle,
              price: {
                currency: itemCurrency,
                amount: itemPrice,
                decimals: itemDecimal,
              },
              picture: itemPicture,
              condition: itemCondition,
              free_shipping: itemFreeShipping,
              sold_quantity: itemSoldQuantity,
              description: itemDescription,
            },
          };
          res.send(JSON.stringify(objResult));
        });
        result.on("error", (e) => {
          console.log(e);
        });
      }
    );
  }
  module.exports = {
    getItemDescriptionById,
    getItemAttributesById
  }