'use strict';

var app = angular.module('gardenFront',
  [ 'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'restangular',
    'ngRoute',
    'ui.bootstrap',
    'angularModalService',
    'blueimp.fileupload',
    'mgcrea.ngStrap',
    'ngDialog',
    'gardenFront.directives'])

.config(function($compileProvider) {
  var imgSrcSanitizationWhitelist = /^\s*(https?|ftp|file):|data:image\//;
  $compileProvider.imgSrcSanitizationWhitelist(imgSrcSanitizationWhitelist);
});



app.config(function ($routeProvider) {
    $routeProvider
      .when('/plants', {
        templateUrl: 'app/partials/plantBoard.html',
        controller: 'MainCtrl'
      })
      .when('/irrigations', {
        templateUrl: 'app/irrigations/irrigations.html',
        controller: 'IrrigationsCtrl'
      })
      .when('/dosis', {
        templateUrl: 'app/dosis/dosis.html',
        controller: 'DosisCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
