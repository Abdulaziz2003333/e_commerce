import React, {useEffect, useRef} from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaArrowUp } from "react-icons/fa6";
const ScrollToTop = () => {

    const scrollRef = useRef(null);
    const scrollTopRef = useRef(null);
    function scrollToTop() {
        localStorage.setItem('level',window.scrollY)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function scrollToLevel () {
        const top =  localStorage.getItem('level')
        window.scrollTo({ top:top, behavior: 'smooth' });
    }

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(scrollRef.current, {
            opacity: 0,
            y: 100,
            duration: 0.5
        },{
            opacity: 1,
            zIndex: 130,
            y: 0,
            duration: 0.5,
            scrollTrigger:{
                trigger:scrollRef.current,
                start:'200',
                scrub:1
            }
        })

        gsap.fromTo(scrollTopRef.current, {
            opacity: 1,
            duration: 0.5,
            zIndex: 100
        },{
            opacity: 0,
            duration: 0.5,
            zIndex: 0,
            scrollTrigger:{
                trigger:scrollTopRef.current,
                start:'200',
                scrub:1
            }
        })

        ScrollTrigger.refresh();

    },[])

    return (
        <div>
            <div ref={scrollTopRef} onClick={scrollToLevel}
                 className="bg-[#DB4444] p-3 rounded-full fixed bottom-10 right-10">
                <FaArrowUp className="text-white rotate-180"/>
            </div>
            <div ref={scrollRef} onClick={scrollToTop}
                 className="bg-[#DB4444] p-3 rounded-full fixed bottom-10 right-10">
                <FaArrowUp className="text-white"/>
            </div>
        </div>
    );
};

export default ScrollToTop;