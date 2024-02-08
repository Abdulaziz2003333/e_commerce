import React from 'react';
import girls
    from '../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'

const About = () => {
    return (
        <div className="pt-60">

            <div className="container flex justify-center items-center gap-14">
                <div className="inline-flex flex-col items-start gap-10 w-[505px]">
                    <h1 className="text-black text-justify inter-medium text-[54px] font-semibold leading-[64px] tracking-[3.24px]"> Our
                        Story</h1>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
                        presense in Bangladesh. Supported by wide range of tailored marketing, data and service
                        solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across
                        the region. </p>
                    <p className="w-[505px] text-[color:var(--Text2,#000)]  text-base font-normal leading-[26px]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
                        diverse assotment in categories ranging from consumer.</p>
                </div>
                <div>
                    <img src={girls}/>
                </div>
            </div>


            <div className="flex justify-center">
                <div className=" rounded border pl-[50px] pr-[51px] py-[30px] border-solid border-[rgba(0,0,0,0.30)]">1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>




        </div>
    );
};

export default About;