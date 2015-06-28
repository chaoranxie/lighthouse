(function(){

  angular.module('assignments').controller('AssignmentDetailController', [
          'questionService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          AssignmentDetailController
       ]);

  function AssignmentDetailController(questionService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.q = []
    assignmentService
      .loadAllAssignments()
      .then( function( assignments ) {
        self.assignments = assignments
      });
  }

})();
