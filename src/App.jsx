import {useContext} from "react";
import {MyContext} from "./context/Context.jsx";


function App() {
  const {count,setCount} = useContext(MyContext)

  return (
    <>
    <h1 className={'text-red-950'}>Salom </h1>
      <button onClick={() => setCount(count + 1)}>counter</button>
      <p>{count}</p>
    </>
  )
}

export default App
