import {signOut,
onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./authconfig.js";

const logoutbtn = document.querySelector(".logout-btn");
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(`User uid : ${uid}`);
  } else {
window.location = "index.html";
  }
});


logoutbtn.addEventListener("click" , () =>{
signOut(auth)
.then(() => {
window.location = "index.html"
}).catch((error) => {
console.log(error, "error");
}); 
} )










