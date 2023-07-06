// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDM4MCmVCyy8jlpGggce_j3GA4kJPPIkAc",
    authDomain: "signup-test-5efa2.firebaseapp.com",
    projectId: "signup-test-5efa2",
    storageBucket: "signup-test-5efa2.appspot.com",
    messagingSenderId: "984893293755",
    appId: "1:984893293755:web:7c805305a1effa27bad59e",
    measurementId: "G-85N5CCGGL7"
};


var buttons = document.getElementById("btn1");
buttons.addEventListener("click", () => {
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            window.location.href = "./index.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
})

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
