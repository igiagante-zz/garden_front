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
  }]);

/*
{Date: new Date('2015-05-01'), Water: 4, PhDosis: 2, PH: 6.4, EC: 1.2, Nutrients: 'D: 6, BC: 8'},
{Date: new Date('2015-05-07'), Water: 6, PhDosis: 4, PH: 6.5, EC: 1.3, Nutrients: 'BC: 10, BB: 4'},
{Date: new Date('2015-05-14'), Water: 8, PhDosis: 6, PH: 6.7, EC: 1.5, Nutrients: 'BC: 14, BB: 6'}, */
