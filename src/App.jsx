import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Header() {
  return (
    <div style={{backgroundColor: 'red'}}>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  )
}

function Content() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  )
}

function Footer() {
  return (
    <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
  )
}

function App() {

  return (
    <>
      <Header />
      <h1>Introduction React</h1>
      <Content />
      <Footer/>
    </>
  )
}

export default App
