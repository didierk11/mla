var express = require("express");
var router = express.Router();
const { getItemList, getItemDetails } = require("../services/items");

const services = require("../services/items");

router.get("/items/:id", function (req, res) {
  getItemDetails(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.sendStatus(500, err));
});

router.get("/items", function (req, res) {
  getItemList(req.query.q)
    .then((response) => res.json(response))
    .catch((err) => res.sendStatus(500, err));
});

module.exports = router;
