import React from 'react'
import { Route, Switch } from "react-router-dom";
import MainPage from './Components/MainPage'
import CreateListing from './Components/CreateListing'
import Listing from './Components/Listing'
export default (
  <Switch>

  <Route exact path='/' component={MainPage} />
   <Route  path='/createListing' component={CreateListing} />
  <Route  path={`/listing`} component={Listing}/>
  
  {/*
  <Route exact path='/' />
  <Route exact path='/' />
 */}


  </Switch>
)