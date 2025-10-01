
import heroAzienda from "../assets/img/6_09 -2.PNG";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import logo from '../assets/img/White Logo.png';
import { FadeIn } from "../components/animations/FadeIn";
import { FaSearch, FaClock, FaPhone, FaEnvelope, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimes } from "react-icons/fa";

const Su_di_noi = () => {
    return <>
        {/* Hero Section */}
        <div className="font-display">

            <div style={{background: `url(${heroAzienda})`,
                    backgroundSize: `cover`, backgroundPosition: `center`}} className=" min-h-screen img bg-cover flex-col items-center bg-center  text-white md:px-5">
                    
                    {/* Contact Bar */}
                <div className="flex flex-col sm:flex-row  w-full justify-between items-center text-sm px-2 py-1">
                    {/* phone and email */}
                    
                    <div className="flex flex-col md:flex-row w-full lg:flex-row md:w-1/2  justify-start md:items-center">
                        <FaPhone className="md:w-1/5  hidden md:inline"/>
                        <span className="md:mr-2 ml-[0rem] md:w-full text-[0.9rem] w-full ">+393311887849 | 0573-737305</span>

                        <FaEnvelope className=" md:w-1/5  hidden md:inline"/>
                        <span className=" text-[0.9rem] w-1/2 ">gunzimangusta@gmail.com</span>
                    </div>
                    

                    {/* time */}
                    <div className="flex flex-col md:justify-end mt-1 md:mt-0 md:ml-5 md:flex-row w-full md:w-1/2 ">
                        <FaClock className="mr-0.5  md:text-md hidden "/>
                        <span className=" md:w-1/2  text-[0.9rem]">Lunedi - Venerdi</span>
                        <span className=" md:w-1/2  text-[0.9rem] ">9:30  - 13:00 | 16:00 - 19:30</span>
                    </div>
                </div>

                    <div className="flex justify-between items-center">
                        <img src={logo} className="w-5 ml-2" alt="Enrico Erca"/>
                        <NavBar/>
                    </div>
                    
                    {/* <div className="sm:text-5xl sm:mt-4 px-9 sm:px-3 pt-3 font-bold text-center">Tutto ciò che serve per gestire la tua proprietà, senza pensieri.</div>
                    <p className="px-9 sm:px-3  text-center font-semibold pt-1">Dalla burocrazia alle bollette, dalla manutenzione alla relocation — ci pensiamo noi.</p>
                    <p className="text-center">Servizi completi per proprietari, inquilini e investitori immobiliari</p>   */}
            </div>


            <section className="m-5">
                <FadeIn>
                    <h1 className="font-bold md:px-2 text-4xl mb-4 text-center">Dal 2000, al servizio dei proprietari e degli investitori immobiliari</h1>
                </FadeIn>

                <FadeIn>
                    <p className="text-center mx-10">
                        Creati nei primi anni 2000, ci siamo specializzati nella gestione immobiliare, il cuore del nostro business.
                        Offriamo inoltre un servizio dedicato alla gestione di immobili da mettere a resa o a reddito, garantendo la massima 
                        valorizzazione per i nostri clienti. Grazie al nostro metodo di selezione e gestione, siamo riusciti a ridurre il tasso 
                        di immobili sfitti dal 1% al 0,2%, portando più stabilità e ritorno sugli investimenti. <br /> <br />

                        <b>Un metodo che potrai scoprire direttamente qui, nel nostro ufficio.</b>
                    </p>
                </FadeIn>

                <FadeIn>
                    <button className="bg-red-500 text-white px-0.5 mx-auto block rounded-full py-0.5 hover:border-amber-50 hover:pointer transition-transform md:mt-5 hover:scale-110">Prenotare ora un appuntamento con noi   </button>
                </FadeIn>

            </section>

            <div className="mt-2">
                <Footer/>
            </div>
        </div>
    </>
}

export default Su_di_noi;