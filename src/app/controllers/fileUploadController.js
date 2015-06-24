/**
 * Created by igiagante on 3/6/15.
 */


'use strict';

angular.module('gardenFront')
  .controller('fileUploadCtrl', function ($scope, $http) {

    var uploadScriptUrl = 'http://localhost:3000/api/images/5540e58953ab32d312000005';

    $scope.options = {
      url: uploadScriptUrl
    };

    $scope.loadingFiles = true;

    $http.get(uploadScriptUrl)
      .then(
      function (response) {
        $scope.loadingFiles = false;
        $scope.queue = response.data.files || [];
      },
      function () {
        $scope.loadingFiles = false;
      }
    );

    $scope.changeMainImage = function(file){

      var files = $scope.queue;

      for(var i = 0; i < files.length; i++){
        files[i].main = false;
      }
      file.main = true;
    };


    /*
    $scope.submit = function () {
      //upload only the files that haven't id
      angular.forEach($scope.queue, function (value, key) {

      });
    };

    $scope.cancel = function () {
      //clear files
      $scope.queue.splice(0, $scope.queue.length);
    };
    */


  });
