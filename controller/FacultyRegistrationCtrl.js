app.controller("FacultyRegistrationCtrl", function ($scope,$http) {
  //$scope.name = "ankur";
  $scope.faculty_registration = function () {
    $scope.date = new Date();

    $http.post("php/faculty_registration.php", {
      'fid': $scope.fid,
      'name': $scope.name,
      'email': $scope.email,
      'mobile': $scope.mobile,
      'password': $scope.password,
      'date': $scope.date
    }).then(function (response) {
      alert(response.data);
    });
  }
});
