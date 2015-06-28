(function(){

  angular.module('dashboard').controller('DashboardController', [
          'userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          DashboardController
       ]);


  function DashboardController(userService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    self.user  = userService.getUser()


    self.userDetail = userService.getUserDetail()
  }

})();
