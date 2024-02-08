import React, {useEffect, useRef} from 'react';
import jbl from '../assets/jbl.png';
import background from '../assets/background_gray.png'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Reklama = () => {

    const containerRef = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        gsap.fromTo(container.children, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            stagger: 0.5
        },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: container,
                    start: 'top',
                    once: true
                }
            }
            );
    }, []);


    return (
        <section className="mb-[81px]">
            <div className="container">
                <div className="py-[70px] px-6 relative rounded-sm text-white bg-black w-full flex items-center justify-around">
                    <div ref={containerRef}>
                        <h2 className="inter-medium text-[19px] text-[#00FF66]">Categories</h2>
                        <h3 className="my-[32px] inter-medium text-[48px] w-[443px] leading-[60px]">Enhance Your Music Experience</h3>
                        <button className="bg-[#00FF66] text-white rounded-[4px] py-[12px] px-[48px]">Buy Now!</button>
                    </div>
                    <img src={jbl} className="sticky z-30" alt="jbl"/>
                    <img src={background} className="absolute top-0 right-[-50px] -z-1" alt="bg"/>
                </div>
            </div>
        </section>
    );
};

export default Reklama;