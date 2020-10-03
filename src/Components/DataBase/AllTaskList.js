import { useEffect, useState } from 'react';

const AllTaskList = () => {
const[tasks,setTasks] = useState([])

useEffect(()=>{
    fetch('https://floating-beyond-39916.herokuapp.com/taskData')
    .then(res=>res.json())
    .then(data=>setTasks(data))
},[])
return tasks

};

export default AllTaskList;


