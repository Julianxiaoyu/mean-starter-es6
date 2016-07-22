angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .config(routes)
        .service('annuaireService', annuaireService)
        .controller('annuaireController', annuaireController)
        .config(routes)
        ;
