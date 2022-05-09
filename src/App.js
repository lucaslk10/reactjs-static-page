import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css"

export default function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}