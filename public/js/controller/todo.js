'use strict';

(function () {
	 angular.module('myApp')
        .controller('TodoCtrl', ['TodoServ', TodoCtrl])

        function TodoCtrl(TodoServ){
        	const vm = this;
            TodoServ.getList()
                .then(data => {
                   vm.todos = data
                })
        }
})();