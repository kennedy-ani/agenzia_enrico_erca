import { FaTimes } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
const NavBarResponsive = ({showMenu, setShowMenu}) => {
    
    return <>
        <ul className={showMenu ? 'flex-col flex items-center fixed inset-0 z-30 left-1/14 uppercase bg-black/40 backdrop-blur-sm justify-center p-8 md:hidden' : 'hidden'}>
            <FaTimes className='text-white  text-xl' onClick={()=>setShowMenu(false)}/>
            <li className="block px-1.5 py-0.5 hover:underline underline-offset-8"><Link className="" to={'/'}><p className="text-white ">Home</p></Link></li>
            <li className="block px-1.5 py-0.5 hover:underline underline-offset-8"><Link to={'/annunci'}><p className="text-white ">Annunci</p></Link></li>
            <li className="block px-1.5 py-0.5 hover:underline underline-offset-8"><Link to={'/resa'}><p className="text-white ">Resa</p></Link></li>
            <li className="block px-1.5 py-0.5 hover:underline underline-offset-8"><Link to={'/servizi'}><p className="text-white ">Servizi</p></Link></li>
            <li className="block px-1.5 py-0.5 hover:underline underline-offset-8"><Link to={'/agenzia'}><p className="text-white text-center w-10">Su di Noi</p></Link></li>
        </ul>
    </>
}

export default NavBarResponsive;