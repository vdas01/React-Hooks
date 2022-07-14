import React from 'react';
import UseStateArray from './component/UseState/useStateArray';
import UseStateObjects from './component/UseState/useStateObjects';
import ShortCirEval from './component/ShortCirEval';
import BasicForm from './component/Forms/BasicForm';
import UseEffect1 from './component/UseEffect/useEffect1';
import UseMemo from './component/UseMemo/UseMemo';
import UseReference from './component/UseReference/UseReference';
import UseContext from './component/UseContext/UseContext';
import UseReducer from './component/UseReducer/UseReducer';
import UseLayoutEffect from './component/UseLayoutEffect/UseLayoutEffect';
import UseImperativeHandle from './component/UseImperativeHandle/UseImperativeHandle';

const App = () => {
  // console.log(useState);
  // let nii = useState('kii krte')[0];
  // console.log(nii);

  // let nam = 'vishal';
  // const [myName,setMyName] = useState('vishal');
  // const changeName = ()=>{
      //  nam = 'looo';       //failed to change in react
      //  console.log(nam);
      // myName === 'vishal'?setMyName('vishal das'):setMyName('vishal')
  // }
  return (
    <div>
          {/* <h1>{myName}</h1>
          <button className="btn" onClick={changeName}>click me</button> */}

          {/* array hooks */}
          {/* <UseStateArray/> */}
          {/* <UseStateObjects/> */}
          {/* <ShortCirEval/> */}
          {/* <BasicForm/> */}
          {/* <UseEffect1/> */}
          {/* <UseMemo/> */}
          {/* <UseReference/> */}
        {/* <UseReducer/> */}
        {/* <UseImperativeHandle/> */}
        <UseLayoutEffect/>
    </div>
  )
}

export default App
