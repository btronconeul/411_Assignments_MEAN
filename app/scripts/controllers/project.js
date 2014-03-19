'use strict';

angular.module('mean410App')
       .controller('ProjectCtrl', function ($scope, $location, $routeParams, projectFactory) {
        $scope.project;
        $scope.projects;
        $scope.status;
        $scope.isHidden = false;

        //CRUD for Projects
        $scope.create =  function(){
            var newProject = {
                name: this.name,
                github: this.github,
                rating: 0,
                members: [this.memberOne, this.memberTwo, this.memberThree]
            };
            projectFactory.create(newProject)
                .success(function (response) {
                    $location.path('projects');
                    $scope.projects.push(response);
                    $scope.status = "Your project " + response.name + " has been added!";
                })
                .error(function (error) {
                    $scope.status = 'Your project could not be added!';
                });

        };

        $scope.findAll = function (){
            projectFactory.findAll()
                .success(function(projs){
                    $scope.projects = projs;
                })
                .error(function (err) {
                    console.log('Unable to load projects:' + err.message);
                });
        }

        $scope.findOne = function(){
            projectFactory.findOne($routeParams.id)
                .success(function (proj) {
                    $scope.project = proj;
                })
                .error(function (error) {
                    $scope.status = 'Your project could not be located!' + error.message;
                });
        };

        $scope.update = function(){
            var project = $scope.project;

            projectFactory.update(project)
                .success(function () {
                    $location.path('projects')
                })
                .error(function (error) {
                    console.log('Failed');
                });
        };

        $scope.addComment = function () {
            var updatedProject = $scope.project;
            var today = new Date();
            updatedProject.comments.push({body: this.newComment, date: today.getDate()});
            projectFactory.update(updatedProject)
                .success(function (response) {
                    //$scope.project.comments.push(response.comments.pop());
                    $scope.isHidden = !$scope.isHidden;
                    $scope.newComment = "";
                })
                .error(function (error) {
                    console.log('Failed');
                });
        }

        $scope.commentForm = function () {
            $scope.isHidden = !$scope.isHidden;
        }

        $scope.delete = function (id) {
            projectFactory.delete(id)
                .success(function () {
                    $scope.status = 'Deleted Project!';
                    for (var i = 0; i < $scope.projects.length; i++) {
                        var cust = $scope.projects[i];
                        if (cust.ID === id) {
                            $scope.projects.splice(i, 1);
                            break;
                        }
                    }
                })
                .error(function (error) {
                    $scope.status = 'Unable to delete project: ' + error.message;
                });
        };


  });


