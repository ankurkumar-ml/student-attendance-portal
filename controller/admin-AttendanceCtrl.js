app.controller("admin-AttendanceCtrl", function($scope,$http,$location,dropdownValueService) {

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
  $scope.subject_nameArr = [];
  $scope.subject_codeArr = [];
  $scope.fidArr = [];

  $scope.getAllsubjectNameCodeforAdmin = function() {
    $http.post("php/getAllsubjectNameCodeforAdmin.php", {
      'course': $scope.course,
      'branch': $scope.branch,
      'year': $scope.year,
      'sem': $scope.sem
    }).then(function(response) {
      //console.log(response.data.PHPSubjectNameCode);
      var SubjectNameCode = response.data.PHPSubjectNameCode;
      $scope.subject_nameArr.splice(0);
      $scope.subject_codeArr.splice(0);
      for(var i in SubjectNameCode)
      {
        for (var j in SubjectNameCode[i]) {
          if (j==='subject_name') {
            //console.log(j);
            $scope.subject_nameArr.push(SubjectNameCode[i][j]);
          } else if (j==='subject_code') {
            $scope.subject_codeArr.push(SubjectNameCode[i][j]);
          }
        }
      }
    });
  }


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

  $scope.getSubjectvsTotalAttendance = function() {
    $http.post("php/getSubjectvsTotalAttendance.php", {
      'course': $scope.course,
      'branch': $scope.branch,
      'year': $scope.year,
      'sem': $scope.sem,
      'subject_name': $scope.subject_name,
      'subject_code': $scope.subject_code,
      'fid': $scope.fid,
      'attendanceDate': $scope.attendanceDate
    }).then(function(response) {
      $scope.students = response.data.records;
     console.log(response.data);
    });
  }
});
