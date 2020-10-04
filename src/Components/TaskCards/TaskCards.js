import React from 'react';
import { Link } from 'react-router-dom';
import './TaskCards.css'
const TaskCards = (props) => {
    const {color,_id,image,task} = props.tasks
    return (
        
        <div className="task-body">
          <Link to={`/confirmTask/${_id}`}>
          <div className="task-cards">
          <img  style={{borderBottom:`20px solid ${color}`}} className='card-image' src={image} alt="task"></img>
          <p className="task-name" style={{backgroundColor:`${color}`}}>{task}</p>
          </div>
          </Link>
        </div>
    
        
    )
};

export default TaskCards;