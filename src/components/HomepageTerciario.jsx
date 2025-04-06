import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";


export const HomepageTerciario = () => {

  const navigate = useNavigate();
  const {ref, inView} = useInView({
    triggerOnce: true
  });

  return (
    <div className="d-flex flex-column p-lg-5 px-3 mt-4 mt-lg-2 bg-terciario">
        <div className="d-flex justify-content-lg-around justify-content-center align-items-center flex-wrap flex-lg-nowrap">
            
            <div className='d-flex flex-column align-items-center text-white' style={{maxWidth:750, paddingTop:110, paddingBottom:110}}>
                <span ref={ref} className='text-center text-break mb-1 color-terciary' style={{letterSpacing:2, fontSize:14}}>PENSAMOS EN VOS</span>
                <h3 className={`text-center text-break display-6 mb-4 ${inView ? "animated fadeInLeft" : ""}`}>Disfruta de un viaje sin preocupaciones</h3>
                <div className="d-flex flex-column align-items-start justify-content-center my-2">
                  <span className='d-flex mb-2 justify-content-center align-items-center' style={{fontSize:"1.12rem"}}>🔹 Antes de viajar conoces los datos del Chofer y del Vehículo</span>
                  <span className='d-flex mb-2 justify-content-center align-items-center' style={{fontSize:"1.12rem"}}>🔹 Espacio para transportar a tu Mascota, somos Pet Friendly</span>
                  <span className='d-flex mb-2 justify-content-center align-items-center' style={{fontSize:"1.12rem"}}>🔹 Tenemos Sillas y Butacas para Bebes y Niños</span>
                  <span className='d-flex mb-2 justify-content-center align-items-center' style={{fontSize:"1.12rem"}}>🔹 También realizamos traslados Corporativos para tu Empresa</span>
                </div>
                <button onClick={() => {navigate("/reservas"); window.scrollTo(0,0)}} className="btn-color-secondary-gradient-alter rounded-pill py-3 px-5 mt-4" style={{letterSpacing:2}}>RESERVAR</button>
            </div>
        </div>
    </div>
  )
}
