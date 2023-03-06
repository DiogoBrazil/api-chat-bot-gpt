const router = require('express').Router();

const apiChatBotController = require('../controllers/apiChatBotController');

router.post('/', apiChatBotController.chatBot);


module.exports = router;