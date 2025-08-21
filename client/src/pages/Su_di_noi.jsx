
import heroAzienda from "../assets/img/azienda Enrico Erca.jpg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import logo from '../assets/img/White Logo.png';

const Su_di_noi = () => {
    return <>
        {/* Hero Section */}
        <div style={{background: `url(${heroAzienda})`,
                backgroundSize: `cover`, backgroundPosition: `center`}} className="min-h-screen img bg-cover flex-col items-center bg-center text-white md:px-12 py-2">
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