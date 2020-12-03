import React from "react";
import {Button, Dialog, DialogContentText, Select, TextField} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

export default function CandidateInfo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color={"primary"} onClick={handleClickOpen}>See Candidate Info</Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby={"form-dialog-title"} fullWidth>
        <DialogTitle id={"form-dialog-title"}>Candidate Info</DialogTitle>
        <DialogContent>
          <DialogContentText>Info about certain candidate</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={"primary"}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
