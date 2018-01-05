'use strict';
(function() {
    angular.module('myApp')
        .factory('UserAuth', ['$http', '$location', '$window', UserAuth]);

    function UserAuth($http, $location, $window) {

        const setToken = token => localStorage.token = token;

        /*
         * Login Method
         */

        function login(data) {
            console.log(data)
            return $http.post('/auth/login', data)
                .then((res) => {
                    setToken((res.data || {}).token)
                    $location.url('/todos')
                    // return res.data
                })
                .catch(err => {
                    console.error(err);
                    throw error 
                });
        }
        
        /*
         * Register User Method
         */
        function register(data) {
           return $http.post('/auth/register', data)
                .then((res) => {
                    setToken((res.data || {}).token)
                    $location.url('/todos')
                })
                .catch(err => {
                    console.error(err);
                    throw error;
                });
        }




        return {
            login,
            register
        }
    }
})();