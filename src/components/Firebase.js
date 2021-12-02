import React, { Component } from 'react';
import './Firebase.css'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc,getDocs } from 'firebase/firestore/lite';
// import { getAnalytics } from "firebase/analytics";import './Firebase.css'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJ4H3HkWi5jJt8JShN0W1i_uDW6M8inP4",
    authDomain: "sba-scoreboard.firebaseapp.com",
    databaseURL: "https://sba-scoreboard.firebaseio.com",
    projectId: "sba-scoreboard",
    storageBucket: "sba-scoreboard.appspot.com",
    messagingSenderId: "132558249658",
    appId: "1:132558249658:web:afbea7c1e0645284a2ac83",
    measurementId: "G-92M708WMTV"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  console.log(collection(db, 'livegames'));
  
export default class Football extends Component {
    state = {}
    
    render () {
        return(
            <div>
            </div>
        );
    }
}