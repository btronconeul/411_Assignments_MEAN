'use strict';

angular.module('mean410App')
  .controller('ProjectCtrl', function ($scope, projectFactory) {
    $scope.projects;
    $scope.status;

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
        
        $scope.createProject =  function(){
            var newProject = {
                name: this.name,
                github: this.github,
                rating: 0,
                members: [this.memberOne, this.memberTwo, this.memberThree]
            }
            projectFactory.createProject(newProject)
                .success(function(){
                    $scope.status = 'Project' + newProject.name + 'has been added!';
                })
                .error(function(error){
                    $scope.status = 'Your project could not be added!';
                })

        };
  });
