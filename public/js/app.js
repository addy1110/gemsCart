(function() {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', [ '$http', function($http){
        var store = this;
        store.products = [];

        console.log("no item");
        $http.get('json/store-products.json').success(function(data){
            store.products=data;
            console.log(data);
        });

    }]);

    app.controller('ReviewController', function() {
        var rev=this;
        rev.review = {};

        rev.addReview = function(product) {
            product.reviews.push(rev.review);

            rev.review = {};
        };
    });
})();
