const { Router } = require('express');
const { check } = require('express-validator');
const { getAllHomeImage  } = require('../controllers/homeimage.controller');

const router = Router();

router.get('/getAllHomeImage', getAllHomeImage);


module.exports = router;