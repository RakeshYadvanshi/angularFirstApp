/// <reference path="../angular-route.js" />


customerApp.config(function ($locationProvider,$routeProvider) {
    
        //default page
        .when('/', {
            controller: 'customersController',
            templateUrl: '/PartialView/customers.html'
        })
        //customerList
        .when('/customers', {
            controller: 'customersController',
            templateUrl: '/PartialView/customers.html'
        })
        //customer orderList
        .when('/customer/:customerId/orders', {
            controller: 'orderListController',
            templateUrl: '/PartialView/orderlist.html'
        })

        //customer orderDetails
        .when('/customer/:customerId/orderdetails/:orderid', {
            controller: 'orderDetailsControllers',
            templateUrl: '/PartialView/orderdetails.html'
        })

        .when('/orders', {
            controller: 'ordersController',
            templateUrl: '/PartialView/orders.html'
        })

        //anything else
        .otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
});