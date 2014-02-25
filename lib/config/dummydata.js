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
