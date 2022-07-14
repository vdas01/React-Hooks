import React,{useState} from 'react'

const UseStateArray = () => {
    // const [val,setVal] = useState(['Vishal',19]);
    // const changeVal = ()=>{
    //     console.log(val);
    //     setVal(['Ashish',92]);
    //     console.log(val);
    // }

    

    const mybio = [
        {
            id:0,name:'vishal',age:19
        },
        {
            id:1,name:'anurag',age:29
        }
    ]

    const[myArray,setMyArray] = useState(mybio);
    const clearWay = ()=>{
        setMyArray([]);
    }
  return (
    <>
       {/* <h1>Name : {val[0]} & Age:{val[1]}</h1>
       <button onClick={changeVal}>Next</button> */}

       {
          myArray.map((currelem)=>{
             return   <h1 key={currelem.id}>Name : {currelem.name} & age: {currelem.age}</h1>;
          })
       }
       <button onClick={clearWay}>Clear</button>
    </>
  )
}

export default UseStateArray
