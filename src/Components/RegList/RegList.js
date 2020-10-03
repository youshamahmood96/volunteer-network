import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import RenderVolunteers from '../RenderVolunteers/RenderVolunteers'
const RegList = () => {
        const[tasks,setTasks] = useState([])
        
        useEffect(()=>{
            fetch('https://floating-beyond-39916.herokuapp.com/adminTasks')
            .then(res=>res.json())
            .then(data=>setTasks(data))
        },[])
        
    return (
        <div>
        <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              tasks.map(tsk=><RenderVolunteers tsk={tsk}></RenderVolunteers>)
          }
        </tbody>
      </Table>
        </div>
    );
};

export default RegList;