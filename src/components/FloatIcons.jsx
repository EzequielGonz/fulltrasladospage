import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { PiPhonePlusLight } from "react-icons/pi";
import toast from "react-hot-toast";



export const FloatIcons = () => {

    const handleArrow = () => {
        window.scrollTo(0, 0);
    };

    const handleWsp = () => {
      window.open("https://api.whatsapp.com/send?phone=5491169110413&text=¡Hola! Queria consultarles sobre: [Tu mensaje] ", "_blank")
    };

    const handleCopy = () => {
      navigator.clipboard.writeText("5491169110413");
      toast.success("¡Número copiado!")
    }
  

  return (
    <div className="float-icons-width d-flex flex-column justify-content-center align-items-end mb-2 me-2" style={{zIndex:99}}>
        <span type="button" onClick={handleWsp} className='d-flex justify-content-center align-items-center bg-success rounded-circle mb-1'><FaWhatsapp style={{padding:6}} className='float-icons-items-size text-white'/></span>
        <div className="btn-group dropstart">
          
          <span type="button" data-bs-toggle="dropdown" aria-expanded="false" className='d-flex justify-content-center align-items-center bg-black rounded-circle mb-1'><PiPhonePlusLight  style={{padding:6}} className='dropdown-toggle float-icons-items-size text-white'/></span>
          
          <ul className="dropdown-menu py-1 px-3 text-white bg-color-main">
            <li onClick={handleCopy} type="button"><span className='alter-font fw-bold d-flex justify-content-start translate-item align-items-center my-2'>+549 1169110413</span></li>
          </ul>

        </div>
        <span type="button" onClick={handleArrow} className='d-flex justify-content-center align-items-center bg-black rounded-circle'><IoArrowUpCircleOutline className='float-icons-items-size text-white p-1'/></span>
    </div>
  )
}