import { IoArrowForwardSharp } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Context.jsx";
import like from '../assets/heart_small.svg'
import views from '../assets/views.svg'

import defaultImage from "../assets/default-placeholder.png";
import login from "./auth/Login.jsx";
const Today = () => {
    const { data } = useContext(MyContext);
    const [isLoading, setIsLoading] = useState(true);
    const [hidden , setHidden] = useState(null)


    console.log(data);

    return (
        <section className="pt-[120px]">
            <div className="container">
                <div className="flex items-center gap-4">
                    <span className="bg-[#DB4444] rounded w-[20px] h-[40px] block"></span>
                    <h3 className="inter-medium font-bold text-[16px] text-[#DB4444]">Today’s</h3>
                </div>
                <div className='flex items-center mt-6 justify-between'>
                    <h2 className="inter-medium font-bold text-[46px]">Flash Sales</h2>
                    <div className="flex items-center gap-[8px]">
                            <div className="bg-[#F5F5F5] p-[8px] rounded-full">
                                <IoArrowForwardSharp className="rotate-180 text-2xl"/>
                            </div>
                            <div className="bg-[#F5F5F5] p-[8px] rounded-full">
                                <IoArrowForwardSharp className="rotate-0 text-2xl"/>
                            </div>
                    </div>
                </div>
                <div className="flex gap-10 mt-[31px]">
                    {data?.product?.map((item) => (
                        <div>
                            <div key={item.product_id} onMouseEnter={() => setHidden(item.product_id)}
                                 onMouseLeave={() => setHidden(null)}
                                 className="h-[250px] relative rounded-md flex items-center flex-col w-[270px] bg-[#e9eef1]">
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
                                        }, 100)
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Today;