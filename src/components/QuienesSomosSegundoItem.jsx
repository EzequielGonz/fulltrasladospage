import { useInView } from 'react-intersection-observer';
import caracteristica2 from '../images/sobrenosotros2.webp'

export const QuienesSomosSegundoItem = () => {

    const {ref, inView} = useInView({
        triggerOnce:true
    });

  return (
    <div className='d-flex justify-content-around align-items-center px-lg-5 px-3 py-5 flex-wrap-reverse flex-xl-nowrap'>
            <div className='d-flex justify-content-center align-items-center my-2 mx-lg-2' style={{maxWidth:600}}>
                <img src={caracteristica2} alt="fulltraslados" className='img-fluid rounded-main shadow-lg'/>
            </div>
            <div className='d-flex justify-content-center align-items-start flex-column my-2 mx-lg-2'>
                <div ref={ref}></div>
                <h3 className={`text-start text-break fs-2 mb-4 color-main ${inView ? "animated fadeInUp" : ""}`}>Viaja sin preocupaciones</h3>
                <ul style={{maxWidth:600}}>
                    <li className={`text-start text-break fs-6 my-1 ${inView ? "animated-3 fadeInUp" : ""}`}>Servicio de Excelencia. Puntualidad y confianza</li>
                    <li className={`text-start text-break fs-6 my-1 ${inView ? "animated-3 fadeInUp" : ""}`}>Atención completamente personalizada</li>
                    <li className={`text-start text-break fs-6 my-1 ${inView ? "animated-3 fadeInUp" : ""}`}>Beneficiosa relación precio-calidad</li>
                    <li className={`text-start text-break fs-6 my-1 ${inView ? "animated-3 fadeInUp" : ""}`}>Soluciones a distintas empresas para que optimicen su tiempo y recursos</li>
                </ul>
            </div>
    </div>
  )
}
