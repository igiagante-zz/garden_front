/**
 * Created by igiagante on 23/6/15.
 */

angular.module('gardenFront')
  .controller('ModalGalleryController', function($scope, $http, close) {

  var url = 'http://localhost:3000/api/images/5540e58953ab32d312000005';

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
