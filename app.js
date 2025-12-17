// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjpNGFprzf6f4UG2JMHHi-NTd2Jl6zdpw",
  authDomain: "login-c555d.firebaseapp.com",
  projectId: "login-c555d",
  storageBucket: "login-c555d.firebasestorage.app",
  messagingSenderId: "749346532790",
  appId: "1:749346532790:web:3c3d38310da947f7476517",
  measurementId: "G-MBLG00XEL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Register
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "Registered successfully!";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
};

// Login
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "Logged in!";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
};

// Logout
window.logout = function () {
  signOut(auth).then(() => {
    document.getElementById("message").innerText = "Logged out!";
  });
};

// Auth state listener
onAuthStateChanged(auth, user => {
  if (user) {
    document.getElementById("message").innerText =
      "Logged in as " + user.email;
  }
});
