angular.module("Todo_List", [])
    .controller("fun", fun)
    //     .controller("enter_input", enter_input)
    //     .controller("done", done)

// function enter_input() {
//     input = "";
//     this.tasks = [];
//     this.addtask = function(t) {
//         this.tasks.push(t);
//     }

// }

// function done() {
//     is_done = !is_done;
// }
function fun() {
    this.input = "";
    this.tasks = [
        "Task 1",
        "Task 2"
    ];
    this.addTask = function(t) {
        this.tasks.push(t)
        this.task = ""
    }
    this.tog_done = function() {
        this.is_done = !this.is_done;
        console.log("Executed")
    }
}