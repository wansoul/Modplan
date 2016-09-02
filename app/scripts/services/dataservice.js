'use strict';

/**
 * @ngdoc service
 * @name modplanApp.DataService
 * @description
 * # DataService
 * Service in the modplanApp.
 */
angular.module('modplanApp')
.service('DataService', function ($http) {

	var modelsDataURL = "https://dl.dropboxusercontent.com/u/9451043/modplan/models.json";
	//var modelsDataURL = "data/models.json";

    return {
    	getModelsData: function(){
    		return $http.get(modelsDataURL)
		        .then(function(response){
		            return response.data;
		        }, function(error){
		    		return error.data;	
		        })
	    }
    }

});
