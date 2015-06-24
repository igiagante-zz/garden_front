/**
 * Created by igiagante on 3/6/15.
 */


'use strict';

angular.module('gardenFront')
  .controller('fileUploadMainCtrl', function($scope, fileReader) {
    $scope.imageSrc = "";

    $scope.$on("fileProgress", function(e, progress) {
      $scope.progress = progress.loaded / progress.total;
    });
  });
