import React from "react";
import {Button, Dialog, DialogContentText, TextField} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";



export default function Popup({meeting_id}) {
  const [open, setOpen] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");
  const handleFeedbackChange = event => setFeedback(event.target.value);

  const handleSubmit = () => {
    addFeedback(meeting_id, feedback);
    setFeedback("");
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function addFeedback(meeting_id, meeting_feedback) {
    console.log(meeting_id);
    console.log(meeting_feedback)

    const feedback = {meeting_id,  meeting_feedback};
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify(feedback)
    }
    fetch('/api/updateFeedback', options).catch(error => console.log(error));
  }

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
            value={feedback}
            fullWidth
            maxWidth={"lg"}
            onChange={handleFeedbackChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={"primary"}>Cancel</Button>
          <Button onClick={handleSubmit} color={"primary"}>Submit</Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}
