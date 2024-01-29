import { createContext, useState } from 'react';


export const MyContext = createContext();
const ContextProvider = ({ children }) => {
    //sherzod
    const [count, setCount] = useState(0);
    //sherzod

    return (
        <MyContext.Provider value={{ count,setCount }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider