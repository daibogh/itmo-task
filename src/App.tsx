import React from "react"
import "./App.css"
import { Header } from "./containers/Header"
import { MainContent } from "./containers/MainContent"
import { Footer } from "./containers/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
