import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
const Footer = () => {
    return <>
        <div className="bg-red-500 rounded-tl-4xl flex justify-around items-center py-3">
            {/* Logo */}
            <div>
                <h1 className="font-bold text-3xl text-white">ƎE</h1>
            </div>
            
            {/* Servizi */}
            <div>
                <p className="font-bold text-xl text-center">Servizi</p>
                <nav className="text-center">
                    <Link style={{color:"whitesmoke"}} to={'/chat'}>Risparmi sulle bollette</Link><br />
                    <Link style={{color:"whitesmoke"}} to={'/resa'}>Resa</Link><br />
                    <Link style={{color:"whitesmoke"}} to={'/prenotazioni'}>Consulenza</Link><br />
                    <Link style={{color:"whitesmoke"}} to={'/ristrutturazioni'}>Ristrutturazione</Link>
                </nav>
            </div>

            {/* Agenzia */}
            <div>
                <p className="font-bold text-xl text-center">Agenzia</p>
                <nav className="text-center">
                    <Link to={'/about'} style={{color:"whitesmoke"}}>Su di noi</Link><br />
                    <Link to={'/about'} style={{color:"whitesmoke"}}>Team</Link>
                </nav>
            </div>

             {/* Socials */}
             <div>
                <p className="font-bold text-xl text-center">Sociali</p>
                <nav className="text-2xl flex justify-between items-center">
                    <Link to={'/about'} style={{color:"whitesmoke"}}><FaTiktok/></Link><br />
                    <Link to={'/about'} style={{color:"whitesmoke"}}><FaInstagram/></Link><br />
                    <Link to={'/about'} style={{color:"whitesmoke"}}><FaFacebook/></Link>
                </nav>
            </div>
        </div>
    </> 
}

export default Footer;