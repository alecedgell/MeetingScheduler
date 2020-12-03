import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles,
  Select
} from '@material-ui/core';
import Page from 'src/components/Page';
import {RecentActors} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [firstLoad, setLoad] = React.useState(true);
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [cv, setCV] = React.useState("");
  const [coverLetter, setCoverLetter] = React.useState("");
  const [statement, setStatement] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleNameChange = event => setName(event.target.value);
  const handleRoleChange = event => setRole(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePassChange = event => setPassword(event.target.value);
  const handlePhoneChange = event => setPhone(event.target.value);

  const handleSubmit = variable => {
    createAccount(number, email, name, password, role);
    setName("");
    setEmail("");
    setRole("");
    setPassword("");
    setNumber("");
    setCoverLetter("");
    setCV("");
    setStatement("");
  };
  if (firstLoad) {
    setLoad(false);
  }
  function createAccount(user_phone, user_email, user_name, user_password, user_type) {
    // var user_id = null;
    var user_cv = null;
    var user_coverletter = null;
    var user_statement = null;
    //var user_phone = null;
    const user = {user_phone, user_email, user_name, user_password, user_type, user_cv, user_coverletter, user_statement};
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify(user),
    }
    fetch('api/insertUser', options).catch(error => console.log(error))
    navigate('/app/dashboard', { replace: true });
  }

  return (
    <Page
      className={classes.root}
      title="Register"
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
              email: '',
              firstName: '',
              lastName: '',
              password: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                // firstName: Yup.string().max(255).required('First name is required'),
                // lastName: Yup.string().max(255).required('Last name is required'),
                password: Yup.string().max(255).required('password is required'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              // errors,
              handleBlur,
              // handleChange,
              // handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
              {/*<form>*/}
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                  // error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  // helperText={touched.firstName && errors.firstName}
                  label="First and Last Name"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleNameChange}
                  value={name}
                  variant="outlined"
                />
                <Select
                  value={role}
                  onChange={handleRoleChange}
                  fullWidth
                  name={'role'}
                  >
                  <option value={" "}>None</option>
                  <option value={"Admin"}>Administrator</option>
                  <option value={"MeetingCreator"}>Meeting Creator</option>
                  <option value={"Participant"}>Participant</option>
                  <option value={"Candidate"}>Candidate</option>
                </Select>
                <TextField
                  fullWidth
                  label={"Phone Number"}
                  margin={"normal"}
                  name={"phone"}
                  onBlur={handleBlur}
                  onChange={handlePhoneChange}
                  type={"phone"}
                  value={phone}
                  variant={"outlined"}
                />
                <TextField
                  // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
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
                  // error={Boolean(touched.password && errors.password)}
                  fullWidth
                  // helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handlePassChange}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                {/*{Boolean(touched.policy && errors.policy) && (*/}
                {/*  <FormHelperText error>*/}
                {/*    {errors.policy}*/}
                {/*  </FormHelperText>*/}
                {/*)}*/}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
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

export default RegisterView;
