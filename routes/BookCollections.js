const { render } = require('ejs');
const express = require('express')
const router = express.Router()
const BookCollectionsController = require('../controllers/BookCollectionsController')

router.route('/')
  .get(BookCollectionsController.getAllBookCollections)

router.route('/create')
  .get(BookCollectionsController.getCreateBookCollection)
  .post(BookCollectionsController.createBookCollection)

router.route('/:id')
  .get(BookCollectionsController.getBookCollection)


module.exports = router
