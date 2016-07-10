controllers = {};

controllers.customersController = function ($scope) {
    customers = [
      {
          customerId: 1,
          firstName: 'rakesh',
          lastName: 'kumar',
          city: 'amritsar',
          orderCount: 10
      },
      {
          customerId: 2,
          firstName: 'vishal',
          lastName: 'kumar',
          city: 'amritsar',
          orderCount: 2
      },
      {
          customerId: 3,
          firstName: 'jatin',
          lastName: 'kumar',
          city: 'pathankot',
          orderCount: 5
      },
      {
          customerId: 4,
          firstName: 'Aman',
          lastName: 'singh',
          city: 'jalandhar',
          orderCount: 10
      }
    ];
    $scope.customerList = function () {
        return customers
    };
    $scope.getFullName = function (customer) {
        return customer.firstName + ' ' + customer.lastName;
    };
    $scope.addNewCustomer = function () {
        //creating customerObject
        var customer = {
            customerId: customers.length + 1,
            firstName: $scope.newFirstName,
            lastName: $scope.newLastName,
            city: $scope.newCity

        };
        //reset input
        $scope.newFirstName = '';
        $scope.newLastName = '';
        $scope.newCity = '';
        //adding to local list
        customers.push(customer);
    };

    $scope.deleteCustomer = function (c) {
        // delete customer
        customers.forEach(function (v, i, tobj) {
            if (v.customerId == c) {
                customers.splice(i, 1)
            }
        });
    };

    $scope.getOrderLink = function (customer) {
        return '#/customer/' + customer.customerId + '/orders';
    };
};

controllers.orderListController = function ($scope) {
    var orders = [{
        orderId: 1,
        orderDate: new Date().toDateString(),
        price: 12,
        itemCount: 23,
        customerId: 1
    }, {
        orderId: 1,
        orderDate: new Date().toDateString(),
        price: 12,
        itemCount: 23,
        customerId: 1
    }, {
        orderId: 1,
        orderDate: new Date().toDateString(),
        price: 12,
        itemCount: 23,
        customerId: 1
    }, {
        orderId: 1,
        orderDate: new Date().toDateString(),
        price: 12,
        itemCount: 23,
        customerId: 1
    }, {
        orderId: 1,
        orderDate: new Date().toDateString(),
        price: 12,
        itemCount: 23,
        customerId: 1
    }, {
        orderId: 1,
        orderDate: new Date().toDateString(),
        price: 12,
        itemCount: 23,
        customerId: 1
    }, {
        orderId: 1,
        orderDate: new Date().toDateString(),
        price: 12,
        itemCount: 23,
        customerId: 1
    }
    ];

    $scope.getOrders = function () {
        return orders;
    };


};

controllers.orderDetailsControllers = function ($scope) {
    $scope.orderDetails = {
        orderId: 1,
        orderName: "order name",
        price: 12,
        orderDate: new Date().toDateString(),
        itemCount: 12,
        itemList: "ajs,sldjf,sldjf,lasjd,adsjfk",
    };
};

controllers.ordersController = function () { };

// register contoller with App Module
customerApp.controller(controllers);