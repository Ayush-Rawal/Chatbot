angular.module("Chatbot", ["firebase"])
    .controller("chatctrl", chatctrl)


function chatctrl($firebaseArray) {
    var chat = this;

    var chatref = firebase.database().ref("chats") //if chats is not present it will be created
    chat.messages = $firebaseArray(chatref);

    chat.send = function(t, n) {
        chat.messages.$add({ "text": t, "name": n })
    }
}