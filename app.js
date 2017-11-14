(function() {
    var app = angular.module('beerStore', []);

    app.controller('StoreController', function() {
        // TODO (back-front): fetch from repository
        this.products = beers;
    });

    app.controller("GalleryController", function(){
        this.current = 0;
    });

    app.controller("TabController", function(){
        this.current = 1;
        this.setTab = function(number){
            this.current = number;
        }
        this.isSet = function(number) {
            return number === this.current;
        }
    });

    // TODO (back-front): fetch from repository
    var beers = [
        {
            name: 'Estrella Galicia',
            description: "Best beer from the best country.",
            price: 1.26,
            country: 'Spain',
            images: [
                "images/estrella-gal-01.jpg",
                "images/estrella-gal-02.jpg"
            ]
        }]
})();

