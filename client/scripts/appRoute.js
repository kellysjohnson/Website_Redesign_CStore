//** Created by KellyShimkoJohnson on 2/7/16. With credit to my PrimeAcademy cohort who helped me to learn to write this code!**//
//** special thanks to Vince Jones, Terry Gunderson, and Brian Aamodt **//


//App is enabling angular functionality within App's scope
var App = angular.module('App',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

// App.config is enabling navigation between html pages
App.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider.
        // directs to Home page
        when('/home', {
            templateUrl: "/views/home.html",
        }).
        // directs to We Are CHAP page
        when('/who',{
            templateUrl: "/views/who.html",
        }).
        // directs to the Contact Us page
        when('/contact',{
            templateUrl: "/views/contact.html",
        }).
        // directs to the FAQ page
        when('/faq',{
            templateUrl: "/views/faq.html",
        }).
        // defaults to Home page
        otherwise({
            redirectTo: "/home"
        });
}]);