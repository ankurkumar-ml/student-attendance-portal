app.controller("admin-FacultyCtrl", function($scope, $http, $location) {

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

  $scope.pageno = 1;

  $scope.getFaculties = function()  {
    $http.post("php/admin-getFaculties.php", {
      'pageno': $scope.pageno
    }).then(function(response) {
       $scope.faculties = response.data.records;
       for(var i in $scope.faculties)
       {
         for(var j in $scope.faculties[i])
         {
           if(j=='totalPages')
           {
             $scope.totalPages = $scope.faculties[i][j];
           }
         }
       }

    });
  }

 $scope.getFaculties();

 $scope.nextPage = function(x) {
   $scope.pageno = x;
   $scope.getFaculties();
 }

 $scope.previousPage = function(x) {
   $scope.pageno = x;
   $scope.getFaculties();
 }

 //delete students function

 $scope.deleteFaculties = function(x) {

     $http.post("php/admin-deleteFaculties.php", {
       'fid': x
     }).then(function(response) {
       alert(response.data);
       $scope.getFaculties();
     });

 }

 //Edit faculty profile

 $scope.EditFaculty = function(fid) {
   $http.post("php/getFacultyProfile.php", {
     'fid': fid
   }).then(function(response) {
     localStorage.setItem("Update_fid",fid);
     localStorage.setItem("Update_fname",response.data.name);
     localStorage.setItem("Update_femail",response.data.email);
     localStorage.setItem("Update_fmobile",response.data.mobile);
     localStorage.setItem("Update_fpassword",response.data.password);
     $location.path('/admin/UpdateFaculty');
   });
 }


});
