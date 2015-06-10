/**
 * Created by igiagante on 10/6/15.
 */

'use strict';

angular.module('gardenFront')

.controller('nutrientCtrl', ['$scope', function($scope){

    $scope.selectedNutrient = '';
    $scope.count = '';
    $scope.nutrients = ['Delta 9','Bloom-C','Bloom-bastic','Miner'];
    $scope.nutrientsDosis = [];


    $scope.addNutrient = function() {
      var newNutrient = {};
      newNutrient.nutrient = $scope.selectedNutrient;
      newNutrient.count = $scope.count;
      $scope.nutrientsDosis.push(newNutrient);
    };

  }]);
