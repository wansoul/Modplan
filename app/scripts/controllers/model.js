'use strict';

/**
 * @ngdoc function
 * @name modplanApp.controller:ModelCtrl
 * @description
 * # ModelCtrl
 * Controller of the modplanApp
 */
angular.module('modplanApp')
  .controller('ModelCtrl', function ($rootScope, $scope, $routeParams) {
  	$rootScope.currentPage = "model";

	$scope.modelId = $routeParams.id;

	//$scope.currentModel = $rootScope.models[]

  });
