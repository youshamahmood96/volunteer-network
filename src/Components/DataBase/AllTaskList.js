import { useEffect, useState } from 'react';

const AllTaskList = () => {
const[tasks,setTasks] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/taskData')
    .then(res=>res.json())
    .then(data=>setTasks(data))
},[])
return tasks

};

export default AllTaskList;


