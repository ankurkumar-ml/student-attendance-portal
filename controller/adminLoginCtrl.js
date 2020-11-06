app.controller("adminLoginCtrl", function($scope,$http,$location) {
  $scope.verifyData = function() {

    $http.post("php/admin-getUserPass.php", {
      'username': $scope.username,
      'password': $scope.password
    }).then(function(response) {

      if(response.data==='logged in successfully.') {
        localStorage.setItem("admin_username",$scope.username);
        localStorage.setItem("admin_password",$scope.password);
        $location.path('/admin/student');
      } else {
        alert("Incorrect User Name or Password.");
      }
    });
  }
});
