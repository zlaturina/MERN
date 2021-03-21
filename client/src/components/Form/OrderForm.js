import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import useStyles from './styles';
import { createOrder, updateOrder } from '../../actions/orders';

const OrderForm = ({ currentId, setCurrentId }) => {
  const [orderData, setOrderData] = useState({ firstname: '', surname: '', address: '', zip_code: '', city: '', phone: Number, email: '', product: '' });
  const order = useSelector((state) => (currentId ? state.orders.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (order) setOrderData(order);
  }, [order]);

  const clear = () => {
    setCurrentId(0);
    setOrderData({ firstanem: '', surname: '', address: '', zip_code: '', city: '', phone: Number, email: '', product: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createOrder(orderData));
      clear();
    } else {
      dispatch(updateOrder(currentId, orderData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${order.title}"` : 'Beställning'}</Typography>
        <TextField name="firstname" variant="outlined" label="Förnamn" fullWidth value={orderData.firstanem} onChange={(e) => setOrderData({ ...orderData, firstname: e.target.value })} />
        <TextField name="surname" variant="outlined" label="Efternamn" fullWidth value={orderData.surname} onChange={(e) => setOrderData({ ...orderData, surname: e.target.value })} />
        <TextField name="address" variant="outlined" label="Adress" fullWidth multiline rows={4} value={orderData.address} onChange={(e) => setOrderData({ ...orderData, address: e.target.value })} />
        <TextField name="zip_code" variant="outlined" label="Postnummer" fullWidth value={orderData.zip_code} onChange={(e) => setOrderData({ ...orderData, zip_code: e.target.value })} />
        <TextField name="city" variant="outlined" label="Postort" fullWidth value={orderData.city} onChange={(e) => setOrderData({ ...orderData, city: e.target.value })} />
        <TextField name="email" variant="outlined" label="E-post" fullWidth value={orderData.email} onChange={(e) => setOrderData({ ...orderData, email: e.target.value })} />
        <TextField name="phone" variant="outlined" label="Telefonnummer" fullWidth value={orderData.phone} onChange={(e) => setOrderData({ ...orderData, phone: e.target.value })} />


        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Skicka</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Återställ</Button>
      </form>
    </Paper>
  );
};

export default OrderForm;
