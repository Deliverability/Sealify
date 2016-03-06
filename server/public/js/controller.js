var app = angular.module("myApp", []);

app.controller('controller', ['$scope', '$http', '$window', function($scope, $http, $window) { 
  $scope.cancel = function() {
          $scope.contact = "";
  };
  
  $http.get('/api/mail').success(function(response) {
      console.log("Mail Received");
      console.log(response);
      $scope.mailbox = response;
                  
  });
    
  $http.get('/api/me').success(function(response) {
      $scope.username = response.user;
  });

  $scope.login = function() {
    $http.get('/api/login?user='+$scope.login.username+'&pass='+$scope.login.password).success(function(response) {
        $window.location.href ='/mailbox';
    });
  };

  $scope.signUp = function() {
    if($scope.newInfo.pass === $scope.newInfo.verify) {
      $http.post('/api/create', $scope.newInfo).success(function(response) {
        $scope.newInfo = "";
        $scope.popup = "Account created!";
      });
    }
    else {
        $scope.newInfo = "";
        $scope.popup = "Password did not match.";
    }
  };
}]);
