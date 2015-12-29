'use strict';

angular.module('myApp.routes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/today', {
        templateUrl: 'views/today.html',
        controller: 'TodayCtrl'
    })
    .when('/week', {
        templateUrl: 'views/week.html',
        controller: 'WeekCtrl'
    })
    .when('/month', {
        templateUrl: 'views/month.html',
        controller: 'MonthCtrl'
    })
    .when('/year', {
        templateUrl: 'views/year.html',
        controller: 'YearCtrl'
    })
    
    .otherwise({ redirectTo: '/today' });
  
}]);

