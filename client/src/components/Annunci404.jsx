import img1 from '../assets/img/404annuncioNonFound.png';
const Annunci404 = () => {
    return <>
        <section className="flex justify-center items-center">
            <div>
                <h1 className='md:text-7xl font-bold text-red-500'>Oops!</h1>    
                <h2 className='md:text-3xl md:mt-2 font-bold'>L'annuncio richiesto non esiste ora</h2>
                <p className='text-gray-500 text-xl mt-0'>Ti consiglio di cercare qualcos'altro</p>
            </div>

            <img src={img1} alt="Nessun Annuncio"/>

        </section>  
    </>
}

export default Annunci404;