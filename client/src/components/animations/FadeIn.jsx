import { useEffect, useState, useRef } from "react";


export const FadeIn = ({children}) =>{
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    const applyObserver = () => {
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setVisible(true);
                observer.unobserve(entry.target);
            }
        });

        observer.observe(ref.current);

        return () => {
            observer.unobserve(ref.current);
        }

    }

    useEffect(()=>{
        applyObserver();
    }, []);


    return <>
        <div className={`fade-in ${visible ? 'is-visible' : ''}`} ref={ref}>
            {children}
        </div>
    </>
}