'use strict';

angular.module('mean410App')
  .factory('projectFactory', ['$http', function ($http) {
    var projectUrl = '/api/projects',
        projectFactory = {};

        projectFactory.findAll = function(){
            return $http.get(projectUrl);
        }

        projectFactory.create = function(project){
            return $http.post(projectUrl, project);
        }

        projectFactory.findOne = function(id){
            return $http.get(projectUrl + '/' + id)
        }

        projectFactory.update = function(project){
            return $http.put(projectUrl + '/' + project._id, project)
        }

        projectFactory.delete = function (id) {
            return $http.delete(projectUrl + '/' + id);
        }

        return projectFactory;


  }]);



