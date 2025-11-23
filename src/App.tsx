import { Outlet } from "react-router-dom"
import Header from "./components/EvolvereApresentacao/Header"
import Footer from "./components/EvolvereApresentacao/Footer"
import VoltarAoTopo from "./components/EvolvereApresentacao/VoltarAoTopo"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <main className="grow"> 
          <Outlet />
        </main>
          <VoltarAoTopo />
      <Footer />  
    </div>
  )
}

export default App
