import { Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
const Copyright = ({ className, ...rest }) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Meeting Scheduler
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

Copyright.propTypes = {
  className: PropTypes.string
};

export default Copyright;
