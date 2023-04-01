import React,{useState} from 'react';
import './App.css';
import './Components/Form.css'
import './Components/DataList.css'
import ClassForm from './Components/ClassComps/ClassForm';
import ClassData from './Components/ClassComps/ClassData';

function App() {
  const [state,setState]=useState(true);
  const [data,setData]=useState({});
  const updateData=(newValue)=>{
    setData(newValue)
  }
  const [infoArray,setInfoArray]=useState([]);
  const handleSubmit=()=>{
    setInfoArray([...infoArray,data])
    console.log(infoArray);
    setState(!state);
  }
  const handleGoback=()=>{
    setState(!state);
  }
  return (
    <div className="App">
    {/* {state ?<Form value={[data,setData]} func={handleSubmit}/>:<DataList info={[infoArray,setInfoArray]} goback={handleGoback}/>} */}
    {state ?<ClassForm value={data} updateValue={updateData} func={handleSubmit}/>:<ClassData info={infoArray} goback={handleGoback}/>}
    </div>
  );
}

export default App;
