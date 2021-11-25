const { Router } = require('express');
const { check } = require('express-validator');
const { createPost, obtainPost, getAllPosts,obtainChannelPost, obtainChannelPostByTerm, getAllPostTags, likePost, getLikesPost,createComment} = require('../controllers/post.controller');
const { validateFields } = require('../services/validate-params/validate-fields');
const router = Router();

router.post( '/new', [
    check('title', 'title is mandatory').not().isEmpty(),
    check('content', 'content is mandatory').not().isEmpty(),
    check('user', 'user is mandatory').not().isEmpty(),
    validateFields
], createPost );

router.post('/obtainChannelPostByTerm/:id', obtainChannelPostByTerm);

router.post('/likePost', likePost);

router.post('/createComment', createComment);

router.get('/obtainPost/:id', obtainPost);

router.get('/getLikesPost/:id', getLikesPost);

router.get('/getAllPosts', getAllPosts);

router.get('/obtainChannelPost/:id', obtainChannelPost);

router.get('/getAllPostTags', getAllPostTags);

module.exports = router;