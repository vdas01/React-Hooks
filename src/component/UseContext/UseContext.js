import { useContext } from "react";
import { HookDemo } from "../../Context";




const UseContext = () => {
    const {count,setCount} = useContext(HookDemo);
  return (
    <>
     <button onClick={(e)=>setCount(count-1)}>-</button>
      <span>{count}</span>
    <button onClick={(e)=>setCount(count+1)}>+</button>
     
    </>
  )
}

export default UseContext
