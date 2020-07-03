const express = require('express');
const dogController = require('../controllers/dogController');
const router = express.Router('/api/v1/dogs');

//---------------------Param middleware----//
router.param('id', dogController.checkID);

router
  .route('/')
  .get(dogController.getAllTheDogs)
  .post(dogController.checkBody, dogController.postNewDog);
router
  .route('/:id')
  .get(dogController.getDogWithID)
  .patch(dogController.updateDog)
  .delete(dogController.deleteDog);

module.exports = router;
