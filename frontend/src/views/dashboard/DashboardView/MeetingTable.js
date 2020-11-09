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
  withStyles,
  Divider,
  Grid,
  Link,
  IconButton
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
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


const data = [
  {
    id: uuid(),
    // name: 'John Smith',
    // email: 'johnsmith@gmail.com',
    upDocs: 'Resume, CV',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    // name: 'Jane Doe',
    // email: 'jd@gmailcom',
    upDocs: 'Resume',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    // name: 'Kyle Drywall',
    // email: 'kylemonster@gmail.com',
    upDocs: 'Resume, CV',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    // name: 'Chad Greek',
    // email: 'delta_kappa@greeklife.com',
    upDocs: 'None',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    // name: 'Eddie Van Halen',
    // email: 'vanhalen@gmail.com',
    upDocs: 'Resume, CV',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
];
const MeetingTable = ({ className, ...rest }) => {
  const classes = useStyles();
  // const [people] = useState(data);
  const [data, upDateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  function addCandidate() {

  }
  function deleteCandidate() {

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
          <Button color={"primary"}  className={classes.button} variant={"contained"} onClick={addCandidate()}>Add Candidate</Button>
          <RouterLink to='/app/create'>
            <Button color={"primary"} className={classes.button} variant={"contained"}>Create Meeting</Button>
          </RouterLink>
        </Grid>


      <Divider/>
        <Box minWidth={800}>
          <Table>
            <TableHead>

              <TableRow>
                <TableCell>Candidate Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Uploaded Documents</TableCell>
                <TableCell>Meeting Schedule</TableCell>
                <TableCell align={"center"}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(row => (
                <TableRow
                  hover
                  key={row.id}
                >
                  <TableCell>{row.user_name}</TableCell>
                  <TableCell>{row.user_email}</TableCell>
                  {/*<TableCell>{order.upDocs}</TableCell>*/}
                  <TableCell>CV</TableCell>
                  <TableCell>Create/Delete</TableCell>
                  {/*<TableCell>{order.schedule}</TableCell>*/}
                  {/*<TableCell>{order.action}</TableCell>*/}
                  <TableCell align={"center"}>
                    <Button className={classes.button} variant={"contained"}>Edit</Button>
                    <Button className={classes.deletebutton} variant={"contained"} startIcon={<DeleteIcon/>} onClick={deleteCandidate()}>Delete</Button>
                  </TableCell>
                </TableRow>

              ))}
              <TableRow>
                <TableCell><TextField id={'standard-basic'} defaultValue={'Name'}></TextField></TableCell>
                <TableCell><TextField id={'standard-basic'} defaultValue={'Email'}></TextField></TableCell>
                <TableCell><Button variant={'contained'} startIcon={<CloudUploadIcon />}>Upload</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

    </Card>
    // <TableContainer>
    //   <text>Meeting Scheduling for Position</text>
    //   <text>Name: Lecturer; ID: 2987987; Department: Phy</text>
    //   <Button variant="contained" color="primary">Add New Candidate</Button>
    //   <Button variant="contained" color="primary">View All Meeting Schedules</Button>
    //   <p> </p>
    //   {/* eslint-disable-next-line no-undef */}
    //   <Table className={classes.table}>
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell>Candidate Name</StyledTableCell>
    //         <StyledTableCell align="right">Email</StyledTableCell>
    //         <StyledTableCell align="right">Uploaded Documents</StyledTableCell>
    //         <StyledTableCell align="right">Meeting Schedule</StyledTableCell>
    //         <StyledTableCell align="right">Action</StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <StyledTableRow key={row.name}>
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.email}</TableCell>
    //           <TableCell align="right">{row.updocs}</TableCell>
    //           <TableCell align="right">{row.schedule}</TableCell>
    //           <TableCell align="right">{row.action}</TableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   <br />
    //
    //   <Button variant="contained" color="primary">Add a Position</Button>
    //   <br />
    // </TableContainer>
  );
};

MeetingTable.propTypes = {
  className: PropTypes.string
};

export default MeetingTable;
