const { Router } = require('express');
const { check } = require('express-validator');
const { obtainUser, getAllUsers,  setPostFavorite, setEstablishmentFavorite,obtainUserById,obtainUserEventsById} = require('../controllers/user.controller');
const { validateFields } = require('../services/validate-params/validate-fields');
const router = Router();

router.post('/obtainUser', obtainUser);

router.get('/getAllUsers', getAllUsers);

router.post('/setPostFavorite', setPostFavorite);

router.post('/setEstablishmentFavorite', setEstablishmentFavorite);

router.get('/obtainUserById/:id', obtainUserById);

router.get('/obtainUserEventsById/:id', obtainUserEventsById);

module.exports = router;