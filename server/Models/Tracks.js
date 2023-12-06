//House model

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const track_schema = new mongoose.Schema(
  {
    id: String,
    thumbnail: String,
    topic: String,
    authorId: String,
    description: String,
    numberOfViews: Number,
    numberOfLikes: Number,
    length: Number,
    modulesCount: Number,
    modules: [String],
  },
  {
    timestamps: true,
  }
);

const Track = mongoose.model("Track", track_schema);

module.exports = Track;