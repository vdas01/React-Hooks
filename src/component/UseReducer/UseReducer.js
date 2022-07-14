import React, { useReducer } from 'react'

const UseReducer = () => {
    const countReducer = (state,action)=>{

        switch(action.type){
            case "add": return state+1;
            case "sub": return state-action.payload;
            default: return state;
        }
    };
    // const [state,dispatch] = useReducer(reducer,initialState);
    const[state,dispatch] = useReducer(countReducer,0);
  return (
    <>
      <button onClick={()=>dispatch({type:'sub',payload:5})}>-</button>
      <span>{state}</span>
      <button onClick={()=>dispatch({type:"add"})}>+</button>
    </>
  )
}

export default UseReducer
