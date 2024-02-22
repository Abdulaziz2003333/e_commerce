import { IoArrowForwardSharp } from "react-icons/io5";
import {useContext, useEffect, useRef, useState} from "react";
import { MyContext } from "../context/Context.jsx";
import like from '../assets/heart_small.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper/modules';
import defaultImage from "../assets/default-placeholder.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Product = () => {
    const { data } = useContext(MyContext);
    const [isLoading, setIsLoading] = useState(true);
    const [hidden , setHidden] = useState(null)
    const cardsAnimationRef = useRef(null)
    const animationRef = useRef(null)


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);



        gsap.fromTo(cardsAnimationRef.current, {
                y: -300,
                opacity: 0,
                duration: 2
            },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                scrollTrigger:{
                    trigger:animationRef.current,
                    start:'bottom',
                    end:'center center',
                    scrub:2
                }

            }
        )


        ScrollTrigger.refresh();


    },[])


    return (
        <section  className="pt-[80px] mb-[80px]" ref={cardsAnimationRef}>
            <div className="container">
                <div className="flex items-center gap-4">
                    <span className="bg-[#DB4444] rounded w-[20px] h-[40px] block"></span>
                    <h3 className="inter-medium font-bold text-[16px] text-[#DB4444]">Our Products</h3>
                </div>
                <div ref={animationRef} className='flex items-center mt-6 justify-between'>
                    <h2 className="inter-medium font-bold text-[46px]">Explore Our Products</h2>
                    <div className="flex items-center gap-[8px]">
                        <div  className="custom-prev bg-[#F5F5F5] p-[8px] rounded-full">
                            <IoArrowForwardSharp className="rotate-180 text-2xl"/>
                        </div>
                        <div className="custom-next bg-[#F5F5F5] p-[8px] rounded-full">
                            <IoArrowForwardSharp className="rotate-0 text-2xl"/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 mt-[31px]" ref={cardsAnimationRef}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            data?.product?.map((item) => (
                                <SwiperSlide  key={item.product_id} ref = {animationRef}>
                                    <div  onMouseEnter={() => setHidden(item.product_id)}
                                         onMouseLeave={() => setHidden(null)}
                                         className={`h-[250px] relative rounded-md flex items-center ${isLoading ? "animate-pulse" : "animate-none"} duration-75 flex-col w-[270px] bg-[#e9eef1]`}>
                                <span
                                    className="bg-[#DB4444] text-white rounded py-[5px] absolute left-[12px] top-[12px] px-6">-{item.discounted}%</span>
                                        <img
                                            className={`block m-auto ${isLoading ? "hidden" : ""}`}
                                            src={item.product_image}
                                            alt={item.product_name}
                                            loading="lazy"
                                            onLoad={() => {
                                                setTimeout(() => {
                                                    setIsLoading(false)
                                                }, 1000)
                                            }}
                                        />
                                        {isLoading && (
                                            <div>
                                                <img className=" pt-[60px] rounded-[4px] w-[150px] h-[200px] mx-auto block"
                                                     src={defaultImage} alt="" loading="lazy"/>
                                            </div>
                                        )}
                                        <img className="absolute right-[12px] top-[12px] bg-white p-[5px] rounded-full"
                                             src={like} alt=""/>
                                        <button
                                            className={`w-full rounded-b-md transition-all ${hidden !== item.product_id ? "opacity-0" : ""} text-white bg-black absolute bottom-0 py-[8px]`}>Add
                                            to Cart
                                        </button>
                                    </div>
                                    <div className="mt-[16px]">
                                        <h2 className="text-[16px] inter-medium font-normal">{item.product_name}</h2>
                                        <div className="mt-[8px] flex gap-[12px]">
                                            <p className="inter-medium  text-[#DB4444] text-[16px]">${item.product_price - (item.product_price * (item.discounted / 100))}</p>
                                            <p className="text-[#000000] text-[16px] line-through opacity-[0.5] inter-medium">${item.product_price}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <button className="block mx-auto mt-[60px] bg-[#DB4444] text-white rounded py-[12px] inter-medium  px-[48px]">View All Products</button>
            </div>
        </section>
    );
};

export default Product;
