'use strict';

/**
 * @ngdoc function
 * @name modplanApp.controller:ModelCtrl
 * @description
 * # ModelCtrl
 * Controller of the modplanApp
 */
angular.module('modplanApp')
  .controller('ModelCtrl', function ($rootScope, $scope, $routeParams, DataService) {
  	$rootScope.currentPage = "model";

	DataService.getModelsData()
        .then(function(response){
            $scope.model = response[$routeParams.id];
        }, function(error){
    		return error.data;	
        });

  });
