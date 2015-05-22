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
    'blueimp.fileupload']);


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
  })
;
