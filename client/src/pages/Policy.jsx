
import herox from '../assets/img/herox.jpg';
import NavBar from "../components/NavBar";
import logo from '../assets/img/White Logo.png';
import Footer from '../components/Footer';
const Policy = () => {
    return <>
        {/** Hero section */}
        <div style={{background: `url(${herox})`,
            backgroundSize: `cover`, backgroundPosition: `center`}} className="min-h-screen  bg-cover flex-col items-center bg-center text-white md:px-12 py-2">
            <div className="flex sm:justify-between sm:ml-2 sm:items-center">
                <img src={logo} className="sm:w-3 " alt="Enrico Erca"/>
                <NavBar/>
            </div>
            <h1 className="text-3xl sm:text-6xl md:text-7xl text-center mt-6 font-bold ">Privacy Policy</h1>
            
            
            
        </div>

        {/* Footer */}
        <Footer/>
    </>
}

export default Policy;