import { createContext, useState } from 'react';
import {useTranslation} from "react-i18next";


export const MyContext = createContext();
const ContextProvider = ({ children }) => {

    const [count, setCount] = useState(0);
    const { i18n } = useTranslation();

    const changeLanguageFunc = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <MyContext.Provider value={{ count,setCount,changeLanguageFunc }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider