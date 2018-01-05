'use strict';

(function() {
    angular.module('myApp')

        .factory('TodoServ', ['$http', '$location', TodoServ]);

    function TodoServ($http, $location) {

        const goToLogin = () => $location.url('/login');

        /*
         * Add todo List 
         */
        function addTodoList(data) {
            return $http.post('/api/todo', data)
                .then(res => {
                    return res.data
                })
                .catch(err => {
                    console.error(err)
                })
        }


        /*
         * Show todo List 
         */


        function getList() {
            const token = localStorage.token;
            const headers = {};
            if (token) {
                headers.Authorization = token

            }

            return $http.get('/api/todo', { headers })
                .then(res => {
                    return res.data
                })
                .catch(res => {
                    // console.error(res);
                    if (res.status === 401) {
                        return goToLogin()
                    }

                })
        }


        /*
         * Delete todo List 
         */


        function DeleteTodoList(id) {

            return $http.delete('/api/todo/' + id)
                .then(res => {
                    return res.data
                })
                .catch(err => {
                    console.error(err)
                })
        }

        return {
            addTodoList,
            getList,
            DeleteTodoList
        }

    }
})();