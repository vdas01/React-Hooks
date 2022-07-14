import React, { useEffect, useRef, useState } from 'react'

const UseReference = () => {
    const [number,setNumber] = useState(0);
    
    const[value,setValue] = useState();
//useState is not going to work here
    // const [rendered,setRendered] =useState(0);
    // useEffect(()=>{
    //       setRendered((prev)=>prev+1);
    // });      uncontrolled keeps on running

  const renderRef = useRef(0);
  useEffect(() => {
    // console.log('inside')
    renderRef.current = renderRef.current +1;
  }, );

   const countRef = useRef();
   const valueRef = useRef();
   useEffect(()=>{
    console.log(valueRef)   //returns an object
    console.log(valueRef.current);    //returns value
    valueRef.current = value;
   },[value])
  return (
    <>
    <button onClick={(e)=>setNumber(number-1)}>-</button>
      <span>{number}</span>
    <button onClick={(e)=>setNumber(number+1)}>+</button>
      <h1>{renderRef.current}</h1>

     {/* giving ref of an tag */}
      <h2 ref={countRef}>10</h2>
      <button onClick={()=>{
        console.log(countRef);
        console.log(countRef.current);
        countRef.current.innerHTML =(countRef.current.innerHTML === '10')?'20':'10';
      }}>Change to 20 or 10</button>
  <br />

    {/* showing useState vs useRef speed */}
      <input type="text"  onChange={(e)=>setValue(e.target.value)} value={value}/>
      <h2>Using useState:-{value} and using useRef:-{valueRef.current}</h2>
    </>
  )
}

export default UseReference


//useRef is updates slower than useState
//useRef:- If u want to hook into particular html and jsx elements
