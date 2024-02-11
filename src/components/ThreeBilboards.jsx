import React from 'react';
import delivery from '../assets/delivery.svg'
import headphones from '../assets/headphones.svg'
import gurantee from '../assets/gaurantee.svg'

const ThreeBilboards = () => {
    return (
        <div className="container">
            <div className="flex justify-center gap-[88px] mt-32 mb-32">
                <div className="text-center  w-[249]">

                    <img src={delivery} className=" m-auto"/>
                    <h1 className="poppins-semibold text-xl mt-5">FREE AND FAST DELIVERY</h1>
                    <p  className="text-sm">Free delivery for all orders over $140</p>
                </div>
                <div className="text-center">
                    <img src={headphones} className="m-auto"/>
                    <h1 className="poppins-semibold text-xl mt-5">24/7 CUSTOMER SERVICE</h1>
                    <p className="text-sm">Friendly 24/7 customer support</p>

                </div>
                <div className="text-center">

                       <img src={gurantee} className="m-auto"/>
                      <h1 className="poppins-semibold text-xl mt-5">MONEY BACK GUARANTEE</h1>
                        <p className="text-sm">We reurn money within 30 days</p>



                </div>
            </div>
        </div>
    );
};

export default ThreeBilboards;