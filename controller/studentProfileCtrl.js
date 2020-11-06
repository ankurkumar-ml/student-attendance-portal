app.controller("studentProfileCtrl", function($scope,$http,$location) {

  $scope.isAuthenticated = function() {
    if (localStorage.getItem("student_rollno")===null && localStorage.getItem('student_password')===null) {
      $location.path('/');
    }
  }

  $scope.isAuthenticated();

  $scope.Logout = function() {
    localStorage.removeItem("student_rollno");
    localStorage.removeItem("student_password");
    $location.path('/');
  }

  $scope.rollno = localStorage.getItem("student_rollno");


  $scope.date = new Date();

  $scope.getAttendanceData = function() {
    $http.post("php/getStudentAttendanceData.php", {
      'rollno': $scope.rollno,
      'course': $scope.course,
      'branch': $scope.branch,
      'year': $scope.year,
      'sem': $scope.sem,
      'date': $scope.date
    }).then(function(response) {
      //console.log(response.data);
      $scope.StudentAttendance = response.data.AttendanceData;
    });
  }

  $scope.getStudentProfile = function() {
    $http.post("php/getStudentProfile.php", {
      'rollno': $scope.rollno
    }).then(function(response) {
      console.log(response.data);
      $scope.StudentProfileData = response.data;
      $scope.course = response.data.course;
      $scope.branch = response.data.branch;
      $scope.year = response.data.year;
      $scope.sem = response.data.sem;
      $scope.getAttendanceData();
    });
  }

  $scope.getStudentProfile();




});
