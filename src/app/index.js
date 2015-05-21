'use strict';

var app = angular.module('gardenFront',
  [ 'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'restangular',
    'ngRoute',
    'ui.bootstrap',
    'angularModalService']);


app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/plantBoard.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
