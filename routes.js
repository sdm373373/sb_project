'use strict';

angular.module('myApp.routes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/today', {
        templateUrl: 'views/today.html',
        controller: 'TodayCtrl'
    })
    .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
    })
    
    .otherwise({ redirectTo: '/today' });
  
}]);

