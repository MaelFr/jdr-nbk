import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/firestore';

import config from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Auth
// export const Auth = firebase.auth;
// const auth = firebase.auth();

// DB
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

export { db };
