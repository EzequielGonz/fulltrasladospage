
export const CardTarifas = ({item}) => {

  return (
    <>
      {
        item.distancia !== undefined ? <div className="d-flex flex-column align-items-start justify-content-center p-3 p-md-4 my-3 m-md-2 rounded shadow flex-fill bg-card-tarifas">
        <h4 className="text-start text-break mb-1 fs-4 text-black">{item.distancia}</h4>
        <h5 className="text-start text-break text-black alter-font fs-6">{item.nombre}</h5>
        <span className="border-top border-1 border-secondary w-100 mb-3"></span>
        <span className="text-black">Auto urbano: <b className="text-success alter-font">${item.auto_urbano}</b></span>
        <span className="text-black">Auto ejecutivo: <b className="text-success alter-font">${item.auto_ejecutivo}</b></span>
        <span className="text-black">Nueva Kangoo: <b className="text-success alter-font">${item.nueva_kangoo}</b></span>
        <span className="text-black">Mercedes Benz Vito: <b className="text-success alter-font">${item.mercedes_benz_vito}</b></span>
        
    </div> : <div className="d-flex flex-column align-items-start justify-content-center p-3 p-md-4 my-3 m-md-2 rounded shadow flex-fill bg-card-tarifas">
        <h4 className="text-start text-break fs-4 text-black">{item.nombre}</h4>
        <span className="border-top border-1 border-secondary w-100 mb-3"></span>
        <span className="text-black">Auto: {item.auto && item.auto.includes("consultar") ? item.auto : <b className="text-success alter-font">${item.auto}</b>}</span>
        <span className="text-black">Nueva Kangoo: {item.nueva_kangoo && item.nueva_kangoo.includes("consultar") ? item.nueva_kangoo : <b className="text-success alter-font">${item.nueva_kangoo}</b>}</span>
        <span className="text-black">Fiat Doblo: {item.fiat_doblo_kangoo && item.fiat_doblo_kangoo.includes("consultar") ? item.fiat_doblo_kangoo : <b className="text-success alter-font">${item.fiat_doblo_kangoo}</b>}</span>
        <span className="text-black">Mercedes Benz Vito: {item.mercedes_benz_vito && item.mercedes_benz_vito.includes("consultar") ? <b className="text-secondary fw-light">{item.mercedes_benz_vito}</b> : <b className="text-success alter-font">${item.mercedes_benz_vito}</b>}</span>
        <span className="text-black">Hiace/Sprinter: {item.hiace_sprinter && item.hiace_sprinter.includes("consultar") ? <b className="text-secondary fw-light">{item.hiace_sprinter}</b> : <b className="text-success alter-font">${item.hiace_sprinter}</b>}</span>
        <span className="mt-3 color-secondary alter-font fw-bold">Incluye peajes</span>
    </div>
      }
    </>
  )
}
