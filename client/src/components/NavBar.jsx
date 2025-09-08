import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBarResponsive from "./NavBarResponsive";
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return <>

        {/** NAV LINKS */}
        <div className="md:hidden ml-2 w-3 p-1 flex justify-left items-center">
            <FaBars onClick={()=>setShowMenu(true)} className="text-2xl"/>
        </div>
        
        <div className="">
            <ul className="md:flex justify-center items-center py-0.5 hidden">
                <li className="block px-1.5 py-2 hover:underline underline-offset-8"><Link className="" to={'/'}><p className="text-white ">Home</p></Link></li>
                <li className="block px-1.5 py-2 hover:underline underline-offset-8"><Link to={'/annunci'}><p className="text-white ">Annunci</p></Link></li>
                <li className="block px-1.5 py-2 hover:underline underline-offset-8"><Link to={'/servizi'}><p className="text-white ">Servizi</p></Link></li>
                <li className="block px-1.5 py-2 hover:underline underline-offset-8"><Link to={'/agenzia'}><p className="text-white ">Su di Noi</p></Link></li>
                <li className="block  py-0.5 text-center text-sm md:w-10  transition-transform hover:scale-105 border-none bg-white rounded-4xl border"><Link to={'/consulenza-privata'}><p className="text-red-500 font-bold uppercase">Consulenza Privata</p></Link></li>
            </ul>
        </div>

        <NavBarResponsive showMenu={showMenu} setShowMenu={setShowMenu}/>
    </>
}

export default NavBar;