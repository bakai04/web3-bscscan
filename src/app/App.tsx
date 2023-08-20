import { Header } from "../widgets";
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import "../shared/styles/app.scss"

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
