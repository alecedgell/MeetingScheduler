import React from "react";
import {Button, Dialog, DialogContentText, Select, TextField} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";


export default function Alert() {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(" ");
  const handleAlertChange = event => setAlert(event.target.value);

  const handleSubmit = () => {
    submitAlert();
    setAlert(" ");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function submitAlert() {

  }

  return (
    <div>
      <Button color={"primary"} onClick={handleClickOpen}>Edit Alerts</Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby={"form-dialog-title"} fullWidth>
        <DialogTitle id={"form-dialog-title"}>Alerts</DialogTitle>
        <DialogContent>
          <DialogContentText>Change alert type</DialogContentText>
          <Select
            value={alert}
            onChange={handleAlertChange}
            fullWidth
            name={'alert'}
          >
            <option value={" "}></option>
            <option value={"Email"}>Email</option>
            <option value={"Phone"}>Phone</option>
            <option value={"Both"}>Both</option>
            <option value={"None"}>None</option>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={"primary"}>Cancel</Button>
          <Button onClick={handleSubmit} color={"primary"}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>

  );



}
