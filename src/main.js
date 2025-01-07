import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';

// Firebase Config
const firebaseConfig = {
    apiKey: "YOUR_NEW_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdefghijklmnopqrstuvwxyz",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
    components,
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Provide Firestore globally
app.provide('db', db);
app.use(vuetify);
app.mount('#app')
