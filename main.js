// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
var logout = () => {

    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            document.getElementById("sign-up").innerText = "logout"
            document.getElementById("sign-up1").style.display = "none"
            // ...
        } else {
            // User is signed out
            console.log("not work")
            // ...
        }
    });

}
logout()

var logut = document.getElementById("sign-up");
logut.addEventListener("click", () => {

    signOut(auth).then(() => {
        // Sign-out successful.
        alert("sined out")
        window.location.href = "./index.html"
    }).catch((error) => {
        // An error happened.
    });
})

 // Initialize Firebase
