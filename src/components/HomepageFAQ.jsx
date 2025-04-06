import { useInView } from "react-intersection-observer"
import { Acordeon } from "./Acordeon"

export const HomepageFAQ = () => {

  const {ref, inView} = useInView({
    triggerOnce:true
  });

  return (
    <div className="d-flex flex-column p-lg-5 p-3  mt-5">
        <div ref={ref} id="frecuentes"></div>
        <h2 className={`display-6 text-black mb-3 text-center ${inView ? "animated fadeInUp" : ""}`}>Preguntas frecuentes</h2>

        {/* ACORDEON */}
        <div className="d-flex justify-content-center">
            <Acordeon/>
        </div>
    </div>
  )
}
