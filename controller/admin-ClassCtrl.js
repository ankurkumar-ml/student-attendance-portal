app.controller("admin-ClassCtrl", function($scope, $http, $location) {

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

  $scope.getClass = function()  {
    $http.post("php/admin-getClass.php", {
      'pageno': $scope.pageno
    }).then(function(response) {
       $scope.classes = response.data.records;
       for(var i in $scope.classes)
       {
         for(var j in $scope.classes[i])
         {
           if(j=='totalPages')
           {
             $scope.totalPages = $scope.classes[i][j];
           }
         }
       }

    });
  }

 $scope.getClass();

 $scope.nextPage = function(x) {
   $scope.pageno = x;
   $scope.getClass();
 }

 $scope.previousPage = function(x) {
   $scope.pageno = x;
   $scope.getClass();
 }

 //delete students function

 $scope.deleteClass = function(x) {


     $http.post("php/admin-deleteClass.php", {
       'subject_code': x
     }).then(function(response) {
       alert(response.data);
       $scope.getClass();
     });

 }


 //Edit already existed class

 $scope.EditClass = function(classID) {
   $http.post("php/getClassForEdit.php", {
     'classID': classID
   }).then(function(response) {
     //console.log(response.data);
     localStorage.setItem("Update_classID",classID);
     localStorage.setItem("Update_csubjname",response.data.subject_name);
     localStorage.setItem("Update_cscode",response.data.subject_code);
     localStorage.setItem("Update_ccourse",response.data.course);
     localStorage.setItem("Update_cbranch",response.data.branch);
     localStorage.setItem("Update_cyear",response.data.year);
     localStorage.setItem("Update_csem",response.data.sem);
     localStorage.setItem("Update_cfid",response.data.fid);
     $location.path('/admin/UpdateClass');
   });
 }

});
