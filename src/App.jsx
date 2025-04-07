import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import Menu from './components/Menu';
import TableauData from './components/TableauData';

function Header() {
  return (
    <div>
      <Menu />
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
    <div className="card">
      <p>Bonjour, on est le {date.getDay()}, {date.getMonth()}, {date.getFullYear()} et il est {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
      <TableauData itemTrier="grade" />
    </div>
     )
}

function Footer() {
  const [annee, setAnnee] = useState(new Date().getFullYear());
  setTimeout(() => {
    setAnnee(new Date().getFullYear());
  }
  , 1000);
  return (
    <div style={{ position: 'fixed', left:0, bottom:0, width:'100%', textAlign:'center', color:'white', backgroundColor:'black', padding:'10px'}}>
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
