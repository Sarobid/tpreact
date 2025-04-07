import './App.css'
import reactLogo from './assets/react.svg'

function Header() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>"Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </div>
  )
}

function MainContent(){
  return (
      <p>Ici, nous afficherons des informations interessantes :)</p>
  )
}

function Footer() {
  return (
    <div style={{ position: 'fixed', left:0, bottom:0, width:'100%', textAlign:'center' }}>
      <p>Tous droits réservés - ANDRIATSEHENO Mbolatiana Anjarasoa</p>
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
