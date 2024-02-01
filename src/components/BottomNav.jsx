
import {Link} from 'react-router-dom'
const BottomNav = () => {
    return (
        <div className="flex">
            <div><span>Exclusive</span></div>
            <div>
                <ul className="flex">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>Contact</Link></li>
                    <li><Link to={'/'}>About</Link></li>
                    <li><Link to={'/'}>Sign Up</Link></li>
                </ul>
            </div>
            <div>
            <input type="text" placeholder="What are you looking for"/>
            </div>
        </div>
    );
};

export default BottomNav;