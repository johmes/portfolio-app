import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import * as firestore from 'firebase/firestore'
import Axios from 'axios'

// Initialize Firebase
let config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_DOMAIN_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

const app = firebase.initializeApp(config);

export { Axios, app, firestore };