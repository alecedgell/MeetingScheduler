import React from 'react';
import {
  Button,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Table,
  Divider,
  Card,
  CardHeader,
  Box
} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import theme from "../../../theme";
import Alert from "./AlertType";
import CandidateInfo from "./CandidateInfo";

const useStyles = makeStyles(() => ({
  root: {},
  table: {
    width: '20%',
  },
  card: {
    marginBottom: theme.spacing(3)
  }
}));

export default function Calender() {
  const classes = useStyles();
  const [data, upDateData] = React.useState([]);
  const [data2, upDateData2] = React.useState([]);
  const [data3, upDateData3] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;
  const [alert, setAlert] = React.useState("");


  // async function sampleFunc() {
  //   let response = await fetch("/api/getMeetings/1")
  //   let body = await response.json();
  //   upDateData(body);
  // }
  // async function sampleLocation() {
  //   let response2 = await fetch("/api/getLocation/1")
  //   let body2 = await response2.json();
  //   upDateData2(body2)
  // }
  // async function getParticipants() {
  //   let response3 = await fetch("/api/getPeople/100")
  //   let body3 = await response3.json();
  //   upDateData3(body3)
  // }
  // if (firstLoad) {
  //   sampleFunc();
  //   sampleLocation();
  //   getParticipants();
  //   setLoad(false)
  // }
  function getAlert() {
    let response = fetch
  }
  if (data.length > 0) isLoading = false;

  return (
    <div>

      <Box m={2} textAlign='center'>
        <Button onClick={() => window.print()} variant={'contained'} >Print</Button>
      </Box>
      <Card className={classes.card}>
        <CardHeader title='Current Meetings'/>
      </Card>
        <Card className={classes.card}>
          <Divider/>
          <Box minWidth={600}>

            <Table>
              <TableHead key={"thead"}>
                <TableRow>
                  <TableCell>Start time:</TableCell>
                  <TableCell> 4/11/2020 9:00am</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>End time:</TableCell>
                  <TableCell>4/11/2020  10:00am</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Location:</TableCell>
                  <TableCell>Phillips Hall</TableCell>
                </TableRow>
              </TableHead>

              <TableBody key={"tbody"}>
                <TableRow>
                  <TableCell>Participants:</TableCell>
                  <TableCell>(Candidate)Alec Edgell, (Professor)Dr.Banner</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Information:</TableCell>
                  <TableCell><CandidateInfo/></TableCell>

                </TableRow>
                <TableRow>
                  <TableCell>Alert Type: </TableCell>
                  <TableCell><Alert/></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Provide feedback:</TableCell>
                  <TableCell>Great Job Today!</TableCell>

                </TableRow>

                <TableRow>
                  <TableCell>Meeting status:</TableCell>
                  <TableCell>Upcoming</TableCell>
                </TableRow>

              </TableBody>

            </Table>
          </Box>

        </Card>



    </div>
  );
}
