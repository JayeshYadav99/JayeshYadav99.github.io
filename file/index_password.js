
document.getElementById("passdiv").style.visibility="hidden";

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // alert("new user created");
//     location.replace("welcome.html");
//   }
// });

// function login() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .catch((error) => {
//       document.getElementById("error").innerHTML = error.message;
//     });
// }


function towelcome(){
  location.replace("weclome.html")
}

function logout() {
  firebase.auth().signOut();
}

window.onbeforeunload = function (e) {
  firebase.auth().signOut();
};

function makevisible(){
  document.getElementById("passdiv").style.visibility="visible";
  document.getElementById("next_button").style.visibility="hidden";
  document.getElementById("input_email").style.visibility="hidden";
}
function forgotPass() {
  const email = document.getElementById("email").value;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Reset link sent to your email id");
      //  location.replace("welcome.html")
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
    });
}
