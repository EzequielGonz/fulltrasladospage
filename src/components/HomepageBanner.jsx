import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom"

export const HomepageBanner = () => {

  const navigate = useNavigate();
  const {ref, inView} = useInView({
    triggerOnce: true
  });

  return (
    <div className="d-flex flex-column p-lg-5 p-3 mt-5 mb-5">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h3 ref={ref} className="mb-4 fs-2 text-center text-black text-break">¿Pensando en viajar desde/hacia Ezeiza o Aeroparque?</h3>
        <button onClick={()=>{navigate("/reservas"); window.scrollTo(0,0)}} className={`btn-color-main-gradient rounded-pill py-3 px-4 px-sm-5 ${inView ? "animated fadeInRight" : ""}`} style={{letterSpacing:2}}>NOSOTROS TE LLEVAMOS</button>
      </div>
    </div>
  )
}
