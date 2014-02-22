'use strict';

angular.module('mean410App')
  .controller('ProjectCtrl', function ($scope, projectFactory) {
    $scope.projects;

        getProjects();

        function getProjects(){
            projectFactory.getProjects()
                .success(function(projs){
                    $scope.projects = projs;
                })
                .error(function(err){
                    console.log('Unable to load projects:' + err.message);
                });
        }
  });
