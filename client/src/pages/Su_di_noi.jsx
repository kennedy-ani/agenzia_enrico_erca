
import heroAzienda from "../assets/img/azienda Enrico Erca.jpg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import logo from '../assets/img/White Logo.png';
import { FaSearch, FaClock, FaPhone, FaEnvelope, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimes } from "react-icons/fa";

const Su_di_noi = () => {
    return <>
        {/* Hero Section */}
        <div style={{background: `url(${heroAzienda})`,
                backgroundSize: `cover`, backgroundPosition: `center`}} className="min-h-screen img bg-cover flex-col items-center bg-center text-white md:px-12 py-2">
                
                {/* Contact Bar */}
                <div className="flex md:w-56  sm:w-25 flex-col sm:flex-row justify-between text-xs sm:text-sm px-2 py-1">
                    {/* phone and email */}
                    <div className="flex sm:flex-col md:flex-row sm:items-start  justify-center items-center">
                        <FaPhone className="mr-0.5 sm:hidden"/>
                        <span className="mr-2 md:w-1/2">+39 331-1887849 | 0573-737305</span>
                        <FaEnvelope className="mr-0.5 md:w-1/2 sm:hidden"/>
                        <span>gunzimangusta@gmail.com</span>
                    </div>

                    {/* time */}
                    <div className="flex  sm:flex-col md:flex-row md:w-20 sm:justify-center items-center sm:items-start justify-start">
                        <FaClock className="mr-0.5 md:text-md sm:hidden"/>
                        <span className="mr-2 w-full md:w-1/2">Lunedi - Venerdi</span>
                        <span className="w-full md:w-1/2">9:30 - 13:00 16:00 - 19:30</span>
                    </div>
                </div>
                
                <div className="flex sm:justify-between sm:ml-2 sm:items-center">
                    <img src={logo} className="sm:w-3 " alt="Enrico Erca"/>
                    <NavBar/>
                </div>
                <div className="sm:text-5xl sm:mt-4 px-9 sm:px-3 pt-3 font-bold text-center">Tutto ciò che serve per gestire la tua proprietà, senza pensieri.</div>
                <p className="px-9 sm:px-3  text-center font-semibold pt-1">Dalla burocrazia alle bollette, dalla manutenzione alla relocation — ci pensiamo noi.</p>
                <p className="text-center">Servizi completi per proprietari, inquilini e investitori immobiliari</p>  
        </div>

        <div className="mt-2">
            <Footer/>
        </div>
    </>
}

export default Su_di_noi;