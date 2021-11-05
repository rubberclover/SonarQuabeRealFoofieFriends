const { Router } = require('express');
const { check } = require('express-validator');
const { getAllUserChats, obtainChat, sendMessage,viewMessages,viewAMessage,obtainChatOtherUser } = require('../controllers/chat.controller');
const { validateFields } = require('../services/validate-params/validate-fields');

const router = Router();

router.get('/getAllUserChats/:id', getAllUserChats);

router.get('/obtainChat/:id', obtainChat);

router.get('/obtainChatOtherUser/:id', obtainChatOtherUser);

router.put('/viewMessages/:id', viewMessages);

router.post('/sendMessage', sendMessage);

router.put('/viewAMessage', viewAMessage);

module.exports = router;