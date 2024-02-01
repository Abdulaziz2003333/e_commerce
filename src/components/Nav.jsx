import i18n from "../i18n.js";
import {useContext} from "react";
import {MyContext} from "../context/Context.jsx";
import {useTranslation} from "react-i18next";


const Nav = () => {

    const {changeLanguageFunc} = useContext(MyContext)

    const {t} = useTranslation()

    return (
        <>
           <div className="bg-[#000000] py-[14px]">
               <div className="container flex items-center justify-between">
                   <div className="text-white flex gap-5">
                       <h3>{t("topNav.center")}</h3>
                       <p>{t("topNav.shop")}</p>
                   </div>
                   <select
                       value={i18n.language}
                       onChange={(e) => changeLanguageFunc(e.target.value)}
                       className="text-white bg-black"
                   >
                       <option value="en">English</option>
                       <option value="uz">Uzbek</option>
                       <option value="ru">Russian</option>
                   </select>
               </div>
           </div>
        </>
    );
};

export default Nav;