const { Router } = require('express');
const { check } = require('express-validator');
const { obtainUser, getAllUsers, setPostFavorite,setEventFavorite} = require('../controllers/user.controller');
const { validateFields } = require('../services/validate-params/validate-fields');
const router = Router();

router.post('/obtainUser', obtainUser);

router.get('/getAllUsers', getAllUsers);

router.post('/setPostFavorite', setPostFavorite);

router.post('/setEventFavorite', setEventFavorite);

module.exports = router;