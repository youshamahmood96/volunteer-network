import React from 'react';
import { Button } from 'react-bootstrap';
import AllTaskList from '../DataBase/AllTaskList';
import Navigation from '../Navigation/Navigation';
import TaskCards from '../TaskCards/TaskCards';
import './home.css';
const Home = () => {
    const tasks = AllTaskList()
    return (
        <div>
            <Navigation></Navigation>
            <h2 style={{textAlign:'center',fontWeight:'bolder'}} >I grow By Helping People in Need</h2>
            <div class="box">
            <input className="search-bar" type="search" id="search" placeholder="Search..." />
            <button className="search-btn">Search</button>
            </div>
            <div className="taskLists">
            {
                tasks.map(tasks=><TaskCards tasks={tasks}></TaskCards>)
            }
            </div>
        </div>
    );
};

export default Home;