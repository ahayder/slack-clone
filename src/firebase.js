import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWM9g4S9C9ypSZrKs9JmMmK7GvdklgPCE",
    authDomain: "slack-clone-e3bda.firebaseapp.com",
    databaseURL: "https://slack-clone-e3bda.firebaseio.com",
    projectId: "slack-clone-e3bda",
    storageBucket: "slack-clone-e3bda.appspot.com",
    messagingSenderId: "122269601169",
    appId: "1:122269601169:web:1c1f1568cdcbe642ac5e30",
    measurementId: "G-B743CLM61G"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db