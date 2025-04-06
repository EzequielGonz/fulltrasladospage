import { ReferenciasAutosTarifas } from "./ReferenciasAutosTarifas"
import ezeiza from '../archivos//ViajesEzeiza.json'
import aeroparque from '../archivos//ViajesAeroparque.json'
import retiro from '../archivos//ViajesRetiro.json'
import { CardTarifas } from "./CardTarifas";
import { IoAlertCircleOutline, IoCheckmarkCircleSharp } from "react-icons/io5";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BannerDescuento } from "./BannerDescuento";


export const TarifasInicio = () => {


  const {datosTarifas, setDatosTarifas, info, setInfo} = useAppContext();
  
  // FUNCION DE SCROLL
  const goToInfo = (param) => {
    const element = document.getElementById(param);
    let x = element.offsetLeft;
    let y = element.offsetTop;
    window.scrollTo(x, y);
  }

  const navigate = useNavigate();

  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

  const fecha = new Date();
  const mes = fecha.getMonth();
  const año = fecha.getFullYear();

  // FUNCIONES DE BOTONES
  const leerEzeiza = () => {
    setDatosTarifas(ezeiza);
    setInfo("Hacia/Desde Ezeiza");
    goToInfo("info");

  };

  const leerAeroparque = () => {
    setDatosTarifas(aeroparque);
    setInfo("Hacia/Desde Aeroparque");
    goToInfo("info");
  }

  const leerRetiro = () => {
    setDatosTarifas(retiro);
    setInfo("Hacia/Desde Retiro");
    goToInfo("info");
  }

  // POP-UP

  useEffect(() => {
    let chequeo = sessionStorage.getItem("check");
    if(chequeo === null){
      toast((t) => (
        <div className="d-flex flex-column align-items-center">
          
          <span className="text-center mb-2 mt-1 text-black" style={{fontSize:15}}>Tenes <b className="color-main alter-font">10% OFF</b> en <b className="alter-font color-main">traslados de Aeropuerto</b>, contratando el servicio ida y vuelta </span>
          <div className="d-flex justify-content-center align-items-center">
            <button style={{fontSize:14}} className="btn-color-main m-1 px-3" onClick={() => {window.scrollTo(0,0); navigate("/reservas"); toast.dismiss(t.id);}}>
              Reservar Ya
            </button>
            <button style={{fontSize:14}} className="btn btn-outline-dark m-1 px-3" onClick={() => toast.dismiss(t.id)}>
              Cancelar
            </button>
          </div>
        </div>
      ), {
        duration: 25000,
        style: {
          background: "#ffffff",
          border: "1px solid grey"
        }
      });
      sessionStorage.setItem("check", "avisado");
    }
  }, []);
    
  return (
    <div className="d-flex flex-column py-5">

        <h1 className="text-center text-break text-black mb-3 display-6 px-lg-5 px-3">Tarifas de {meses[mes]} {año}</h1>
        <div className="d-flex justify-content-center align-items-center flex-wrap flex-sm-nowrap px-lg-5 px-3">
            <button onClick={() => leerEzeiza()} className="btn-tarifas m-1 m-md-2 px-md-4 rounded-main rellenar-sm">Hacia/Desde Ezeiza</button>
            <button onClick={() => leerAeroparque()} className="btn-tarifas m-1 m-md-2 px-md-4 rounded-main rellenar-sm">Hacia/Desde Aeroparque</button>
            <button onClick={() => leerRetiro()} className="btn-tarifas m-1 m-md-2 px-md-4 rounded-main rellenar-sm">Hacia/Desde Retiro</button>
        </div>

        <BannerDescuento/>
        <ReferenciasAutosTarifas/>

        <h2 className="text-center pt-5 mb-1 alter-font fw-bold mt-4 px-lg-5 px-3" id="info">{info}</h2>
        <p className="pb-4 text-center text-break px-lg-5 px-3" style={{fontSize:13}}>Estos precios son indicativos, el valor final puede variar según el punto exacto de origen/destino.</p>

        <div className="d-flex align-items-start justify-content-center pb-5 flex-wrap px-lg-5 px-3">
              
            {
              datosTarifas.length > 0 ? datosTarifas.map((item) => <CardTarifas key={item.nombre+item.fiat_doblo+item.auto} item={item}/>) : <div className="d-flex justify-content-start align-items-center min-vh-100 pt-5 flex-column" style={{maxWidth:800}}>
                <IoAlertCircleOutline className="color-main display-3 mb-3"/>
                <h4 className="text-center text-break text-black">Por el momento no podemos brindarte la información de los traslados, nos encontramos en mantenimiento, intentalo más tarde</h4></div>
            }
            
        </div>
    </div>
  )
}
