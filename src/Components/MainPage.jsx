import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'



export default class MainPage extends Component {
constructor(){
  super()
  this.state={
    listings:[]
  }
}

componentDidMount() {
  axios.get('/allListings').then(res=> {
    this.setState({
      listings: res.data
    })
  })
}


  render() {

    let listings= this.state.listings.map(el=> {
      return (
        
        <Link to={`/listing/${el.listing_id}`} key={el.listing_id}> 
          <div >
          <h1>{el.listing_title}</h1>

          <h2>LISTING PHOTO PLACEHOLDER</h2>

          <p>Asking Price {el.asking_price}</p>

          <p>{el.category}</p>

        </div>
        </Link>
      )
    })

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

      <div className="listingMap">
        {listings}
        </div>      

      </div>
    )
  }
}
