(function(){

  angular.module('assignments').controller('AssignmentController', [
          'assignmentService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          AssignmentController
       ]);

  function AssignmentController(assignmentService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.assignments = []
    assignmentService
      .loadAllAssignments()
      .then( function( assignments ) {
        self.assignments = assignments
      });
  }

})();
