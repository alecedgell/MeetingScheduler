import React, { useRef, useState } from 'react';
import {
  Box, Button,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Calender from './Calender';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));



const ProductList = () => {
  const classes = useStyles();


  return (
    <Page
      className={classes.root}
      title="Current Meetings"
    >
      <Container maxWidth={"lg"}>
        {/*<Button onClick={() => window.print()}>Print</Button>*/}
        <Calender />
      </Container>
    </Page>
  );
};

export default ProductList;
