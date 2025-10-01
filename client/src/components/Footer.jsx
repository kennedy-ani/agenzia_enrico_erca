import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FadeIn } from "./animations/FadeIn";
import logo from '../assets/img/White Logo.png';

const Footer = () => {
    return <>
        <div className="bg-red-500 rounded-tl-4xl flex flex-col md:flex-row justify-around items-center py-3">
            {/* Logo */}
            <FadeIn>
                <div className="">
                    <img src={logo} className="w-5 ml-2" alt="Enrico Erca"/>
                </div>
            </FadeIn>
            
            {/* Servizi */}
            <div className="">
                <FadeIn>
                    <p className="font-bold text-xl sm:mt-2 text-white mt-1 md:mt-0 text-center">Servizi</p>
                </FadeIn>

                <FadeIn>
                    <nav className="text-center">
                        <Link style={{color:"whitesmoke"}} className="text-xl " to={'/chat'}>Risparmi sulle bollette</Link><br />
                        <Link style={{color:"whitesmoke"}} className="text-xl " to={'/resa'}>Resa</Link><br />
                        <Link style={{color:"whitesmoke"}} className="text-xl " to={'/prenotazioni'}>Consulenza</Link><br />
                        <Link style={{color:"whitesmoke"}} className="text-xl " to={'/ristrutturazioni'}>Ristrutturazione</Link>
                    </nav>
                </FadeIn>
            </div>

            {/* Agenzia */}
            <div className="">
                <FadeIn>
                    <p className="font-bold text-xl sm:mt-2 text-center text-white mt-1 ">Agenzia</p>
                </FadeIn>
                <FadeIn>
                    <nav className="text-center">
                        <Link to={'/agenzia'} className="text-xl" style={{color:"whitesmoke"}}>Su di noi</Link><br />
                        <Link to={'/agenzia'} className="text-xl" style={{color:"whitesmoke"}}>Team</Link> <br />
                        <Link to={'/privacy'} className="text-xl" style={{color: "whitesmoke"}}>Policy</Link>
                    </nav>
                </FadeIn>
            </div>

             {/* Socials */}
             <div>
                <FadeIn>
                    <p className="font-bold text-xl sm:mt-2 text-center text-white mt-1">Social</p>
                    <nav className="text-2xl flex justify-between items-center">
                        <Link to={'/about'} style={{color:"whitesmoke"}} className="mx-0.5"><FaTiktok/></Link><br />
                        <Link to={'/about'} style={{color:"whitesmoke"}} className=""><FaInstagram/></Link><br />
                        <Link to={'/about'} style={{color:"whitesmoke"}} className="mx-0.5"><FaFacebook/></Link>
                    </nav>
                </FadeIn>
            </div>
        </div>
    </> 
}

export default Footer;