app.controller("addNewClassCtrl", function($scope,$http) {

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

  $scope.courseArr = ['B.Tech','B.Sc','BCA','M.Tech','MCA','M.Sc'];
  $scope.branchArr = ['Computer Science','Mechanical Engineering','Electrical Engineering','Agricultural','Bachelor of Computer Application','Bio Medical','Bio Technology'];
  $scope.yearArr = ['1','2','3','4'];
  $scope.semArr = ['1','2'];
  $scope.fidArr = [];

  $scope.addClass = function() {
    $http.post("php/add-New-Class.php", {
      'subject_name': $scope.subject_name,
      'subject_code': $scope.subject_code,
      'course': $scope.course,
      'branch': $scope.branch,
      'year': $scope.year,
      'semester': $scope.semester,
      'fid': $scope.fid
    }).then(function(response) {
      alert(response.data);
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

});
