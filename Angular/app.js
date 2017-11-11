angular.module("TodoAPP", [])
    .controller("TodoCtrl", todoCtrl)

function todoCtrl() {
    var todo = this;
    todo.task = "Do Workshop";
    todo.tasks = [
        "task1",
        "task2",
        "task3"
    ]
    todo.tmp = "tmp"
    todo.addTask = function(t) {
        todo.tasks.push(t)
        todo.task = ""

    }

    // function addTask(){}
    // todo.addTask = addTask
}