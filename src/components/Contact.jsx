import Footer from "./Footer.jsx";
import {FaPhoneAlt} from "react-icons/fa";
import phone from '../assets/icons-phone.svg'
// import email from'../assets/icons-mail.svg'
const Contact = () => {
    return (
        <>


            <div className="pt-60 co">
                <div className="container ">
                    {/*    Call to us*/}

                    <div className="w-[262px]  ">

                        <div className="flex items-center    ">
                            <img src={phone}/>
                            <h1 className="ml-3 text-black  text-2xl font-medium leading-6">Call To Us</h1>
                        </div>
                        <div>
                            <h1 className="mb-6 mt-5  text-base  font-normal ">We are available 24/7, 7 days a
                                week.</h1>
                            <h1 className="text-base  font-normal">Phone: +8801611112222</h1>
                        </div>
                        <hr className="mt-5 mb-6 w-[262px]  border border-[#E5E5E5] "/>
                    </div>


                </div>
                <div>
                    {/*    block for input*/}


                </div>
            </div>



        </>);

};

export default Contact;