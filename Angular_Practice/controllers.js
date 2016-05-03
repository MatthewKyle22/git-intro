(function(){
    angular.module('controllers', [])
    .controller('homeController', homeController)
        
        function homeController() {
            var hCtrl = this
            hCtrl.name = 'Home Controller'
        }
}());