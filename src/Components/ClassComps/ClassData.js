import React, { Component } from 'react'

class ClassData extends Component {
  render() {
    return (
        <>
        <h1>EMPLOYEE FEEDBACK DATA</h1>
        <div className='container'>
        {
            this.props.info.map((elmnt,index)=>{
                return(
                    <div key={index} className='inputs'>
                        <p>Name : {elmnt.Name} | Department : {elmnt.Department} | Rating : {elmnt.Rating}</p>
                    </div>
                )
            })
        }
        </div>
        <button onClick={this.props.goback}>Go Back</button>
        </>
    )
  }
}

export default ClassData