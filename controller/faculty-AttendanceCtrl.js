app.controller("facultyAttendanceCtrl", function($scope,$http,$location,dropdownValueService) {

  $scope.isAuthenticated = function() {
    if (localStorage.getItem("fid")===null && localStorage.getItem('fac_password')===null) {
      $location.path('/');
    }
  }

  $scope.isAuthenticated();

  $scope.Logout = function() {
    localStorage.removeItem("fid");
    localStorage.removeItem("fac_password");
    $location.path('/');
  }

  $scope.courseArr = dropdownValueService.getCourseArr();
  $scope.branchArr = dropdownValueService.getBranchArr();
  $scope.yearArr = dropdownValueService.getYearArr();
  $scope.semArr = dropdownValueService.getSemArr();
  $scope.fid = localStorage.getItem("fid");
  $scope.getsubjectandCode = function() {
    dropdownValueService.getsubjectNameCode($scope.fid,$scope.course,$scope.branch,$scope.year,$scope.sem);
    $scope.subject_nameArr = dropdownValueService.getsubjectName();
    $scope.subject_codeArr = dropdownValueService.getsubjectCode();
  }



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
    //  console.log(response.data);
    });
  }


 //get faculty profile details

 $scope.getFacultyProfile = function() {
   $http.post("php/getFacultyProfile.php", {
     'fid': $scope.fid
   }).then(function(response) {
     $scope.FacultyProfile = response.data;
   });
 }

 $scope.getFacultyProfile();

});
