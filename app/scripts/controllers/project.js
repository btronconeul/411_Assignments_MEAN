'use strict';

angular.module('mean410App')
       .controller('ProjectCtrl', function ($scope, $location,$routeParams, projectFactory) {
        $scope.project;
        $scope.projects;
        $scope.status;



        $scope.getProjects = function getProjects(){
            projectFactory.getProjects()
                .success(function(projs){
                    $scope.projects = projs;
                })
                .error(function (err) {
                    console.log('Unable to load projects:' + err.message);
                });
        }
        
        $scope.createProject =  function(){
            var newProject = {
                name: this.name,
                github: this.github,
                rating: 0,
                members: [this.memberOne, this.memberTwo, this.memberThree]
            };
            projectFactory.createProject(newProject)
                .success(function (response) {
                    $location.path('projects');
                    $scope.projects.push(newProject);
                    $scope.status = "Your project " + newProject.name + " has been added!";
                })
                .error(function (error) {
                    $scope.status = 'Your project could not be added!';
                });

        };

        $scope.findProject = function(){
            projectFactory.getProject($routeParams.id)
                .success(function (proj) {
                    $scope.project = proj;
                })
                .error(function (error) {
                    $scope.status = 'Your project could not be located!' + error.message;
                });
        };


  });
