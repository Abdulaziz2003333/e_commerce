import React from 'react';
import Nav from "./Nav.jsx";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import iphone from "../assets/hero_endframe__cvklg0xk3w6e_large 2.svg"
import { BsApple } from "react-icons/bs";
import { IoMdArrowForward } from "react-icons/io";
import SideNav from "./SideNav.jsx";
const Hero = () => {
    const items = [
        <div className="item w-[892px] relative h-[344px] inter-regular flex bg-black" data-value="1" key={1}>
            <div>
                <div className="flex items-center gap-3 absolute left-[64px] top-[72px]">
                    <BsApple className="w-[40px] h-[40px] fill-white"/>
                    <h2 className="text-white font-normal text-neutral-50  ml-3 text-[16px]">iPhone 14 Series</h2>
                </div>
                <div className="absolute left-[64px] top-[127px]">
                    <h1 className="text-white w-[294px] text-[48px] inter-bold">Up to 10% off Voucher</h1>
                </div>
                <div className="absolute flex items-center gap-2 left-[64px] top-[270px]">
                    <p className="text-white text-[16px] inter-regular">Shop Now</p>
                    <IoMdArrowForward className="text-white text-2xl"/>
                </div>
            </div>
            <img src={iphone} className="absolute top-[20px] right-[0px]" alt={iphone}/>
        </div>,
        <div className="item w-[892px] relative h-[344px] inter-regular flex bg-black" data-value="1" key={1}>
            <div>
                <div className="flex items-center gap-3 absolute left-[64px] top-[72px]">
                    <BsApple className="w-[40px] h-[40px] fill-white"/>
                    <h2 className="text-white font-normal text-neutral-50  ml-3 text-[16px]">iPhone 14 Series</h2>
                </div>
                <div className="absolute left-[64px] top-[127px]">
                    <h1 className="text-white w-[294px] text-[48px] inter-bold">Up to 10% off Voucher</h1>
                </div>
                <div className="absolute flex items-center gap-2 left-[64px] top-[270px]">
                    <p className="text-white text-[16px] inter-regular">Shop Now</p>
                    <IoMdArrowForward className="text-white text-2xl"/>
                </div>
            </div>
            <img src={iphone} className="absolute top-[20px] right-[0px]" alt={iphone}/>
        </div>,
        <div className="item w-[892px] relative h-[344px] inter-regular flex bg-black" data-value="1" key={1}>
            <div>
                <div className="flex items-center gap-3 absolute left-[64px] top-[72px]">
                    <BsApple className="w-[40px] h-[40px] fill-white"/>
                    <h2 className="text-white font-normal text-neutral-50  ml-3 text-[16px]">iPhone 14 Series</h2>
                </div>
                <div className="absolute left-[64px] top-[127px]">
                    <h1 className="text-white w-[294px] text-[48px] inter-bold">Up to 10% off Voucher</h1>
                </div>
                <div className="absolute flex items-center gap-2 left-[64px] top-[270px]">
                    <p className="text-white text-[16px] inter-regular">Shop Now</p>
                    <IoMdArrowForward className="text-white text-2xl"/>
                </div>
            </div>
            <img src={iphone} className="absolute top-[20px] right-[0px]" alt={iphone}/>
        </div>
    ];
    const renderSlideInfo = ({item, itemsCount}) => {
        return `${item}\\${itemsCount}`;
    };

    const renderDotsItem = ({isActive}) => {
        return <span  className={isActive ? 'bg-red-500' : 'bg-gray-500'} style={{width: '15px',border:'2px solid white', height: '15px', borderRadius: '50%', display: 'inline-block', margin: '0 5px'}}></span>;
    };

    const renderPrevButton = ({isDisabled}) => {
        return <span className={isDisabled ? 'opacity-0' : 'opacity-0'}>&lt;</span>;
    };

    const renderNextButton = ({isDisabled}) => {
        return <span className={isDisabled ? 'opacity-0' : 'opacity-0'}>&gt;</span>;
    };



    return (
        <div>
            <div className="pt-32">
                <div className="container justify-between flex">
                    <SideNav/>
                    <div className="mt-[40px] w-[870px]">
                        <AliceCarousel
                            mouseTracking
                            items={items}
                            autoPlay={true}
                            disableSlideInfo={true}
                            renderSlideInfo={renderSlideInfo}
                            renderDotsItem={renderDotsItem}
                           renderPrevButton={renderPrevButton}
                           renderNextButton={renderNextButton}
                           infinite={true}
                           autoPlayInterval={2000}
                       />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;