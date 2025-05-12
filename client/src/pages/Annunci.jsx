import NavBar from "../components/NavBar";
import hero from "../assets/img/heroAnnunci.jpg";
import { FaSearch } from "react-icons/fa";
const Annunci = () => {
    
    return <>
        {/* Hero Section */}
        <div style={{background: `url(${hero})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}} className="h-screen bg-cover object-cover flex-col items-center bg-center text-white">
            <div className="">
                <NavBar/>
            </div>
            <div className="text-7xl px-9 pt-3 font-bold">La Scelta Intelligente per il Tuo Immobile e il Risparmio!</div>
            <p className="px-9 pt-3">Ti aiutiamo a <b>risparmiare su gas e luce</b>, calcolare il <b>valore della tua proprietà</b> e trovare le migliori <b>case in vendita</b> o <b>appartamenti in affitto</b>. Hai bisogno di ristrutturazioni o di una consulenza esperta? I nostri consulenti immobiliari sono a tua disposizione!</p>
            <div className="flex justify-around items-center p-1">
                <input type="search" className="bg-white text-black w-2/4 rounded-xl py-0.5 px-0.5 outline-0 my-1 md:ml-9 flex justify-between items-center"  name="search_immobili" id="search_immobili" placeholder="Ricerca tutti immobili disponibile" />
                <button type="submit" className="bg-red-500 text-white w-10 px-0.5 py-0.5 hover:border-amber-50 hover:pointer"><FaSearch/></button>
            </div>
        </div>
    </>
}

export default Annunci;