import { useInView } from "react-intersection-observer";
import { useAppContext } from "../context/appContext"
import { useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import elegiarg from '../images/elegiargentina.png'
import fulltraslados from '../images/fulltraslados.png'

export const PopUpDescuento = () => {

    const {setDesactivarPopUp} = useAppContext();
    const navigate = useNavigate();
    const {ref, inView} = useInView({
        triggerOnce:true
    });

    const handleReserva = () => {
        setDesactivarPopUp(true);
        navigate("/reservas");
        window.scrollTo(0,0);
        sessionStorage.setItem("popupleido", "si");
    };

    const handleClose = () => {
        setDesactivarPopUp(true);
        sessionStorage.setItem("popupleido", "si");
    }

  return (
    <div className="position-absolute position-fixed translate-middle top-50 start-50 d-flex min-vh-100 w-100 justify-content-center align-items-center bg-transparente-banner">
        <div onClick={(e) => e.stopPropagation()} className="d-flex align-items-lg-end flex-column px-lg-5 px-3 py-5 bg-banner text-black rounded w-100 mx-3 position-relative" style={{maxWidth:1400}}>
            <span className="position-absolute top-0 start-100 translate-middle fs-1"><IoCloseCircle type="button" onClick={handleClose} className="text-danger bg-white rounded-circle"/></span>
            <div className="d-flex flex-column align-items-center">
                <div ref={ref}></div>
                <h4 className={`fs-3 mb-2 text-center m-w-p fw-bold color-subtitulo-inicial ${inView ? "animated fadeInUp" : ""}`}>¡APROVECHÁ NUESTRO DESCUENTO ESPECIAL!</h4>
                <span className={`display-3 text-center m-w-p fw-bold color-main my-3 ${inView ? "animated fadeIn" : ""}`}>10% OFF</span>
                <span className={`fs-6 text-center m-w-p mt-2 fw-bold text-black ${inView ? "animated fadeInLeft" : ""}`}>En traslados de <b className="color-main">AEROPUERTO</b></span>
                <span className={`fs-6 text-center m-w-p mt-1 mb-3 fw-bold text-black ${inView ? "animated fadeInLeft" : ""}`}>Contratando el servicio ida y vuelta juntos</span>
                <button onClick={handleReserva} className="btn-color-main mt-4 py-3 px-5 d-flex align-items-center justify-content-center w-100 m-w-p fw-bold">Reservá Ya <IoIosArrowDroprightCircle className="fs-5 ms-2"/></button>
                <div className="d-flex justify-content-center align-items-center align-self-end mt-5">
                    <img src={fulltraslados} alt="full traslados" className="" style={{maxWidth:70}}/>
                    <img src={elegiarg} alt="elegi argentina" style={{maxWidth:70}} className="rounded" />
                </div>
            </div>
        </div>
    </div>
  )
}
