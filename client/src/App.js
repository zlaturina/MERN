import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images/image1.jpg'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'




import Orders from './components/Orders/Orders';
import OrderForm from './components/Form/OrderForm';
import { getOrders } from './actions/orders';
import useStyles from './styles';
import logo from './images/logo.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getOrders());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"></Typography>
        <img className={classes.image} src={logo} alt="icon" height="60" />
      </AppBar>
      <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimgs"/>
      <img src={image3} className="sliderimgs"/>
      <img src={image4} className="sliderimgs"/>

      </AliceCarousel>
      </div>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Orders setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <OrderForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
