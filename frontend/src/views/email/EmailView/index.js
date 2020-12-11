import React, {Fragment, useRef} from "react";
import { Link as RouterLink} from 'react-router-dom';
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Email from './EmailView'
import Page from "src/components/Page";

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



const EmailView = () => {
  const classes = useStyles();


  return (
    <Page
      className={classes.root}
      title="Email"
    >
      <Container maxWidth={"lg"}>
        <Email />
      </Container>
    </Page>
  );
};

export default EmailView;
