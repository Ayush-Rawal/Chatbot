angular.module("Todo_List", [])
    .controller("enter_input", enter_input)

function enter_input() {
    input = "";
    this.tasks = [];
    this.addtask = function(t) {
        this.tasks.push(t);
    }

}