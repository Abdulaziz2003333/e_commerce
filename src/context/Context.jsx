import { createContext, useState } from 'react';


export const MyContext = createContext();
const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
const [sdm,setSdm]=useState('Jonimkam')
    return (
        <MyContext.Provider value={{ count, setCount,sdm }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider