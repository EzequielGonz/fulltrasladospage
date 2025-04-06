import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import elegiarg from '../images/elegiargentina.png'
import fulltraslados from '../images/fulltraslados.png'

export const BannerDescuento = () => {
    const navigate = useNavigate();
    const {ref, inView} = useInView({
        triggerOnce:true
    });
    
  return (
    <div className="d-flex flex-column align-items-center align-items-lg-end px-lg-5 px-3 py-5 bg-banner w-100 mt-4 mb-4 mb-lg-5">
        <div className="py-5 d-flex justify-content-center align-items-center flex-column text-black rounded max-width-banner margin-banner">
            <div ref={ref}></div>
            <h4 className={`fs-4 mb-2 text-center m-w-p fw-bold color-subtitulo-inicial ${inView ? "animated fadeInUp" : ""}`}>¡APROVECHÁ NUESTRO DESCUENTO ESPECIAL!</h4>
            <span className={`display-5 text-center m-w-p fw-bold color-main my-3 ${inView ? "animated fadeIn" : ""}`}>10% OFF</span>
            <span style={{fontSize:"0.85rem"}} className={`text-center m-w-p mt-2 fw-bold text-black ${inView ? "animated fadeInLeft" : ""}`}>En traslados de <b className="color-main">AEROPUERTO</b></span>
            <span style={{fontSize:"0.85rem"}} className={`text-center m-w-p mt-1 mb-3 fw-bold text-black ${inView ? "animated fadeInLeft" : ""}`}>Contratando el servicio ida y vuelta juntos</span>
            <button onClick={() => {navigate("/reservas"); window.scrollTo(0,0)}} className="btn-color-main mt-4 py-2 px-5 d-flex align-items-center justify-content-center m-w-p fw-bold">Reservá Ya <IoIosArrowDroprightCircle className="fs-5 ms-2"/></button>
            <div className="d-flex justify-content-center align-items-center  mt-5">
                <img src={fulltraslados} alt="full traslados" className="" style={{maxWidth:70}}/>
                <img src={elegiarg} alt="elegi argentina" style={{maxWidth:70}} className="rounded" />
            </div>
        </div>
    </div>
  )
}