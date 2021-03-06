import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './EventTaskCards.css'
const EventTaskCards = (props) => {
    const[toggle,setToggle] = useState(false)
    const{_id,name,email,confirmedDate,task,image} = props.tsk;
    const deleteTask = () =>{
        setToggle(true)
        fetch(`https://floating-beyond-39916.herokuapp.com/delete/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(result=>{
            
        })
    }
    return (
        <div className={
            toggle?"remove":"event-task-body"
        }>
          <div className="event-task-cards">
          
          <Container>
          <Row>
          <Col sm={5}><img className='event-card-image' src={image} alt="task"></img></Col>
          <Col sm={7}>
          <h2>{task}</h2>
          <p>{confirmedDate}</p>
          <Button onClick={deleteTask}>Cancel</Button>
          </Col>
          </Row>
          </Container>
          </div>
        </div>
    );
};

export default EventTaskCards;