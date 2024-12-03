const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');

router.post('/create',PostController.create)
router.put('/update/id/:_id',PostController.update)


module.exports = router;