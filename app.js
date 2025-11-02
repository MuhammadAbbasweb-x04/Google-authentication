import {signInWithPopup} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth ,provider } from "./authconfig.js";

let btn = document.querySelector(".google-btn");
btn.addEventListener("click" , ()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
window.location = "home.html";

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
});

