import React from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { useEffect } from "react";




const translationEn = {login: 'LogIn'}
const translationIt = {login: 'Accedi'}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: {translation: translationIt},
      en: {translation: translationEn}
    },
    lng: 'it',
    fallbackLng: 'it'
  })

function App() {

  useEffect(()=>{
    const Language = navigator.language || navigator.userLanguage;
    console.log(Language);
    i18n.changeLanguage(Language);
  }, []);

  return (
    <div>
      <Router>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/room">
          <Chat />
        </Route>
      </Router>
    </div>
  );
}

export default App;
