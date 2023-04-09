//got errors saying sum about import has to be on top couldnt fix had to move script module to actaul index file. 








import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getDatabase, set, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB0-dpVIxUu3yflvnq9sC0r0JDpnrlGrCI",

  authDomain: "hackathon-9dd6f.firebaseapp.com",

  projectId: "hackathon-9dd6f",

  storageBucket: "hackathon-9dd6f.appspot.com",

  messagingSenderId: "303763798557",

  appId: "1:303763798557:web:491afe62c8d14b39c4e4f4",

  measurementId: "G-EVZBJS4SSX"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);





const db = getDatabase();

var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var email = document.querySelector("#email");
var major = document.querySelector("#major");
const subBtn = document.querySelector('#sub');
subBtn.addEventListener('click', addData);




 
  
 
  
  function addData(){
    if(firstName.value =="" || lastName.value == "" || email.value=="" || major.value==""){
        alert("Please include all fields")
    }else{
        set(ref(db, "Users/UsersInfo/" + firstName.value),{
            First: firstName.value,
            Last: lastName.value,
            Email: email.value,
            Major: major.value
        })
        .then(() =>{
            alert("Data Entered");
        })
    }
      
  }
  