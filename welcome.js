// firebase.auth().onAuthStateChanged((user) => {
//   if (!user) {
//     location.replace("index.html");
//   } else {
//     document.getElementById("user").innerHTML = "Hello, " + user.email;
//   }
// });

function logout() {
  alert("7");
  firebase.auth().signOut();
}

window.onbeforeunload = function (e) {
  alert("8");
  firebase.auth().signOut();
};
