
import heroAzienda from "../assets/img/azienda Enrico Erca.jpg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Su_di_noi = () => {
    return <>
        {/* Hero Section */}
        <div style={{background: `url(${heroAzienda})`,
                backgroundSize: `cover`, backgroundPosition: `center`}} className="h-screen bg-cover flex-col items-center bg-center text-white">
                <div className="">
                    <NavBar/>
                </div>
                <div className="text-3xl px-9 pt-3 uppercase font-bold ">Tutto ciò che serve per gestire la tua proprietà, senza pensieri.</div>
                <p className="px-9 text-center font-semibold pt-1">Dalla burocrazia alle bollette, dalla manutenzione alla relocation — ci pensiamo noi.</p>
                <p className="text-center">Servizi completi per proprietari, inquilini e investitori immobiliari</p>  
        </div>

        <div className="mt-2">
            <Footer/>
        </div>
    </>
}

export default Su_di_noi;