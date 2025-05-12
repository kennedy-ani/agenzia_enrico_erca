import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const NavBar = () => {
    return <>

        {/** NAV LINKS */}
        <div className="">
            <ul className="md:flex justify-center items-center py-0.5 hidden ">
                <li className="block px-1.5 py-2 hover:underline underline-offset-8"><Link className="" to={'/'}><p className="text-white ">Home</p></Link></li>
                <li className="block px-1.5 py-2 hover:underline underline-offset-8"><Link to={'/annunci'}><p className="text-white ">Annunci</p></Link></li>
                <li className="block px-1.5 py-2 hover:underline underline-offset-8"><Link to={'/resa'}><p className="text-white ">Resa</p></Link></li>
                <li className="block px-1.5 py-2 hover:underline underline-offset-8"><Link to={'/servizi'}><p className="text-white ">Servizi</p></Link></li>
                <li className="block px-1.5 py-2 hover:underline underline-offset-8"><Link to={'/contatti'}><p className="text-white ">Contatti</p></Link></li>
            </ul>
        </div>

        
    </>
}

export default NavBar;