'use strict';

/**
 * @ngdoc function
 * @name modplanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the modplanApp
 */
angular.module('modplanApp')
  .controller('AboutCtrl', function ($rootScope) {
    $rootScope.currentPage = "about";
  });
