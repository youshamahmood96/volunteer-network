import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {Col, Form } from 'react-bootstrap';
import './Addevent.css'
import { Link } from 'react-router-dom';
const AddEvent = () => {
    const[toggle,setToggle] = useState(false)
    const [task,setTask] = useState({})
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
        const newTask = {...task}
        newTask["selectedDate"] = date
        setTask(newTask)
    };
    const handleBlur = (e) => {
        const newTask = {...task}
        newTask[e.target.name] = e.target.value
        newTask["color"] = 'black'
        setTask(newTask)
    } 
    const submit =()=>{
        console.log(task);
        fetch('https://floating-beyond-39916.herokuapp.com/addToRawData',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(task)
        })
        setToggle(true)
    }
    console.log(task);
    return (
        <div className="event-container" >
        <Form className="event-form">
  <Form.Row>
    <Form.Group style={{marginRight: '50px'}} as={Col} >
      <Form.Label>Event Title</Form.Label>
      <Form.Control onBlur={handleBlur} type="text" name="task" placeholder="Enter title" />
    </Form.Group>

    <Form.Group as={Col} >
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    
    <KeyboardDatePicker 
        style={{ fontWeight: 'bold', color: 'black'}}
        margin="normal"
        disableFuture
        id="date-picker-dialog"
        label="Date"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
        'aria-label': 'change date',
        }}
    />
    
    </MuiPickersUtilsProvider>
    </Form.Group>
  </Form.Row>

  

  <Form.Row>
    <Form.Group as={Col} style={{marginRight: '50px'}} >
    <Form.Label>Description</Form.Label>
    <Form.Control onBlur={handleBlur} name="description" placeholder="Enter description" as="textarea" rows={3}  />
    </Form.Group> 

    <Form.Group as={Col} >
      <Form.Label>Image URL</Form.Label>
      <Form.Control onBlur={handleBlur} placeholder="Enter Image URL" name="image"/>
    </Form.Group>
  </Form.Row>


  
</Form>
{
    toggle?(
        <button className="add-event-btn" disabled>Submitted</button>
    ):
    (
        <button onClick={submit} className="add-event-btn">Submit</button>
    )
}
        </div>
    );
};

export default AddEvent;