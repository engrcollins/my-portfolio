import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap'
import axios from 'axios';

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
      <form className="form noValidate" autoComplete="off" onSubmit={saveWishes}>
        <h2 align="center">Send her your wishes...</h2>
        <TextField
          id="standard-dense"
          value={user.name}
          label="Your full name"
          name="name"
          onChange={handleChange}
        />
        {errors.name && <p className="warnings">{errors.name}</p>}

        <TextField
          name="msgTitle"
          value={user.msgTitle}
          id="standard-dense"
          onChange={handleChange}
          label="Message Title"
        />
        {errors.msgTitle && <p className="warnings">{errors.msgTitle}</p>}

        <TextField
          name="msgContent"
          value={user.msgContent}
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
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Submitting...
          </button>
        ) : (
          <Button color="primary" class="btn btn-primary" onClick={saveWishes} >
            Submit
          </Button>
        )
        }
      </form>
    );
  }

export default Form;
