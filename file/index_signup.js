document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

// firebase.auth().onAuthStateChanged((user) => {
//   if (!user) {
//     location.replace("welcome.html");
//   } else {
//     document.getElementById("user").innerHTML = "Hello, " + user.email;
//   }
// });




function logout() {
  firebase.auth().signOut();
}

window.onbeforeunload = function (e) {
  firebase.auth().signOut();
};


function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("You Account has Been Successfully Created");
      location.replace("welcome.html");
    })

    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
    });


}
