import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmTaskMessage = (props) => {
    return (
        <div style={{textAlign: 'center',marginTop:'100px'}}>
        <h1 >Your task has been Added Successfully!</h1>
        <Link to='/eventTasks'><p>See all tasks I selected</p></Link>
            
        </div>
    );
};

export default ConfirmTaskMessage;