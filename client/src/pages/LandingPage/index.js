import ReactGA from 'react-ga';
import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css';
import { Container } from 'reactstrap';
import { LoginBox, SignupBox } from "../../components/AuthItems";
import { TopFill, Banner } from "../../components/ScreenItems";

ReactGA.initialize('UA-139996715-1');
ReactGA.pageview('/');
ReactGA.pageview('/auth/deal');
class LandingPage extends Component {
  state = {
    isLoggedIn: false,
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
//    console.log("name = " + name);
//    console.log("value = " + value);
  };

  handleLogin = event => {
    event.preventDefault();
    this.validateUser({
      email: this.state.email,
      password: this.state.password
    });
    ReactGA.event({
      category: 'Auth',
      action: 'Login Requested'
    });
//    console.log("state = " + JSON.stringify(this.state));
  };

  handleSignup = event => {
    event.preventDefault();
    this.createUser({
      firstName: this.state.fName,
      lastName: this.state.lName,
      email: this.state.email,
      password: this.state.password
    });
    ReactGA.event({
      category: 'Auth',
      action: 'Signup Requested'
    });
//    console.log("state = " + JSON.stringify(this.state));
  };

  validateUser = query => {
    API.getUser(query)
      .then(res => {
//        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
//          console.log("in success handle");
          ReactGA.event({
            category: 'Auth',
            action: 'User Validated'
          });
          this.setState({ isLoggedIn: true, });
          this.setState({ loginMsg: res.data.message });
          window.sessionStorage.setItem("CFC_authkey", res.data.token);
          window.sessionStorage.setItem("auth-email", this.state.email);
          window.location.assign('/auth/deal');
        } else {
          ReactGA.event({
            category: 'Auth',
            action: 'User Failed Validation'
          });
//          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.sessionStorage.setItem("CFC_authkey", "");
          window.sessionStorage.setItem("auth-email", this.state.email);
          window.location.assign('/');
        }
//        console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };

  createUser = query => {
//    console.log("query = " + JSON.stringify(query));
    API.createUser(query)
      .then(res => {
//        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
//          console.log("in success handle");
          window.location.assign('/');
        } else {
//          console.log("in failure handle");
          window.location.assign('/signup');
        }
      })
      .catch(err => console.log(err));
  };


  render() {
    return (

      <div className="whole_Form">
        <TopFill />
        <Container className="welcome_Box">
          <Banner />

          {!this.state.isLoggedIn ? (
            <div>
              <LoginBox
                login={this.handleLogin}
                change={this.handleInputChange}
              />
              <SignupBox
                signup={this.handleSignup}
                change={this.handleInputChange}
              />
            </div>
          ) : (<div></div>)}

        </Container>
      </div >
    );
  };
};

export default LandingPage;