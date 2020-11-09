import React, { Fragment  } from "react";
import { Link as RouterLink} from 'react-router-dom';
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Grid,
  TableCell,
  TextField
} from "@material-ui/core";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";


const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: "flex",
    flexDirection: "row"
  },
  formControl: {
    minWidth: 210
  }
}));

export default function CreateForm({ className, ...rest }) {
  const [room, setRoom] = React.useState('');
  const [building, setBuilding] = React.useState('');
  //changing the value in the room drop down
  const handleChangeRoom= (event) => {
    setRoom(event.target.value);
  };

  //changing the entry in building selector
  const handleChangeBuild = (event) => {
    setBuilding(event.target.value);
  };
  // const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  return (
    <div>
      {/*<MuiPickersUtilsProvider>*/}
        <Card>
          <CardHeader
            title={"New Meeting"}
            subheader={"Enter information regarding new meeting"}
          />
          <Divider/>
          <CardContent>
            <Grid
              container
              direction={"row"}
              justify={"center"}
              alignItems={"flex-start"}
              spacing={2}
            >
              <Grid item xs={3}>
                <TextField id={'outlined-basic'} label={"First Name"} variant={"outlined"} />
              </Grid>
              <Grid item xs={3}>
                <TextField  id={'outlined-basic'} label={"Last Name"} variant={"outlined"} />
              </Grid>
              <Grid item xs={3}>
                <TextField id={'outlined-basic'} label={"Email"} variant={"outlined"} />
              </Grid>
              <Grid item xs={3}>
                <TextField id={"datetime-local"} label={"New Meeting"} type={"datetime-local"} defaultValue={new Date()} InputLabelProps={{shrink: true}} />
              </Grid>
              <Grid item xs={6}>
              <FormControl variant={"outlined"} className={classes.formControl}>
                <InputLabel id={"building-select"}>Building</InputLabel>
                <Select
                  labelId={"building-select"}
                  id={"building-select"}
                  value={building}
                  label={"Building"}
                  onChange={handleChangeBuild}
                >
                  <MenuItem value={""}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Centennial"}>Centennial Hall</MenuItem>
                  <MenuItem value={"Hibbard"}>Hibbard Hall</MenuItem>
                  <MenuItem value={"Phillips"}>Phillips Hall</MenuItem>
                  <MenuItem value={"Davies"}>Davies Center</MenuItem>
                  <MenuItem value={"Schneider"}>Schneider Hall</MenuItem>
                </Select>
              </FormControl>
            </Grid>
              <Grid item xs={6}>
              <FormControl variant={"outlined"} className={classes.formControl}>
                <InputLabel id={"room-select"}>Room</InputLabel>
                <Select
                  labelId={"room-select"}
                  id={"room-select"}
                  value={room}
                  label={"room"}
                  onChange={handleChangeRoom}
                >
                  <MenuItem value={""}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"101"}>101</MenuItem>
                  <MenuItem value={"202"}>202</MenuItem>
                  <MenuItem value={"311"}>311</MenuItem>
                  <MenuItem value={"323"}>323</MenuItem>
                  <MenuItem value={"326"}>326</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              <Box my={2}>
                <RouterLink to={"/app/dashboard"}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Confirm Meeting
                </Button>
                </RouterLink>
              </Box>

            </Grid>
          </CardContent>


        </Card>


      {/*</MuiPickersUtilsProvider>*/}


    </div>
  );
}
CreateForm.propTypes = {
  className: PropTypes.string
};

// export default CreateForm;
