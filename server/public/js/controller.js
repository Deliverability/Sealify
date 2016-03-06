var app = angular.module("myApp", []);


app.controller('controller', ['$scope', '$http', function($scope, $http) { 
  $scope.cancel = function() {
          $scope.contact = "";
  };

    
  $http.get('/api/fakemail').success(function(response) {
      console.log("Mail Received");
      console.log(response);
      $scope.mailbox = response;
                  
  });
    /*
  $scope.submit = function() {
    $http.post('/submitted', $scope.contact).success(function(response) {
      console.log(response);
      $scope.contact = "";
    });
  };

  var refreshSubmissions = function() {
    $http.get('/submitted').success(function(response) {
        console.log("Received submitted contacts"); 
        $scope.submissions = response;
    });
  };
 
  refreshSubmissions();

  $scope.removeSub = function(id) {
    console.log(id);
    $http.delete('/submitted/' + id).success(function(response) {
      console.log(response);
    });
    refreshSubmissions();
  };
 
  $scope.login = function() {
    $http.get('/admin', $scope.check).success(function(response) {
      if($scope.check.password == response[0].password) {
        loggedIn = true;
        window.location.replace(response[0].path);
      }
      else {
       window.location.replace('/');
      }
    });
  };

  var refreshProject = function() {
    $http.get('/prjs').success(function(response) {
        console.log("Received projects"); 
        $scope.prjs = response;
        $scope.proj  = "";
    });
  };

  refreshProject(); 

  $scope.addProject = function() {
   $http.post('/prjs', $scope.proj).success(function(response) {
      console.log(response);
      $scope.proj = "";
    });
    refreshProject();
  };

  $scope.removeProject = function(id) {
    console.log(id);
    $http.delete('/prjs/' + id).success(function(response) {
      console.log(response);
    });
    refreshProject();
  };

  $scope.editProject = function(id) {
    console.log(id);
    $http.get('/prjs/' + id).success(function(response) {
      $scope.proj = response;
    });
  };

  $scope.updateProject = function() {
    console.log($scope.proj._id);
    $http.put('/prjs/' + $scope.proj._id, $scope.proj).success(function(response) { 
        refreshProject();
    });
  };
   
  if(loggedIn &&  window.location.pathname == '/adminAccess') {
      console.log(loggedIn);
      window.location.replace('/');
  }
  else {
      console.log(loggedIn);
  }

  $scope.addEntry = function() {
    console.log($scope.entry);
     $http.post('/journaldb', $scope.entry).success(function(response) {
      console.log(response);
      $scope.entry = "";
    });
  };

  var refreshJournal = function() {
    $http.get('/journaldb').success(function(response) {
        console.log("Received journal entries"); 
        $scope.journaldb = response;
        $scope.entry  = "";
    });
  };

  refreshJournal(); 

  $scope.addEntry = function() {
   $http.post('/journaldb', $scope.entry).success(function(response) {
      console.log(response);
    });
    refreshJournal();
  };

  $scope.removeEntry = function(id) {
    console.log(id);
    $http.delete('/journaldb/' + id).success(function(response) {
      console.log(response);
    });
    refreshJournal();
  };

  $scope.editEntry = function(id) {
    console.log(id);
    $http.get('/journaldb/' + id).success(function(response) {
      $scope.entry = response;
    });
  };

  $scope.updateEntry = function() {
    console.log($scope.entry._id);
    $http.put('/journaldb/' + $scope.entry._id, $scope.entry).success(function(response) { 
        refreshJournal();
    });
  };
  */

}]);
