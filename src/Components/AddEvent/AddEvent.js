import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {Col, Form } from 'react-bootstrap';
import './Addevent.css'
import { Link } from 'react-router-dom';
import upload from '../../logos/upload.png'
const AddEvent = () => {
    const[uploaded,setUploaded] = useState(false)
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
        fetch('https://floating-beyond-39916.herokuapp.com/addToRawData',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(task)
        })
        setToggle(true)
    }
    const uploadImage =()=>{
        setUploaded(true)
        const newTask = {...task}
        newTask["image"] = 'https://i.ibb.co/m8zGdw2/newBooks.png'
        setTask(newTask)
    }
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
      <Form.Label>Banner</Form.Label><br></br>
      {
          uploaded?(
            <p>Image Uploaded!</p>
          ):(
            <div onClick={uploadImage} className='upload-image-btn' > <img src={upload} className="upload-logo" alt="upload"></img> Upload Image</div>
          )
      }
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