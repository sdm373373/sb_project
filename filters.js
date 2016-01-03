'use strict';

angular.module("myApp.filters", [])
        
.filter('sumOfValue', function () {
    return function (data, key) {
        if (angular.isUndefined(data) && angular.isUndefined(key))
            return 0;        
        
        var sum = 0;

        angular.forEach(data, function(v, k) {
            sum = sum + parseFloat(v[key]);
        });  
        
        return sum;
    };
})
.filter('sumDailyGoal', function () {
    return function (data, currentSB, goal, bonus) {
        if (angular.isUndefined(data) && angular.isUndefined(currentSB) && angular.isUndefined(goal) && angular.isUndefined(bonus))
            return 0;        
        
        var sum = 0;
        
        angular.forEach(data, function(v, k) {            
            if(parseInt(v[currentSB]) >= parseInt(v[goal]))
                sum = sum + parseInt(v[bonus]);
        });  
        
        return sum;
    };
});