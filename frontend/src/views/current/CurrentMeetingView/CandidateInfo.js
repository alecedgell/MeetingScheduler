import React from "react";
import {Button, Dialog, DialogContentText, Divider, Select, TextField} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
  card: {

  }
}))
export default function CandidateInfo() {
  const classes = useStyles();
  const [data, upDateData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    getInfo();
  };

  const handleClose = () => {
    setOpen(false);
  };
  async function getInfo() {
    let response = await fetch('/api/getUserByID/2')
    let body =  await response.json();
    upDateData(body);
  }

  return (
    <div>
      <Button color={"primary"} onClick={handleClickOpen}>See Candidate Info</Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby={"form-dialog-title"} fullWidth>
        <DialogTitle id={"form-dialog-title"}>Candidate Info</DialogTitle>
        <DialogContent>
          <DialogContentText>Info about certain candidate</DialogContentText>

          {data?.map(row => (
          <Card className={classes.card}>
            <Divider/>
            <Box>
              <Table>
                <TableHead key={"thead"}>
                  <TableRow>
                    <TableCell>Name:</TableCell>
                    <TableCell>{row.user_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Email:</TableCell>
                    <TableCell>{row.user_email}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Phone:</TableCell>
                    <TableCell>{row.user_phone}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>CV:</TableCell>
                    <TableCell>{row.user_cv}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cover Letter:</TableCell>
                    <TableCell>{row.user_coverletter}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Statement:</TableCell>
                    <TableCell>{row.user_statement}</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Card>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={"primary"}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
