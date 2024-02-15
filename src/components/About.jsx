import React from 'react';
import girls
    from '../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'
import tom from "../assets/image 46.svg"
import will from "../assets/image 47.svg"
import emma from "../assets/image 51.svg"
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoLight } from "react-icons/pi";
import ThreeBilboards from "./ThreeBilboards.jsx";




const About = () => {

    return (
        <div className="container">

            <div className="pt-60 ">

                <div className=" flex  items-center justify-between">
                    <div className="inline-flex flex-col items-start justify-between w-[505px]">
                        <h1 className="text-black text-justify inter-medium text-[54px] font-semibold leading-[64px] tracking-[3.24px]"> Our
                            Story</h1>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
                            presense in Bangladesh. Supported by wide range of tailored marketing, data and service
                            solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers
                            across
                            the region. </p>
                        <p className="w-[505px] text-[color:var(--Text2,#000)]  text-base font-normal leading-[26px]">Exclusive
                            has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
                            diverse assotment in categories ranging from consumer.</p>
                    </div>
                    <div>
                        <img src={girls} className="w-[550px]"/>
                    </div>
                </div>


                <div className="flex justify-center">
                    <div
                        className=" rounded border pl-[50px] pr-[51px] py-[30px] border-solid border-gray-400 flex-col justify-center items-center">
                    </div>
                    <div
                        className=" rounded border pl-[50px] pr-[51px] py-[30px] border-solid border-[rgba(0,0,0,0.30)]">2
                    </div>
                    <div
                        className=" rounded border pl-[50px] pr-[51px] py-[30px] border-solid border-[rgba(0,0,0,0.30)]">3
                    </div>
                    <div
                        className=" rounded border pl-[50px] pr-[51px] py-[30px] border-solid border-[rgba(0,0,0,0.30)]">4
                    </div>
                </div>

                <div className="flex justify-between pt-10 ">
                    <div>
                        <div
                            className="w-[370px] h-[430px] bg-[#F5F5F5] flex justify-center items-end pt-[39px] pb-0 px-[67px]  ">
                            <img
                                src={tom}/>


                        </div>
                        <div className="mt-5">
                            <p className="inter-medium text-black text-[32px] font-medium leading-[30px] tracking-[1.28px]">Soap
                                MCtavish</p>
                            <p className="popins-extraLight mt-2">Founder&Chairman</p>
                            <ul className="flex gap-6 mt-2">
                                <li><CiTwitter className=" w-6 h-6"/></li>
                                <li><FaInstagram className=" w-6 h-6"/></li>
                                <li><PiLinkedinLogoLight className=" w-6 h-6"/></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div
                            className="w-[370px] h-[430px] bg-[#F5F5F5] flex justify-center items-end  pt-[33px] pb-0 px-[38px] ">
                            <img
                                src={emma}/></div>
                        <div className="mt-5">
                            <p className="inter-medium text-black text-[32px] font-medium leading-[30px] tracking-[1.28px]"> Kate
                                Laswell </p>
                            <p className="popins-extraLight mt-2">Managing Director</p>
                            <ul className="flex gap-6 mt-2">
                                <li><CiTwitter className=" w-6 h-6"/></li>
                                <li><FaInstagram className=" w-6 h-6"/></li>
                                <li><PiLinkedinLogoLight className=" w-6 h-6"/></li>
                            </ul>

                        </div>
                    </div>
                    <div>

                        <div
                            className="w-[370px] h-[430px] bg-[#F5F5F5] flex justify-center items-end pt-[38px] pb-0 px-[22px] ">
                            <img
                                src={will}/></div>
                        <div className="mt-5">
                            <p className="inter-medium text-black text-[32px] font-medium leading-[30px] tracking-[1.28px]">Jonathan
                                Price </p>
                            <p className="popins-extraLight mt-2">Product Designer</p>
                            <ul className="flex gap-6 mt-2">
                                <li><CiTwitter className=" w-6 h-6"/></li>
                                <li><FaInstagram className=" w-6 h-6"/></li>
                                <li><PiLinkedinLogoLight className=" w-6 h-6"/></li>
                            </ul>

                        </div>
                    </div>

                </div>

<ThreeBilboards/>
            </div>
        </div>
    );
};

export default About;