import React from 'react';
import heroImg from '../../assets/dl.beatsnoop 1.png'
import { FcGoogle } from "react-icons/fc";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Login = () => {

    const {t} = useTranslation()

    return (
        <div className="pt-60 pb-[140px]"  >
            <div className="flex items-center justify-between container w-full">
                <div><img src={heroImg} className="h-[600px]"/></div>
                <div className="flex flex-col w-[371px]">
                    <div>
                        <h1 className="inter-regular text-[36px] font-normal">{t("login.Log in to Exclusive")}</h1>
                        <p className="text-[16px] pt-[14px] inter-regular">{t("register.Enter your details below")}</p>
                    </div>
                    <div>
                        <form className="flex gap-y-[40px] flex-col w-[371px] pt-[45px] inter-regular">
                            <input type="text"
                                   className="border-b-[2.5px] h-[32px] text-[14px] w-full outline-none border-b-[#D9D9D9] inter-regular"
                                   placeholder={t("register.Email")}/>
                            <input type="password"
                                   className="border-b-[2.5px] h-[32px] w-full text-[14px] outline-none border-b-[#D9D9D9] inter-regular"
                                   placeholder={t("register.Password")}/>
                            <div>
                                <button className="bg-[#DB4444] text-white py-[16px] rounded-[4px] w-full"
                                        type="submit">{t("register.Log in")}
                                </button>
                            </div>
                        </form>
                        <div className="pt-[34px]">
                            <p className="text-black inline opacity-[0.7] inter-regular">{t("login.have")}</p>
                            <Link to="/register" className="inline pl-[16px] underline">{t("login.signUp")}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;