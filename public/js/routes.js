const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/annuaire', {
            templateUrl: 'views/annuaire.html',
            controller: 'annuaireController',
            controllerAs: 'an'
        })

        .otherwise({
            redirectTo: '/'
        })

}
