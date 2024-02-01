
import Link from 'react-router-dom'
const BottomNav = () => {
    return (
        <div className="flex">
            <div><span>Exclusive</span></div>
            <div>
                <ul className="flex">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/login'}>Sign Up</Link></li>
                </ul>
            </div>
            <div>
            <input type="text" placeholder="What are you looking for"/>

            </div>
        </div>
    );
};

export default BottomNav;