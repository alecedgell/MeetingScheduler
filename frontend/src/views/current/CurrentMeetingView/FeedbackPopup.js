import React from "react";
import {Button, Dialog, DialogContentText, TextField} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

function addFeedback() {

}

export default function Popup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant={"outlined"} color={"primary"} onClick={handleClickOpen}>Add Feedback</Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby={"form-dialog-title"} fullWidth>
        <DialogTitle id={"form-dialog-title"}>Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>Add feedback for desired meeting</DialogContentText>
          <TextField
            autoFocus
            id={"feedback"}
            label={"Feedback"}
            type={"feedback"}
            fullWidth
            maxWidth={"lg"}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={"primary"}>Cancel</Button>
          <Button onClick={handleClose} color={"primary"}>Submit</Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}
