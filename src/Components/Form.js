import './Form.css';
import React from 'react';

const Form = (props) => {
    const handleinput=(event)=>{
        props.value[1]({...props.value[0],[event.target.name] : event.target.value})
    }
  return (
    <>
    <h1>EMPLOYEE FEEDBACK FORM</h1>
    <div className='form'>
    <div>        
        <label htmlFor='name'>Name :</label>
        <input type='text' id='name' name='Name' onChange={handleinput}/>
    </div>
    <div>        
        <label htmlFor='dept'>Department :</label>
        <input type='text' id='dept' name='Department' onChange={handleinput}/>
    </div>
    <div>
        <label htmlFor='rating'>Rating :</label>
        <input type='number' id='rating' name='Rating' onChange={handleinput}/>
    </div>
    <button onClick={props.func}>Submit</button>
    </div>
    </>
  )
}

export default Form