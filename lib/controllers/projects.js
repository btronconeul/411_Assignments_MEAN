'use strict';

var mongoose = require('mongoose'),
    _ = require('lodash'),
    Project = mongoose.model('Project');


exports.all = function(req,res){
    return Project.find(function(err, projects){
        if(!err){
            res.jsonp(projects);
        }else{
            res.send(err);
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
        }
    });
};
exports.showOne = function (req, res, next) {
    var projectId = req.params.id;

    Project.findById(projectId, function (err, project) {
        if (err) {
            next(err);
        }
        if (!project){
            res.send(404);
        }
        res.jsonp(project);
    });
};

exports.update = function(req,res){
    console.log(req.body.name);
    console.log(req.params.id);

    Project.findByIdAndUpdate(req.params.id, { $set:
    {
        name: req.body.name,
        github: req.body.github,
        members: req.body.members
    }},
        function (err, project) {
        if (err){
            console.log(err.message);
        }
        res.jsonp(project);
    });

};

exports.destroy = function(req, res) {
    var project = req.project;

    project.remove(function(err) {
        if (err) {
            return res.send('/projects', {
                errors: err.errors
            });
        } else {
            res.jsonp(project);
        }
    });
};





