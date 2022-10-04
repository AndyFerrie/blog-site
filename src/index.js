import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBywnIQ6SGBhGpZ-AMMw-oBxykoeQCjKB0",
  authDomain: "my-react-blog-2575d.firebaseapp.com",
  projectId: "my-react-blog-2575d",
  storageBucket: "my-react-blog-2575d.appspot.com",
  messagingSenderId: "188229370956",
  appId: "1:188229370956:web:a9b04dd31fc4a66fd020e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
