"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Comments = new Schema({
    body: String,
    date: Date
});
var ProjectSchema = new Schema({
   name: String,
   members: [String],
   github: String,
   rating: Number,
   comments: [Comments]
});

mongoose.model('Project', ProjectSchema);