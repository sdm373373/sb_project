/* global angular */

'use strict';

angular.module('myApp.controllers', [])


.controller('NavBarCtrl', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        $scope.activePage = $location.path();
    });           

}])

.controller('TodayCtrl', ['$scope', 'Services', function($scope, Services) {
    $scope.today = new Date();
    $scope.users = [];
    $scope.dashboard = [];
    
    $scope.getTodaysSB = function(swagname) {
        for(var i = 0; i < $scope.dashboard.length; i++) {
            if($scope.dashboard[i].swagname === swagname)
                return $scope.dashboard[i].swagbucks;
        }
    };
    
    $scope.getUsers = function() {
        return Services.getUsers().then(function(result) {
            if(result.success)
                $scope.users = result.data;
        });
    }; 

    $scope.getDashboard = function() {
        return Services.getTodayDashboard().then(function(result) {
            if(result.success)
                $scope.dashboard = result.data;
        });
    }; 

    $scope.getLast5Days = function() {
        return Services.getLast5Days().then(function(result) {
            if(result.success)
                $scope.last5days = result.data;
        });
    }; 
        
    $scope.getUsers();    
    $scope.getDashboard();
    $scope.getLast5Days();
}])

.controller('WeekCtrl', ['$scope', 'Services', function($scope, Services) {

}])

.controller('MonthCtrl', ['$scope', 'Services', function($scope, Services) {

}])

.controller('YearCtrl', ['$scope', 'Services', function($scope, Services) {

}])

;