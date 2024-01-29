import { createContext, useState } from 'react';


export const MyContext = createContext();
const ContextProvider = ({ children }) => {
    //sherzod
    const [count, setCount] = useState(0);
    //sherzod

const [sdm,setSdm]=useState('Jonimkam')
    return (
        <MyContext.Provider value={{ count, setCount,sdm }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider