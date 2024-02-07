import React, {useEffect, useRef} from 'react';
import {IoArrowForwardSharp} from "react-icons/io5";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import phone from '../assets/categories/Category-CellPhone.svg'
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import computer from '../assets/categories/Category-Computer.svg'
import game from '../assets/categories/Category-Gamepad.svg'
import headPhone from '../assets/categories/Category-Headphone.svg'
import {Navigation} from "swiper/modules";
const Categories = () => {

    const triggerRef = useRef(null);
    const animationRef = useRef(null);
    const cardref= useRef(null)
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(triggerRef.current, {
            x:200,
            opacity:0,
            ease:"bounce.inOut",
            duration:2,
        },
            {
                x:0,
                opacity:1,
                duration:2,
                scrollTrigger:{
                    trigger:triggerRef.current,
                    start:'600',
                    end:'bottom center',
                    scrub:1,

                }
            })

        gsap.fromTo(animationRef.current, {
                x:-200,
                opacity:0,
                duration:2,
            },
            {
                x:0,
                opacity:1,
                duration:2,
                scrollTrigger:{
                    trigger:animationRef.current,
                    start:'600',
                    end:'bottom center',
                    scrub:1,

                }
            })

        gsap.fromTo(cardref.current, {
            scale:0.5,
                opacity:0,
                duration:2,
            },
            {
                ease:"sine.in",
                scale:1,
                opacity:1,
                duration:2,
                scrollTrigger:{
                    trigger:cardref.current,
                    start:'550',
                    end:'500',
                    scrub:1,

                }
            })

        ScrollTrigger.refresh()

    }, []);

    return (
        <section className="mb-[80px]">
            <div className="container">
                <hr className="mb-[90px]"/>
                <div>
                    <div className="flex items-center gap-4">
                        <span className="bg-[#DB4444] rounded w-[20px] h-[40px] block"></span>
                        <h3 className="inter-medium font-bold text-[16px] text-[#DB4444]">Categories</h3>
                    </div>
                    <div className='flex items-center mt-6 justify-between'>
                        <h2 ref={animationRef} className="inter-medium font-bold text-[46px]">Browse By Category</h2>
                        <div ref={triggerRef} className="flex items-center gap-[8px]">
                            <div className="custom-prev-1 bg-[#F5F5F5] p-[8px] rounded-full">
                                <IoArrowForwardSharp className="rotate-180 text-2xl"/>
                            </div>
                            <div className="custom-next-1 bg-[#F5F5F5] p-[8px] rounded-full">
                                <IoArrowForwardSharp className="rotate-0 text-2xl"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[50px]" ref={cardref}>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        breakpoints={
                            {
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 10
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 30
                                },
                            }
                        }
                        initialSlide={0}
                        className="mySwiper"
                        navigation={{
                            nextEl: '.custom-next-1',
                            prevEl: '.custom-prev-1',
                        }}
                        modules={[Navigation]}
                    >
                        <SwiperSlide>
                            <div className="hover:bg-[#DB4444] duration-300 hover:text-white w-[170px] border-[1px] border-[rgba(0, 0, 0, 0.30)] flex flex-col gap-2 items-center justify-center rounded-[4px] h-[145px]">
                                <img src={phone} alt="phone"/>
                                <h2 className="inter-medium">phones</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover:bg-[#DB4444] duration-300 hover:text-white w-[170px] border-[1px] border-[rgba(0, 0, 0, 0.30)] flex flex-col gap-2 items-center justify-center rounded-[4px] h-[145px]">
                                <img src={game} alt="phone"/>
                                <h2 className="inter-medium">Gaming</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover:bg-[#DB4444] duration-300 hover:text-white w-[170px] border-[1px] border-[rgba(0, 0, 0, 0.30)] flex flex-col gap-2 items-center justify-center rounded-[4px] h-[145px]">
                                <img src={headPhone} alt="phone"/>
                                <h2 className="inter-medium">Headphones</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover:bg-[#DB4444] duration-300 hover:text-white w-[170px] border-[1px] border-[rgba(0, 0, 0, 0.30)] flex flex-col gap-2 items-center justify-center rounded-[4px] h-[145px]">
                                <img src={computer} alt="phone"/>
                                <h2 className="inter-medium">computers</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover:bg-[#DB4444] duration-300 hover:text-white w-[170px] border-[1px] border-[rgba(0, 0, 0, 0.30)] flex flex-col gap-2 items-center justify-center rounded-[4px] h-[145px]">
                                <img src={phone} alt="phone"/>
                                <h2 className="inter-medium">phones</h2>
                            </div>
                        </SwiperSlide>  <SwiperSlide>
                        <div className="hover:bg-[#DB4444] duration-300 hover:text-white w-[170px] border-[1px] border-[rgba(0, 0, 0, 0.30)] flex flex-col gap-2 items-center justify-center rounded-[4px] h-[145px]">
                            <img src={phone} alt="phone"/>
                            <h2 className="inter-medium">phones</h2>
                        </div>
                    </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover:bg-[#DB4444] duration-300 hover:text-white w-[170px] border-[1px] border-[rgba(0, 0, 0, 0.30)] flex flex-col gap-2 items-center justify-center rounded-[4px] h-[145px]">
                                <img src={headPhone} alt="phone"/>
                                <h2 className="inter-medium">Headphones</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover:bg-[#DB4444] duration-300 hover:text-white w-[170px] border-[1px] border-[rgba(0, 0, 0, 0.30)] flex flex-col gap-2 items-center justify-center rounded-[4px] h-[145px]">
                                <img src={computer} alt="phone"/>
                                <h2 className="inter-medium">computers</h2>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Categories;