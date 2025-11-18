import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import VoltarAoTopo from "./components/VoltarAoTopo"

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
