//(function () {
//
//  function headerController(scope, Authentication, Menus) {
//    console.log('***************************************');
//    console.log('hi');
//    console.log('***************************************');
//    scope.authentication = Authentication;
//    scope.isCollapsed = false;
//    scope.menu = Menus.getMenu('topbar');
//
//    scope.toggleCollapsibleMenu = function() {
//      scope.isCollapsed = !$scope.isCollapsed;
//    };
//
//    // Collapsing the menu after navigation
//    scope.$on('$stateChangeSuccess', function() {
//      scope.isCollapsed = false;
//    });
//  }
//
//  angular.module('core')
//    .controller('headerController', ['$scope', 'Authentication', 'Menus', headerController])
//
//}());


(function () {

  function headerController(scope) {

  }

  angular.module('core')
    .controller('headerController', ['$scope', headerController])

}());