import qrCode from '../assets/Qrcode 1.png'
import appstore from '../assets/download-appstore.png'
import goglePlay from '../assets/png-transparent-google-play.png'

const Footer = () => {
    return (
        <div className="w-full bg-black h-[440px] flex items-center justify-center">
<div className="flex justify-center items-center  gap-[87px] container ">
    <div>
        <span className="text-white font-normal">Exclusive</span>
        <ul className="text-white">
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li><input type="text" placeholder="Enter your email"/></li>
        </ul>
    </div>
    <div className="mb-6">
        <h2 className="text-white">Support</h2>
        <ul className="text-white">
            <li>111 Bijoy sarani, Dhaka, <br/> DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>


        </ul>
    </div>
    <div>
        <h2 className="text-white">Account</h2>
        <ul className="text-white">
            <li>My Account</li>
            <li>Login  Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
        </ul>
    </div>
    <div>
        <h2 className="text-white">Quick Link</h2>
        <ul className="text-white">
            <li>Privacy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
        </ul>
    </div>
    <div>
        <h2 className="text-white">Download App</h2>
        <p className="text-white">Save $3 with App New User Only</p>
        <div>
        <img src={qrCode} alt="Qrcode" />
            <ul>
                <li><img src={appstore}/></li>
                <li><img src={goglePlay}/></li>
            </ul>
        </div>
    </div>
</div>
        </div>
    );
};

export default Footer;