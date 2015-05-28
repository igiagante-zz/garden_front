'use strict';

var gardenFront = angular.module('gardenFront')
  .controller('MainCtrl', function ($scope, ModalService) {

    $scope.queue = [];

    $scope.show = function() {

      ModalService.showModal({
        templateUrl: 'app/components/form/form_plant.html',
        controller: 'ModalController',
        windowClass: 'app-modal-window'
      }).then(function(modal) {

        modal.element.modal();
        modal.close.then(function(result) {
          $scope.message = "You said " + result;
        });
      });
    };
  });

gardenFront.controller('ModalController', function($scope, close) {
  $scope.close = function(result) {
    close(result, 500); // close, but give 500ms for bootstrap to animate
  };
});
