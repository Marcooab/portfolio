import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import BrazilFlag from "./img/portbra.png"


import "./styles/components/app.sass"

function App() {
  return (
    <div id="portfolio">
      <h1 className="name"><span>Marco Aurélio Ricardo</span><img className="flags" src={BrazilFlag}/></h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
