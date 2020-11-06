app.controller("fac-takeAttendanceCtrl", function($scope,$http,$location,dropdownValueService) {

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

  $scope.submitAttendanceBtn = true;

 $scope.facGetClassID = function() {
   $http.post("php/fac-facGetClassID.php", {
     'course': $scope.course,
     'branch': $scope.branch,
     'year': $scope.year,
     'sem': $scope.sem,
     'subject_name': $scope.subject_name,
     'subject_code': $scope.subject_code,
     'fid': $scope.fid
   }).then(function(response) {
     $scope.class_id = response.data;
   });
 }

  $scope.getStudents = function() {
    $scope.facGetClassID();
    $http.post("php/fac-getTakeAttendanceStudents.php", {
      'course': $scope.course,
      'branch': $scope.branch,
      'year': $scope.year,
      'sem': $scope.sem
    }).then(function(response) {
      $scope.students = response.data.records2;
      $scope.submitAttendanceBtn = false;
    //  console.log($scope.students);

    });
  }

$scope.attendance = [];



$scope.AttendanceJSON = [];
$scope.createAttendanceJSON = function(rollno,sno,trows) {

  $scope.totalrows = trows;
  $scope.JSONObject = [{"rollno": rollno, "attendance": $scope.attendance[sno], "class_id": $scope.class_id, "attendanceDate": $scope.attendanceDate}];
  $scope.AttendanceJSON.push($scope.JSONObject);
  //console.log($scope.AttendanceJSON);
}

$scope.submitAttendance = function() {
 if ($scope.AttendanceJSON.length < $scope.totalrows) {
    alert("Please fill the attendance of all the students.")
 }  else {
   $http.post("php/insertAttendance.php", {
     'AttendanceJSON': $scope.AttendanceJSON
   }).then(function(response) {
     alert(response.data);
   });
 }

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
