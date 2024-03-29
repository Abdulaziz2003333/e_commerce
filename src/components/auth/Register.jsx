import React, {useContext, useEffect, useRef} from 'react';
import heroImg from '../../assets/dl.beatsnoop 1.png'
import { FcGoogle } from "react-icons/fc";
import {Link} from "react-router-dom";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useTranslation} from "react-i18next";
import animateRegister from "../../animations/app.animation.js";
import {MyContext} from "../../context/Context.jsx";
const Register = () => {

    const {t} = useTranslation()
    const registerRef = useRef(null);
const {setName,setEmail,setPassword,HandleSubmit}=useContext(MyContext)


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        animateRegister(registerRef)


    },[])

    return (
        <div className="pt-60 pb-32" ref={registerRef}>
            <div className="flex items-center justify-between container w-full">
                <div><img src={heroImg} className="h-[600px]"/></div>
                <div className="flex flex-col w-[371px]">
                    <div>
                        <h1 className="inter-regular text-[36px] font-normal">{t("register.Create an account")}</h1>
                        <p className="text-[16px] pt-[14px] inter-regular">{t("register.Enter your details below")}</p>
                    </div>
                    <div>
                        <form className="flex gap-y-[40px] flex-col w-[371px] pt-[45px] inter-regular" onSubmit={HandleSubmit}>
                            <input type="text"
                                   className="border-b-[2.5px] text-[14px] h-[32px] w-full outline-none border-b-[#D9D9D9] inter-regular"
                                   placeholder={t("register.Name")} onChange={(e)=>setName(e.target.value)}/>
                            <input type="text"
                                   className="border-b-[2.5px] h-[32px] text-[14px] w-full outline-none border-b-[#D9D9D9] inter-regular"
                                   placeholder={t("register.Email")} onChange={(e)=>setEmail(e.target.value)}/>
                            <input type="password"
                                   className="border-b-[2.5px] h-[32px] w-full text-[14px] outline-none border-b-[#D9D9D9] inter-regular"
                                   placeholder={t("register.Password")} onChange={(e)=>setPassword(e.target.value)}/>
                            <div>
                                <button className="bg-[#DB4444] text-white py-[16px] rounded-[4px] w-full"
                                        type="submit">{t("register.createAccount")}
                                </button>
                                <div
                                    className='flex mt-[16px] border-[1px] cursor-pointer py-[16px] border-[rgba(0, 0, 0, 0.40)] items-center justify-between px-[86px] w-full'>
                                    <FcGoogle className="text-2xl"/>
                                    <p>{t("register.google")}</p>
                                </div>
                            </div>
                        </form>
                        <div className="pt-[34px]">
                            <p className="text-black inline opacity-[0.7] inter-regular">{t("register.Already have account?")}</p>
                            <Link to="/login" className="inline pl-[16px] underline">{t("register.Log in")}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;