/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBEbfORZ7XWO-7p1QZyhD3JYSYm9eEpdFE",
  authDomain: "friendlychat-b2f42.firebaseapp.com",
  projectId: "friendlychat-b2f42",
  storageBucket: "friendlychat-b2f42.appspot.com",
  messagingSenderId: "83551831661",
  appId: "1:83551831661:web:9bf039c3e09ca0ac566164"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}