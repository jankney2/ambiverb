import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CreateListing extends Component {
  constructor() {
    super()
    this.state = {
      listingTitle: '',
      listingDescription: '',
      category: '', 
      askingPrice: '',
      photoUrl:''
    }
  }




  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = () => {
    axios.post('/listings/create', {
      listing_title: this.state.listingTitle, description: this.state.listingDescription,
      category: this.state.category,
      owning_user: this.props.user.user_id,

    })
  }

  render() {
    return (
      <div>
        <h1>Create a listing</h1>
        <div>
          <select name="category" id="" onChange={this.changeHandler}>

            <option value='category' defaultValue >category</option>

            <option value="electric guitar" >Electric Guitar</option>

            <option value="bass guitar" >Bass Guitar</option>

            <option value="synthesizer">Synthesizer</option>

            <option value="vintage">Vintage</option>

          </select>

          <input
            type="text"
            name='listingTitle'
            placeholder="Listing Title" onChange={this.changeHandler} />

          <input
            type="text"
            name='askingPrice'
            placeholder="askingPrice" onChange={this.changeHandler} />

          <textarea name="listingDescription" id="" cols="30" rows="10" placeholder='input description here' onChange={this.changeHandler}></textarea>


          <input type="file" id="file-input" name='photoUrl' onChange={this.changeHandler}/>
          <p>please select a file</p>
          <img src={this.state.photoUrl} alt='listing'/>

          <button onClick={this.submitHandler}>add My listing!</button>
        </div>


      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(CreateListing)