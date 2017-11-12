angular.module("Chatbot", ["firebase"])
    .controller("chatctrl", chatctrl)


function chatctrl($firebaseArray, $firebaseAuth, $http) { //auth for login, array for.. well array
    var chat = this;
    var auth = $firebaseAuth();

    var chatref = firebase.database().ref("chats") //if chats is not present it will be created
    chat.messages = $firebaseArray(chatref);

    chat.send = function(t, n) {
        chat.messages.$add({ "text": t, "name": chat.name, "photo": chat.photo });
        chat.text = "";
    }
    chat.login = function() {
        // login with Facebook, we've used google
        auth.$signInWithPopup("google").then(function(firebaseUser) {
            console.log("Signed in as:", firebaseUser.user);
            console.log(firebaseUser.user.displayName, firebaseUser.user.photoURL)
            chat.name = firebaseUser.user.displayName;
            chat.photo = firebaseUser.user.photoURL;

            var url = "https://api.genderize.io?name=peter"
            $http.get(url).then(function(data) {
                console.log(data);
                console.log(data.data.gender == "male" ? "Mr." : data.data.gender == "female" ? "Ms." : "None");
            })

        }).catch(function(error) {
            console.log("Authentication failed:", error);
        });
    }
}