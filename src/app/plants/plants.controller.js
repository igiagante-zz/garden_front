'use strict';

var gardenFront = angular.module('gardenFront')
  .controller('PlantsCtrl', function ($scope, ModalService) {

    $scope.queue = [];

    $scope.show = function() {

      ModalService.showModal({
        templateUrl: 'app/components/form/form_plant.html',
        controller: 'ModalController',
        windowClass: 'app-modal-window'
      }).then(function(modal) {

        modal.element.modal();
        modal.close.then(function(result) {
          $scope.message = 'You said ' + result;
        });
      });
    };

    $scope.dynamicPopover = {
      content: 'Ph: 6.5 Ec: 1.2  Count of trimmed: 2  Harvest: 18gr  Comments: alo',
      title: 'Plant Detail'
    };

    $scope.showGallery = function(){

      ModalService.showModal({
        templateUrl: 'app/partials/gallery.html',
        controller: 'app/controllers/ModalGalleryController',
        windowClass: 'app-modal-window'
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.message = 'You said ' + result;
        });
      });
    };

    $scope.addPlant = function(){

      ModalService.showModal({
        templateUrl: 'app/components/form/form_add_plant.html',
        controller: 'ModalFormPlantController',
        windowClass: 'app-modal-window'
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.message = 'You said ' + result;
        });
      });
    };
  });

angular.module('gardenFront').controller('ModalController', function($scope, $http, close) {

  $scope.dismissModal = function(result) {
    close(result, 200); // close, but give 200ms for bootstrap to animate
  };
});

angular.module('gardenFront').controller('ModalFormPlantController', function($scope, $http, close) {

    $scope.dismissModal = function(result) {
      close(result, 200); // close, but give 200ms for bootstrap to animate
    };
  });


