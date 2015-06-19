/**
 * Created by igiagante on 19/6/15.
 */


angular.module('gardenFront').directive('a', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {
      if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
        elem.on('click', function(e){
          e.preventDefault();
        });
      }
    }
  };
});
