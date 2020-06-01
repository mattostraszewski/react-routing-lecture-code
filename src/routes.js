import React from 'react'; //this is to display JSX
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Contact';

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </Switch>
  // path is the endpoint url for the route.
  // component is for which component is hitting that end point.
  // exact means the path defined has to be an exact match to the end point.
)