import { createContext, useState } from 'react';


export const MyContext = createContext();
const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
const [jonim,setJonim]=useState('Jonimkam')
    return (
        <MyContext.Provider value={{ count, setCount,jonim }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider