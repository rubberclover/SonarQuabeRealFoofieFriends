const { Router } = require('express');
const { check } = require('express-validator');
const { obtainUser, getAllUsers,  setPostFavorite, setEstablishmentFavorite,obtainUserById,obtainUserEventsById,getUserByTerm, getAllUserFavPost, 
getAllUserFavEstablishment} = require('../controllers/user.controller');
const { validateFields } = require('../services/validate-params/validate-fields');
const router = Router();

router.post('/obtainUser', obtainUser);

router.get('/getAllUsers', getAllUsers);

router.post('/setPostFavorite', setPostFavorite);

router.post('/setEstablishmentFavorite', setEstablishmentFavorite);

router.get('/obtainUserById/:id', obtainUserById);

router.get('/obtainUserEventsById/:id', obtainUserEventsById);

router.get('/getAllUserFavPost/:id', getAllUserFavPost);

router.get('/getAllUserFavEstablishment/:id', getAllUserFavEstablishment);

router.post('/getUserByTerm', getUserByTerm);

module.exports = router;