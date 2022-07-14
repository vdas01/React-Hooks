import React, { createContext, useState } from 'react'

export const HookDemo = createContext();

const Context = ({children}) => {
    const [count,setCount] = useState(1);
  return (
    <HookDemo.Provider value={{count,setCount}}>
       {children}
    </HookDemo.Provider>
  )
}

export default Context
