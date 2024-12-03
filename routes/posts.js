const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');

router.post('/create',PostController.create)
router.put('/update/id/:_id',PostController.update)
router.delete('/delete/id/:_id',PostController.delete)
router.get('/getAll',PostController.getAll)
router.get('/getPostByTitle/:title',PostController.getPostByTitle)



module.exports = router;