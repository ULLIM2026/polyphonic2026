// ── Firebase 설정 ──
// Firebase 콘솔(console.firebase.google.com)에서 값을 확인하세요.
const firebaseConfig = {
    apiKey: "AIzaSyAEY-T-NRKEotVOaD5nastrhJDfd34SI6Y",
    authDomain: "polyphonic-b906e.firebaseapp.com",
    projectId: "polyphonic-b906e",
    storageBucket: "polyphonic-b906e.firebasestorage.app",
    messagingSenderId: "128348297020",
    appId: "1:128348297020:web:b6e42bbe223ac41e087039",
    measurementId: "G-ZNSYCM09SS"
};

// Firebase 초기화 (중복 방지)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
