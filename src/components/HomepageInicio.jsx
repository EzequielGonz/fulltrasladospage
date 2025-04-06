import { useNavigate } from 'react-router-dom';
import fiat from '../images/inicioimg.webp'


export const HomepageInicio = () => {

  const navigate = useNavigate();
  const handleWsp = () => {
    window.open("https://api.whatsapp.com/send?phone=5491169110413", "_blank")
  };

  return (
    <div className='d-flex flex-column px-lg-5 px-3 py-5'>
      <div className="d-flex justify-content-center align-items-center flex-wrap flex-lg-nowrap">
          <div className="d-flex flex-column align-items-lg-start align-items-center mb-4 mb-lg-0 mx-0 mx-lg-2 mx-xl-5 " style={{maxWidth:500}}>
              <span className='text-center text-lg-start text-break color-subtitulo-inicial' style={{fontSize:"1.1rem", letterSpacing:1.5, marginBottom:12}}>Somos Full Traslados</span>
              <h1 className="text-center text-lg-start text-break mb-4 display-5 pe-xl-1 animated fadeInUp">Tu viaje comienza en la puerta de tu casa</h1>
              <span className="text-center text-lg-start text-break" style={{fontSize:"1.1rem"}}>Viaja Cómodo, Viaja Seguro.</span>
              <div className="d-flex align-items-center justify-content-center mt-4 mt-lg-5 mb-4 mb-md-0 flex-wrap flex-md-nowrap fadeIn animated-2">
                  <button onClick={() => {navigate("/reservas"); window.scrollTo(0,0)}} className="btn-color-main-gradient py-3 px-4 px-xl-5 my-1 me-md-3 me-1 ms-md-0 ms-1 my-md-0 rounded-pill">Reservá ahora</button>
                  <button onClick={handleWsp} className="btn btn-light border border-none m-1 m-md-0 py-3 px-4 px-xl-5 rounded-pill shadow-input">Contactanos</button>
              </div>
          </div>
          <div className='d-flex justify-content-center align-items-center mx-lg-5 border-alternativo-img' style={{maxWidth:500}}>
              <img src={fiat} alt="ejemplofulltraslados" className='img-fluid animated fadeIn'/>
          </div>
      </div>
    </div>
  )
}
