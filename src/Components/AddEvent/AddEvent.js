import { Grid, TextField } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
const AddEvent = () => {
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
        setTask(newTask)
    } 
    const submit =()=>{
        console.log(task);
        fetch('https://floating-beyond-39916.herokuapp.com/addToRawData',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(task)
        })
    }
    return (
        <div className="container">
        <div className="confirm-task-form">
                <div className="login-page-inner">
                    <form onSubmit={submit}>
                            <>  
                                <TextField required onBlur={handleBlur}  autoComplete="off" style={{ marginTop: '40px' }} name='task' id="standard-basic" placeholder="Event Title" />
                                <TextField required onBlur={handleBlur} autoComplete="off" style={{ marginTop: '33px' }} name='description' id="standard-basic" placeholder="description"/>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid>
                                <KeyboardDatePicker 
                                    style={{ fontWeight: 'bold', color: 'black',width: '460px',marginTop: '40px'}}
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
                                </Grid>
                                </MuiPickersUtilsProvider>
                                <TextField required onBlur={handleBlur} autoComplete="off" style={{ marginTop: '33px' }} name='image' id="standard-basic" placeholder="Upload Image Url"/>
                                <TextField required onBlur={handleBlur} autoComplete="off" style={{ marginTop: '33px' }} name='color' id="standard-basic" placeholder="Set Event Color"/>
                                 
                            </>
                        
                       
                    </form>
                    <button onClick={submit} className="submit-btn">Submit</button>
                </div>
        </div>
        </div>
    );
};

export default AddEvent;