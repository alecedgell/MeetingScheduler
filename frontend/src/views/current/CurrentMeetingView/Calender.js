import React from 'react';
import {Button,  TableBody,  TableHead,  TableRow,  TableCell,  Table,  Divider,  Card,  CardHeader,  Grid,  Box} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import theme from "../../../theme";
import FeedbackPopup from "./FeedbackPopup";


const useStyles = makeStyles(() => ({
  root: {},
  table: {
    minWidth: 650,
  },
  card: {
    marginBottom: theme.spacing(3)
  }
}));
function Calender() {
  const classes = useStyles();
  const [data, upDateData] = React.useState([]);
  const [data2, upDateData2] = React.useState([]);
  const [data3, upDateData3] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  async function sampleFunc() {
    let response = await fetch("/api/getMeetings/1")
    let body = await response.json();
    upDateData(body);
  }
  async function sampleLocation() {
    let response2 = await fetch("/api/getLocation/1")
    let body2 = await response2.json();
    upDateData2(body2)
  }
  async function getParticipants() {
    let response3 = await fetch("/api/getPeople/100")
    let body3 = await response3.json();
    upDateData3(body3)
  }
  if (firstLoad) {
    sampleFunc();
    sampleLocation();
    getParticipants();
    setLoad(false)
  }
  if (data.length > 0) isLoading = false;

  return (
    <div>
      <Button onClick={() => window.print()} variant={'contained'}>Print</Button>
      <Card className={classes.card}>
        <CardHeader title='Current Meetings'/>
      </Card>
      {data?.map(row => (
        <Card className={classes.card}>
          <Divider/>
          <Box minWidth={600}>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Start time:</TableCell>
                  <TableCell>{row.meeting_starttime}</TableCell>
                  <TableCell>End time:</TableCell>
                  <TableCell>{row.meeting_endtime}</TableCell>
                  <TableCell>Location:</TableCell>
                  <TableCell>{row.location_id}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Participants:</TableCell>
                  {/*fix this section
                    Need to connect the primary keys so the cards change based upon the user_id and meeting_id*/
                  }
                  <TableCell>{data3.map(row2 => (
                    row2.user_name
                  ))}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>See Candidate Info</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Provide feedback:</TableCell>
                  <TableCell>{row.meeting_feedback}(Nothing showing because no feedback in table)<FeedbackPopup/></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Meeting status:</TableCell>
                  <TableCell>Running late/early etc</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Card>
      ))}



      {/*<Table>*/}
      {/*  <TableHead>*/}
      {/*    <TableRow>*/}
      {/*      <TableCell>Id</TableCell>*/}
      {/*      <TableCell>Start Time</TableCell>*/}
      {/*      <TableCell>End Time</TableCell>*/}
      {/*      <TableCell>Location ID</TableCell>*/}
      {/*    </TableRow>*/}
      {/*  </TableHead>*/}
      {/*  <TableBody>*/}
      {/*    {data?.map(row => (*/}
      {/*      <TableRow hover key={row.name}>*/}
      {/*        <TableCell>{row.meeting_id}</TableCell>*/}
      {/*        <TableCell>{row.meeting_starttime}</TableCell>*/}
      {/*        <TableCell>{row.meeting_endtime}</TableCell>*/}
      {/*        <TableCell>{row.location_id}</TableCell>*/}
      {/*      </TableRow>*/}
      {/*    ))}*/}
      {/*  </TableBody>*/}
      {/*</Table>*/}
      {/*<Divider/>*/}

      {/*<Table>*/}
      {/*  <TableHead>*/}
      {/*    <TableRow>*/}
      {/*      <TableCell>Location</TableCell>*/}
      {/*      <TableCell>Location Name</TableCell>*/}
      {/*      <TableCell>Start Time</TableCell>*/}
      {/*      <TableCell>End Time</TableCell>*/}
      {/*    </TableRow>*/}
      {/*  </TableHead>*/}
      {/*  <TableBody>*/}
      {/*    {data2.map(row => (*/}
      {/*      <TableRow hover key={row.name}>*/}
      {/*        <TableCell>{row.location_id}</TableCell>*/}
      {/*        <TableCell>{row.location_name}</TableCell>*/}
      {/*        <TableCell>{row.location_starttime}</TableCell>*/}
      {/*        <TableCell>{row.location_endtime}</TableCell>*/}
      {/*      </TableRow>*/}
      {/*    ))}*/}
      {/*  </TableBody>*/}
      {/*</Table>*/}
    </div>
  )
}

export default Calender;
