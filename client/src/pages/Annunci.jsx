import NavBar from "../components/NavBar";
import hero from "../assets/img/heroAnnunci.jpg";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import proprieta_1 from '../assets/img/proprieta_1.jpg';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
const Annunci = () => {

    const [annunci, setAnnunci] = useState([]);
    const location = useLocation();
    const [listingSelected, setlistingSelected] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    
    const getAllAnnunci = async() =>{
        await axios.get('http://localhost:2001/annunci')
        .then(response=>{setAnnunci(response.data.result)})
        .catch(error=>{console.error(error)})
    }

    const getDataAnnunci = async(ricercaParolaChiave)=>{
        const search = document.getElementById('search_immobili').value;
        
        const keyword = ricercaParolaChiave || (search ? search : '');
        
        const dataObject = {ricercaData: keyword};

        await axios.get('http://localhost:2001/annunci/ricerca', {
            params: dataObject
        })
        .then(response=>{setAnnunci(response.data.result)})
        .catch(error=>{console.error(error)})
    }


    useEffect(()=>{
        // Responsible for getting all the listings from data
        const queryParams = new URLSearchParams(location.search);
        const ricercaParolaChiave = queryParams.get("ricercaData");
        console.log(ricercaParolaChiave);
        if(ricercaParolaChiave){
            //If search keyword is in URL, use it to fetch filtered results
            console.log('Keyword');
            getDataAnnunci(ricercaParolaChiave);
        }else{
            // Otherwise, get all listings
            console.log('No Keyword');

            getAllAnnunci();
        }
           
    },[location.search])//Run effect whenever the query value changes
    
    return <>
        {/* Hero Section */}
        <div style={{background: `url(${hero})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}} className="h-screen bg-cover object-cover flex-col items-center bg-center text-white">
            <div className="">
                <NavBar/>
            </div>
            <div className="text-7xl px-9 pt-3 font-bold text-center">Scopri La Tua Casa Perfetta!</div>
            
            <div className="flex justify-around items-center p-1">
                <input type="search"  className="bg-white text-black w-2/4 rounded-xl py-0.5 px-0.5 outline-0 my-1 md:ml-9 flex justify-between items-center"  name="search_immobili" id="search_immobili" placeholder="Ricerca tutti immobili disponibile, locazione, prezzo, tipo" />
                <button onClick={()=>getDataAnnunci()} type="submit" className="bg-red-500 text-white w-10 px-0.5 py-0.5 hover:border-amber-50 hover:pointer"><FaSearch/></button>
            </div>
        </div>

        {/* Results */}

        <div className="lg:grid mt-4 px-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
            {Object.keys(annunci).map((data)=>{
                return <>
                {/* Carta d'annunci */}
                    <div key={data.id} onClick={()=>{
                        setlistingSelected(annunci[data]);
                        setIsModalOpen(true);
                    }} className=" bg-white rounded-2xl sm:mt-2 shadow-md overflow-hidden transition-transform hover:scale-105">
                        <img
                            src={annunci[data].img_url}
                            alt={annunci[data].titolo}
                            className="w-full h-12 object-cover"
                        />
                        <div className="p-2 flex flex-col h-full">
                            <div className="mb-2">
                                <h3 className="text-xl font-semibold">{annunci[data].titolo}</h3>
                                <p className="text-gray-500 text-sm">{annunci[data].indirizzo}</p>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-green-600 text-2xl font-bold">€{annunci[data].prezzo} {annunci[data].is_vendita === 0 ? '/mese': ''}</h2>
                                <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                    {annunci[data].is_vendita === 1 ? 'Vendita': 'Affitto'}
                                </span>
                            </div>
                            <div className="text-gray-600 text-sm flex justify-between items-center">
                            <p>{annunci[data].camere} camere · {annunci[data].bagni} bagni · 1250 sqft</p>
                            <a href="#" className="text-blue-500 underline hover:text-blue-700">
                                Chiama
                            </a>
                            </div>
                        </div>
                    </div>
                </>
            })}
        </div>

        {/* popup */}
        {isModalOpen && listingSelected && (
            <div>
                {console.log("hshsh", listingSelected)}
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white p-2 rounded-lg shadow-lg w-24 text-center relative">
                        <button onClick={()=>setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                        >
                        &times;
                        </button>
                        <h2 className="text-xl font-bold text-red-600 mb-2"></h2>
                        <div>
                            <img
                                src={listingSelected.img_url}
                                alt={listingSelected.titolo}
                                className="w-full h-12 object-cover"
                            />
                        </div>
                        <div className="p-2 flex flex-col h-full">
                            <div className="mb-2">
                                <h3 className="text-xl font-semibold">{listingSelected.titolo}</h3>
                                <p className="text-gray-500 text-sm">{listingSelected.indirizzo}</p>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-green-600 text-2xl font-bold">€{listingSelected.prezzo} {listingSelected.is_vendita === 0 ? '/mese': ''}</h2>
                                <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                    {listingSelected.is_vendita === 1 ? 'Vendita': 'Affitto'}
                                </span>
                            </div>
                            <div className="text-gray-600 text-sm flex justify-between items-center">
                                <p>{listingSelected.camere} camere · {listingSelected.bagni} bagni · 1250 sqft</p>
                           
                            </div>
                        </div>
                        <a href="#" className="bg-green-600 p-0.5 !text-white font-bold">Chiama Agente</a>
                    </div>
                </div>
            </div>
        )}
        
        {/* Footer */}
        <Footer/>
    </>
}

export default Annunci;