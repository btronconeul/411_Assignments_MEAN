'use strict';

angular.module('mean410App')
  .factory('projectFactory', ['$http', function ($http) {
    var projectUrl = '/api/projects',
        projectFactory = {};

        projectFactory.getProjects = function(){
            return $http.get(projectUrl)
        }
        return projectFactory;
  }]);
