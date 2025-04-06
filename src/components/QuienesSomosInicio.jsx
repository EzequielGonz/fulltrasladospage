import { QuienesSomosPrimerItem } from './QuienesSomosPrimerItem';
import { QuienesSomosSegundoItem } from './QuienesSomosSegundoItem';

export const QuienesSomosInicio = () => {


  return (
    <div className="d-flex flex-column pb-5">
        
        {/* IMAGEN DE FONDO Y "SLOGAN" */}
        <div className="d-flex justify-content-center align-items-sm-start align-items-start flex-column bg-acerca-de-nosotros px-lg-5 px-3 padding-quienes-somos">
            <span className='text-start text-break ms-lg-5 color-main mt-5 animated fadeInLeft bg-white mb-2 bg-opacity-75 px-2 py-1 rounded-main fw-bold alter-font' style={{fontSize:14}}>FULL TRASLADOS</span>
            <h1 className='fs-2 text-start text-break ms-lg-5 text-white pb-5 animated-3 fadeIn' style={{maxWidth:820}}>Somos una empresa joven dedicada a brindar soluciones en la logística de los traslados</h1>
        </div>
        

        {/* SERVICIOS */}
        <div className='d-flex justify-content-start align-items-center px-lg-5 px-3 py-5 my-3 my-lg-5 flex-column'>
            <h2 className='text-start text-break mb-5 color-main'>Nuestros Servicios</h2>
            <div className='d-flex justify-content-center align-items-start flex-wrap flex-lg-nowrap'>
                <div type="button" className='d-flex justify-content-center align-items-center p-3 p-sm-5 my-2 mx-sm-2 bg-card-servicios shadow text-black rounded flex-fill'>
                    <span className='text-center text-break fs-6 text-black alter-font'>Traslados Corporativos/Empresariales</span>
                </div>
                <div type="button" className='d-flex justify-content-center align-items-center p-3 p-sm-5 my-2 mx-sm-2 bg-card-servicios shadow text-black rounded flex-fill'>
                    <span className='text-center text-break fs-6 text-black alter-font'>Traslados desde/hacia Aeropuertos, Puertos, Terminales</span>
                </div>
                <div type="button" className='d-flex justify-content-center align-items-center p-3 p-sm-5 my-2 mx-sm-2 bg-card-servicios shadow text-black rounded flex-fill'>
                    <span className='text-center text-break fs-6 text-black alter-font'>Traslados de ART y Obras Sociales</span>
                </div>
                <div type="button" className='d-flex justify-content-center align-items-center p-3 p-sm-5 my-2 mx-sm-2 bg-card-servicios shadow text-black rounded flex-fill'>
                    <span className='text-center text-break fs-6 text-black alter-font'>Traslados de Valores. Traslados Pet Friendly</span>
                </div>
            </div>
        </div>

        {/* TEXTO E IMAGEN PRIMERA */}
        <QuienesSomosPrimerItem/>
        
        {/* TEXTO E IMAGEN SEGUNDA */}
        <QuienesSomosSegundoItem/>
        

    </div>
  )
}
