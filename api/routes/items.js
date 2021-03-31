var express = require("express");
var router = express.Router();
const { getItemList, getItemDetails } = require('../services/items');

const services = require("../services/items");

// /* GET items details. */
// router.get( "/:id",
//   detailsController.getItemDescriptionById,
//   detailsController.getItemAttributesById
// );

/* GET items details. */
// router.get("/:id", function (req, res) {
//   const id = req.params.id;
//   getItemDetails(id)
//       //.then((response) => res.json(response))
//       //.catch((err) => res.sendStatus(500, err));
//   });
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

  router.get('/items/:id', function (req, res) {
    getItemDetails(req.params.id)
      .then(response => res.json(response))
      .catch(err => res.sendStatus(500, err));
  });

  router.get('/items', function(req, res){
    getItemList(req.query.q)
    .then(response => res.json(response))
    .catch(err => res.sendStatus(500, err));
  });

  // server.get('/api/items', (req, res) => {
  //   getItemListing(req.query.q)
  //     .then(response => res.json(response))
  //     .catch(err => res.sendStatus(500, err));
  // });

  // detailsController.getItemDescriptionById,
  // detailsController.getItemAttributesById

module.exports = router;
