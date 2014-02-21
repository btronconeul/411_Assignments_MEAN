'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing'),
  Project = mongoose.model('Project');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});
Project.find({}).remove(function() {
    Project.create({
           name: 'Team MVC',
           members:['Brian Troncone', 'Bradley Troncone', 'Kristi Troncone'],
           github: 'http://github.com/btroncone',
           rating: 10
        }, {
            name: 'Django for Life',
            members:['Joe Smith', 'John Doe'],
            github: 'http://github.com/johndoe',
            rating: 4
        }, {
            name: 'I Love Spring!',
            members:['Joe Johnson', 'Larry Smith','JR Wells'],
            github: 'http://github.com/spring4me',
            rating: 6
        },
        function() {
            console.log('finished populating projects!');
        }
    );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
