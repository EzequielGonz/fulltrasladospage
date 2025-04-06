import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../images/fulltraslados.png'
import { useState } from 'react';
import {VscClose, VscMenu} from 'react-icons/vsc'


export const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [toggleBar, setToggleBar] = useState(true);
    const goToFAQ = async (param) => {
      if(location.pathname === "/"){
          const element = document.getElementById(param);
          let x = element.offsetLeft;
          let y = element.offsetTop;
          window.scrollTo(x, y);
      } else {
        await navigate("/");
        setTimeout(() => {
            const element = document.getElementById(param);
            let x = element.offsetLeft;
            let y = element.offsetTop;
            window.scrollTo(x, y);
        }, 800);
      }
    }

  return (
    <nav className="navbar navbar-expand-lg py-4 shadow-nav">
      <div className="container-fluid px-3 px-lg-5 flex-row flex-lg-column justify-content-center justify-content-md-between">
        <a href="/">
          <img src={logo} alt="fulltraslados" className='img-fluid size-logo-navbar ms-2 ms-sm-0 pb-lg-4'/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>{toggleBar ? <VscMenu onClick={() => setToggleBar(false)} className='fs-2 text-black mb-1'/> : <VscClose onClick={() => setToggleBar(true)} className='fs-2 text-black mb-1'/>}</span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarSupportedContent">
          <div className='d-flex flex-column flex-lg-row align-items-start align-items-lg-center mt-3 mt-lg-0'>
            
            <span type="button" onClick={() => {navigate("/"); window.scrollTo(0,0)}} className={`mx-3 my-1 my-lg-0 text-center items-navbar text-break ${ location.pathname === "/" ? "border-bottom-main color-main" : "text-black"}`}>Inicio</span>
            
            <span type="button" onClick={() => {navigate("/nosotros"); window.scrollTo(0,0)}} className={`mx-3 my-1 my-lg-0 text-center items-navbar text-break ${ location.pathname === "/nosotros" ? "border-bottom-main color-main" : "text-black"}`}>¿Quiénes somos?</span>

            <span type="button" onClick={() => {navigate("/tarifas"); window.scrollTo(0,0)}} className={`mx-3 my-1 my-lg-0 text-center items-navbar text-break ${ location.pathname === "/tarifas" ? "border-bottom-main color-main" : "text-black"}`}>Tarifas</span>

            <span type="button" onClick={() => goToFAQ("frecuentes")} className={`mx-3 my-1 my-lg-0 text-center items-navbar text-break text-black`}>Preguntas Frecuentes</span>

            <span type="button" onClick={() => {navigate("/reservas"); window.scrollTo(0,0)}} className={`mx-3 my-1 my-lg-0 text-center items-navbar text-break ${ location.pathname === "/reservas" ? "border-bottom-main color-main" : "text-black"}`}>Reservas</span>

            <button onClick={() => {navigate("/reservas"); window.scrollTo(0,0)}} className='btn-color-main-outline rounded-pill my-1 my-lg-0 mx-3'>Pedí tu traslado</button>

          </div>
        </div>
      </div>
</nav>
  )
}

