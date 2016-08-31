'use strict';

/**
 * @ngdoc overview
 * @name modplanApp
 * @description
 * # modplanApp
 *
 * Main module of the application.
 */
angular
  .module('modplanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/model/:id', {
        templateUrl: 'views/model.html',
        controller: 'ModelCtrl'
      })
      .when('/informacoes', {
        templateUrl: 'views/informacoes.html',
        controller: 'InformacoesCtrl',
        controllerAs: 'informacoes'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .filter('as_trusted_html', ['$sce', function($sce){
    return function(text){
      return $sce.trustAsHtml(text);
    }
  }])

  .filter('as_trusted_url', ['$sce', function($sce){
    return function(url){
      return $sce.trustAsResourceUrl(url);
    }
  }]);