/**
 * Created by igiagante on 25/6/15.
 */


angular.module('gardenFront')

  .controller('createPlantCtrl', ['$scope', function($scope, $http){
    $scope.plant = {};
  }])

  .directive('createPlant', ['$interval', 'dateFilter', function($interval, dateFilter){

    return {
      restrict: 'E',
      scope: {},
      transcluded: true,
      templateUrl: 'create-plant.html',
      controller: 'createPlantCtrl'
    };

  }]);
