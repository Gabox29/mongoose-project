const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const { authentication, isAuthor } = require("../middlewares/authentication");

router.post("/create", authentication, PostController.create);
router.put("/update/id/:_id", authentication, isAuthor, PostController.update);
router.delete("/delete/id/:_id", authentication, isAuthor, PostController.delete);
router.get("/getAll", PostController.getAll);
router.get("/getByTitle/:title", PostController.getByTitle);
router.get("/getById/:_id", PostController.getById);
router.post("/insertComment/:_id", authentication, PostController.insertComment);
router.post("/like/:_id", authentication, PostController.like);
router.post("/unlike/:_id", authentication, PostController.unlike);

module.exports = router;
