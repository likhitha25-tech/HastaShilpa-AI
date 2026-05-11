const mongoose = require("mongoose");

const designSchema = new mongoose.Schema({

  originalImage: String,
  generatedImage: String,
  style: String

});

module.exports =
mongoose.model("Design", designSchema);