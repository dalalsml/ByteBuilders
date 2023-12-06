var admin = require("firebase-admin");

var serviceAccount = require("./bytebuilders-b4229-firebase-adminsdk-z3a54-623bbf86dd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();
let customer = db.collection("clients");

customer.get().then((snapshot)=>{snapshot.forEach(document =>{
  console.log(document.data());
})}) 

const fait = db.collection("clients").doc("3").set({na:22});