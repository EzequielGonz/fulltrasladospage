import onix from '../images/onix.png'
import kangoo from '../images/kangoo.png'
import fiatdoblo from '../images/fiatdoblo.png'
import mvito from '../images/mvito.png'
import sprinter from '../images/sprinter.png'


export const ReferenciasAutosTarifas = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap mb-lg-2">
        
        <div className="d-flex justify-content-center align-items-center mx-sm-2 my-1 flex-fill">
            <img src={onix} alt="chev onix" className="img-fluid me-2" style={{maxWidth:100}}/>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <h5 className='m-0 alter-font fw-bold fs-6'>Chevrolet Onix</h5>
                <span style={{fontSize:14}}>Hasta 3 pasajeros</span>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-sm-2 my-1 flex-fill">
            <img src={kangoo} alt="renault kangoo" className="img-fluid me-2" style={{maxWidth:100}}/>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <h5 className='m-0 alter-font fw-bold fs-6'>Renault Kangoo</h5>
                <span style={{fontSize:14}}>Hasta 4 pasajeros</span>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-sm-2 my-1 flex-fill">
            <img src={fiatdoblo} alt="fiat dobló" className="img-fluid me-2" style={{maxWidth:100}}/>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <h5 className='m-0 alter-font fw-bold fs-6'>Fiat Dobló</h5>
                <span style={{fontSize:14}}>Hasta 5 pasajeros</span>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-sm-2 my-1 flex-fill">
            <img src={mvito} alt="mercedes benz vito" className="img-fluid me-2" style={{maxWidth:100}}/>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <h5 className='m-0 alter-font fw-bold fs-6'>Mercedes Benz Vito</h5>
                <span style={{fontSize:14}}>Hasta 7 pasajeros</span>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-sm-2 my-1 flex-fill">
            <img src={sprinter} alt="sprinter" className="img-fluid me-2" style={{maxWidth:100}}/>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <h5 className='m-0 alter-font fw-bold fs-6'>Hiace/Sprinter</h5>
                <span style={{fontSize:14}}>Hasta 13 / 19 pasajeros</span>
            </div>
        </div>

    </div>
  )
}
