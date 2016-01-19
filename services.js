/* global angular */

'use strict';

angular.module('myApp.services', [])

.factory('Services', ['$http',
  function($http) {
    return {      
        getUsers: function() {
            return $http.get('/api/users.php').then(function(result) {
                return result.data;
            });
        },
        getTodayDashboard: function() {
            return $http.get('/api/today_dashboard.php').then(function(result) {
                return result.data;
            });
        },
        getLast5Days: function() {
            return $http.get('/api/last5days.php').then(function(result) {
                return result.data;
            });
        },
        getBotStatus: function() {
            return $http.get('/api/bot_status.php').then(function(result) {
                return result.data;
            });
        },
        getProfitSummary: function() {
            return $http.get('/api/profit_summary.php').then(function(result) {
                return result.data;
            });
        }
    };
  }
]);

