import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
const Footer = () => {
    return <>
        <div className="bg-red-500 rounded-tl-4xl flex flex-col md:flex-row justify-around items-center py-3">
            {/* Logo */}
            <div className="">
                <h1 className="font-bold sm:text-9xl text-4xl text-white">ƎE</h1>
            </div>
            
            {/* Servizi */}
            <div className="">
                <p className="font-bold text-xl sm:mt-2 text-white text-center">Servizi</p>
                <nav className="text-center">
                    <Link style={{color:"whitesmoke"}} className="text-xl " to={'/chat'}>Risparmi sulle bollette</Link><br />
                    <Link style={{color:"whitesmoke"}} className="text-xl " to={'/resa'}>Resa</Link><br />
                    <Link style={{color:"whitesmoke"}} className="text-xl " to={'/prenotazioni'}>Consulenza</Link><br />
                    <Link style={{color:"whitesmoke"}} className="text-xl " to={'/ristrutturazioni'}>Ristrutturazione</Link>
                </nav>
            </div>

            {/* Agenzia */}
            <div className="">
                <p className="font-bold text-xl sm:mt-2 text-center text-white  ">Agenzia</p>
                <nav className="text-center">
                    <Link to={'/agenzia'} className="text-xl" style={{color:"whitesmoke"}}>Su di noi</Link><br />
                    <Link to={'/agenzia'} className="text-xl" style={{color:"whitesmoke"}}>Team</Link> <br />
                    <Link to={'/privacy'} className="text-xl" style={{color: "whitesmoke"}}>Policy</Link>
                </nav>
            </div>

             {/* Socials */}
             <div>
                <p className="font-bold text-xl sm:mt-2 text-center text-white">Social</p>
                <nav className="text-2xl flex justify-between items-center">
                    <Link to={'/about'} style={{color:"whitesmoke"}} className="mx-0.5"><FaTiktok/></Link><br />
                    <Link to={'/about'} style={{color:"whitesmoke"}} className=""><FaInstagram/></Link><br />
                    <Link to={'/about'} style={{color:"whitesmoke"}} className="mx-0.5"><FaFacebook/></Link>
                </nav>
            </div>
        </div>
    </> 
}

export default Footer;