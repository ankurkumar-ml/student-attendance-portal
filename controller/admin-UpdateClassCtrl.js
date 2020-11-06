app.controller("admin-UpdateClassCtrl", function($scope,$http,$location,dropdownValueService) {

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
  $scope.fidArr = [];

  $scope.class_id = localStorage.getItem("Update_classID");
  $scope.subject_name = localStorage.getItem("Update_csubjname");
  $scope.subject_code = localStorage.getItem("Update_cscode");
  $scope.course = localStorage.getItem("Update_ccourse");
  $scope.branch = localStorage.getItem("Update_cbranch");
  $scope.year = localStorage.getItem("Update_cyear");
  $scope.semester = localStorage.getItem("Update_csem");
  $scope.fid = localStorage.getItem("Update_cfid");


  $scope.get_fidForAddClass = function() {
    $http.post("php/get_fidForAddClass.php", {

    }).then(function(response) {
      var fids = response.data;
      $scope.fidArr.splice(0);
      for(var i in fids) {
        for(var j in fids[i]) {
          if(j==='f_id') {
            $scope.fidArr.push(fids[i][j]);
          }
        }
      }
    });
  }

  $scope.get_fidForAddClass();


  $scope.UpdateClass = function() {
    $http.post("php/admin-UpdateClass.php", {
      'classID': $scope.class_id,
      'subject_name': $scope.subject_name,
      'subject_code': $scope.subject_code,
      'course': $scope.course,
      'branch': $scope.branch,
      'year': $scope.year,
      'sem': $scope.semester,
      'fid': $scope.fid
    }).then(function(response) {
      if (response.data === 'Updated successfully.') {
        alert(response.data);
        localStorage.removeItem("Update_classID");
        localStorage.removeItem("Update_csubjname");
        localStorage.removeItem("Update_cscode");
        localStorage.removeItem("Update_ccourse");
        localStorage.removeItem("Update_cbranch");
        localStorage.removeItem("Update_cyear");
        localStorage.removeItem("Update_csem");
        localStorage.removeItem("Update_cfid");
        $location.path('/admin/classes');
      } else {
        alert(response.data);
      }
    });
  }

});
