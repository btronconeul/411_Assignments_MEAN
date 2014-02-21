'use strict';

angular.module('mean410App')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
