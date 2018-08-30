import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDCNNgPgX7H6BglSvBnppTMfluMYqyCCRc",
    authDomain: "turnout-9.firebaseapp.com",
    databaseURL: "https://turnout-9.firebaseio.com",
    projectId: "turnout-9",
    storageBucket: "turnout-9.appspot.com",
    messagingSenderId: "814720129084"
  };

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
