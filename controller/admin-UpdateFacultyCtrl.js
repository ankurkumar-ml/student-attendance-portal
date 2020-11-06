app.controller("admin-UpdateFacultyCtrl", function($scope,$location,$http) {

  $scope.isAuthenticated = function() {
    if (localStorage.getItem("admin_username")===null && localStorage.getItem('admin_password')===null) {
      $location.path('/');
    }
  }

  $scope.isAuthenticated();

  $scope.Logout = function() {
    localStorage.removeItem("admin_username");
    localStorage.removeItem("admin_password");
    $location.path('/');
  }

  $scope.name = localStorage.getItem("Update_fname");
  $scope.fid = localStorage.getItem("Update_fid");
  $scope.email = localStorage.getItem("Update_femail");
  $scope.mobile = localStorage.getItem("Update_fmobile");
  $scope.password = localStorage.getItem("Update_fpassword");
  $scope.confirmpassword = $scope.password;

  $scope.UpdateFaculty = function() {
    $http.post("php/admin-UpdateFaculty.php", {
      'fid': $scope.fid,
      'name': $scope.name,
      'email': $scope.email,
      'mobile': $scope.mobile,
      'password': $scope.password
    }).then(function(response) {
      if (response.data === 'Updated successfully.') {
        alert(response.data);
        localStorage.removeItem("Update_fid");
        localStorage.removeItem("Update_fname");
        localStorage.removeItem("Update_femail");
        localStorage.removeItem("Update_fmobile");
        localStorage.removeItem("Update_fpassword");
        $location.path('/admin/faculty');
      } else {
        alert(response.data);
      }
    });
  }


});
