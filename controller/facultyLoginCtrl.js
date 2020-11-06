app.controller("facultyLoginCtrl", function($scope,$http,$location) {

  $scope.verifyData = function() {

    $http.post("php/fac-getIDPass.php", {
      'fid': $scope.fid,
      'password': $scope.password
    }).then(function(response) {

      if(response.data==='logged in successfully.') {
        localStorage.setItem("fid",$scope.fid);
        localStorage.setItem("fac_password",$scope.password);
        $location.path('/faculty/attendance');
      } else {
        alert("Incorrect FacultyID or Password.");
      }
    });
  }





});
