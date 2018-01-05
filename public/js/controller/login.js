'use strict';
(function() {
    angular.module('myApp')
        .controller('LoginCtrl', ['UserAuth', LoginCtrl])

    function LoginCtrl(UserAuth) {
        const vm = this;
        vm.user = {};
        console.log(vm.user)
        vm.userLogin = () => {
            UserAuth.login(vm.user)
                .then(data => {
                    if (true) {}
                    console.log(data)
                })
                .catch(error => {
                    swal(
                        'Oops...',
                        error.message,
                        'error'
                    );
                })
        }
    }
})();