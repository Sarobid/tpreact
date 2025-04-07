import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';

function Header() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </div>
  )
}

function MainContent(){
  const [date, setDate] = useState(new Date());
  setTimeout(() => {
    setDate(new Date());
  }
  , 1000);
  return (
      <p>Bonjour, on est le {date.getDay()}, {date.getMonth()}, {date.getFullYear()} et il est {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
  )
}

function Footer() {
  const [annee, setAnnee] = useState(new Date().getFullYear());
  setTimeout(() => {
    setAnnee(new Date().getFullYear());
  }
  , 1000);
  return (
    <div style={{ position: 'fixed', left:0, bottom:0, width:'100%', textAlign:'center' }}>
      <p> © {annee} - ANDRIATSEHENO Mbolatiana Anjarasoa, Tous droits réservés</p>
    </div>
  )
}   
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
