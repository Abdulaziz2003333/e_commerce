import React from 'react';
import Nav from "./Nav.jsx";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import apple from "../assets/apple.svg"
import iphone from "../assets/hero_endframe__cvklg0xk3w6e_large 2.svg"
import { BsApple } from "react-icons/bs";

const Hero = () => {
    const items = [
        <div className="item w-[892px] h-[344px] flex bg-black" data-value="1" key={1}>
            <div >
                <div className="flex items-center">
                    <BsApple  className="w-[40px] h-[40px] bg-white"/>
                    <h2 className="text-white font-normal ml-3">iPhone 14 Series</h2>
                </div>
            <div>e
                <h1 className="text-white w-[294px]">Up to 10% off Voucher</h1>
            </div>
            </div>
            <img src={iphone}/>
        </div>,
        <div className="item" data-value="1" key={2}><img src={iphone}/></div>,
        <div className="item" data-value="1" key={3}><img src={iphone}/></div>,
        <div className="item" data-value="1" key={4}><img src={iphone}/></div>,
        <div className="item" data-value="1" key={5}><img src={iphone}/></div>,
    ];
    const renderSlideInfo = ({item, itemsCount}) => {
        return `${item}\\${itemsCount}`;
    };

    const renderDotsItem = ({isActive}) => {
        return isActive ? 'x' : 'o';
    };

    const renderPrevButton = ({isDisabled}) => {
        return <span style={{opacity: isDisabled ? '0' : 0}}>&lt;</span>;
    };

    const renderNextButton = ({isDisabled}) => {
        return <span style={{opacity: isDisabled ? '0' : 0}}>&gt;</span>;
    };


    return (
        <div>

            <Nav/>
            <AliceCarousel
                mouseTracking
                items={items}
                // autoPlay={true}
                disableSlideInfo={true}
                renderSlideInfo={renderSlideInfo}
                renderDotsItem={renderDotsItem}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                // infinite={true}
                // autoPlayInterval={2500}
            />
        </div>
    );
};

export default Hero;