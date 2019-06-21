import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'


class Listing extends Component {
  constructor() {
    super()
    this.state={
      listing: {}
    }
  }

  componentDidMount() {
    axios.get(`/listing`).then(res=> {
      this.setState({
        listing: res.data
      })
    })
  }
  

  render(){
    return(
      <div>
<h1>
{this.state.listing.category}</h1>

        <h1>{this.state.listing.listing_title}</h1>

      <p> listing description: {this.state.listing.description}</p>

      <p>Asking Price: {this.state.listing.asking_price}</p>

      </div>
    )
  }
}




const mapStateToProps=(state)=> {
  return {

  }
}

const mapDispatchToProps= {

}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)