import React from 'react'
import { Route, Switch } from "react-router-dom";
import MainPage from './Components/MainPage'

export default (
  <Switch>

  <Route exact path='/' component={MainPage} />
  {/* <Route exact path='/' />
  <Route exact path='/' />
  <Route exact path='/' />
  <Route exact path='/' />
  <Route exact path='/' />
 */}


  </Switch>
)