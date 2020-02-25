const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortId = require("shortId");
const config = require("config");

const Url = require("../models/url");

//route method POST

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = "http://localhost:5000";

  //check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  // Create url code
  const urlCode = shortId.generate();

  //check long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.erroe(err);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid long url");
  }
});

module.exports = router;
