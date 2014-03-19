'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Project = mongoose.model('Project');

/**
 * Populate database with sample application data
 */


Project.find({}).remove(function() {
    Project.create({
           name: 'Team MVC',
           members:['Brian Troncone', 'Bradley Troncone', 'Kristi Troncone'],
           github: 'http://github.com/btroncone',
           rating: 10,
           comments: [{
               body: "Microsoft sucks!",
               date: "02/10/2014"
           },{
               body: "ASP.NET is the best!",
               date: "03/11/2014"
           }]
        }, {
            name: 'Django for Life',
            members:['Joe Smith', 'John Doe'],
            github: 'http://github.com/johndoe',
            rating: 4,
            comments: [{
                body: "Why would anyone use Python?",
                date: "01/11/2014"
            },{
                body: "Python is the future of web development!",
                date: "11/11/2013"
            }]
        }, {
            name: 'I Love Spring!',
            members:['Joe Johnson', 'Larry Smith','JR Wells'],
            github: 'http://github.com/spring4me',
            rating: 6,
            comments: [{
                body: "Java is like Eclipse, terrible!",
                date: "01/11/2014"
            },{
                body: "Eclipse is the best IDE ever. You don't know anything.",
                date: "04/17/2014"
            },{
                body: "Try intelliJ!",
                date: "06/12/2014"
            }]
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
