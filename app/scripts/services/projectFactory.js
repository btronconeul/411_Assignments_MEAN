'use strict';

angular.module('mean410App')
  .factory('projectFactory', ['$http', function ($http) {
    var projectUrl = '/api/projects',
        projectFactory = {};

        projectFactory.getProjects = function(){
            return $http.get(projectUrl);
        }

        projectFactory.createProject = function(proj){
            return $http.post(projectUrl, proj);
        }
        //TODO Finish CRUD methods
        return projectFactory;
  }]);
