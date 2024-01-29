import {useContext} from "react";
import {MyContext} from "./context/Context.jsx";


function App() {
  const {count,setCount,abs} = useContext(MyContext)

  return (
    <>
    <h1>Salom </h1>
      <button onClick={() => setCount(count + 1)}>counter</button>
      <p>{count}</p>
      <p>{abs}</p>
      <p>men seni dadangmani xaromi</p>
    </>
  )
}

export default App
