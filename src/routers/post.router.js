const { Router } = require('express');
const { check } = require('express-validator');
const { createPost} = require('../controllers/post.controller');
const { validateFields } = require('../services/validate-params/validate-fields');
const router = Router();

router.post( '/new', [
    check('title', 'title is mandatory').not().isEmpty(),
    check('content', 'content is mandatory').not().isEmpty(),
    check('creationDate', 'creationDate is mandatory').not().isEmpty(),
    check('user', 'user is mandatory').not().isEmpty(),
    validateFields
], createPost );

module.exports = router;