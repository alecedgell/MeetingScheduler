import React from 'react';
import FullCalendar from '@fullcalendar/react';
import PropTypes, {func} from 'prop-types';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Button, TableBody, TableHead, TableRow, TableCell, Table, Divider} from '@material-ui/core';
import {SpaceBar} from "@material-ui/icons";

// eslint-disable-next-line no-unused-vars
// const Calender = ({ className, ...rest }) => {
//
//   return (
//
//
//     <FullCalendar
//       plugins={[dayGridPlugin]}
//       initialView="dayGridMonth"
//       weekends={false}
//       events={[
//         { title: 'event 1', date: '2020-10-16' },
//         { title: 'meeting 2', date: '2020-10-14' }
//
//       ]}
//     />
//
//   );
// };
// Calender.propTypes = {
//   className: PropTypes.string
// };

function Calender() {
  const [data, upDateData] = React.useState([]);
  const [data2, upDateData2] = React.useState([]);
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
  if (firstLoad) {
    sampleFunc();
    sampleLocation();
    setLoad(false)
  }
  if (data.length > 0) isLoading = false;

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
            <TableCell>Location ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(row => (
            <TableRow hover key={row.name}>
              <TableCell>{row.meeting_id}</TableCell>
              <TableCell>{row.meeting_starttime}</TableCell>
              <TableCell>{row.meeting_endtime}</TableCell>
              <TableCell>{row.location_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Divider/>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Location Name</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data2.map(row => (
            <TableRow hover key={row.name}>
              <TableCell>{row.location_id}</TableCell>
              <TableCell>{row.location_name}</TableCell>
              <TableCell>{row.location_starttime}</TableCell>
              <TableCell>{row.location_endtime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Calender;
