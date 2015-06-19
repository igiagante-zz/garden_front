/**
 * Created by ignaciogiagante on 6/18/15.
 */

'use strict';

angular.module('gardenFront')

.controller('sliderCtrl', function($scope, $http){
    /*
    $scope.images=[{src:'img1.png',title:'Pic 1'},{src:'img2.jpg',title:'Pic 2'},{src:'img3.jpg',title:'Pic 3'},{src:'img4.png',title:'Pic 4'},{src:'img5.png',title:'Pic 5'}];
     */

    var url = 'http://localhost:3000/api/image/5540e58953ab32d312000005';

    $scope.images = [];

    $http.get(url)
      .then(
      function (response) {
        $scope.images = response.data.files || [];
      }
    );

  });
