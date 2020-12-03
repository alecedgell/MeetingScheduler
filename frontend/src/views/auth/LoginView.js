import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isError, setIsError] = React.useState("");
  const handleEmailChange = event => setUserName(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = variable => {
    login();
  }
  function login() {
    const credential = {email, password};
    console.log(email);
    console.log(password)
    let options = {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-type': 'application/json'
      },
      //body:JSON.stringify(credential),
    }
    navigate('app/dashboard')
    let response = fetch('/api/getUser/{email}/{password}', options).catch(error => console.log(error));

    console.log(response)







         //navigate('/app/dashboard')



      //let result = res.json();
      //if (result.status === 304) {

      //}
      // //if (result && result.success) {
      //   setLoggedIn(true);
      //   navigate('/app/dashboard')
      // } else {
      //   setLoggedIn(false);
      // }


    //navigate('/app/dashboard')
  }
  // function login() {
  //   const credentials = {email, password};
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     },
  //     body:JSON.stringify(credentials),
  //   }
  //   fetch('/api/getUser/', options).catch(error => console.log(error)).then(result => {
  //     // navigate('/app/dashboard', { replace: true });
  //     if (result.status === 200) {
  //       // setLoggedIn(true)
  //       navigate('/app/dashboard', { replace: true });
  //     } else {
  //       setIsError(true)
  //     }
  //   }).catch(e => {
  //     setIsError(true)
  //   });
  //   navigate('/app/dashboard', { replace: true });
  // }
  // if (isLoggedIn) {
  //   navigate('/app/dashboard', { replace: true });
  // }

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'example@gmail.com',
              password: ' '
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              // handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleEmailChange}
                  type="email"
                  value={email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handlePasswordChange}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={login}
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
