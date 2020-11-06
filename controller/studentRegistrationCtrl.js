app.controller("studentRegistrationCtrl", function($scope,$http,dropdownValueService) {

  $scope.courseArr = [];
  $scope.branchArr = [];
  $scope.yearArr = [];
  $scope.semArr = [];

  $scope.courseArr = dropdownValueService.getCourseArr();
  $scope.branchArr = dropdownValueService.getBranchArr();
  $scope.yearArr = dropdownValueService.getYearArr();
  $scope.semArr = dropdownValueService.getSemArr();

  $scope.register = function() {
    $scope.date = new Date();

    $http.post("php/studentRegistration.php", {
      'name': $scope.name,
      'rollno': $scope.rollno,
      'course': $scope.course,
      'branch': $scope.branch,
      'year': $scope.year,
      'semester': $scope.semester,
      'email': $scope.email,
      'password': $scope.password,
      'date': $scope.date
    }).then (function(response) {
      alert(response.data);
    });
  }
});
