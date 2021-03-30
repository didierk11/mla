var express = require("express");
var router = express.Router();

var itemsController = require('../controllers/itemsController');

/* GET items listing. */
router.get("/", itemsController.getItemsBySearchParam );

module.exports = router;
