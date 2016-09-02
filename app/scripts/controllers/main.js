'use strict';

/**
 * @ngdoc function
 * @name modplanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modplanApp
 */
angular.module('modplanApp')
  .controller('MainCtrl', function ($rootScope, $scope, DataService) {
    $rootScope.currentPage = "main";

    DataService.getModelsData()
        .then(function(response){
            $scope.models = response;
        }, function(error){
    		return error.data;	
        });

  });
