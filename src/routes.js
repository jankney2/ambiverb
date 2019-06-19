import React from 'react'
import { Route, Switch } from "react-router-dom";
import MainPage from './Components/MainPage'
import CreateListing from './Components/CreateListing'

export default (
  <Switch>

  <Route exact path='/' component={MainPage} />
   <Route  path='/createListing' component={CreateListing} />
  {/*<Route exact path='/' />
  <Route exact path='/' />
  <Route exact path='/' />
  <Route exact path='/' />
 */}


  </Switch>
)