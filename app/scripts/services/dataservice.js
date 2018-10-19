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

	//var modelsDataURL = "data/models.json";
	//var modelsDataURL = "https://dl.dropboxusercontent.com/u/9451043/modplan/models.json";
  var modelsDataURL = "https://www.dropbox.com/s/360py5uhqy6jjpg/models.json?dl=1";

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
