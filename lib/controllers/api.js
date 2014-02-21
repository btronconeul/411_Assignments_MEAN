'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Project = mongoose.model('Project');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.projects = function(req,res){
    return Project.find(function(err, projects){
        if(!err){
            return res.json(projects);
        }else{
            return res.send(err);
        }
    })
}