import qrCode from '../assets/Qrcode 1.png'
import appstore from '../assets/download-appstore.png'
import goglePlay from '../assets/png-transparent-google-play.png'
import {FaFacebook,FaInstagram } from "react-icons/fa6";
import { BsLinkedin,BsTwitterX } from "react-icons/bs";
const Footer = () => {
    return (
        <div className="w-full bg-black h-[350px] flex items-center justify-center ">
            <div className="flex justify-center items-start inter-medium  gap-[87px] container ">
                <div className="mb-10">
                    <h1 className="text-white text-xl font-bold mb-6
        ">Exclusive</h1>
                    <ul className ="text-white">
                        <li className='mb-[16px]' > Subscribe</li>
                        <li className='mb-[16px]'  >Get 10% off your first order </li>
                        <li className='mt-3 ' >
                            <form>
                                <input type="text" placeholder="Enter your email" className='border-solid border-white'/>
                            </form>


                        </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h2 className="text-white mb-6 text-xl font-medium">Support</h2>
                    <ul className="text-white">
                        <li className='mb-[16px]'>111 Bijoy sarani, Dhaka, <br/> DH 1515, Bangladesh.</li>
                        <li className='mb-[16px]'>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>


                    </ul>
                </div>
                <div>
                    <h2 className="text-white mb-6 text-xl font-medium">Account</h2>
                    <ul className="text-white">
                        <li className='mb-[16px]'>My Account</li>
                        <li className='mb-[16px]'>Login Register</li>
                        <li className='mb-[16px]'>Cart</li>
                        <li className='mb-[16px]'>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className="mb-9">
                    <h2 className="text-white mb-5 text-xl font-medium">Quick Link</h2>
                    <ul className="text-white">
                        <li className='mb-[16px]'>Privacy Policy</li>
                        <li className='mb-[16px]'>Terms Of Use</li>
                        <li className='mb-[16px]'>FAQ</li>
                        <li className='mb-[16px]'>Contact</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white mb-5 text-xl font-medium">Download App</h2>
                    <p className="text-[color:var(--Text,#FAFAFA)] [font-family:Poppins] text-xs font-medium leading-[18px] opacity-70 mb-7">Save
                        $3 with App New User Only </p>
                    <div className="flex">
                        <img src={qrCode} alt="Qrcode"/>
                        <ul className="ml-2 flex flex-col gap-3">
                            <li><img src={appstore}/></li>
                            <li><img src={goglePlay}/></li>
                        </ul>
                    </div>
                    <div className="flex mt-3 justify-center gap-[24px]">
                        <FaFacebook className="text-white w-6 h-6 "/>
                        <BsTwitterX  className="text-white w-6 h-6" />
                        <FaInstagram className="text-white w-6 h-6" />
                        <BsLinkedin className="text-white w-6 h-6" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;