import firebase from 'firebase';

const firebaseconfig = {
     apiKey: "AIzaSyBBbxi3D6B4yCr58uxHRrgoP9cwl5Tz33s",
     authDomain: "todo-9b7db.firebaseapp.com",
     databaseURL:"https://todo-9b7db.firebaseio.com",
     projectId: "todo-9b7db",
     storageBucket: "todo-9b7db.appspot.com",
     messagingSenderId: "1031807315687",
     appId: "1:1031807315687:web:c29e026ae5e7c9897afc42",
     measurementId: "G-4LX9LCDSB6"
}

firebase.initializeApp(firebaseconfig)

const db = firebase.firestore();

export default db;