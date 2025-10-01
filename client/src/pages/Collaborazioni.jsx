import herox from '../assets/img/chris-liverani-9cd8qOgeNIY-unsplash.jpg'
import { FaPhone, FaEnvelope, FaClock} from 'react-icons/fa';
import logo from '../assets/img/White Logo.png';
import collaboratore from '../assets/img/Red logo.png';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const Collaborazioni = () => {
    return <>
        <div style={{background: `url(${herox})`, backgroundSize: `cover`, backgroundPosition: `center`}} className=" min-h-screen img bg-cover flex-col items-center bg-center  text-white md:px-5 ">
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
                <h1 className="text-md md:text-7xl text-center md:mt-3 mt-1 mx-1 font-bold">Cresciamo Insieme</h1>
                <p className="mt-2 sm:mt-1 text-base md:text-base text-center mx-auto px-1 md:px-5">
                    Non crediamo nei singoli, ma nelle connessioni. Questa pagina è dedicata ai nostri collaboratori: uomini e donne che mettono esperienza, energia e creatività al servizio di ogni progetto.
                </p>
                <button className="bg-red-500 text-white px-0.5 mx-auto block rounded-full py-0.5 hover:border-amber-50 hover:pointer transition-transform md:mt-5 hover:scale-110">Collaborare Con Noi</button>
            
        </div>

        {/* i nostri collaboratori */}
        <section>
            <h1 className='text-md md:text-4xl text-center md:mt-3 mt-1 mx-1 font-bold'>I Nostri Collaboratori</h1>
            
            {/* Callaboratore 1 */}
            <div className='flex my-5 flex-col justify-center items-center'>
                <img className='w-10' src={collaboratore} alt="" />
                <h1 className='font-bold text-center uppercase'>Gerardo Idealmatic</h1>
                <p className='font-bold text-gray-500 text-center mt-1 text-sm'>Mettiamo sul scopo del questo collaborazione tra noi</p>
            </div>
        </section>

        <Footer/>
    </>
}

export default Collaborazioni;