import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {

  state = {
    credentials: {
      username: 'Lambda School',
      password: 'i<3Lambd4'
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('accessToken', res.data.payload);
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
    });
  };
  render() {
    return (
      <form className="App-form" onSubmit={this.login}>
        <label>Username
          <input type='text'
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange} />
        </label>
        <label>Password
          <input type='password'
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange} />
        </label>
        <button className='submit-button' >Submit</button>
      </form>
    )
  }

}
// isLoading={isLoading}


export default LoginForm;
