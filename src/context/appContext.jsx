import { createContext, useContext, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatIcons } from "../components/FloatIcons";
import ezeiza from '../archivos/ViajesEzeiza.json'
import { PopUpDescuento } from "../components/PopUpDescuento";


const appContext = createContext();

export const useAppContext = () => {
    const context = useContext(appContext);
    return context;
}

export const AppContainer = ({children}) => {
  
  const [datosTarifas, setDatosTarifas] = useState([]);
  const [info, setInfo] = useState("Hacia/Desde Ezeiza");
  const [desactivarPopUp, setDesactivarPopUp] = useState(false);
  
  useEffect(() => {
    setDatosTarifas(ezeiza);
  }, []);

  useEffect(() => {
    let checkPopUp = sessionStorage.getItem("popupleido");
    if(checkPopUp === "si"){
      setDesactivarPopUp(true);
    };
  }, []);


  return (
    <appContext.Provider value={{datosTarifas, setDatosTarifas, info, setInfo, desactivarPopUp, setDesactivarPopUp}}>
        <Navbar/>
        <main>
            {children}
        </main>
        <FloatIcons/>
        {
          desactivarPopUp === false ? <PopUpDescuento/> : ''
        }
        <Footer/>
    </appContext.Provider>
  )
}