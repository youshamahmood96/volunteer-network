import React, { useState } from 'react';
import './RenderVolunteers.css';
import trash from '../../logos/trash.png'
const RenderVolunteers = (props) =>{
    
    const {_id,name,email,task,confirmedDate} = props.tsk
    const[toggle,setToggle] = useState(false)
    const deleteThisTask = () =>{
        setToggle(true)
        fetch(`https://floating-beyond-39916.herokuapp.com/delete/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(result=>{
        })
        
    }
    return(
        <tr className={
            toggle?"remove"
            :"table-row"
        } >
        <td>{name}</td>
        <td>{email}</td>
        <td>{confirmedDate}</td>
        <td>{task}</td>
        <td><button className="trash-btn" onClick={deleteThisTask} ><img className="trash" src={trash} alt="trash"></img></button></td>
        </tr>
    )
}

export default RenderVolunteers;