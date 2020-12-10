import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  InputAdornment,
  makeStyles
} from '@material-ui/core';

function ProfileDetails() {
  const [data, upDateData] = React.useState([]);

  async function sampleFunc() {
    let response = await fetch("/api/getUserByID/9")
    let body = await response.json();
    upDateData(body);
  }
  sampleFunc();

  const useStyles = makeStyles(() => ({
    root: {}
  }));

    const classes = useStyles();
    const [values, setValues] = useState({
      user_name: '',
      user_phone: '',
      user_email: ''
    });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    const user_id=parseInt(data.map(row => (row.user_id)));
    const user_password=data.map(row => (row.user_password)).toString();
    const user_type=data.map(row => (row.user_type)).toString();
    const user_cv=data.map(row => (row.user_cv)).toString();
    const user_coverletter=data.map(row => (row.user_coverletter)).toString();
    const user_statement=data.map(row => (row.user_statement)).toString();
    const user_phone=(values.user_phone==='')?parseInt(data.map(row => (row.user_phone))):values.user_phone;
    const user_email=(values.user_email==='')?data.map(row => (row.user_email)).toString():values.user_email;
    const user_name=(values.user_name==='')?data.map(row => (row.user_name)).toString():values.user_name;
    updateUser(user_id,user_phone,user_email,user_name,user_password,user_type,user_cv,user_coverletter,user_statement);
    setValues({
      ...values,
      ['user_phone']: '',
      ['user_name']: '',
      ['user_email']: ''
    });
  };

  function updateUser(user_id,user_phone,user_email,user_name,user_password,user_type,user_cv,user_coverletter,user_statement) {

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


  return (
      <form
        autoComplete="off"
        noValidate
      >
        <Card>
          <CardHeader
            subheader="Your information is shown at the beginning"
            title="Profile"
          />
          <Divider/>
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="User Name"
                  name="user_name"
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{data.map(row => (
                      row.user_name
                    ))}</InputAdornment>,
                  }}

                  value={values.user_name}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="user_email"
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{data.map(row => (
                      row.user_email
                    ))}</InputAdornment>,
                  }}
                  value={values.user_email}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="User phone"
                  name="user_phone"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{data.map(row => (
                      row.user_phone
                    ))}</InputAdornment>,
                  }}
                  value={values.user_phone}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider/>
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
              Save details
            </Button>
          </Box>
        </Card>
      </form>
    );
}
  ProfileDetails.propTypes = {
    className: PropTypes.string
  };
  export default ProfileDetails;

