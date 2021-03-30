var express = require("express");
var router = express.Router();

var detailsController = require("../controllers/detailsController");

/* GET items details. */
router.get( "/:id", 
  detailsController.getItemDescriptionById, 
  detailsController.getItemAttributesById
);

module.exports = router;
