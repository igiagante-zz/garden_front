/**
 * Created by igiagante on 22/5/15.
 */

'use strict';

angular.module('gardenFront')

  .controller('DosisCtrl', ['$scope', 'ngDialog', '$controller', function ($scope, ngDialog, $controller) {

    $scope.selectedDate = new Date();

    $scope.tooltip = {
      title: "Delta: 9mL, Bloom-C: 6mL",
      text: "Delta: 9mL, Bloom-C: 6mL"
    };

    $scope.openNutrientForm = function() {
      ngDialog.openConfirm({
        template: '/app/components/dosis/form_nutrients.html',
       // scope: $scope ,//Pass the scope object if you need to access in the template
        controller: ['$scope' , function($scope) {

          $scope.selectedNutrient = '';
          $scope.count = '';
          $scope.nutrients = ['Delta 9','Bloom-C','Bloom-bastic','Miner'];
          $scope.nutrientsDosis = [];

          $scope.addNutrient = function() {
            var newNutrient = {};
            newNutrient.nutrient = $scope.selectedNutrient;
            newNutrient.count = $scope.count;
            $scope.nutrientsDosis.push(newNutrient);
            $scope.selectedNutrient = '';
            $scope.count = '';
          };

          $scope.deleteNutrient = function(value){
            var index = $scope.nutrientsDosis.indexOf(value);
            $scope.nutrientsDosis.splice(index, 1);
          };
        }]
      }).then(
        function(value) {
          //save the contact form
        },
        function(value) {
          //Cancel or do nothing
        }
      );
    };

    $scope.rowCollection = [
      {date: new Date('2015-05-01'), water: 4, phDosis: 2, ph: 6.4, ec: 1.2, nutrients: 'D: 6, BC: 8'},
      {date: new Date('2015-05-07'), water: 6, phDosis: 4, ph: 6.5, ec: 1.3, nutrients: 'BC: 10, BB: 4'},
      {date: new Date('2015-05-14'), water: 8, phDosis: 6, ph: 6.7, ec: 1.5, nutrients: 'BC: 14, BB: 6'},
    ];

  }]);

