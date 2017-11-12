angular.module("Chatbot", ["firebase"])
    .controller("chatctrl", chatctrl)


function chatctrl($firebaseArray, $firebaseAuth) { //auth for login, array for.. well array
    var chat = this;
    var auth = $firebaseAuth();

    var chatref = firebase.database().ref("chats") //if chats is not present it will be created
    chat.messages = $firebaseArray(chatref);

    chat.send = function(t, n) {
        chat.messages.$add({ "text": t, "name": n })
    }
    chat.login = function() {
        // login with Facebook, we've used google
        auth.$signInWithPopup("google").then(function(firebaseUser) {
            console.log("Signed in as:", firebaseUser.uid);
        }).catch(function(error) {
            console.log("Authentication failed:", error);
        });
    }
}