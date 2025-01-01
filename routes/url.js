const express = require("express");
const {
  handleGetURL,
  handlePostUrl,
  handleGetURLbyID,
  handleDeleteUrlbyID,
} = require("../controllers/url");
const router = express.Router();

router.route("/").get(handleGetURL).post(handlePostUrl);

router.route("/:id").get(handleGetURLbyID).delete(handleDeleteUrlbyID);

module.exports = router;
