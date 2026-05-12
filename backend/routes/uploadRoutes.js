const fs = require("fs");
const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

  const dir = "uploads/";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  cb(null, dir);
}
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }

});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {

  res.json({
    message: "Image Uploaded Successfully",
    file: req.file
  });

});

module.exports = router;