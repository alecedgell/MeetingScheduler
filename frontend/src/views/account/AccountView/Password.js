import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Snackbar,
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  makeStyles
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(({
  root: {}
}));

function Password(){
  const classes = useStyles();

  const navigate = useNavigate();
  const [data, upDateData] = React.useState([]);
  const [values, setValues] = useState({
    origin: '',
    password: '',
    confirm: ''
  });

  async function sampleFunc() {
    let response = await fetch("/api/getUserByID/9")
    let body = await response.json();
    upDateData(body);
  }
  sampleFunc();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function updatePassword(user_id,user_phone,user_email,user_name,user_password,user_type,user_cv,user_coverletter,user_statement) {

    const user = {user_id,user_phone,user_email,user_name,user_password,user_type,user_cv,user_coverletter,user_statement};
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify(user)
    }
    fetch('/api/updateUser', options).catch(error => console.log(error));
  }

  const handleSubmit = variable => {
    const user_id = parseInt(data.map(row => (row.user_id)));
    const user_password = values.password;
    const user_type = data.map(row => (row.user_type)).toString();
    const user_cv = data.map(row => (row.user_cv)).toString();
    const user_coverletter = data.map(row => (row.user_coverletter)).toString();
    const user_statement = data.map(row => (row.user_statement)).toString();
    const user_phone = parseInt(data.map(row => (row.user_phone)));
    const user_email = data.map(row => (row.user_email)).toString();
    const user_name = data.map(row => (row.user_name)).toString();
    if (data.map(row => (row.user_password)).toString() !== values.origin) {
      alert("Origin password is wrong!");
      setValues({
        ...values,
        ['password']: '',
        ['origin']: '',
        ['confirm']: ''
      });
    }else{
      if (values.password != values.confirm) {
        alert("Please confirm your new password!")
        setValues({
          ...values,
          ['confirm']: ''
        });
      }else{
        updatePassword(user_id, user_phone, user_email, user_name, user_password, user_type, user_cv, user_coverletter, user_statement);
        setValues({
          ...values,
          ['password']: '',
          ['origin']: '',
          ['confirm']: ''
        });
      }
    }


  };
  return (
    <form>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <FormControl className={clsx(classes.margin, classes.textField)} fullWidth>
            <InputLabel htmlFor="standard-adornment-password">Original Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.origin}
              onChange={handleChange('origin')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
            <Divider />
          <FormControl className={clsx(classes.margin, classes.textField)} fullWidth>
            <InputLabel htmlFor="standard-adornment-password">New Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Divider />
          <FormControl className={clsx(classes.margin, classes.textField)} fullWidth>
            <InputLabel htmlFor="standard-adornment-password">Confirm new password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.confirm}
              onChange={handleChange('confirm')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
}

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
