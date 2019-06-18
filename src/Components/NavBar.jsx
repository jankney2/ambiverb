import React, { Component } from 'react'
import axios from 'axios'

export default class NavBar extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      pass: '',
      isLoggedIn: false,
      showLogin: false
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginHandler = () => {
    axios.post('/auth/login', this.state).then((res) => {
      if (res.data.user.isLoggedIn) {
        this.setState({
          isLoggedIn: res.data.user.isLoggedIn,
          email:'', 
          pass:'', 
          showLogin:false

        })
      }
    })
  }

logoutHandler= ()=> {
  axios.get('/auth/logout').then(res=> {
    if(res.status===200){
      this.setState({
        isLoggedIn:false
      })
    }
  })
}

toggleLogin=()=> {
  this.setState({
    showLogin:!this.state.showLogin
  })


}

  render() {
    if (!this.state.isLoggedIn) {



      return (
        <div>
<button onClick={this.toggleLogin}>Login</button>

<div className={` loginForm ${this.state.showLogin ? '': "hidden"}`}>
<input type="text" name='email' required placeholder="email" onChange={this.changeHandler} />

<input type="password" name='pass' required placeholder="password" onChange={this.changeHandler} />

<button onClick={this.loginHandler}>Login</button>
</div>

        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.logoutHandler}>Logout</button>
        </div>
      )
    }

  }
}