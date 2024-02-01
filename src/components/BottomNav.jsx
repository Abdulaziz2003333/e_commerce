
import {Link} from 'react-router-dom'
import {useTranslation} from "react-i18next";

const BottomNav = () => {
    const {t}=useTranslation()
    return (
        <div className="flex container items-center justify-around">
            <div><span>Exclusive</span></div>
            <div>
                <ul className="flex gap-14">
                    <li><Link to={'/'}>{t('bottomNav.home')}</Link></li>
                    <li><Link to={'/'}>{t('bottomNav.contact')}</Link></li>
                    <li><Link to={'/'}>{t('bottomNav.about')}</Link></li>
                    <li><Link to={'/'}>{t('bottomNav.signUp')}</Link></li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="What are you looking for" className="bg-white"/>
            </div>
        </div>
    );
};

export default BottomNav;