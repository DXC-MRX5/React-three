import React, { Component } from 'react'

class ClassForm extends Component {
    handleinput=(event)=>{
        this.props.updateValue({...this.props.value,[event.target.name] : event.target.value})
    }
  render() {
    return (
        <>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <div className='form'>
        <div>        
            <label htmlFor='name'>Name :</label>
            <input type='text' id='name' name='Name' onChange={this.handleinput}/>
        </div>
        <div>        
            <label htmlFor='dept'>Department :</label>
            <input type='text' id='dept' name='Department' onChange={this.handleinput}/>
        </div>
        <div>
            <label htmlFor='rating'>Rating :</label>
            <input type='number' id='rating' name='Rating' onChange={this.handleinput}/>
        </div>
        <button onClick={this.props.func}>Submit</button>
        </div>
        </>
    )
  }
}

export default ClassForm