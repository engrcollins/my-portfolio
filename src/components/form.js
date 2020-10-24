import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button, Image } from 'react-bootstrap'
import axios from 'axios';
import Queen1 from '../images/queen-2.jpg';
import Queen2 from '../images/queen-2.jpg';

const Form = (props) => {
  const initialUser = {
    name: '',
    msgTitle: '',
    msgContent: ''
  };

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] =useState(false)
  const validateForm = (value) => {
    const errors = {}
    if (!value.name) errors.name = "Please input your full name";
    if (!value.msgTitle) errors.msgTitle = "Title is required";
    if (!value.msgContent) errors.msgContent = "Content is required";
    return errors
  }

  const [user, setUser] = useState(initialUser);
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const saveWishes = (e) => {
    e.preventDefault();
    const errors = validateForm(user)
    setErrors(errors)
    if (!Object.keys(errors).length) {
      setSubmitted(true)
      const { name, msgTitle, msgContent } = user;
      axios({
        url: 'https://colmig-app.herokuapp.com/birthday-wishes/add',
        //url: 'http://localhost:8080/birthday-wishes/add',
        method: 'POST',
        data: {
          name,
          msgTitle,
          msgContent
        }
      })
        .then((response) => {
          let note = document.getElementById('formSubmit');
          setUser(initialUser);
          props.flip2Back();
          props.fetchUsers();
          setSubmitted(false)
        })
      }
  };
    return (
      <div>
        <div className='imgs'>
         <Image align='center' src={Queen2} className='bgImage' style={{ maxWidth:"425px", maxHeight:"500px", margin:'2px', borderRadius:"20px" }} />
        </div>
      <form className="form noValidate" autoComplete="off" onSubmit={saveWishes}>
        <h2 align="center">Send her your wishes...</h2>
        <TextField
          id="filled-basic"
          variant='outlined'
          value={user.name}
          label="Your full name"
          name="name"
          onChange={handleChange}
        />
        {errors.name && <p className="warnings">{errors.name}</p>}

        <TextField
          name="msgTitle"
          value={user.msgTitle}
          id="filled-basic"
          variant='outlined'
          onChange={handleChange}
          label="Message Title"
        />
        {errors.msgTitle && <p className="warnings">{errors.msgTitle}</p>}

        <TextField
          name="msgContent"
          variant='outlined'
          value={user.msgContent}
          id="outlined-multiline-static"
          multiline
          rows={5}
          rowsMax={6}
          inputProps={{ maxLength: 310 }}
          id="standard-dense"
          onChange={handleChange}
          label="Message Content"
        />
        {errors.msgContent && <p className="warnings">{errors.msgContent}</p>}
        <p id='formSubmit'></p>
        {
          submitted ? 
          (
          <button align='center' class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Submitting...
          </button>
        ) : (
          <Button align='center' color="primary" class="btn btn-primary" onClick={saveWishes} >
            Submit
          </Button>
        )
        }
      </form>
      </div>
    );
  }

export default Form;
