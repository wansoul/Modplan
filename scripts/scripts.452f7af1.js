"use strict";angular.module("modplanApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angular-loading-bar"]).config(["$routeProvider","cfpLoadingBarProvider",function(a,b){b.parentSelector="#loading_bar_container",a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/model/:id",{templateUrl:"views/model.html",controller:"ModelCtrl"}).when("/informacoes",{templateUrl:"views/informacoes.html",controller:"InformacoesCtrl",controllerAs:"informacoes"}).otherwise({redirectTo:"/"})}]).filter("as_trusted_html",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]).filter("as_trusted_url",["$sce",function(a){return function(b){return a.trustAsResourceUrl(b)}}]),angular.module("modplanApp").controller("MainCtrl",["$rootScope","$scope","DataService",function(a,b,c){a.currentPage="main",c.getModelsData().then(function(a){b.models=a},function(a){return a.data})}]),angular.module("modplanApp").controller("ModelCtrl",["$rootScope","$scope","$routeParams","DataService",function(a,b,c,d){a.currentPage="model",d.getModelsData().then(function(a){b.model=a[c.id]},function(a){return a.data})}]),angular.module("modplanApp").controller("InformacoesCtrl",["$rootScope",function(a){a.currentPage="model"}]),angular.module("modplanApp").service("DataService",["$http",function(a){var b="https://dl.dropboxusercontent.com/u/9451043/modplan/models.json";return{getModelsData:function(){return a.get(b).then(function(a){return a.data},function(a){return a.data})}}}]),angular.module("modplanApp").run(["$templateCache",function(a){a.put("views/informacoes.html",'<div class="section"> <div class="row"> <div class="col-md-12"> <h1><a href="#/">Modelos</a> <img src="images/back-icon.ed509486.svg" class="back_icon"> Informações</h1> <div class="row"> <div class="col-md-8 col-sm-8"> <h3>Informações sobre o OA.</h3> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a enim elit. Aenean faucibus nunc sed maximus efficitur. Morbi nulla tellus, tincidunt sed orci a, eleifend venenatis eros. Pellentesque ut nisl dui. Pellentesque faucibus bibendum urna, sed varius mi sagittis nec. Curabitur malesuada mattis sem, eget ultrices ex vehicula non. Fusce condimentum pellentesque cursus. Vestibulum nec velit quis tellus rhoncus condimentum sed at metus. Aenean vitae nisi ut nisi lacinia iaculis vitae sed felis. Morbi dictum nisl lacus, in viverra eros auctor venenatis. Vivamus sagittis turpis faucibus, mollis magna eu, posuere magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. In non purus venenatis, vulputate arcu in, placerat purus. </p> </div> <div class="col-md-4 col-sm-4"> <h3>Informações Técnicas</h3> <p> Desenvolvido por <a href="http://www.wansouza.com" target="_blank">Wan Souza</a> </p> <h4>Tecnologias Utilizadas</h4> <p>Blender</p> </div> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="section"> <div class="row"> <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <h1>Modelos</h1> <div class="row"> <div class="col-md-4 col-sm-6" ng-repeat="model in models"> <a href="{{\'#model/\' + $index | as_trusted_url}}"> <div class="model_card" style="background-image: url(images/molds/{{model.thumbnailURL}})"> <h1>{{model.name}}</h1> </div> </a> </div> </div> </div> </div></div>'),a.put("views/model.html",'<div class="section"> <div class="row"> <div class="col-md-12"> <h1><a href="#/">Modelos</a><img src="images/back-icon.ed509486.svg" class="back_icon">{{model.name}}</h1> <div class="row"> <div class="col-md-7"> <iframe width="100%" height="400" ng-src="{{\'https://sketchfab.com/models/\'+ model.id + \'/embed?autostart=1&amp;preload=1\' | as_trusted_url}}" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""> </iframe> </div> <div class="col-md-5"> <div class="row"> <div class="col-md-12"> <h2 class="moldes_title">Moldes</h2> <p> <img src="images/molds/{{model.moldImageURL}}" width="100%"> </p> </div> <div class="col-md-12"> <h2 class="legenda_title">Legenda</h2> <table> <tr ng-repeat="caption in model.captions" class="caption"> <td>{{caption.id}}</td><td>{{caption.description}}</td> </tr> </table> </div> </div> </div> </div> </div> </div></div>')}]);