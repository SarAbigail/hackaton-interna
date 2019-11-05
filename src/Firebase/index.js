import * as firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBxZ2VpkRRhMk9SS295LhIc0pj60KRsl0I",
    authDomain: "belcorp-449f7.firebaseapp.com",
    databaseURL: "https://belcorp-449f7.firebaseio.com",
    projectId: "belcorp-449f7",
    storageBucket: "belcorp-449f7.appspot.com",
    messagingSenderId: "680637573398",
    appId: "1:680637573398:web:171acb16077432deb00837",
    measurementId: "G-CETPK1YDJ8"
  };

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const products = db.collection("productos").get().then((doc) =>{
  doc.forEach(product =>console.log("DATA:", product.data()))
}).catch((error) => {
  console.log("ERROR:", error);
}

);

  export {products}

