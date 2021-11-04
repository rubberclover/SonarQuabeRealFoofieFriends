const { Router } = require('express');
const { check } = require('express-validator');
const { getAllUserChats, obtainChat, sendMessage } = require('../controllers/chat.controller');
const { validateFields } = require('../services/validate-params/validate-fields');

const router = Router();

router.get('/getAllUserChats/:id', getAllUserChats);

router.get('/obtainChat/:id', obtainChat);

router.post('/sendMessage', sendMessage);

module.exports = router;