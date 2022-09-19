// function logout() {
//     firebase.auth().signOut();
//   }
  
//   window.onbeforeunload = function () {
//     firebase.auth().signOut();
//   };


  
//   import { getAuth, onAuthStateChanged } from "firebase/auth";

//   const auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });


//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       location.replace("dashboard.html");
//     }
//   });


// import { getAuth } from "firebase/auth";

// const auth = getAuth();
// const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }
  
