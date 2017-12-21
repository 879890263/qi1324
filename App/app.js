var app=angular.module('app',['ui.router'])
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('index',{
        url:'/index',
        templateUrl:'App/view/data.html',
        controller:'mycontroller'
        
    })
    $urlRouterProvider.otherwise('/index')

})