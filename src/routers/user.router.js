const { Router } = require('express');
const { check } = require('express-validator');

const { obtainUser, getAllUsers, setPostFavorite, setEstablishmentFavorite, obtainUserById, obtainUserEventsById, obtainUserEventsSubscribedById, obtainUserPostsById, getUserByTerm, getAllUserFavPost, 
    getAllUserFavEstablishment, userHasThisPostFav, userHasThisEstablishmentFav, followUser, isFollowingUser} = require('../controllers/user.controller');

const { validateFields } = require('../services/validate-params/validate-fields');
const router = Router();

router.post('/obtainUser', obtainUser);

router.post('/userHasThisPostFav', userHasThisPostFav);

router.post('/userHasThisEstablishmentFav', userHasThisEstablishmentFav);

router.get('/getAllUsers', getAllUsers);

router.post('/setPostFavorite', setPostFavorite);

router.get('/isFollowingUser/:profileUserId&activeUserId', isFollowingUser);

router.put('/followUser', followUser);

router.post('/setEstablishmentFavorite', setEstablishmentFavorite);

router.get('/obtainUserById/:id', obtainUserById);

router.get('/obtainUserEventsById/:id', obtainUserEventsById);

router.get('/obtainUserEventsSubscribedById/:id', obtainUserEventsSubscribedById);

router.get('/obtainUserPostsById/:id', obtainUserPostsById);

router.get('/getAllUserFavPost/:id', getAllUserFavPost);

router.get('/getAllUserFavEstablishment/:id', getAllUserFavEstablishment);

router.get('/getUserByTerm/:term', getUserByTerm);

module.exports = router;