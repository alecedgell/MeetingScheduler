import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles, Table, TableHead, TableRow, TableCell, TableBody
} from '@material-ui/core';
import CandidateInfo from "../../current/CurrentMeetingView/CandidateInfo";
import Alert from "../../current/CurrentMeetingView/AlertType";
import FeedbackPopup from "../../current/CurrentMeetingView/FeedbackPopup";
import Map from "../../current/CurrentMeetingView/Map";


  const user = {
    avatar: '/static/images/avatars/avatar-profile-picture',
    city: 'Eau Claire',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'John Smith',
    timezone: 'CT'
  };

  const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
      height: 225,
      width: 225
    }
  }));
  const Profile = ({className, ...rest}) => {
    const classes = useStyles();

    return (
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardContent>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <Avatar
              className={classes.avatar}
              src={user.avatar}
            />
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h3"
            >
              {user.user_name}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {`${moment().format('hh:mm A')} ${user.timezone}`}
            </Typography>
          </Box>
        </CardContent>
        <Divider/>
      </Card>
    );
  };


Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
