import React from "react"
import "./App.css"
import { createStore } from "@reatom/core"
import { reatomContext } from "@reatom/react"
import { Header } from "./containers/Header"
import { MainContent } from "./containers/MainContent"
import { Footer } from "./containers/Footer"

function App() {
  const store = createStore()
  return (
    <reatomContext.Provider value={store}>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </reatomContext.Provider>
  )
}

export default App
