import React from 'react'

//or operator true:- left side data
//and operator true:-right side;
const ShortCirEval = () => {
  return (
    <div>
      {/* <h1>{'vishal'|| 'rajesh'}</h1>    
      <h1>{'vishal' && 'rajesh'}</h1> */}
      {/* <h1>{'' || 'rajesh'}</h1>    rajesh */}
      {/* <h1>{'' && 'rajesh'}</h1>        " " */}
       {/* <h1>{'vishal' || '' }</h1>   vishal */}
      {/* <h1>{'vishal' && ''}</h1>  " " */}
      <h1>{
        'vishal'||
        <>
             <h1>Hi</h1>
             <h2>Motu</h2>
        </>
      }</h1>
    </div>
  )
}

export default ShortCirEval
