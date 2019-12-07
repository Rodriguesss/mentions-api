const express = require('express');
const router = express.Router();
const MentionController = require('../controllers/MentionController');

router.get('/', MentionController.listMentions);
router.post('/', MentionController.createMention);

module.exports = router;