import { HiOutlineStar, HiOutlineMapPin , HiOutlineBellAlert  } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";



export const HomepageSecundario = () => {

    const {ref, inView} = useInView({
        triggerOnce:true
    });

  return (
    <div className="d-flex flex-column align-items-center p-lg-5 p-3">
        <h2 className="text-center text-break mb-3 display-6 text-black pt-4">Tu mejor opción para viajar</h2>
        <p ref={ref} className="text-center text-break px-lg-5 mb-4 mb-md-0 fs-6" style={{maxWidth:1400}}>Nos ocupamos de que el traslado a la hora de viajar no sea un problema</p>

        <div className="d-flex justify-content-around align-items-start flex-wrap flex-md-nowrap pt-4 pt-lg-5 pb-lg-5 pb-4">
            <div className={`d-flex flex-column align-items-center justify-content-center py-3 px-0 px-md-3 px-lg-5 flex-fill ${inView ? "animated fadeInUp" : ""}`} style={{maxWidth:470}}>
                <span className="d-flex justify-content-center align-items-center mb-4 shadow-caracteristicas p-3 rounded-circle"><HiOutlineStar className="color-terciary fs-2"/></span>
                <h3 className="text-center text-break mb-3 text-black fs-3">Seguridad y comodidad</h3>
                <p className="text-center text-break">Experimenta la comodidad y el lujo de viajar en un auto que se adapte a tus necesidades con la seguridad de que estás en buenas manos</p>
            </div>
            <div className={`d-flex flex-column align-items-center justify-content-center py-3 px-0 px-md-3 px-lg-5 flex-fill ${inView ? "animated-2 fadeInUp" : ""}`} style={{maxWidth:470}}>
                <span className="d-flex justify-content-center align-items-center mb-4 shadow-caracteristicas p-3 rounded-circle"><HiOutlineMapPin className="color-terciary fs-2"/></span>
                <h3 className="text-center text-break mb-3 text-black fs-3">Viajes a todo el país</h3>
                <p className="text-center text-break">Eligi el vehiculo que se adapte a tus necesidades para que tu viaje sea perfecto. Disfruta del viaje con todas las comodidades que necesitas para una grata experiencia</p>
            </div>
            <div className={`d-flex flex-column align-items-center justify-content-center py-3 px-0 px-md-3 px-lg-5 flex-fill ${inView ? "animated-3 fadeInUp" : ""}`} style={{maxWidth:470}}>
                <span className="d-flex justify-content-center align-items-center mb-4 shadow-caracteristicas p-3 rounded-circle"><HiOutlineBellAlert className="color-terciary fs-2"/></span>
                <h3 className="text-center text-break mb-3 text-black fs-3">Puntualidad y confianza</h3>
                <p className="text-center text-break">Creemos que tu tiempo es valioso por eso planificamos cuidadosamente cada viaje para evitar retrasos y garantizar que llegues a tu destino a tiempo</p>
            </div>
        </div>
    </div>
  )
}
