'use strict';

/**
 * @ngdoc function
 * @name modplanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modplanApp
 */
angular.module('modplanApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http) {
    $rootScope.currentPage = "main";

    $rootScope.models = [];

    $http.get("/data/models.json").then(function(response){
    			for(var i=0; i < response.data.length; i++){
    				$rootScope.models.push(response.data[i]);
    			}
	        }, function(error){
        		return error.data;	
	        });

  });
