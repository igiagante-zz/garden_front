/**
 * Created by igiagante on 3/6/15.
 */

'use strict';

angular.module('gardenFront')
  .controller('FileDestroyCtrl', function ($scope, $http) {
    var file = $scope.file,
      state;
    if (file.url) {
      file.$state = function () {
        return state;
      };
      file.$destroy = function () {
        state = 'pending';
        return $http({
          url: file.deleteUrl,
          method: file.deleteType
        }).then(
          function () {
            state = 'resolved';
            $scope.clear(file);
          },
          function () {
            state = 'rejected';
          }
        );
      };
    } else if (!file.$cancel && !file._index) {
      file.$cancel = function () {
        $scope.clear(file);
      };
    }
  });
