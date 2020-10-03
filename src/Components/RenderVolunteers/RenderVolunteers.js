import React, { useState } from 'react';
import './RenderVolunteers.css';
import trash from '../../logos/trash.png'
const RenderVolunteers = (props) =>{
    const[toggle,setToggle] = useState(false)
    const deleteThisTask = (e) =>{
        setToggle(true)
        fetch(`https://floating-beyond-39916.herokuapp.com/delete/${props._id}`,{
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
        <td>{props.tsk.name}</td>
        <td>{props.tsk.email}</td>
        <td>{props.tsk.selectedDate}</td>
        <td>{props.tsk.task}</td>
        <td><button className="trash-btn" onClick={deleteThisTask}><img className="trash" src={trash} alt="trash"></img></button></td>
        </tr>
    )
}

export default RenderVolunteers;