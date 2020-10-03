import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EventTaskCards from '../EventTaskCards/EventTaskCards';
import Navigation from '../Navigation/Navigation';
import './EventTasks.css'
const EventTasks = () => {
    const[tasks,setTasks] = useState([])
    const [user, setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
    fetch('http://localhost:5000/totalTasks?email='+user.email)
    .then(res=>res.json())
    .then(data=>setTasks(data))
},[])
    return (
        <div>
            <Navigation></Navigation>
            <div className="event-task">
            {
                tasks.map(tsk=><EventTaskCards tsk={tsk}></EventTaskCards>)
            }
            </div>
        </div>
    );
};

export default EventTasks;