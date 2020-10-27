import React, {useState} from 'react';
import PropTypes, {func} from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Box, Button, Table, TableHead, TableRow, TableCell, TableBody, Card, CardHeader, withStyles, Divider, Grid, Link
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';
import theme from "../../../theme";
import { Link as RouterLink } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const useStyles = makeStyles(() => ({
  root: {},
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1)
  },
}));
const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const data = [
  {
    id: uuid(),
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    upDocs: 'Resume, CV',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    name: 'Jane Doe',
    email: 'jd@gmailcom',
    upDocs: 'Resume',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    name: 'Kyle Drywall',
    email: 'kylemonster@gmail.com',
    upDocs: 'Resume, CV',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    name: 'Chad Greek',
    email: 'delta_kappa@greeklife.com',
    upDocs: 'None',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    name: 'Eddie Van Halen',
    email: 'vanhalen@gmail.com',
    upDocs: 'Resume, CV',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
];
const MeetingTable = ({ className, ...rest }) => {
  const classes = useStyles();
  const [people] = useState(data);

  function addCandidate() {

  }
  async function sample() {
    const response = await fetch("/api/getMeetings/0/", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    })
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
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {people.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.email}</TableCell>
                  <TableCell>{order.upDocs}</TableCell>
                  <TableCell>{order.schedule}</TableCell>
                  <TableCell>{order.action}</TableCell>
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
