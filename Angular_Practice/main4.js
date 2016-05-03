angular.module('TooMuchPressure', []) //creates to much pressurre module


angular.module('TooMuchPressure')
    .controller('pressureControl', ['$scope', function($scope) {
        
        
        $scope.addInstructor function ()
        
        $scope.instructors = [
            {
                name      :'Raphael' ,
                startDate : 'Long, long ago',
                creditCard: 10,
                shirtSize : 10,
                homeTown  : 'Chi-town',
            }
            {
                name      : 'Rob',
                startDate : 'Long ago',
                creditCard: 42424242424242,
                shirtSize : 40,
                homeTown  : 'Tampa',
            }
            {
                name      : 'Tony',
                startDate : 'Feb.',
                creditCard: 50,
                shirtSize : 'XS',
                homeTown  : 'Compton',
            }
            ];
    }]);