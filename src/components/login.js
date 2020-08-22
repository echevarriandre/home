import React from 'react';
import Auth from '../services/AuthService';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    const loginData = { 
      username: this.state.username,
      password: this.state.password
    }

    Auth.login(loginData)
      .then(response => {
        localStorage.setItem("auth_token", "test");
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleLoginChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section id="login" className="text-center">
        <input name="username" onChange={this.handleLoginChange} value={this.state.username} type="text" className="shadow caret-input w-3/4 mb-3 p-2 bg-gray-800 rounded" placeholder="username"/>
        <input name="password" onChange={this.handleLoginChange} value={this.state.password} type="password" className="shadow caret-input w-3/4 mb-3 p-2 bg-gray-800 rounded" placeholder="password" />

        <button
          onClick={this.login} 
          className="mt-4 focus:outline-none bg-indigo-500 hover:bg-indigo-600 w-3/4 duration-200 text-white rounded p-2"
        >
          login
        </button>
      </section>
    );
  }
}

export default Login;