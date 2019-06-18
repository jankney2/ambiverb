import React, { Component } from 'react';
import {Link} from 'react-router-dom';



export default class MainPage extends Component {
  render() {
    return (
      <div className={`mainPage`}>

        <div className="headline">


          <h1>Welcome to Ambiverb</h1>
          <h2>The place where you come to get your gear</h2>
          <input type="text" className="searchBar" placeholder="Find Gear" />

        <ul>

          <li>Electric Guitars</li>
          <li>Synths</li>
          <li>Bass Guitars</li>
          <li>Vintage</li>
        </ul>

        </div>

      

      </div>
    )
  }
}
