import NavBar from "../components/NavBar";
import hero from "../assets/img/heroAnnunci.jpg";
import { FaSearch, FaClock, FaPhone, FaEnvelope, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimes } from "react-icons/fa";
import axios from "axios";
import proprieta_1 from '../assets/img/proprieta_1.jpg';
import { useEffect, useState } from "react";
import { data, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logo from '../assets/img/White Logo.png';
import { FadeIn } from "../components/animations/FadeIn";
import Annunci404 from '../components/Annunci404';
const Annunci = ({currentIndex, setCurrentIndex,
          goPrev, goNext, valueRicerca, setValueRicerca, /*onChangeRicerca,*/ getDataAnnunci, onOpenGallery, isGalleryOpen, setIsGalleryOpen, galleryImages, setGalleryImages, listingSelected, setlistingSelected, isModalOpen, setIsModalOpen, isFullScreen, setIsFullScreen, chiamaAgenteDaAnnuncio}) => {

    const [annunci, setAnnunci] = useState([]);
    const location = useLocation();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Search for real-time
    const [search, setSearch] = useState("");
    console.log(search);
const getAllAnnunci = async(page = 1) =>{
    try {
        let response = await axios.get(`http://localhost:2001/annunci?page=${page}&limit=10`)
        
        setAnnunci(response.data.result);
        setTotalPages(response.data.totalPages);
        setPage(response.data.page);
    } catch (error) {
        console.log(error);
    }
}

    let navigare = useNavigate();
    const onSearch = (valueRicerca)=> {
        //Call API
        setValueRicerca(valueRicerca);
        navigare(`/annunci?ricercaData=${encodeURIComponent(valueRicerca)}`);// encode in case of space
        console.log("Search: ", valueRicerca);
    }

    // Filter system for searching listings
    const AnnunciFiltrato = annunci && annunci.filter((data)=> {
        return search.toLowerCase() === "" ? data : (data.titolo.toLowerCase().includes(search) || String(data.prezzo).includes(search) || data.indirizzo.toLowerCase().includes(search))  
    })

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

            getAllAnnunci(page);
        }


        // check gallery images set
        if(galleryImages.length > 0){
            setCurrentIndex(0);
        }
           
    },[galleryImages, 
        page, 
        setCurrentIndex,  
        location.search])//Run effect whenever the query value changes
    
    return <>
        {/* Hero Section */}
        
            <div className="font-display">



                    <div style={{background: `url(${hero})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}} className="min-h-screen img bg-cover flex-col items-center bg-center text-white md:px-5 py-2">
                            {/* Contact Bar */}
                            <div className="flex flex-col sm:flex-row  w-full justify-between items-center text-sm px-2 py-1">
                                {/* phone and email */}
                                <FadeIn>
                                    <div className="flex flex-col md:flex-row w-full lg:flex-row md:w-1/2  justify-start md:items-center">
                                        <FaPhone className="md:w-1/5  hidden md:inline"/>
                                        <span className="md:mr-2 ml-[0rem] md:w-full text-[0.9rem] w-full">+393311887849 | 0573-737305</span>
                
                                        <FaEnvelope className=" md:w-1/5  hidden md:inline"/>
                                        <span className=" text-[0.9rem] w-1/2">gunzimangusta@gmail.com</span>
                                    </div>
                                </FadeIn>
                                
            
                                {/* time */}
                                <FadeIn>
                                    <div className="flex flex-col md:justify-end mt-1 md:mt-0 md:ml-5 md:flex-row w-full md:w-1/2 ">
                                        <FaClock className="mr-0.5  md:text-md hidden "/>
                                        <span className=" md:w-1/2 text-[0.9rem]">Lunedi - Venerdi</span>
                                        <span className=" md:w-1/2  text-[0.9rem] ">9:30  - 13:00 | 16:00 - 19:30</span>
                                    </div>
                                </FadeIn>
                            </div>

                            <FadeIn>
                                <div className="flex justify-between items-center">
                                    <img src={logo} className="w-5 ml-2" alt="Enrico Erca"/>
                                    <NavBar/>
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <h1  className="text-lg md:text-7xl text-center mt-3 mx-1 font-bold">Scopri La Tua Casa Perfetta!</h1>
                            </FadeIn>

                        {/* Search bar */}
                        <FadeIn>
                            <div className="relative w-full flex justify-center items-center px-1">
                                <div className="flex flex-col sm:flex-row items-center gap-2 mt-0 w-[40rem] md:w-[50rem] justify-center ">
                                    <input type="search" /*value={valueRicerca}*/ onChange={(e)=>setSearch(e.target.value)} className="border-b text-white border-white outline-none py-0.5 px-1 sm:w-3/4 outline-0 my-1  sm:ml-1 flex justify-between items-center focus:outline-none focus:ring-2 w-full focus:ring-white-500 "  name="search_immobili" id="search_immobili" placeholder="Ricerca tutti immobili disponibile, locazione, prezzo, tipo" />
                                    {/* <button className="bg-red-500 text-white px-0.5 md:ml-9 py-0.5 hover:border-amber-50 hover:pointer" onClick={()=> onSearch(valueRicerca)}>Cerca</button> */}
                                </div>
                                {/* Search Results */}
                                
                                {/* {valueRicerca && (
                                    <div className="absolute z-10 -top-1 left-9 lg:lef-0 w-full sm:top-3 sm:left-0 sm:w-25 bg-white border border-gray-300 rounded-lg shadow-lg">
                                        <ul className="divide-y divide-gray-200">
                                            
                                            {annunci?.filter(item=>{
                                                const  ricerca_dati = valueRicerca.toLowerCase(); 
                                                const titolo = item.titolo.toLowerCase();
                                                
                                                return ricerca_dati && titolo.startsWith(ricerca_dati) && titolo !== ricerca_dati;
                                            }).map((data)=>(
                                                <li onClick={()=>onSearch(data.titolo)} className="p-1 hover:bg-gray-100 text-black cursor-pointer">{data.titolo}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )} */}
                                
                            </div>
                        </FadeIn>
                    </div>
                
            
            

            {/* Tutti gli annunci */}
            
                
            
                    
                
                    {AnnunciFiltrato && AnnunciFiltrato.length > 0 ? (
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 md:px-2  sm:px-1">
                            {AnnunciFiltrato.map((data)=>(
                                <FadeIn>
                                    <div key={data.id} onClick={()=>{setIsModalOpen(true); setlistingSelected(data); onOpenGallery(data.id)}} className="w-full mb-2 sm:mb-2 bg-white rounded-2xl shadow-md overflow-hidden  transition-transform hover:scale-105">
                                        <img
                                            src={`http://localhost:2001/uploads/${data.img_url}`}
                                            alt={data.titolo}
                                            className="w-full h-12 object-cover"
                                        />
                                        <div className="p-3 flex flex-col h-full">
                                            <div className="mb-2">
                                                <h3 className="text-xl text-center font-semibold">{data.titolo}</h3>
                                                <p className="text-gray-500 text-sm">{data.indirizzo}</p>
                                            </div>
                                            <div className="flex flex-col justify-between items-center mb-2">
                                                <h2 className="text-green-600 text-2xl font-bold">€{data.prezzo} {data.is_vendita === 0 ? '/mese': ''}</h2>
                                                <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                                    {data.is_vendita === 1 ? 'Vendita': 'Affitto'}
                                                </span>
                                            </div>
                                            <div className="text-gray-600 text-sm flex flex-col justify-between items-center">
                                            <p className="w-10">{data.camere} camere · {data.bagni} bagni · 1250 sqft</p>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            
                        ))}
                        </div>
                    ) :(
                            <Annunci404/>
                        )
                    }
            {/* listing card of each listing clicked on */}
            {isModalOpen && listingSelected && (
                <div>
                    
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                        <div className="bg-white p-2 rounded-lg shadow-lg w-24 my-2 text-center relative overflow-y-auto max-h-[95vh]">
                            <button onClick={()=>setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                            >
                            &times;
                            </button>
                            <h2 className="text-xl font-bold text-red-600 mb-2"></h2>
                            <div>
                                {galleryImages.length > 0 && (
                                    <img
                                        src={galleryImages[currentIndex]}
                                        alt={`Image ${currentIndex}`}
                                        className="w-full h-12 object-cover cursor-pointer"
                                        onClick={()=>setIsFullScreen(true)}
                                    />
                                )}
                                    {/* Left Button */}
                                    <button
                                    onClick={goPrev}
                                    className="absolute left-2 top-1/3 -translate-y-1/2 bg-white/50 cursor-pointer text-black px-0.5 py-0.5 rounded-full"
                                    >
                                    <FaArrowAltCircleLeft/>
                                    </button>

                                    {/* Right Button */}
                                    <button
                                    onClick={goNext}
                                    className="absolute right-2 top-1/3 -translate-y-1/2 bg-white/50 cursor-pointer text-black px-0.5 py-0.5 rounded-full"
                                    >
                                    <FaArrowAltCircleRight/>
                                    </button>

                                {isFullScreen && (
                                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                        <img
                                        src={galleryImages[currentIndex]}
                                        alt={`Image ${currentIndex}`}
                                        className="max-h-[90%] max-w-[90%] object-contain"
                                        />
                                        <button
                                        onClick={() => setIsFullScreen(false)}
                                        className="absolute top-4 right-4 text-white text-3xl"
                                        >
                                        <FaTimes/>
                                        </button>

                                        {/* slides left and right */}
                                        {/* Left Button */}
                                        <button
                                        onClick={goPrev}
                                        className="absolute left-2 top-1/3 -translate-y-1/2 bg-white/50 cursor-pointer text-black px-0.5 py-0.5 rounded-full"
                                        >
                                        <FaArrowAltCircleLeft/>
                                        </button>

                                        {/* Right Button */}
                                        <button
                                        onClick={goNext}
                                        className="absolute right-2 top-1/3 -translate-y-1/2 bg-white/50 cursor-pointer text-black px-0.5 py-0.5 rounded-full"
                                        >
                                        <FaArrowAltCircleRight/>
                                        </button>
                                </div>
                                )}
                            </div>
                            <div className="p-2 flex flex-col h-full">
                                <div className="mb-2">
                                    <h3 className="text-xl font-semibold">{listingSelected.titolo}</h3>
                                    <p className="text-gray-500 text-sm">{listingSelected.indirizzo}</p>
                                </div>
                                <div className="mb-2">
                                    <p className="text-gray-500 text-sm">{listingSelected.descrizione}</p>
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
                            <div className="sm:flex sm:justify-between sm:items-center md:block md:mx-auto">
                                <a href="https://wa.me/393272794535" className="bg-green-600 p-0.5 !text-white font-bold">Scrivi ora</a>
                                <a href="tel:+393508223873" className="bg-green-600 p-0.5 md:hidden !text-white font-bold">Chiama ora</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Impaginazione */}
            <div className="flex gap-2 justify-center items-center mt-4">
                <button 
                    disabled={page === 1} 
                    onClick={() => setPage(page - 1)} 
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    <FaArrowAltCircleLeft className="text-black text-3xl"/>
                </button>

                <span className="">Page {page} of {totalPages}</span>

                <button 
                    disabled={page === totalPages} 
                    onClick={() => setPage(page + 1)} 
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    <FaArrowAltCircleRight className="text-black text-3xl"/>
                </button>
            </div>
            
            {/* Footer */}
            <Footer/>
        
        </div>
    </>
}

export default Annunci;