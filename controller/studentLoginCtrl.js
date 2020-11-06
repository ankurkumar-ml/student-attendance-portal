app.controller("studentLoginCtrl", function($scope,$http,$location) {

  $scope.verifyData = function() {

    $http.post("php/student-getrolnoPass.php", {
      'rollno': $scope.rollno,
      'password': $scope.password
    }).then(function(response) {

      if(response.data==='logged in successfully.') {
        localStorage.setItem("student_rollno",$scope.rollno);
        localStorage.setItem("student_password",$scope.password);
        $location.path('/studentProfile');
      } else {
        alert("Incorrect Roll Number or Password.");
      }
    });
  }
});
