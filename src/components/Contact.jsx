import Footer from "./Footer.jsx";
import {FaPhoneAlt} from "react-icons/fa";
import phone from '../assets/icons-phone.svg'
import email from '../assets/icons-mail.svg'

const Contact = () => {
    return (
        <div className="container" >


            <div className="mt-60 flex mb-60 justify-between ">
                <div className=" flex flex-col mr-2 ">
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
                        <hr className="mt-6 mb-6 w-[262px]  border border-[#E5E5E5] "/>
                    </div>
                    <div className="w-[262px] ">
                        <div className="flex items-center">
                            <img src={email}/>
                            <h1 className="ml-3 text-black  text-2xl font-medium leading-6">Call To Us</h1>
                        </div>
                        <div>
                            <h1 className="mb-6 mt-5  text-base  font-normal ">Fill out our form and we will contact you
                                within 24 hours.</h1>
                            <h1 className="text-base  font-normal">Emails: customer@exclusive.com</h1>
                            <h1 className="text-base  font-normal mt-5">Emails: customer@exclusive.com</h1>

                        </div>
                    </div>

                </div>
                <div>
                    {/*    block for input*/}

                    <div >
                        <div>
                            <form>
                                <ul className="flex">
                                    <li className="w-[232px] h-[50px] rounded mr-6"><input type="text"
                                                                                           className="bg-[#F5F5F5] rounded h-full  w-full pl-3"
                                                                                           placeholder="Your Name"/>
                                    </li>
                                    <li className="w-[232px] h-[50px] rounded mr-6"><input type="email"
                                                                                           className="bg-[#F5F5F5] rounded h-full  w-full pl-3"
                                                                                           placeholder="Your Email"/>
                                    </li>
                                    <li className="w-[232px] h-[50px] rounded "><input type="tel"
                                                                                           className="bg-[#F5F5F5] rounded h-full  w-full pl-3"
                                                                                           placeholder="Your Phone"/>
                                    </li>
                                </ul>
                            </form>

                        </div>
                        <div>
                            <textarea
                                className="w-[745px] h-[207px] shrink-0 rounded [background:var(--Secondary,#F5F5F5)] mt-8 resize-none ">

                            </textarea>
                            <div className="flex justify-end">
                                <button className="  mt-5 rounded bg-[#DB4444] px-12 py-4 text-white">Send Message
                                </button>
                            </div>

                        </div>
                    </div>


                </div>
            </div>


        </div>);

};

export default Contact;