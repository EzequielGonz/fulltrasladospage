import { useInView } from 'react-intersection-observer'
import logo from '../images/fulltraslados.png'

export const HomepageGaleria = () => {

  const {ref, inView} = useInView({
    triggerOnce: true
  });

  return (
    <div className="d-flex flex-column px-lg-5 px-3 py-4 py-lg-5">
        <div className="d-flex justify-content-center align-items-center my-4 pb-3">
          <img src={logo} alt="fulltraslados" className="img-fluid" style={{maxWidth:250}}/>
        </div>
        <div ref={ref}></div>
        <div className="d-flex justify-content-center align-items-center flex-wrap flex-lg-nowrap mb-3">
          <div className={`d-flex justify-content-center align-items-start shadow-galeria flex-column rounded-main p-3 m-2 flex-fill ${inView ? "animated fadeInUp" : ""}`}>
            <span className="text-start text-break color-terciary mb-1 fw-bold alter-font" style={{letterSpacing:0, fontSize:13}}>VEHICULOS</span>
            <p className="text-start text-break text-black fs-6">Contamos con vehículos modernos y confortables que se adaptan a tus necesidades</p>
          </div>
          <div className={`d-flex justify-content-center align-items-start shadow-galeria flex-column rounded-main p-3 m-2 flex-fill ${inView ? "animated-2 fadeInUp" : ""}`}>
            <span className="text-start text-break color-terciary mb-1 fw-bold alter-font" style={{letterSpacing:0, fontSize:13}}>CONDUCTORES</span>
            <p className="text-start text-break text-black fs-6">Designamos a conductores profesionales y experimentados con años de experiencia en la conducción de vehículos de todo tipo</p>
          </div>
          <div className={`d-flex justify-content-center align-items-start shadow-galeria flex-column rounded-main p-3 m-2 flex-fill ${inView ? "animated-3 fadeInUp" : ""}`}>
            <span className="text-start text-break color-terciary mb-1 fw-bold alter-font" style={{letterSpacing:0, fontSize:13}}>EQUIPO</span>
            <p className="text-start text-break text-black fs-6">Ofrecemos un equipo de atención al cliente que estará a tu disposición durante todo el viaje</p>
          </div>
        </div>
        <div className="d-flex align-items-start justify-content-center flex-wrap mt-2">
            <div className="d-flex justify-content-center align-items-center my-1 m-md-2 flex-fill bg-galeria-1" style={{width:450, height:300}}>     
            </div>
            <div className="d-flex justify-content-center align-items-center my-1 m-md-2 flex-fill bg-galeria-2" style={{width:450, height:300}}>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1 m-md-2 flex-fill bg-galeria-3" style={{width:450, height:300}}>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1 m-md-2 flex-fill bg-galeria-4" style={{width:450, height:300}}>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1 m-md-2 flex-fill bg-galeria-5" style={{width:450, height:300}}>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1 m-md-2 flex-fill bg-galeria-6" style={{width:450, height:300}}>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1 m-md-2 flex-fill bg-galeria-7" style={{width:450, height:300}}>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1 m-md-2 flex-fill bg-galeria-8" style={{width:450, height:300}}>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1 m-md-2 flex-fill bg-galeria-9" style={{width:450, height:300}}>
            </div>
        </div>
    </div>
  )
}
