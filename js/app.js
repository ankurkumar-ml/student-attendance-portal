var app = angular.module("myApp",['ngRoute']);



app.config(function($routeProvider) {


  $routeProvider
  .when("/", {
    templateUrl : "form-componants/student-form.html"
  })
  .when("/admin/faculty", {
    templateUrl : "admin-componants/admin-faculty.html"
  })
  .when("/admin/student", {
    templateUrl : "admin-componants/admin-student.html"
  })
  .when("/admin/classes", {
    templateUrl : "admin-componants/admin-class.html"
  })
  .when("/admin/add-new-class", {
    templateUrl : "admin-componants/add-class.html"
  })
  .when("/admin/approval", {
    templateUrl : "admin-componants/admin-approval.html"
  })
  .when("/admin/attendance/", {
    templateUrl : "admin-componants/admin-attendance.html"
  })
  .when("/admin/UpdateFaculty", {
    templateUrl : "admin-componants/admin-UpdateFaculty.html"
  })
  .when("/admin/UpdateStudent", {
    templateUrl : "admin-componants/admin-UpdateStudent.html"
  })
  .when("/admin/UpdateClass", {
    templateUrl : "admin-componants/admin-UpdateClass.html"
  })
  .when("/admin/Login", {
    templateUrl : "form-componants/adminLogin.html"
  })
  .when("/faculty/student/", {
    templateUrl : "faculty-componants/faculty-student.html"
  })
  .when("/faculty/attendance/", {
    templateUrl : "faculty-componants/faculty-attendance.html"
  })
  .when("/faculty/take-attendance/", {
    templateUrl : "faculty-componants/faculty-takeAttendance.html"
  })
  .when("/student-form/", {
    templateUrl : "form-componants/student-form.html"
  })
  .when("/studentProfile/", {
    templateUrl : "student-componants/student-profile.html"
  })
  .when("/faculty-form/", {
    templateUrl : "form-componants/faculty-form.html"
  })
  .otherwise({
    redirectTo : "/"
  });


});
