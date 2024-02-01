
import {Link} from 'react-router-dom'
import {useTranslation} from "react-i18next";
import { CiSearch } from "react-icons/ci";
const BottomNav = () => {
    const {t}=useTranslation()
    return (
        <div className=" mt-[38px]">
            <div className="flex  items-center justify-between container ">
                <div><span
                    className="text-[color:var(--Text2,#000)] inter-bold text-2xl font-bold leading-6 tracking-[0.72px]">Exclusive</span>
                </div>
                <div>
                    <ul className="flex gap-14 inter-regular">
                        <li><Link to={'/'}>{t('bottomNav.home')}</Link></li>
                        <li><Link to={'/'}>{t('bottomNav.contact')}</Link></li>
                        <li><Link to={'/'}>{t('bottomNav.about')}</Link></li>
                        <li><Link to={'/'}>{t('bottomNav.signUp')}</Link></li>
                    </ul>
                </div>
                <div className="bg-[#F5F5F5] w-[243px] flex justify-around items-center px-3 py-[7px] rounded">
                    <input type="text" placeholder={`${t('bottomNav.input')}`} className="bg-[#F5F5F5] text-sm w-full outline-none"/>
                    <CiSearch />
                </div>
            </div>
            <hr className="mt-[16px]"/>
        </div>

    );
};

export default BottomNav;