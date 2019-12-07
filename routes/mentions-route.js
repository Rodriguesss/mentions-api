const express = require('express');
const router = express.Router();
const MentionController = require('../controllers/MentionController');

router.post('/', MentionController.createMention);
router.get('/', MentionController.listMentions);
router.get('/:id', MentionController.oneMention);
router.delete('/:id', MentionController.deleteMention);
router.put('/:id', MentionController.putMention);

module.exports = router;