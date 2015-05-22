/**
 * Created by igiagante on 22/5/15.
 */

'use strict';

var gardenFront = angular.module('gardenFront')

gardenFront.controller('FileUploadController', [
  '$scope', '$http', '$filter', '$window',

  function ($scope, $http) {

    $scope.loadingFiles = false;

  }
]);
