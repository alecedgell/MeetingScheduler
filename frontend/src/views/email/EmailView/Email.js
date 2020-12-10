import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  CardHeader,
  Card,
  Divider,
  Grid, Box, Table, TableHead, TableRow, TableCell, TableBody
} from '@material-ui/core';

import Page from "../../../components/Page";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    width: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    marginTop: "auto",
    display: 'inline-block',
    maxWidth: '100%',
    width: 50,
    alignItems: "center"
  },
  header: {
    marginBottom: '5%'
  },
  card:{
    marginBottom: "80"
  }

}));

export default function Email(){
  const classes = useStyles();
  const [data, upDateData] = React.useState([]);
  const [data2, upDateData2] = React.useState([]);
  const [data3, upDateData3] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  async function getCandidates() {
    let response = await fetch("/api/getUserType/Candidate")
    let body1 = await response.json();
    upDateData(body1);
  }
  async function getParticipants() {
    let response = await fetch("/api/getUserType/Participant")
    let body2 = await response.json();
    upDateData2(body2);
  }
  async function getAdmins() {
    let response = await fetch("/api/getUserType/Admin")
    let body3 = await response.json();
    upDateData3(body3);
  }
  if (firstLoad) {
    getCandidates();
    getParticipants();
    getAdmins();
    setLoad(false)
  }

  if (data?.length > 0) isLoading = false;

  return (
      <Page>
        <CardHeader
          title='Email'
          style={{ textAlign: 'center' }}
          titleTypographyProps={{variant:'h1' }}
        />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.header}
        >

          <Card
            style={{ textAlign: 'center' }}>
              <Button target="_blank" href={"https://mail.google.com/"}>
                  <CardHeader
                    title='Gmail'
                    style={{ textAlign: 'center' }}
                    titleTypographyProps={{variant:'h5' }}
                  />
                  <img
                    src="/static/images/gmail.svg"
                    className={classes.image}
                  />
              </Button>
          </Card>

          <Card
            className={classes.card}
            style={{ textAlign: 'center' }}>
            <Button target="_blank" href={"https://outlook.office.com/mail/"}>
              <CardHeader
                title='Outlook'
                style={{ textAlign: 'center' }}
                titleTypographyProps={{variant:'h5' }}
              />

              <img
                src="/static/images/outlook.svg"
                className={classes.image}
              />
            </Button>
          </Card>

        </Grid>

        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={6}
          >
          <Grid item xs={10}>
            <Card minWidth={800}>
              <Table>
                <TableHead>
                  <TableCell>Candidates  </TableCell>
                  <TableCell>Email</TableCell>
                </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow>
                        <TableCell> {row.user_name} </TableCell>
                        <TableCell> {row.user_email} </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
              </Table>
            </Card>
          </Grid>
          <Grid item xs={10}>
            <Card minWidth={800}>
              <Table>
                <TableHead>
                  <TableCell>Participants</TableCell>
                  <TableCell>Email</TableCell>
                </TableHead>

                <TableBody>
                  {data2.map((row) => (
                    <TableRow>
                      <TableCell> {row.user_name} </TableCell>
                      <TableCell> {row.user_email} </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
          <Grid item xs={10}>
            <Card minWidth={800}>
              <Table>
                <TableHead>
                  <TableCell>Admins       </TableCell>
                  <TableCell>Email</TableCell>
                </TableHead>

                <TableBody>
                  {data3.map((row) => (
                    <TableRow>
                      <TableCell> {row.user_name} </TableCell>
                      <TableCell> {row.user_email} </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
        </Grid>
      </Page>
  );
};


