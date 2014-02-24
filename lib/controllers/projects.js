'use strict';

var mongoose = require('mongoose'),
    Project = mongoose.model('Project');


exports.all = function(req,res){
    return Project.find(function(err, projects){
        if(!err){
            return res.json(projects);
        }else{
            return res.send(err);
        }
    });
};

exports.create = function(req, res){
    var project = new Project(req.body);
    project.save(function(err){
        if(err){
            console.log(err.message);
        }else{
            res.jsonp(project);
            console.log(project);
        }
    });

};
