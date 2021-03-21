import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteOrder } from '../../../actions/orders';
import useStyles from './styles';

const Order = ({ order, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={order._id} />
      <div className={classes.overlay}>
        <Typography variant="h6">{order.firstname}</Typography>
        <Typography variant="body2">{moment(order.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(order._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{order.firstname}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{order.surname}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{order.address}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{order.zip_code}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{order.city}</Typography>


      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteOrder(order._id))}><DeleteIcon fontSize="small" />Ta bort</Button>
      </CardActions>
    </Card>
  );
};

export default Order;