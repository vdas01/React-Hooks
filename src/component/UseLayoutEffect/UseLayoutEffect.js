import React, { useLayoutEffect } from 'react'

const UseLayoutEffect = () => {
    
    useLayoutEffect(()=>{
        console.log('hello')
    },[]);
  return (
    <>
      
    </>
  )
}

export default UseLayoutEffect


//render before Ui is render while useEffect is rendered after Ui is rendered rest all are same between two
//more useful when page is loading slow and you want to display something.