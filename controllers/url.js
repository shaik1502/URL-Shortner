const Url = require("../models/url");
const shortid = require('shortid');

async function handleGetURL(req, res) {
  const obj = await Url.find({});
  return res.status(200).json(obj);
}
async function handlePostUrl(req, res) {
  const body = req.body;
const shortidid = shortid.generate();
  const existingUrl = await Url.findOne({ original_url: body.url });
  if (existingUrl) {
    return res.status(409).json({ msg: "Url already in exists" });
  }
  const result = await Url.create({
    original_url: body.url,
    short_id:shortidid,
});

  res.status(201).json({ msg: "Success", id: result.id });
}
   
async function handleGetURLbyID(req, res) {
  const obj = await Url.findById(req.params.id);
  return res.status(200).json(obj);   
}

async function handleDeleteUrlbyID(req, res) {
  await Url.findByIdAndDelete(req.params.id);
  return res.status(200).json({ msg: "Url Deleted Successfully" });
}
module.exports = {
  handleGetURL,
  handlePostUrl,
  handleGetURLbyID,
  handleDeleteUrlbyID,
};
     