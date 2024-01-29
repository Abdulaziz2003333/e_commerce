import {useContext} from "react";
import {MyContext} from "./context/Context.jsx";


function App() {
  const {count,setCount,sdm} = useContext(MyContext)

  return (
    <>
    <h1>Salom </h1>
      <button onClick={() => setCount(count + 1)}>counter</button>
      <p>{count}</p>
      <p>{sdm}</p>
    </>
  )
}

export default App
