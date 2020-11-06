app.controller("admin-UpdateStudentCtrl", function($scope,$http,$location,dropdownValueService) {

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

  $scope.courseArr = dropdownValueService.getCourseArr();
  $scope.branchArr = dropdownValueService.getBranchArr();
  $scope.yearArr = dropdownValueService.getYearArr();
  $scope.semArr = dropdownValueService.getSemArr();

  $scope.rollno = localStorage.getItem("Update_srollno");
  $scope.name = localStorage.getItem("Update_sname");
  $scope.course = localStorage.getItem("Update_scourse");
  $scope.branch = localStorage.getItem("Update_sbranch");
  $scope.year = localStorage.getItem("Update_syear");
  $scope.semester = localStorage.getItem("Update_ssem");
  $scope.email = localStorage.getItem("Update_semail");
  $scope.password = localStorage.getItem("Update_spassword");
  $scope.confirmpassword = $scope.password;

  $scope.UpdateStudent = function() {
    $http.post("php/admin-UpdateStudent.php", {
      'rollno': $scope.rollno,
      'name': $scope.name,
      'course': $scope.course,
      'branch': $scope.branch,
      'year': $scope.year,
      'sem': $scope.semester,
      'email': $scope.email,
      'password': $scope.password
    }).then(function(response) {
      if (response.data === 'Updated successfully.') {
        alert(response.data);
        localStorage.removeItem("Update_srollno");
        localStorage.removeItem("Update_sname");
        localStorage.removeItem("Update_scourse");
        localStorage.removeItem("Update_sbranch");
        localStorage.removeItem("Update_syear");
        localStorage.removeItem("Update_ssem");
        localStorage.removeItem("Update_semail");
        localStorage.removeItem("Update_spassword");
        $location.path('/admin/student');
      } else {
        alert(response.data);
      }
    });
  }
});
