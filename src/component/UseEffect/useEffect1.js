import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
     const [count,setCount] = useState(0);      //evrytime it happens it re-renders component so automatically useEffect is also called

     useEffect(()=>{
        document.title = `Chats (${count})`;
     },[count])

    // useEffect(()=>{
    //      console.log('Hello useEffect');        //it occurs at last
    // });
    // console.log("Hello outside");

    const [screenWidth,setScreenWidth] = useState();
    useEffect(()=>{
      window.addEventListener('resize',()=>{
        setScreenWidth(window.innerWidth);
      })

      console.log('Before cleanup');
      return ()=>{
        console.log('Cleanup function')
      }
    });
  return (
    <>
      <h1>{count}</h1>
      <button onClick={
        ()=> setCount(count+1)
      }>Click</button>
      <h2>{screenWidth}</h2>
    </>
  )
}

export default UseEffect1
