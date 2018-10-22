import React from 'react';
import { Switch, Route } from 'react-router-dom';

import landingPage from './landingpage';
import Special from './Special';
import Reservation from './Reservation';
import Help from './Help';
import Contact from './Contact';

const Main = () => (

       
  <Switch>
    <Route exact path="/landingpage" component={landingPage} />
    <Route path="/Special" component={Special} />
    <Route path="/Seservation" component={Reservation} />
    <Route path="/Help" component={Help} />
    <Route path="/Contact" component={Contact} />
  </Switch>
) 
    
  

export default Main;