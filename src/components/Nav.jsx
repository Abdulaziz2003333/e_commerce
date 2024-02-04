import i18n from "../i18n.js";
import {useContext, useEffect, useRef} from "react";
import {MyContext} from "../context/Context.jsx";
import {useTranslation} from "react-i18next";
import BottomNav from "./BottomNav.jsx";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Nav = () => {
    const navbarRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(navbarRef.current, {
            opacity:1,
            transition:0.5,
            ease:"power2.inOut",
        },
            {
                opacity: 0,
                transition:0.5,
                ease:"power2.inOut",
                scrollTrigger: {
                    trigger: navbarRef.current,
                    start: 100,
                    end: "top top",
                    scrub: true,
                }
            });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    const {changeLanguageFunc} = useContext(MyContext)
    const {t} = useTranslation()

    return (
        <nav className="fixed w-full z-50 top-0">
           <div className="bg-[#000000] py-[14px] inter-regular" ref={navbarRef}>
               <div className="container flex items-center justify-between">
                   <div className="text-white flex gap-5">
                       <h3>{t("topNav.center")}</h3>
                       <p>{t("topNav.shop")}</p>
                   </div>
                   <select
                       value={i18n.language}
                       onChange={(e) => changeLanguageFunc(e.target.value)}
                       className="text-white bg-black"
                   >
                       <option value="en">English</option>
                       <option value="uz">Uzbek</option>
                       <option value="ru">Russian</option>
                   </select>
               </div>
           </div>
            <BottomNav/>
        </nav>
    );
};

export default Nav;