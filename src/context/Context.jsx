import {createContext, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import axios from "axios";
import baseUrl from "../api/api_url.jsx";


export const MyContext = createContext();
const ContextProvider = ({ children }) => {
    const [data,setData] = useState('');
    const [lang,setlang] = useState(localStorage.getItem('lang'))
    const [count, setCount] = useState(0);
    const { i18n } = useTranslation();

    const changeLanguageFunc = (lng) => {
        i18n.changeLanguage(lng);
        setlang(lang)
        localStorage.setItem('lang',lng);
    };

    const getProducts = async () => {
        try {
            const response = await axios.get(`${baseUrl}product`,{
                headers:{
                    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNzZGFzZHNhZGhlcnpvZEBnbWFpbC5jb20iLCJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImFzZHNhZCIsImlhdCI6MTcwNjk5MTMyMn0.WxJAiaCB9OE2J7ufY_An7rZpAsQ1EK95_yOzD6UQGuU`,
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        getProducts()
        changeLanguageFunc(lang)
    },[lang])

    return (
        <MyContext.Provider value={{ count,setCount,changeLanguageFunc,data }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider