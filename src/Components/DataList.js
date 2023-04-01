import React from 'react'
import './DataList.css'

const DataList = ({info,goback}) => {
  return (
    <>
    <h1>EMPLOYEE FEEDBACK DATA</h1>
    <div className='container'>
    {
        info[0].map((elmnt,index)=>{
            return(
                <div key={index} className='inputs'>
                    <p>Name : {elmnt.Name} | Department : {elmnt.Department} | Rating : {elmnt.Rating}</p>
                </div>
            )
        })
    }
    </div>
    <button onClick={goback}>Go Back</button>
    </>
  )
}

export default DataList