/* global angular */

'use strict';

angular.module('myApp.controllers', ['ngAnimate', 'ui.bootstrap', 'ui.grid', 'ui.grid.grouping'])


.controller('NavBarCtrl', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        $scope.activePage = $location.path();
    });           

}])

.controller('TodayCtrl', ['$scope', 'Services', function($scope, Services) {
    $scope.today = new Date();
    $scope.users = [];
    $scope.dashboard = [];
    $scope.last5days = [];
    $scope.botStatus = [];
    $scope.toggleDashboardText = false;
    
    $scope.popover = {
        templateUrl: 'botstatus.html'
    };
    
    $scope.getUsersDashboard = function(swagname) {
        for(var i = 0; i < $scope.dashboard.length; i++) {
            if($scope.dashboard[i].swagname === swagname)
                return $scope.dashboard[i];
        }
    };
    
    $scope.getPBGoalValue = function(sb, goal) { 
        if(parseInt(sb) > parseInt(goal))
            return goal;
        else
            return sb;
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

    $scope.getBotStatus = function() {
        return Services.getBotStatus().then(function(result) {
            if(result.success)
                $scope.botStatus = result.data;
        });
    }; 
        
    $scope.getUsers();    
    $scope.getDashboard();
    $scope.getLast5Days();
    $scope.getBotStatus();
}])

.controller('HistoryCtrl', ['$scope', 'Services', 'uiGridGroupingConstants', function($scope, Services, uiGridGroupingConstants) {
    $scope.gridOptions = {
        enableFiltering: true,
        treeRowHeaderAlwaysVisible: false,
        columnDefs: [            
            { name: 'year', type: 'number', minWidth: '100', width: '10%', grouping: { groupPriority: 0 }, sort: { priority: 0, direction: 'desc' } },
            { name: 'month', type: 'number', minWidth: '100', width: '10%', grouping: { groupPriority: 1 }, sort: { priority: 1, direction: 'desc' } },
            { name: 'week', type: 'number', minWidth: '100', width: '10%', grouping: { groupPriority: 2 }, sort: { priority: 3, direction: 'desc' } },
            { name: 'date', minWidth: '100', width: '10%', type: 'date', cellFilter: 'date' },
            { name: 'swagbucks', minWidth: '200', width: '30%', treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
                customTreeAggregationFinalizerFn: function( aggregation ) {
                    aggregation.rendered = aggregation.value;
                } 
            },
            { name: 'profit', minWidth: '200', width: '30%', cellFilter: 'currency', treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
                customTreeAggregationFinalizerFn: function( aggregation ) {
                    aggregation.rendered = aggregation.value;
                } 
            } 
        ],
        onRegisterApi: function( gridApi ) {
            $scope.gridApi = gridApi;
        }
    };
    
    $scope.getProfitSummary = function() {
        return Services.getProfitSummary().then(function(result) {
            if(result.success)
                $scope.gridOptions.data = result.data;
        });
    }; 
    
    $scope.getProfitSummary();
}])

;