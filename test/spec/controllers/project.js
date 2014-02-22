'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('mean410App'));

  var ProjectCtrl,
    scope,
    apiUrl,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($_httpBackend_,$controller, $rootScope) {
    scope = $rootScope.$new();
    apiUrl = '/api/projects'
    $httpBackend = $_httpBackend_;
      $_httpBackend_.expectGET(apiUrl)
          .respond(['Team MVC', 'Django for Life', 'I Love Spring']);
    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope
    });
  }));

  it('should attach project to the scope', function () {
    expect(scope.projects).toBeUndefined();
    $httpBackend.flush();
    expect(scope.projects.length).toBe(3);
  });
});
