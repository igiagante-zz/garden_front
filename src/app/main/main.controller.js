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
        controller: 'ModalController',
        windowClass: 'app-modal-window'
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.message = 'You said ' + result;
        });
      });
    };

  });

gardenFront.controller('ModalController', function($scope, $http, close) {

  var url = 'http://localhost:3000/api/image/5540e58953ab32d312000005';

  $scope.images = [];

  $http.get(url)
    .then(
    function (response) {
      $scope.images = response.data.files || [];

      var linksContainer = $('#links');

      // Add the demo images as links with thumbnails to the page:
      $.each($scope.images, function (index, image) {
        $('<a/>')
          .append($('<img>').prop('src', image.url))
          .prop('href', image.url)
          .prop('title', image.name)
          .attr('data-gallery', '')
          .appendTo(linksContainer);
      });

      console.log('linksContainer ' + linksContainer);

      blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
    }
  );

  $scope.close = function(result) {
    close(result, 500); // close, but give 500ms for bootstrap to animate
  };
});
