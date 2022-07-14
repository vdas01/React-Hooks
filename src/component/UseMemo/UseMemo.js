import React,{useMemo, useState} from 'react'

const UseMemo = () => {
    const [number,setNumber] = useState(0);
    const [multiNumber,setMultiNumber] = useState(0);
   
    useMemo(()=>{
        console.log("inside memo function");
        //  for(let i=0;i<10000000;i++){}
         setMultiNumber(number*2)
    },[number]);
  return (
    <>
    <h1>Geeli</h1>
      <button onClick={setNumber((prev)=>prev-1)}>-</button>
      <span>{number}</span>
      <button onClick={setNumber((prev)=>prev-1)}>+</button>
      <p>{multiNumber}</p>
    </>
  )
}

export default UseMemo
