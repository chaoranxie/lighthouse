(function(){

  angular
       .module('users')
       .controller('UserController', [
          'userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          UserController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function UserController( userService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    self.username ='frodo_271'
    self.password = "password"
    self.login = function(){
      debugger
        userService.loginUser(self.username, self.password).then( function( user ) {
            debugger;
            self.user = user
          });
    }

    // self.login
  }

})();
