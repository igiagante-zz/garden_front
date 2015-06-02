/**
 * Created by igiagante on 22/5/15.
 */

'use strict';

var gardenFront = angular.module('gardenFront')

  .controller('DosisCtrl', ['$scope', function ($scope) {

    $scope.rowCollection = [
      {date: new Date('2015-05-01'), water: 4, phDosis: 2, ph: 6.4, ec: 1.2, nutrients: 'D: 6, BC: 8'},
      {date: new Date('2015-05-07'), water: 6, phDosis: 4, ph: 6.5, ec: 1.3, nutrients: 'BC: 10, BB: 4'},
      {date: new Date('2015-05-14'), water: 8, phDosis: 6, ph: 6.7, ec: 1.5, nutrients: 'BC: 14, BB: 6'},
    ];
  }])

  .controller('DatepickerCtrl', ['$scope', function ($scope) {

    $scope.today = function() {
      $scope.dt = new Date();
    };

    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events =
      [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ];

    $scope.getDayClass = function(date, mode) {
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i=0;i<$scope.events.length;i++){
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    };
  }]);

