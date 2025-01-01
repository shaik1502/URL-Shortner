const express = require("express");
const {
  handleGetURL,
  handlePostUrl,
  handleGetURLbyID,
  handleDeleteUrlbyID,
  handleGetRedirectByUrl,
} = require("../controllers/url");
const router = express.Router();

router.route("/").get(handleGetURL).post(handlePostUrl);

router.route("/:shortid").get(handleGetRedirectByUrl)

router.route("/:id").delete(handleDeleteUrlbyID); 
// router.route("/:id").get(handleGetURLbyID); 


module.exports = router;
