/**
 * Created by igiagante on 23/6/15.
 */

angular.module('gardenFront')
  .controller('ModalFormPlantController', function($scope, $http, close) {

  $scope.dismissModal = function(result) {
    close(result, 200); // close, but give 200ms for bootstrap to animate
  };
});
