import React from 'react'

const UseStateObjects = () => {
    const[myObject,setMyObject] = React.useState({
        name:'Nutre',age:19,roll:22
    });
    const changeObject = ()=>{
        setMyObject({...myObject,name:"vishal"});
    }
    const changeAge = ()=>{
      setInterval((prev)=>{
          return {
              ...prev,
              age:prev.age+1
          };
      });
  };
  return (
    <div>
           <h1>Name: {myObject.name} & Age:{myObject.age}</h1>
           <button onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObjects
