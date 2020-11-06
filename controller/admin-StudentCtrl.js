app.controller("adminStudentCtrl", function($scope, $http, $location) {


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

  $scope.getStudents = function()  {
    $http.post("php/admin-getStudents.php", {
      'pageno': $scope.pageno
    }).then(function(response) {
       $scope.students = response.data.records;
       for(var i in $scope.students)
       {
         for(var j in $scope.students[i])
         {
           if(j=='totalPages')
           {
             $scope.totalPages = $scope.students[i][j];
           }
         }
       }

    });
  }

 $scope.getStudents();

 $scope.nextPage = function(x) {
   $scope.pageno = x;
   $scope.getStudents();
 }

 $scope.previousPage = function(x) {
   $scope.pageno = x;
   $scope.getStudents();
 }

 //delete students function

 $scope.deleteStudents = function(x) {

   if(confirm) {
     $http.post("php/admin-deleteStudents.php", {
       'rollno': x
     }).then(function(response) {
       alert(response.data);
       $scope.getStudents();
     });
   }
 }


 //Edit Student profile

 $scope.EditStudent = function(rollno) {
   $http.post("php/getStudentProfile.php", {
     'rollno': rollno
   }).then(function(response) {
     //console.log(response.data);
     localStorage.setItem("Update_srollno",rollno);
     localStorage.setItem("Update_sname",response.data.name);
     localStorage.setItem("Update_scourse",response.data.course);
     localStorage.setItem("Update_sbranch",response.data.branch);
     localStorage.setItem("Update_syear",response.data.year);
     localStorage.setItem("Update_ssem",response.data.sem);
     localStorage.setItem("Update_semail",response.data.email);
     localStorage.setItem("Update_spassword",response.data.password);
     $location.path('/admin/UpdateStudent');
   });
 }

});
