angular.module('StartUp', []); //Creating a module called Startup
// need to use ng-app directive
//Then, create a controller
angular.module('Startup') //retrieves the already created module
    .controller('potatoTroller', ['$scope', potato]); //controller has to take function after injector
    // Need to use ng-controller directive
    

    //Function that respresents our controller
    //Needs paramaters that match the inejected dependenices
    
    function potato ($scope) {
        // console.log('This is the controller', $scope)
        $scope.greeting = 'Hola, Brah';
    }
    
    $scope.buttonTime = function () {
        console.log("I was clicked");
 }; 
//  angular.module("app", [])
//     .controller('goldController', ['$scope', troller]);
    
//     function troller ($scope) {
        
//     }