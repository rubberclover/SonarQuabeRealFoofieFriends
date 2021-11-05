const { Router } = require('express');
const { check } = require('express-validator');

const { obtainUser, getAllUsers, setPostFavorite, setEstablishmentFavorite, obtainUserById, obtainUserEventsById, obtainUserEventsSubscribedById, obtainUserEstablishmentsFavById, obtainUserPostsById, obtainUserPostsFavById, getUserByTerm} = require('../controllers/user.controller');

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


router.get('/obtainUserEventsSubscribedById/:id', obtainUserEventsSubscribedById);

router.get('/obtainUserEstablishmentsFavById/:id', obtainUserEstablishmentsFavById);

router.get('/obtainUserPostsById/:id', obtainUserPostsById);

router.get('/obtainUserPostsFavById/:id', obtainUserPostsFavById);

router.get('/getAllUserFavPost/:id', getAllUserFavPost);

router.get('/getAllUserFavEstablishment/:id', getAllUserFavEstablishment);


router.post('/getUserByTerm', getUserByTerm);

module.exports = router;