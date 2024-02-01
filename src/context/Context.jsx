import {createContext, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";


export const MyContext = createContext();
const ContextProvider = ({ children }) => {
    const [lang,setlang] = useState(localStorage.getItem('lang'))
    const [count, setCount] = useState(0);
    const { i18n } = useTranslation();

    const changeLanguageFunc = (lng) => {
        i18n.changeLanguage(lng);
        setlang(lang)
        localStorage.setItem('lang',lng);
    };

    useEffect(() => {
        changeLanguageFunc(lang)
    },[lang])

    return (
        <MyContext.Provider value={{ count,setCount,changeLanguageFunc }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider