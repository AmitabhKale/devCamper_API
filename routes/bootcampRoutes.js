const express = require('express');
const { getBootcamps, createBootcamp, getBootcampById, updateBootcamp, deleteBootcamp } = require('../controllers/bootcampController');
const router = express.Router();

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp)

router
    .route('/:id')
    .get(getBootcampById)
    .put(updateBootcamp)
    .delete(deleteBootcamp)

module.exports = router;