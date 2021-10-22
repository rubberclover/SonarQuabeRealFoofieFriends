const { Router } = require('express');
const { check } = require('express-validator');
const {createChannel,getAllChannels} = require('../controllers/channel.controller');
const { validateFields } = require('../services/validate-params/validate-fields');

const router = Router();

router.post( '/new', [
    check('name', 'name is mandatory').not().isEmpty(),
    check('description', 'description is mandatory').not().isEmpty(),
    check('user', 'user is mandatory').not().isEmpty(),
    validateFields
], createChannel );

router.get('/getAllChannels', getAllChannels);

module.exports = router;