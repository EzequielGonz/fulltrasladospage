import { IoLogoInstagram, IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";
import logo from '../images/fulltraslados.png'
import toast from "react-hot-toast";

export const Footer = () => {

  const fecha = new Date();
  const año = fecha.getFullYear();

  const handleClick = () => {
    navigator.clipboard.writeText("5491169110413");
    toast.success("¡Número copiado!");
  };

  return (
    <footer className="pb-3 d-flex justify-content-center align-items-center footer-bg flex-column">
      <div className="bg-wave-footer py-3 py-sm-5 w-100"></div>
      <div className="d-flex flex-column px-lg-5 pt-md-5 pt-0 px-3">
        <div className="d-flex justify-content-center flex-column align-items-center pt-4">
          <img src={logo} alt="logo" className="img-fluid my-4 size-logo" />
          <div className="d-flex flex-column align-items-center pb-5 pt-4">
            <span className="d-flex justify-content-center align-items-center text-break text-center mb-1">Buenos Aires, Argentina</span>
            <span className="d-flex justify-content-center align-items-center text-break text-center mb-1">Reservas@fulltraslados.com</span>
            <span className="d-flex justify-content-center align-items-center text-break text-center text-black flex-wrap">Comunicate con nosotros al <b className="alter-font fw-light ms-1 color-main" onClick={handleClick} type="button">+549 1169110413</b></span>
          </div>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-between align-items-center pb-3 px-lg-3 w-100 flex-wrap flex-lg-nowrap">
          <span className="text-center text-dark fs-6 mb-2 mb-sm-0 mx-2">© {año} FullTraslados | Todos los derechos reservados</span>
          <div className="d-flex justify-content-center align-items-center mx-2">
            <span type="button" onClick={() => window.open("https://www.instagram.com/fulltraslados/", "blank")} className="d-flex justify-content-center align-items-center rounded-circle p-0" style={{backgroundColor:"#5B51D8"}}><IoLogoInstagram className="fs-2 p-2 footer-items text-white"/></span>
            <span onClick={() => window.open("https://api.whatsapp.com/send?phone=5491169110413", "_blank")} type="button" className="d-flex justify-content-center align-items-center rounded-circle mx-1 bg-success"><IoLogoWhatsapp className="fs-2 p-2 footer-items text-white"/></span>
            <span onClick={() => window.open("mailto:reservas@fulltraslados.com", "_blank")} type="button" className="d-flex justify-content-center align-items-center bg-danger rounded-circle p-0"><IoMailOutline className="fs-2 p-2 footer-items text-white"/></span>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center pb-2">
            <span className="text-center text-break" style={{fontSize:13}}>Diseñado y desarrollado por <a target="_blank" className="text-decoration-none text-black" href="https://www.agenciaocho.com">@AgenciaOcho</a> y <a target="_blank" className="text-decoration-none text-black" href="https://www.ferdev.xyz">@FerDev</a></span>
        </div>
      </div>
    </footer>
  )
}
