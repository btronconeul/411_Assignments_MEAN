"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
   name: String,
   members: [String],
   github: String,
   rating: Number
});

mongoose.model('Project', ProjectSchema);