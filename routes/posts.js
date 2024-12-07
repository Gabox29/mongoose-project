const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');
const { authentication } = require('../middleware/authentication');

router.post('/create',authentication,PostController.create)
router.put('/update/id/:_id',PostController.update)
router.delete('/delete/id/:_id',PostController.delete)
router.get('/getAll',PostController.getAll)
router.get('/getByTitle/:title',PostController.getByTitle)
router.get('/getById/:_id',PostController.getById)

module.exports = router;