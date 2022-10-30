import "./Top.scss"
import reactLogo from "./assets/react.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

function Top(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="Top">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      <h2>Vite + React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="margin-20" />
      <div className="link">
        <Link to="super-count">👉 Super Count</Link>
      </div>
      <div className="margin-30" />
      <div className="envs">
        <p>env.MODE = {import.meta.env.MODE}</p>
        <p>env.BASE_URL = {import.meta.env.BASE_URL}</p>
        <p>env.DEV = {import.meta.env.DEV ? "true" : "false"}</p>
        <p>env.PROD = {import.meta.env.PROD ? "true" : "false"}</p>
        <p>env.SSR = {import.meta.env.SSR ? "true" : "false"}</p>
      </div>
    </div>
  )
}

export default Top
