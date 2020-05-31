// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZEc8l-STwuIKJt9hHCNnkFbTTz7Lk2Es",
  authDomain: "lamma-af823.firebaseapp.com",
  databaseURL: "https://lamma-af823.firebaseio.com",
  projectId: "lamma-af823",
  storageBucket: "lamma-af823.appspot.com",
  messagingSenderId: "939783204932",
  appId: "1:939783204932:web:16ea294d7ac112460d4c11",
  measurementId: "G-JPZ5QWRSR6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  // Get values
  var fname = getInputVal("fname");
  var lname = getInputVal("lname");
  var phone = getInputVal("phone");
  var mail = getInputVal("mail");
  var subject = getInputVal("subject");

  // Save message
  saveMessage(fname, lname, phone, mail, subject);
  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, phone, mail, subject) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    phone: phone,
    mail: mail,
    subject: subject,
  });
}
