import React, { Component } from 'react'
import axios from 'axios'

export default class NavBar extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      pass: '',
      isLoggedIn: false,
      showLogin: false,
      showRegister: false,
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
          email: '',
          pass: '',
          showLogin: false,
          showRegister: false,
        })
      }
    })
  }

  logoutHandler = () => {
    axios.get('/auth/logout').then(res => {
      if (res.status === 200) {
        this.setState({
          isLoggedIn: false
        })
      }
    })
  }

  toggleLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin,
      showRegister: false
    })


  }

  toggleRegister = () => {
    this.setState({
      showRegister: !this.state.showRegister,
      showLogin: false
    })
  }

  registerHandler=()=> {
    axios.post('/auth/register', {
      firstName: this.state.firstName, 
      lastName: this.state.lastName, 
      email: this.state.email, 
      pass: this.state.pass, 
      username: this.state.username


    }).then((res)=> {
      if(res.data.user.isLoggedIn){
        this.setState({
          isLoggedIn:true, 
          firstName: '', 
          lastName: '', 
          email: '', 
          pass: '', 
          username: ''
        })
      }
    })
  }

  render() {
    if (!this.state.isLoggedIn) {



      return (

        // default display
        <div>
          <button onClick={this.toggleLogin}>Login</button>

          <button onClick={this.toggleRegister}>Register</button>

          {/* LoginForm */}
          <div className={` loginForm ${this.state.showLogin ? '' : "hidden"}`}>
            <input type="text" name='email' required placeholder="email" onChange={this.changeHandler} />

            <input type="password" name='pass' required placeholder="password" onChange={this.changeHandler} />

            <button onClick={this.loginHandler}>Login</button>
          </div>


          {/* Register form */}

          <div className={`loginForm ${this.state.showRegister ? '' : 'hidden'}`}>

            <h1>Register</h1>
            <input type="text" name="firstName" required placeholder="First Name" onChange={this.changeHandler}/>
            
            <input type="text" name="lastName" required placeholder="Last Name" onChange={this.changeHandler}/>

            <input type="text" name="username" required placeholder="username" onChange={this.changeHandler}/>

            <input type="email" name='email' required placeholder="email" onChange={this.changeHandler} />

            <input type="password" name='pass' required placeholder="password" onChange={this.changeHandler} />

            <button onClick={this.registerHandler}>Sign Up!</button>

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