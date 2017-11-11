angular.module("Todo_List", [])
    .controller("enter_input", enter_input)
    .controller("done", done)

function enter_input() {
    input = "";
    this.tasks = [];
    this.addtask = function(t) {
        this.tasks.push(t);
    }

}

function done() {
    is_done = !is_done;
}