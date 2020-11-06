app.factory('dropdownValueService', function($http) {
  var factory = {};

  var courseArr = ['B.Tech','B.Sc','BCA','M.Tech','MCA','M.Sc'];
  var deptArr = ['Computer Science','Mechanical Engineering','Electrical Engineering','Agricultural','Bachelor of Computer Application','Bio Medical','Bio Technology'];
  var yearArr = ['1','2','3','4'];
  var semArr = ['1','2'];
  var subject_nameArr = [];
  var subject_codeArr = [];
  var class_id = [];

  factory.getCourseArr = function() {
    return  courseArr;
  }
  factory.getBranchArr = function() {
    return  deptArr;
  }
  factory.getYearArr = function() {
    return yearArr;
  }
  factory.getSemArr = function() {
    return  semArr;
  }


  factory.getsubjectNameCode = function(fid,course,branch,year,sem) {
    $http.post("php/fac-getTakeAttendanceData.php", {
      'fid': fid,
      'course': course,
      'branch': branch,
      'year': year,
      'sem': sem
    }).then(function(response) {
      var AttendanceData = response.data.records1;
      subject_nameArr.splice(0);
      subject_codeArr.splice(0);
      for(var i in AttendanceData)
      {
        for (var j in AttendanceData[i]) {
          if (j==='subject_name') {
            //console.log(j);
            subject_nameArr.push(AttendanceData[i][j]);
          } else if (j==='subject_code') {
            subject_codeArr.push(AttendanceData[i][j]);
          }
        }
      }

    });

  }

  factory.getsubjectName = function() {
    return subject_nameArr;
  }
  factory.getsubjectCode = function() {
    return subject_codeArr;
  }





  return factory;
});
