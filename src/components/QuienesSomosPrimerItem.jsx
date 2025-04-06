import { useInView } from 'react-intersection-observer';
import caracteristica from '../images/sobrenosotros.webp'

export const QuienesSomosPrimerItem = () => {

    const {ref, inView} = useInView({
        triggerOnce:true
    });

  return (
    <div className='d-flex justify-content-around align-items-center px-lg-5 px-3 py-4 flex-wrap flex-xl-nowrap'>
            <div className='d-flex justify-content-center align-items-start flex-column my-2 mx-lg-2'>
                <div ref={ref}></div>
                <h3 className={`text-start text-break fs-2 mb-4 color-main ${inView ? "animated fadeInUp" : ""}`}>Tu viaje, nuestra prioridad</h3>
                <p className={`text-start text-break fs-6 ${inView ? "animated-3 fadeInUp" : ""}`} style={{maxWidth:600}}>Contamos con una amplia cobertura y soporte en todo CABA y Gran Buenos Aires, logrando una respuesta al cliente de la manera mas eficiente. Programación, coordinación y seguimiento del viaje</p>
                <p className={`text-start text-break fs-6 ${inView ? "animated-3 fadeInUp" : ""}`} style={{maxWidth:600}}>También designamos a choferes idóneos y vehículos confortables, cumpliendo con todos los estándares de seguridad y habilitaciones correspondientes</p>
            </div>
            <div className='d-flex justify-content-center align-items-center my-2 mx-lg-2 shadow-lg rounded-main' style={{maxWidth:600}}>
                <img src={caracteristica} alt="fulltraslados" className='img-fluid rounded-main'/>
            </div>
    </div>
  )
}
