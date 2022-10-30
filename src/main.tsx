import Top from "./Top"
import "./index.scss"
import SuperCount from "./pages/SuperCount"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/super-count" element={<SuperCount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
