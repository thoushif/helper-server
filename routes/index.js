const express = require("express");

const blogpost = require("../controllers/blogpost-controller");

const router = express.Router();

router.get("/", blogpost.postBlogpost);
router.get("/:id", blogpost.postBlogpost);

module.exports = router;
