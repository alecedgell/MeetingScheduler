import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardHeader,
  Divider,
  Grid
} from '@material-ui/core';
import clsx from 'clsx';
import theme from "../../../theme";
import { Link as RouterLink } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(() => ({
  root: {},
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1)
  },
  deletebutton: {
    backgroundColor: "red"
  }
}));


function deleteCandidate(user_id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Accept' : 'application/json'
    },
  }
  if (window.confirm('Are you sure you want to delete Candidate?')) {
    fetch('/api/deleteUser/' + user_id, options).catch(error => console.log(error)).then((response) => {
      return response.json();
    });
  }
}

const MeetingTable = ({ className, ...rest }) => {
  const classes = useStyles();
  // const [people] = useState(data);
  const [data, upDateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  let isLoading = true;
  const handleEmailChange = event => setEmail(event.target.value);
  const handleNameChange = event => setName(event.target.value);

  function addCandidate(user_name, user_email) {
    var user_cv = null;
    var user_coverLetter = null;
    var user_statement = null;
    var user_phone = null;
    var user_password = null;
    var user_type = "Candidate";
    const user = {user_phone, user_email, user_name, user_password, user_type, user_cv, user_coverLetter, user_statement};
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify(user),
    }
    fetch('/api/insertUser', options).catch(error => console.log(error));
  }
  const handleDelete = variable => {
    deleteCandidate()
  }

  async function getCandidate() {
    let response = await fetch("/api/getUserType/Candidate")
    let body = await response.json();
    upDateData(body);
  }
  if (firstLoad) {
    getCandidate()
    setLoad(false)
  }
  const handleSubmit = variable => {
    addCandidate(name, email);
    setEmail("");
    setName("");
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title='Meetings' className={classes.header}/>
        <Grid
          container
          direction={"row"}
          justify={"flex-end"}
          alignItems={"flex-start"}
          >
          <Button color={"primary"}  className={classes.button} variant={"contained"} onClick={handleSubmit}>Add Candidate</Button>
          <RouterLink to='/app/create'>
            <Button color={"primary"} className={classes.button} variant={"contained"}>Create Meeting</Button>
          </RouterLink>
        </Grid>

      <Divider/>

        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Candidate Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Uploaded Documents</TableCell>
                <TableCell>Meeting Schedule</TableCell>
                <TableCell align={"center"}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow
                  hover
                  key={row.id}
                >
                  <TableCell>{row.user_id}</TableCell>
                  <TableCell>{row.user_name}</TableCell>
                  <TableCell>{row.user_email}</TableCell>
                  {/*<TableCell>{order.upDocs}</TableCell>*/}
                  <TableCell>CV</TableCell>
                  <TableCell>Create/Delete</TableCell>
                  {/*<TableCell>{order.schedule}</TableCell>*/}
                  {/*<TableCell>{order.action}</TableCell>*/}
                  <TableCell align={"center"}>
                    <Button className={classes.button} variant={"contained"}>Edit</Button>
                    <Button className={classes.deletebutton} variant={"contained"} startIcon={<DeleteIcon/>} onClick={() => deleteCandidate(row.user_id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell><TextField label={"Name"} name={"fullName"} onChange={handleNameChange} value={name}></TextField></TableCell>
                <TableCell><TextField label={"Email"} name={"email"} onChange={handleEmailChange} value={email}></TextField></TableCell>
                <TableCell><Button variant={'contained'} startIcon={<CloudUploadIcon />}>Upload</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
    </Card>
  );
};

MeetingTable.propTypes = {
  className: PropTypes.string
};

export default MeetingTable;
