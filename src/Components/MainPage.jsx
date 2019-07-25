import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {Icon} from 'react-evil-icons'

let content=[
  {
  title:'heya', 
  description:'fwoafijewoji'
},
  {
  title:'heya', 
  description:'fwoafijewoji'
},
  {
  title:'heya', 
  description:'fwoafijewoji'
},
]


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
      <Slider autoplay={1000} infinite >
        {content.map((article, index) => <div key={index} style={{
          backgroundImage:`url('https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png')`,
          backgroundSize:'100%',

          
        }}>
          <h2>{article.title}</h2>
          <div>{article.description}</div>
        </div>)}
      </Slider>

      <div className="listingMap">
        {listings}
        </div>      

      </div>
    )
  }
}
