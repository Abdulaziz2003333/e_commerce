import { createContext, useState } from 'react';


export const MyContext = createContext();
const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
const [abs,setJonim]=useState('Jonimkam')
    return (
        <MyContext.Provider value={{ count, setCount,abs }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider