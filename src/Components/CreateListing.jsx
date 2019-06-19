import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

 class CreateListing extends Component {
  constructor(){
    super()
    this.selector=React.createRef()

    this.state= {
      listingTitle: '', 
      listingDescription: '', 
      category:this.selector
    }
  }

  componentDidMount() {
    console.log('ref', this.selector.current)
  }
  
onChange=(e)=> {
  this.setState({
    [e.target.name]:e.target.value
  })
}

submitHandler=()=>{
  axios.post('/listings/create', {
    listing_title: this.state.listingTitle, description: this.state.listingDescription, 

  })
}

  render() {
    return(
      <div>
<h1>Create a listing</h1>
<div>
      <select name="categorySelector" id="" ref={this.selector}>
        
        {/* <option value='category' defaultValue >category</option> */}
        <option value="electric guitar">Electric Guitar</option>
        <option value="bass guitar">Bass Guitar</option>
        <option value="synthesizer">Synthesizer</option>
        <option value="vintage">Vintage</option>

      </select>

      <input type="text" placeholder="Title"/>

<button onClick={this.submitHandler}>add My listing!</button>
</div>


      </div>
    )
  }


}

const mapStateToProps=(state)=> {
  return {
    user: state.user
  }
}

const mapDispatchToProps={

}


export default connect(mapStateToProps, mapDispatchToProps)(CreateListing)