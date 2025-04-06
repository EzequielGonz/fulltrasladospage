import { Route, Routes } from "react-router-dom"
import { AppContainer } from "./context/appContext"
import { Homepage, QuienesSomos, Reservas, Tarifas } from "./pages/index"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <div className="min-vh-100 bg-white overflow-hidden position-relative">
      <AppContainer>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/nosotros" element={<QuienesSomos/>}/>
          <Route path="/reservas" element={<Reservas/>}/>
          <Route path="/tarifas" element={<Tarifas/>}/>
        </Routes>
        <Toaster/>
      </AppContainer>
    </div>
  )
}

export default App
