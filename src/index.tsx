import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { FontWrapper } from "./containers/helpers/FontWrapper"

ReactDOM.render(
  <React.StrictMode>
    <FontWrapper />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
