firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("welcome.html");
  } else {
    document.getElementById("user").innerHTML = "Hello, " + user.email;
  }
});

function logout() {

  firebase.auth().signOut();
}

window.onbeforeunload = function (e) {
  alert("8");
  firebase.auth().signOut();
};
