/**
 * Created by igiagante on 24/6/15.
 */


'use strict';

angular.module('gardenFront')
.directive("ngFileSelect", function(fileReader, $timeout) {
  return {
    scope: {
      ngModel: '='
    },
    link: function($scope, el) {
      function getFile(file) {
        fileReader.readAsDataUrl(file, $scope)
          .then(function(result) {
            $timeout(function() {
              $scope.ngModel = result;
              console.log('$scope.ngModel: ' + $scope.ngModel);
              console.log('result: ' + result);
            });
          });
      }

      el.bind("change", function(e) {
        var file = (e.srcElement || e.target).files[0];
        getFile(file);
      });
    }
  };
})
