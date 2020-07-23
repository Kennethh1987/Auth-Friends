import React, {Component} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

class Login extends Component {
    state = {
      credentials: {
        username: "",
        password: ""
      },
      isFetching: false
    };
  
    handleChange = event => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [event.target.name]: event.target.value
        }
      });
    };
  
    loggingIn = event => {
      event.preventDefault();
      this.setState({
        isFetching: true
      });
      axiosWithAuth()
      .post("api/login", this.state.credentials)
      .then(res => {
          localStorage.setItem('token',JSON.stringify(res.data.payload));
          this.props.history.push('/protected');
      })
      .catch(error => console.log(error));
    };
  
    render() {
      return (
     
          <div>
            <div>
              <h1>Sign In</h1>
            </div>
  
            <form
              onSubmit={this.loggingIn}
              noValidate
              autoComplete="off"
            >
              <div>
                <div>
                  <input
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.credentials.username}
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    placeholder="username"
                   
                  />
                </div>
  
                <div>
                  <input
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.credentials.password}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    placeholder="password"
                   
                  />
                </div>
              </div>
  
              <div>
                <button>Log In</button>
                <div className="loginDiv">
                {this.state.isFetching && "logging in..."}
                </div>
              </div>
            </form>
          </div>
       
      );
    }
  }
  
  export default Login;