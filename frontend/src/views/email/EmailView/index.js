import React, {Fragment, useRef} from "react";
import { Link as RouterLink} from 'react-router-dom';
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Email from './views/email/EmailView'
import Page from "../../../components/Page";

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
const Example = () => {
  const componentRef = useRef();
};


const EmailView = () => {
  const classes = useStyles();
  const componentRef = Example();

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
