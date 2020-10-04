import React, { useEffect, useState } from 'react';
import './AdminPanel.css'
import vnLogo from '../../logos/vnLogo.png';
import users from '../../logos/users.png';
import plus from '../../logos/plus.png'
import RegList from '../RegList/RegList';
import { Link } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
const AdminPanel = () => {
    const [regToggle,setRegToggle] = useState(false)
    return (
        <div>
            <div class="header">
             <Link to='/home'><img src={vnLogo} alt='logo' className='logo'></img></Link>
             <h3 style={{marginLeft:'130px'}}>{
                 regToggle?'Volunteer Registration List':'Add Event'
             }</h3>
            </div>

            <div class="row">
            <div class="col-3 menu">
                <ul>
                <li className={
                    regToggle?"toggleTrue"
                    :"toggleFalse"
                } onClick={()=>{
                    setRegToggle(true)
                }}><img style={{marginRight:'10px'}} src={users} alt="users"></img>Volunteer Registration List</li>
                <li className={
                    regToggle?"toggleFalse"
                    :"toggleTrue"
                }  onClick={()=>{
                    setRegToggle(false)
                }} ><img style={{marginRight:'10px',height:'30px',width:'30px'}} src={plus} alt="add"></img>Add Event</li>
                </ul>
            </div>

            <div class="col-9">
                
                {
                    regToggle?(
                        <RegList></RegList>  
                    ):(
                        <AddEvent></AddEvent>
                         
                    )
                }
                
            </div>
            </div>
        </div>
    );
};

export default AdminPanel;