"use strict";angular.module("modplanApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/model/:id",{templateUrl:"views/model.html",controller:"ModelCtrl"}).otherwise({redirectTo:"/"})}]).filter("as_trusted_html",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]).filter("as_trusted_url",["$sce",function(a){return function(b){return a.trustAsResourceUrl(b)}}]),angular.module("modplanApp").controller("MainCtrl",["$rootScope","$scope","$http",function(a,b,c){a.currentPage="main",a.models=[],c.get("https://dl.dropboxusercontent.com/u/9451043/modplan/models.json").then(function(b){for(var c=0;c<b.data.length;c++)a.models.push(b.data[c])},function(a){return a.data})}]),angular.module("modplanApp").controller("AboutCtrl",["$rootScope",function(a){a.currentPage="about"}]),angular.module("modplanApp").controller("ModelCtrl",["$rootScope","$scope","$routeParams",function(a,b,c){a.currentPage="model",b.modelId=c.id}]),angular.module("modplanApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="section"> <div class="row"> <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <h1>Modelos</h1> <div class="row"> <div class="col-md-4 col-sm-6" ng-repeat="model in models"> <a href="{{\'#model/\' + model.id | as_trusted_url}}"> <div class="model_card"> <h1>{{model.name}}</h1> </div> </a> </div> </div> </div> </div> <!-- \n\n<ul>\n      <li ng-repeat="model in models">\n        <h5><a href="{{\'#model/\' + model.id | as_trusted_url}}">{{model.name}}</a></h5>\n        <p>{{model.description}}</p>\n        <a href="{{\'#model/\' + model.id | as_trusted_url}}">\n          <img src="images/{{model.moldImage}}" width="30%">\n        </a>\n      </li>\n    </ul>\n\n\n      <div class="col-md-12">\n        <h3>Moldes</h3>\n        <p>\n          <img src="images/moldes.png" width="100%">\n        </p>\n      </div>\n      <div class="col-md-12">\n        <h3>Legenda</h3>\n        <dl>\n          <dt>01</dt><dd>Frente</dd>\n          <dt>02</dt><dd>Verso</dd>\n        </dl>\n      </div>\n       --> <!-- \n      <iframe width="100%" height="400" \n      src="https://sketchfab.com/models/3f477e4908174127af63d6767d9bb141/embed?autostart=1&amp;preload=1" \n      frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>\n       --> <!-- \nCamiseta\n3f477e4908174127af63d6767d9bb141\nPeplum\nb12cbc398729478cae42d44e37e0941c\n --> <!-- \n       <iframe width="100%" height="400" \n       src="https://sketchfab.com/models/b12cbc398729478cae42d44e37e0941c/embed?autostart=1&amp;preload=1" \n       frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="">\n       </iframe>\n --></div>'),a.put("views/model.html",'<div class="section"> <div class="row"> <div class="col-md-12"> <h1><a href="#/">Modelos</a> <img src="/images/back-icon.ff44e18c.png" class="back_icon"> Nome do Modelo</h1> <div class="row"> <div class="col-md-7"> <iframe width="100%" height="400" ng-src="{{\'https://sketchfab.com/models/\'+ modelId + \'/embed?autostart=1&amp;preload=1\' | as_trusted_url}}" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""> </iframe> </div> <div class="col-md-5"> <div class="row"> <div class="col-md-12"> <h2 class="moldes_title">Moldes</h2> <p> <img src="images/moldes/moldes.98370790.png" width="100%"> </p> </div> <div class="col-md-12"> <h2 class="legenda_title">Legenda</h2> <dl> <dt>01</dt><dd>Frente</dd> <dt>02</dt><dd>Verso</dd> </dl> </div> </div> </div> </div> </div> </div></div>')}]);
