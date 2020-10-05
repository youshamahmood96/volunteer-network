import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import AllTaskList from '../DataBase/AllTaskList';
import TextField from '@material-ui/core/TextField';
import './ConfirmTask.css'
import { UserContext } from '../../App';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import vnLogo from '../../logos/vnLogo.png'
import { getDate, getMonth } from 'date-fns';
import { getYear } from 'date-fns/esm';
import ConfirmTaskMessage from '../ConfirmTaskMessage/ConfirmTaskMessage';

const ConfirmTask = () => {
    const [user, setLoggedInUser] = useContext(UserContext)
    const {id} = useParams()
    const tasks = AllTaskList()
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const selectedTask = tasks.filter(tsk=>tsk._id===id)
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const day =getDate(selectedDate)
    let month = getMonth(selectedDate)
    const year = getYear(selectedDate)
    console.log(month)
    
    switch (month) {
        case 0:
            month = 'Jan'
            break;
        case 1:
            month = 'Feb'
            break;
            case 2:
            month = 'March'
            break;
            case 3:
            month = 'April'
            break;
            case 4:
            month = 'May'
            break;
            case 5:
            month = 'Jun'
            break;
            case 6:
            month = 'July'
            break;
            case 7:
            month = 'Aug'
            break;
            case 8:
            month = 'Sept'
            break;
            case 9:
            month = 'Oct'
            break;
            case 10:
            month = 'Nov'
            break;
            case 11:
            month = 'Dec'
            break;
            default:
            month = "Jan";
    }
    const confirmedDate= `${day} ${month} , ${year}`
    const task = selectedTask[0]?.task
    const image = selectedTask[0]?.image
    const description = selectedTask[0]?.description
    const taskSummary = {...user,confirmedDate,task,description,image}
    const submit =()=>{
        fetch('https://floating-beyond-39916.herokuapp.com/addTask',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(taskSummary)
        })
    }
    return (
        <div className="container">
        <Link to='/'><img className='logo center' src={vnLogo} alt="logo"></img></Link>
        <div className="confirm-task-form">
                <div className="login-page-inner">
                    <h3 className='login-page-title'>Register as a Volunteer</h3>
                    <form>
                            <>
                                <TextField autoComplete="off" style={{ marginTop: '40px' }} name='first' id="standard-basic" value={user?.name}/>
                                <TextField autoComplete="off" style={{ marginTop: '33px' }} name='second' id="standard-basic" value={user?.email}/>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid>
                                <KeyboardDatePicker 
                                    style={{ fontWeight: 'bold', color: 'black',width: '460px',marginTop: '40px'}}
                                    margin="normal"
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
                                <TextField
                                multiline
                                 autoComplete="off" style={{ marginTop: '33px' }} name='second' id="standard-basic" value={description}/>
                                <TextField autoComplete="off" style={{ marginTop: '33px' }} name='second' id="standard-basic" value={selectedTask[0]?.task}/>

                            </>
                        
                       
                    </form>
                    <Link to='/c'><button onClick={submit} className="submit-btn" >Registration</button></Link>
                    <div className="remove">
                    <ConfirmTaskMessage  tsk={taskSummary} ></ConfirmTaskMessage>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default ConfirmTask;